"use client";

export default function Contact() {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "fd3471cf-7855-4d1a-ac88-6e0d65b73e01");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }

  const inputClassName =
    "flex h-10 w-full rounded-md border border-input dark:bg-neutral-950 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

  return (
    <div
      id="contact"
      className="mx-auto h-screen max-w-5xl px-8 py-20 md:py-32"
    >
      <h1 className="pb-8 text-2xl font-bold dark:text-white md:text-7xl">
        Contact Me
      </h1>
      <form onSubmit={handleSubmit} className="max-w-xl space-y-8">
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="John Doe"
            className={inputClassName}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="email@example.com"
            className={inputClassName}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            required
            rows="3"
            placeholder="Enter Message"
            className="flex min-h-[80px] w-full rounded-md border border-input dark:bg-neutral-950 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          ></textarea>
        </div>
        <button
          className="w-40 border-1 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
          type="submit"
        >
          Submit Form
        </button>
      </form>
    </div>
  );
}
