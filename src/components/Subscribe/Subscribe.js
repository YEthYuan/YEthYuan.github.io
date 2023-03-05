/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import { Section, SectionDivider, SectionTitle } from "../../styles/GlobalComponents";

const Subscribe = () => (
  <Section id="subscribe">
    <SectionDivider divider />
    <div className="mx-auto grid max-w-150em grid-cols-1 gap-y-16 gap-x-8 lg:max-w-none lg:grid-cols-2">
      <div className="max-w-100em lg:max-w-100em">
        <SectionTitle>Subscribe</SectionTitle>
        <p className="mt-4 text-3xl leading-8 text-gray-300">
          Subscribe my latest news in order to help you know me better.
        </p>
        <div className="mt-6 flex max-w-3xl gap-x-4">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-7 py-4 text-3xl text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-3xl sm:leading-6"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            className="flex-none rounded-md bg-indigo-500 py-5 px-7 text-3xl font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Subscribe
          </button>
        </div>
      </div>
      <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
        <div className="flex flex-col items-start">
          <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
            <CalendarDaysIcon
              className="h-12 w-12 text-white"
              aria-hidden="true"
            />
          </div>
          <dt className="mt-4 font-semibold text-white">Weekly articles</dt>
          <dd className="mt-2 leading-7 text-gray-400">
            I apologize for any inconvenience, but this section of the website
            is currently under construction. I am working hard to bring you new
            and exciting content, and hope to have this section up and running
            soon.
          </dd>
        </div>
        <div className="flex flex-col items-start">
          <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
            <HandRaisedIcon
              className="h-12 w-12 text-white"
              aria-hidden="true"
            />
          </div>
          <dt className="mt-4 font-semibold text-white">No spam</dt>
          <dd className="mt-2 leading-7 text-gray-400">
            In the meantime, I appreciate your patience and understanding.
            Please check back later for updates on our progress, or feel free to
            browse the other sections of my site.
          </dd>
        </div>
      </dl>
    </div>
  </Section>
);

export default Subscribe;