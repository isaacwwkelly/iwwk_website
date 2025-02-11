export default function Header() {
  return (
    <header className="gap-8 sm:justify-start">
      <nav className="flex gap-4 items-end">
        <a
          href="/"
          className="text-3xl sm:text-4xl font-bold hover:underline hover:underline-offset-4"
        >
          IWWK
        </a>
        <a href="/about" className="hover:underline hover:underline-offset-4">
          About
        </a>
        <a href="/contact" className="hover:underline hover:underline-offset-4">
          Contact
        </a>
        <a href="/why" className="hover:underline hover:underline-offset-4">
          Why
        </a>
        <a href="/career" className="hover:underline hover:underline-offset-4">
          Career
        </a>
      </nav>
    </header>
  );
}
