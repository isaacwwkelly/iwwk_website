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
    </div>
  );
}
