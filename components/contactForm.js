export default function ContactForm() {
  return (
    <form className="mt-8">
      <div className="justify-stretch grid sm:grid-flow-col gap-4">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="fullName"
            className="block font-montserrat text-lg leading-8 text-teal-50 antialiased"
          >
            Full name
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            autoComplete="fullName"
            className="sm:text-md placeholder:text-grey-50 block flex-1 rounded-md border-0 py-1.5 pl-2 font-montserrat focus:ring-0 sm:leading-8"
            placeholder="Jane Smith"
            required
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
            autoComplete="email"
            className="sm:text-md placeholder:text-grey-50 block flex-1 rounded-md border-0 py-1.5 pl-2 font-montserrat focus:ring-0 sm:leading-8"
            placeholder="jane.smith@mail.com"
            required
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
            id="about"
            name="about"
            rows={3}
            className="sm:text-md placeholder:text-grey-50 block w-full flex-1 rounded-md border-0 py-1.5 pl-2 font-montserrat text-teal-50 focus:ring-0 sm:leading-8"
            defaultValue={""}
            minLength={20}
          />
      </div>
      <button
        type="submit"
        className="mx-auto my-4 rounded-md bg-primary_2 px-5 py-1.5 font-montserrat text-base font-normal text-secondary_1 antialiased shadow-sm hover:bg-primary_1 hover:text-secondary_2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary_2"
      >
        Submit
      </button>
    </form>
  );
}
