export default function Header() {
  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="h-10 sm:h-12">
      <nav className="flex gap-4 items-end">
        <a className="text-3xl sm:text-4xl font-bold">IWWK</a>
        <a
          className="hover:underline hover:underline-offset-4"
          onClick={() => smoothScroll("aboutMe")}
        >
          About
        </a>
        <a
          className="hover:underline hover:underline-offset-4"
          onClick={() => smoothScroll("career")}
        >
          Career
        </a>
        <a
          className="hover:underline hover:underline-offset-4"
          onClick={() => smoothScroll("contact")}
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
