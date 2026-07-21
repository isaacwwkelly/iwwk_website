"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { MeshSurfaceSampler } from "three/examples/jsm/math/MeshSurfaceSampler.js";

export default function SolarSystemCanvas({ theme = "dark" }) {
  const containerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 2.8, 9.5); // Initial camera position looking down

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Main Model Group
    const modelGroup = new THREE.Group();
    scene.add(modelGroup);

    // 3. Glowing Particle Texture
    const canvasTexture = document.createElement("canvas");
    canvasTexture.width = 64;
    canvasTexture.height = 64;
    const ctx = canvasTexture.getContext("2d");
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, "rgba(255,255,255,1)");
    grad.addColorStop(0.35, "rgba(255,255,255,0.75)");
    grad.addColorStop(0.75, "rgba(255,255,255,0.2)");
    grad.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(32, 32, 32, 0, Math.PI * 2);
    ctx.fill();

    const texture = new THREE.CanvasTexture(canvasTexture);

    const pointsMaterial = new THREE.PointsMaterial({
      color: theme === "dark" ? 0xffffff : 0x000000,
      size: 0.024,
      map: texture,
      transparent: true,
      opacity: theme === "dark" ? 0.85 : 0.72,
      blending: theme === "dark" ? THREE.AdditiveBlending : THREE.NormalBlending,
      depthWrite: false,
    });

    let gltfScene = null;
    let earthNode = null;
    let moonOrbitNode = null;
    const animatedBodies = [];

    // 4. Load GLB Model & Sample Meshes to Points
    const loader = new GLTFLoader();
    loader.load(
      "/models/solar_system.glb",
      (gltf) => {
        gltfScene = gltf.scene;

        // Traverse model to convert meshes into point clouds & collect nodes to animate
        gltfScene.traverse((child) => {
          const name = child.name || "";

          // Hide the Moon's original orbital path line
          if (name.includes("moon_BezierCircle") && name.includes("001")) {
            child.visible = false;
            return;
          }

          // Collect nodes to control manually via JS for infinite orbits & rotation periods
          // Orbit speeds (rotation of Beziers)
          let isOrbit = false;
          let orbitSpeed = 0;
          if (name.startsWith("mercury_BezierCircle_")) { isOrbit = true; orbitSpeed = 0.024; }
          else if (name.startsWith("venus_BezierCircle_")) { isOrbit = true; orbitSpeed = 0.016; }
          else if (name.startsWith("erath_BezierCircle_")) { isOrbit = true; orbitSpeed = 0.012; }
          else if (name.startsWith("mars_BezierCircle_")) { isOrbit = true; orbitSpeed = 0.0094; }
          else if (name.startsWith("jupiter_BezierCircle_")) { isOrbit = true; orbitSpeed = 0.0052; }
          else if (name.startsWith("saturn_BezierCircle_")) { isOrbit = true; orbitSpeed = 0.0038; }
          else if (name.startsWith("uranus_BezierCircle_")) { isOrbit = true; orbitSpeed = 0.0028; }
          else if (name.startsWith("neptune_BezierCircle_")) { isOrbit = true; orbitSpeed = 0.0022; }
          else if (name.startsWith("pluto_BezierCircle_")) { isOrbit = true; orbitSpeed = 0.0018; }
          else if (name.startsWith("moon_BezierCircle_")) { isOrbit = true; orbitSpeed = 0.08; }

          if (isOrbit) {
            // Randomize starting position along the orbit
            child.rotation.y = Math.random() * Math.PI * 2;
            animatedBodies.push({ node: child, speed: orbitSpeed });
          }

          // Planet self-spins (rotation of planet nodes)
          let isSpin = false;
          let spinSpeed = 0;
          if (name === "mercury_2_4") { isSpin = true; spinSpeed = 0.004; }
          else if (name === "venus_5_7") { isSpin = true; spinSpeed = -0.002; }
          else if (name === "erath_8_10") { isSpin = true; spinSpeed = 0.024; }
          else if (name === "mars_12_13") { isSpin = true; spinSpeed = 0.022; }
          else if (name === "jupiter_15_16") { isSpin = true; spinSpeed = 0.048; }
          else if (name === "saturn_19_19") { isSpin = true; spinSpeed = 0.042; }
          else if (name === "uranus_22_24") { isSpin = true; spinSpeed = -0.032; }
          else if (name === "neptune_25_27") { isSpin = true; spinSpeed = 0.034; }
          else if (name === "pluto_28_30") { isSpin = true; spinSpeed = 0.006; }
          else if (name === "sun_53_55") { isSpin = true; spinSpeed = 0.002; }

          if (isSpin) {
            animatedBodies.push({ node: child, speed: spinSpeed });
          }

          // Capture Earth mesh and Moon orbit nodes for custom satellite positioning
          if (name === "erath_8_10") {
            earthNode = child;
          }
          if (name.startsWith("moon_BezierCircle_")) {
            moonOrbitNode = child;
          }

          if (child.isMesh && child.geometry) {
            try {
              // Hide original textured mesh material
              if (Array.isArray(child.material)) {
                child.material.forEach((mat) => {
                  mat.visible = false;
                });
              } else if (child.material) {
                child.material.visible = false;
              }

              // Compute bounding box to scale particle count proportional to mesh size
              const localBox = new THREE.Box3().setFromObject(child);
              const localSize = new THREE.Vector3();
              localBox.getSize(localSize);
              const sizeLength = localSize.length();

              // Suns/large stars get more points, small planets/moons get fewer
              const count = Math.max(100, Math.min(3000, Math.floor(1800 * sizeLength)));

              // Sample points on the surface of the mesh
              const sampler = new MeshSurfaceSampler(child).build();
              const posArray = new Float32Array(count * 3);
              const tempPosition = new THREE.Vector3();

              for (let i = 0; i < count; i++) {
                sampler.sample(tempPosition);
                // Keep coordinates relative to child local space
                posArray[i * 3] = tempPosition.x;
                posArray[i * 3 + 1] = tempPosition.y;
                posArray[i * 3 + 2] = tempPosition.z;
              }

              const geometry = new THREE.BufferGeometry();
              geometry.setAttribute(
                "position",
                new THREE.BufferAttribute(posArray, 3)
              );

              const points = new THREE.Points(geometry, pointsMaterial);
              
              // Adding points as a child so it inherits animations & orbits
              child.add(points);
            } catch (err) {
              console.warn("Error sampling mesh points:", err);
            }
          }
        });

        // Bounding box normalization to position Sun at exactly (0, 0, 0)
        const box = new THREE.Box3().setFromObject(gltfScene);
        const size = new THREE.Vector3();
        box.getSize(size);
        const center = new THREE.Vector3();
        box.getCenter(center);

        const maxDim = Math.max(size.x, size.y, size.z);
        const baseScale = 6.2 / maxDim;

        gltfScene.scale.setScalar(baseScale);
        gltfScene.position.sub(center.multiplyScalar(baseScale));

        modelGroup.add(gltfScene);

        updateResponsiveTransform();
        setIsLoading(false);
      },
      undefined,
      (error) => {
        console.error("Error loading GLB model:", error);
      }
    );

    // 5. Responsive Positioning & Framing (Desktop vs Mobile) - Zoomed in by ~35%
    function updateResponsiveTransform() {
      if (!container || !gltfScene) return;
      const width = container.clientWidth;
      const isMobile = width < 768;

      if (isMobile) {
        // Mobile: Centered Sun, slightly zoomed in
        modelGroup.position.set(0, 0.4, 0);
        modelGroup.scale.set(0.85, 0.85, 0.85);
      } else {
        // Desktop: Positioned to the right of the hero text, zoomed in
        modelGroup.position.set(2.4, 0.1, 0);
        modelGroup.scale.set(1.35, 1.35, 1.35);
      }
    }

    function onWindowResize() {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
      updateResponsiveTransform();
    }
    window.addEventListener("resize", onWindowResize);

    // 6. Scroll Camera Path Setup
    // Cubic bezier curve path for camera in the local space of modelGroup
    const cameraPath = new THREE.CubicBezierCurve3(
      new THREE.Vector3(-2.8, 1.6, 13.0),  // Start (Offset left/down, looking at origin to push Sun right/up)
      new THREE.Vector3(-4.5, 0.8, 6.0),   // Mid 1 (Curves down & left for swooping motion)
      new THREE.Vector3(-1.0, -1.2, -2.5), // Mid 2 (Flies very close to the Sun's side, dipping below plane)
      new THREE.Vector3(0.35, -2.0, -5.9)  // End (Midway setting to frame the rings nicely)
    );

    const targetStart = new THREE.Vector3(0, 0, 0);          // Initial target (looks directly at Sun, removing panning twist)
    const targetEnd = new THREE.Vector3(0, 0.4, 0);          // End target (looks at Sun, tilted slightly up)

    const scrollRef = { current: 0 };
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const height = window.innerHeight;
        // Camera path completes over 2.1x viewport height to align Sun pass with About Me entering focus
        const scrollMax = height * 2.1;
        const t = Math.min(1.0, window.scrollY / scrollMax);
        // Quadratic ease-in (t^2) makes camera movement start slower and accelerate near the end of the scroll
        scrollRef.current = Math.pow(t, 2.0);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // 7. Animation Loop
    let animationFrameId;
    let currentScroll = 0;
    const earthWorldPos = new THREE.Vector3();
    const tempCamPos = new THREE.Vector3();
    const tempTargetPos = new THREE.Vector3();

    // Slight default tilt of the orbital plane for better 3D depth perception
    modelGroup.rotation.x = 0.28; // ~16 degrees tilt

    function animate() {
      animationFrameId = requestAnimationFrame(animate);

      // Increment orbits and rotations for each body using custom period speeds (slowed to 6.25% of original)
      animatedBodies.forEach((body) => {
        body.node.rotation.y += body.speed * 0.028125;
      });

      // Keep the Moon's orbit centered exactly on the Earth's current world position
      if (earthNode && moonOrbitNode && gltfScene) {
        earthNode.getWorldPosition(earthWorldPos);
        gltfScene.worldToLocal(earthWorldPos);
        moonOrbitNode.position.copy(earthWorldPos);
      }

      // Smoothly interpolate scroll progress with a capped maximum speed
      let targetDiff = (scrollRef.current - currentScroll) * 0.08;
      const maxSpeed = 0.006; // Capped speed per frame to prevent fast scroll flybys
      if (Math.abs(targetDiff) > maxSpeed) {
        targetDiff = Math.sign(targetDiff) * maxSpeed;
      }
      currentScroll += targetDiff;

      // Update camera position along the Bezier curve relative to the modelGroup's transformation matrix
      if (gltfScene) {
        // Compute local position and transform to world space
        cameraPath.getPoint(currentScroll, tempCamPos);
        tempCamPos.applyMatrix4(modelGroup.matrixWorld);
        camera.position.copy(tempCamPos);

        // Compute local look-at target and transform to world space
        tempTargetPos.copy(targetStart).lerp(targetEnd, currentScroll);
        tempTargetPos.applyMatrix4(modelGroup.matrixWorld);
        camera.lookAt(tempTargetPos);
      }

      renderer.render(scene, camera);
    }

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", onWindowResize);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      texture.dispose();
      pointsMaterial.dispose();
      renderer.dispose();
    };
  }, [theme]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-screen h-screen pointer-events-none z-0 overflow-hidden"
    />
  );
}
