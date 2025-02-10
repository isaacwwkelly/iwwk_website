import Header from "../components/header.js";

export default function Page() {
  return (
    <div className="global-grid">
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="gap-2">
          <h1 className="text-3xl sm:text-4xl text-center sm:text-left font-bold">
            Why Did I Make This Website?
          </h1>
          <p>Expand on the why </p>
        </div>
      </main>
    </div>
  );
}
