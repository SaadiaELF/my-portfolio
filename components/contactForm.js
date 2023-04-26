import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");
    let data = {
      name,
      email,
      message,
    };

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 250) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
      }
      setTimeout(() => {
        setSubmitted(false);
      }, 1500);
    });
  };
  return (
    <form className="mt-8">
      <div className="grid justify-stretch gap-4 sm:grid-flow-col">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="name"
            className="block font-montserrat text-lg leading-8 text-teal-50 antialiased"
          >
            Full name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            autoComplete="name"
            className="sm:text-md placeholder:text-grey-50 block flex-1 rounded-md border-0 py-1.5 pl-2 font-montserrat focus:ring-0 sm:leading-8"
            placeholder="Jane Smith"
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="email"
            className="block font-montserrat text-lg leading-8 text-teal-50 antialiased"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="fullName"
            value={email}
            autoComplete="email"
            className="sm:text-md placeholder:text-grey-50 block flex-1 rounded-md border-0 py-1.5 pl-2 font-montserrat focus:ring-0 sm:leading-8"
            placeholder="jane.smith@mail.com"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-1">
        <label
          htmlFor="message"
          className="block font-montserrat text-lg leading-8 text-teal-50 antialiased"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={message}
          rows={3}
          className="sm:text-md block w-full flex-1 rounded-md border-0 py-1.5 pl-2 font-montserrat focus:ring-0 sm:leading-8"
          defaultValue={""}
          minLength={20}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
      </div>
      <button
        type="submit"
        className="mx-auto my-4 rounded-md bg-primary_2 px-5 py-1.5 font-montserrat text-base font-normal text-secondary_1 antialiased shadow-sm hover:bg-primary_1 hover:text-secondary_2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary_2"
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        Submit
      </button>
      {submitted && (
        <p className="block text-center font-montserrat text-base font-normal leading-8 text-secondary_1 antialiased">
          Message successfully submitted
        </p>
      )}
    </form>
  );
}
