"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);

  const apiKey = "fd3471cf-7855-4d1a-ac88-6e0d65b73e01";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "IWWK Website",
      subject: "New Contact Message from IWWK",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });

  return (
    <div id="contact-container" className="bg-[var(--background)]">
      <div
        id="contact"
        className="h-screen flex justify-center mx-auto p-4 pt-16 sm:pt-32"
      >
        <div className="w-full max-w-2xl flex flex-col gap-8 items-center">
          <div className="p-4 border border-[var(--border-color)] shadow-lg w-full max-w-3xl">
            <h1 className="text-center">Contact Me</h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-8  w-full "
            >
              <input
                type="checkbox"
                id=""
                className="hidden"
                style={{ display: "none" }}
                {...register("botcheck")}
              ></input>

              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  placeholder="..."
                  autoComplete="false"
                  className={`w-full px-4 py-3 border-2 placeholder:text-gray-800  rounded-md outline-none bg-[var(--input-form-bg)] focus:ring-4  ${
                    errors.name
                      ? "border-red-600 focus:border-red-600 ring-red-100"
                      : "border-gray-300 focus:border-gray-600 ring-gray-100 "
                  }`}
                  {...register("name", {
                    required: "Full name is required",
                    maxLength: 80,
                  })}
                />
                {errors.name && (
                  <div className="mt-1 text-red-600">
                    <small>{errors.name.message}</small>
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="email_address">Email Address</label>
                <input
                  id="email_address"
                  type="email"
                  placeholder="..."
                  name="email"
                  autoComplete="false"
                  className={`w-full px-4 py-3 border-2 placeholder:text-gray-800  rounded-md outline-none bg-[var(--input-form-bg)] focus:ring-4  ${
                    errors.email
                      ? "border-red-600 focus:border-red-600 ring-red-100"
                      : "border-gray-300 focus:border-gray-600 ring-gray-100"
                  }`}
                  {...register("email", {
                    required: "Enter your email",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Please enter a valid email",
                    },
                  })}
                />
                {errors.email && (
                  <div className="mt-1 text-red-600">
                    <small>{errors.email.message}</small>
                  </div>
                )}
              </div>

              <div>
                <label>Message</label>
                <textarea
                  name="message"
                  placeholder="..."
                  className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 bg-[var(--input-form-bg)] rounded-md outline-none  h-36 focus:ring-4  ${
                    errors.message
                      ? "border-red-600 focus:border-red-600 ring-red-100"
                      : "border-gray-300 focus:border-gray-600 ring-gray-100"
                  }`}
                  {...register("message", {
                    required: "Enter your Message",
                  })}
                />
                {errors.message && (
                  <div className=" text-red-600">
                    {" "}
                    <small>{errors.message.message}</small>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full max-w-xs self-center py-4 font-semibold bg-[var(--button-c)] hover:bg-[var(--button-c-hov)] focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7"
              >
                {isSubmitting ? (
                  <svg
                    className="w-5 h-5 mx-auto text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>

            {isSubmitSuccessful && isSuccess && (
              <div className="text-base text-center text-green-500">
                {message || "Success. Message sent successfully"}
              </div>
            )}
            {isSubmitSuccessful && !isSuccess && (
              <div className="text-base text-center text-red-500">
                {message || "Something went wrong. Please try later."}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
