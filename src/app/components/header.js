export default function Header() {
  return (
    <header className="row-start-1 flex gap-8 justify-center sm:justify-start">
      <a
        href="/"
        className="text-3xl sm:text-4xl font-bold hover:underline hover:underline-offset-4"
      >
        IWWK/
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
    </header>
  );
}
