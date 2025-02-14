import About from "./components/about";
import Career from "./components/career";
import Contact from "./components/contact";
import Landing from "./components/landing";

export default function Home() {
  return (
    <div>
      {/* Landing Page */}
      <Landing />
      {/* About */}
      <About />
      {/* Career */}
      <Career />
      {/* Contact */}
      <Contact />
      {/* Footer */}
      Icons by{" "}
      <a target="_blank" href="https://icons8.com">
        Icons8
      </a>
    </div>
  );
}
