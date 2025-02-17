import Header from "./components/header";
import About from "./components/about";
import Career from "./components/career";
import Contact from "./components/contact";
import Landing from "./components/landing";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      {/* Landing Page */}
      <Landing />
      {/* Header Nav */}
      <Header />
      {/* About */}
      <About />
      {/* Career */}
      <Career />
      {/* Contact */}
      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  );
}
