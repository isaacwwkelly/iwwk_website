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
      event.target.reset();
    }
  }

  const inputClassName =
    "flex h-10 w-full rounded-md border border-input dark:bg-neutral-950 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

  return (
    <div
      id="contact"
      className="h-screen flex flex-col mx-auto gap-8 items-center p-4 sm:pt-24 sm:px-0 sm:w-3/4"
    >
      <h1>Contact Me</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 px-4 w-full sm:w-2/5"
      >
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
            rows="4"
            placeholder="Enter Message"
            className="flex min-h-[80px] w-full rounded-md border border-input dark:bg-neutral-950 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          ></textarea>
        </div>
        <button
          className="self-center w-40 border-1 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
          type="submit"
        >
          Submit Form
        </button>
      </form>
    </div>
  );
}
