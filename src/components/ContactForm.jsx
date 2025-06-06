"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, form.current, {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          setIsSubmitted(true);
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section className="py-20 bg-[#ffead7]" id="contact">
      <div className="container">
        <p className="tagline_text text-center">Get in Touch</p>
        <h2 className="sub_heading max-w-[500px] mx-auto text-center capitalize mt-5">We are here to help you.</h2>
        <p className="font_avenir text-[#8B8B8B] font-medium capitalize text-center mt-1 mb-10">
          We will reach you in an instant.
        </p>
        {isSubmitted ? (
          <div className="text-center max-w-2xl mx-auto bg-white px-10 py-20 rounded-[6px] shadow-brandShadow">
            <h2 className="text-4xl font-bold text-brandOrange mb-4">Thank You!</h2>
            <p className="text-lg text-gray-700">We will be reaching you in no time.</p>
          </div>
        ) : (
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-brandsBG text-black border border-gray-500 px-6 py-8 rounded-lg max-w-3xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label className="block text-sm mb-2">
                  First Name <span className="text-red-500">*</span>
                  <input
                    type="text"
                    name="first_name"
                    placeholder="E.g. John"
                    required
                    className="w-full bg-brandsBG border border-gray-700 text-black rounded-[8px] placeholder-gray-600 px-4 py-4 mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-brandOrange"
                  />
                </label>
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm mb-2">
                  Last Name <span className="text-red-500">*</span>
                  <input
                    type="text"
                    name="last_name"
                    placeholder="E.g. Doe"
                    required
                    className="w-full bg-brandsBG border border-gray-700 text-black rounded-[8px] placeholder-gray-600 px-4 py-4 mt-2 rounded-md"
                  />
                </label>
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-sm mb-2">
                  Email Address <span className="text-red-500">*</span>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="E.g. name@website.com"
                    required
                    className="w-full bg-brandsBG border border-gray-700 text-black rounded-[8px] placeholder-gray-600 px-4 py-4 mt-2 rounded-md"
                  />
                </label>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm mb-2">
                  Phone Number <span className="text-red-500">*</span>
                  <input
                    type="text"
                    name="phone_number"
                    placeholder="E.g. +1 3006005000"
                    required
                    className="w-full bg-brandsBG border border-gray-700 text-black rounded-[8px] placeholder-gray-600 px-4 py-4 mt-2 rounded-md"
                  />
                </label>
              </div>

              {/* Select Service */}
              <div>
                <label id="service" className="block text-sm mb-2">
                  Select Service
                  <select
                    name="service"
                    className="w-full bg-brandsBG border border-gray-700 text-black rounded-[8px] px-4 py-4 rounded-md mt-2"
                  >
                    <option>Web Development</option>
                    <option>App Development</option>
                    <option>UI/UX Design</option>
                    <option>Consultation</option>
                  </select>
                </label>
              </div>

              {/* Your Budget */}
              <div>
                <label className="block text-sm mb-2">
                  Your Budget <span className="text-red-500">*</span>
                  <input
                    type="text"
                    name="budget"
                    placeholder="E.g. $3000"
                    required
                    className="w-full bg-brandsBG border border-gray-700 text-black rounded-[8px] placeholder-gray-600 px-4 py-4 rounded-md mt-2"
                  />
                </label>
              </div>
            </div>

            {/* Message */}
            <div className="mt-6 relative">
              <label className="block text-sm mb-2">
                Message <span className="text-red-500">*</span>
                <textarea
                  name="message"
                  rows="5"
                  maxLength={500}
                  placeholder="Enter your message..."
                  required
                  className="w-full bg-brandsBG border border-gray-700 text-black rounded-[8px] placeholder-gray-600 px-4 py-4 mt-2 rounded-md resize-none"
                />
              </label>
              <div className="text-sm text-right text-gray-600 mt-1">0 / 500</div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-6 bg-brandOrange text-black rounded-[8px] px-6 py-3 rounded-md hover:bg-opacity-90 transition border-2 border-white"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
