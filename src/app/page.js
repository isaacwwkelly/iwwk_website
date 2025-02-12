import About from "./components/about";
import Career from "./components/career";
import Header from "./components/header";
import Contact from "./components/contact";
import Landing from "./components/landing";

export default function Home() {
  return (
    <div>
      {/* Header */}
      <Header />

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
