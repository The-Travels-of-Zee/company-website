"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form Submitted:", formData);
  //   // Optionally send form data to an API or service here
  // };

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
    <section className="pb-20 bg-gray-50">
      <div className="container">
        {isSubmitted ? (
          <div className="text-center max-w-2xl mx-auto bg-white px-10 py-20 rounded-[12px] shadow-brandShadow">
            <h2 className="text-4xl font-bold text-brandOrange mb-4">Thank You!</h2>
            <p className="text-lg text-gray-700">We will be reaching you in no time.</p>
          </div>
        ) : (
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white px-[20px] pt-10 pb-[30px] rounded-[12px] shadow-brandShadow max-w-2xl mx-auto"
          >
            <div className="mb-2">
              <label htmlFor="name" className="block mb-2 text-lg font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                required
                // value={formData.name}
                // onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-brandColor"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                required
                // value={formData.email}
                // onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-brandColor"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="message" className="block mb-2 text-lg font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                // value={formData.message}
                // onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-brandColor"
              ></textarea>
            </div>

            <button
              type="submit"
              value={"Send"}
              className="bg-brandOrange text-white px-6 py-3 rounded-[10px] font-medium hover:bg-opacity-90 transition"
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
