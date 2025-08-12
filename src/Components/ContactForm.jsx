import React from "react";
import { useForm } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xdovoeea");
  if (state.succeeded) {
    return (
      <div className="flex justify-center py-22">
        <div className="card max-w-8xl w-full p-0 text-center">
          <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">
            ✓
          </div>
          <h3 className="text-lg font-semibold">Message sent successfully</h3>
          <p className="text-sm text-slate-600 mt-1">
            Thanks for reaching out. We'll get back to you soon.
          </p>
        </div>
      </div>
    );
  }
  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27995.528597508277!2d77.65073415!3d28.70636165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c8e805851396d%3A0xefc5478b43db1239!2sPilkhuwa%2C%20Uttar%20Pradesh%20245304!5e0!3m2!1sen!2sin!4v1672772651448!5m2!1sen!2sin"
          ></iframe>
        </div>

        <form
          method="POST"
          action="https://formspree.io/f/xdovoeea"
          onSubmit={handleSubmit}
        >
          <div className="container px-5 py-24 mx-auto flex">
            <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Contact Us
              </h2>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={state.submitting}
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default ContactForm;
