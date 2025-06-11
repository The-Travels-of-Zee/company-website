"use client";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { User, Mail, Phone, Briefcase, DollarSign, MessageSquare, Send, CheckCircle, Sparkles } from "lucide-react";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [messageLength, setMessageLength] = useState(0);

  const form = useRef();

  const handleMessageChange = (e) => {
    setMessageLength(e.target.value.length);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData();
    const inputs = form.current.querySelectorAll("input, select, textarea");

    inputs.forEach((input) => {
      if (input.name) {
        formData.append(input.name, input.value);
      }
    });

    // // For demo purposes, we'll simulate email sending
    // console.log("Form submitted with data:");
    // for (let [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }

    // // Simulate successful submission
    // setTimeout(() => {
    //   setIsSubmitted(true);
    //   console.log("SUCCESS!");
    // }, 1000);

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
    <section
      className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50 relative overflow-hidden"
      id="contact"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-80 h-80 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-pink-200/30 to-orange-200/30 rounded-full blur-2xl animate-pulse"></div>

        {/* Floating particles */}
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-pink-400 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce"></div>
      </div>

      <div className="container relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/70 backdrop-blur-md rounded-full border border-orange-200/50 text-orange-800 font-semibold mb-6">
            <Sparkles className="w-4 h-4 text-orange-500" />
            Get in Touch
            <Sparkles className="w-4 h-4 text-orange-500" />
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-orange-500 bg-clip-text text-transparent mb-4 leading-tight">
            We are here to help you.
          </h2>
          <p className="text-xl text-gray-600 font-medium max-w-md mx-auto">We will reach you in an instant.</p>
        </div>

        {isSubmitted ? (
          <div className="text-center max-w-2xl mx-auto">
            <div className="bg-white/90 backdrop-blur-md px-12 py-20 rounded-[24px] shadow-lg border border-white/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-emerald-50/50 rounded-[24px]"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-500"></div>

              <div className="relative z-10">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg animate-pulse">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
                  Thank You!
                </h2>
                <p className="text-lg text-gray-700">We will be reaching you in no time.</p>
              </div>
            </div>
          </div>
        ) : (
          <form ref={form} onSubmit={sendEmail} className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-md rounded-[24px] shadow-lg border border-white/50 p-8 relative overflow-hidden">
              {/* Top gradient line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400"></div>

              {/* Form background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-orange-50/40 rounded-[24px]"></div>

              <div ref={form} className="relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div className="group">
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3 transition-colors group-focus-within:text-orange-600">
                      <User className="w-4 h-4 text-orange-500" />
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="first_name"
                        placeholder="E.g. John"
                        required
                        className="w-full bg-white/90 border-2 border-gray-200 text-gray-800 rounded-2xl placeholder-gray-500 px-5 py-4 text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 focus:bg-white hover:border-orange-300 hover:shadow-md group-hover:shadow-lg"
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/0 to-pink-500/0 group-focus-within:from-orange-500/5 group-focus-within:to-pink-500/5 transition-all duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Last Name */}
                  <div className="group">
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3 transition-colors group-focus-within:text-orange-600">
                      <User className="w-4 h-4 text-orange-500" />
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="last_name"
                        placeholder="E.g. Doe"
                        required
                        className="w-full bg-white/90 border-2 border-gray-200 text-gray-800 rounded-2xl placeholder-gray-500 px-5 py-4 text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 focus:bg-white hover:border-orange-300 hover:shadow-md group-hover:shadow-lg"
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/0 to-pink-500/0 group-focus-within:from-orange-500/5 group-focus-within:to-pink-500/5 transition-all duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Email Address */}
                  <div className="group">
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3 transition-colors group-focus-within:text-orange-600">
                      <Mail className="w-4 h-4 text-orange-500" />
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="user_email"
                        placeholder="E.g. name@website.com"
                        required
                        className="w-full bg-white/90 border-2 border-gray-200 text-gray-800 rounded-2xl placeholder-gray-500 px-5 py-4 text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 focus:bg-white hover:border-orange-300 hover:shadow-md group-hover:shadow-lg"
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/0 to-pink-500/0 group-focus-within:from-orange-500/5 group-focus-within:to-pink-500/5 transition-all duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="group">
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3 transition-colors group-focus-within:text-orange-600">
                      <Phone className="w-4 h-4 text-orange-500" />
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="phone_number"
                        placeholder="E.g. +1 3006005000"
                        required
                        className="w-full bg-white/90 border-2 border-gray-200 text-gray-800 rounded-2xl placeholder-gray-500 px-5 py-4 text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 focus:bg-white hover:border-orange-300 hover:shadow-md group-hover:shadow-lg"
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/0 to-pink-500/0 group-focus-within:from-orange-500/5 group-focus-within:to-pink-500/5 transition-all duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Select Service */}
                  <div className="group">
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3 transition-colors group-focus-within:text-orange-600">
                      <Briefcase className="w-4 h-4 text-orange-500" />
                      Select Service
                    </label>
                    <div className="relative">
                      <select
                        name="service"
                        className="w-full bg-white/90 border-2 border-gray-200 text-gray-800 rounded-2xl px-5 py-4 text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 focus:bg-white hover:border-orange-300 hover:shadow-md appearance-none cursor-pointer"
                      >
                        <option>Web Development</option>
                        <option>App Development</option>
                        <option>UI/UX Design</option>
                        <option>Consultation</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                        <svg
                          className="w-6 h-6 text-gray-500 group-focus-within:text-orange-500 transition-colors"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/0 to-pink-500/0 group-focus-within:from-orange-500/5 group-focus-within:to-pink-500/5 transition-all duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Your Budget */}
                  <div className="group">
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3 transition-colors group-focus-within:text-orange-600">
                      <DollarSign className="w-4 h-4 text-orange-500" />
                      Your Budget <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="budget"
                        placeholder="E.g. $3000"
                        required
                        className="w-full bg-white/90 border-2 border-gray-200 text-gray-800 rounded-2xl placeholder-gray-500 px-5 py-4 text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 focus:bg-white hover:border-orange-300 hover:shadow-md group-hover:shadow-lg"
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/0 to-pink-500/0 group-focus-within:from-orange-500/5 group-focus-within:to-pink-500/5 transition-all duration-300 pointer-events-none"></div>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="mt-8 group">
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3 transition-colors group-focus-within:text-orange-600">
                    <MessageSquare className="w-4 h-4 text-orange-500" />
                    Message <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      rows="5"
                      maxLength={500}
                      placeholder="Enter your message..."
                      required
                      onChange={handleMessageChange}
                      className="w-full bg-white/90 border-2 border-gray-200 text-gray-800 rounded-2xl placeholder-gray-500 px-5 py-4 text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 focus:bg-white hover:border-orange-300 hover:shadow-md resize-none group-hover:shadow-lg"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/0 to-pink-500/0 group-focus-within:from-orange-500/5 group-focus-within:to-pink-500/5 transition-all duration-300 pointer-events-none"></div>
                  </div>
                  <div className="text-sm text-right text-gray-500 mt-2 font-medium">
                    <span
                      className={
                        messageLength > 450 ? "text-red-500" : messageLength > 400 ? "text-amber-500" : "text-gray-500"
                      }
                    >
                      {messageLength}
                    </span>{" "}
                    / 500
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-6 flex justify-center">
                  <button
                    type="submit"
                    className="group relative bg-gradient-to-r from-orange-400 via-red-500 to-orange-500 text-white rounded-[32px] px-8 py-3 font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/30 hover:-translate-y-2 focus:outline-none focus:ring-4 focus:ring-orange-500/30 active:transform active:scale-95 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative flex items-center gap-3 z-10">
                      Send Message
                      <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>

                    {/* Animated background sparkles */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute top-2 left-8 w-1 h-1 bg-white rounded-full animate-ping"></div>
                      <div className="absolute top-6 right-12 w-1 h-1 bg-white rounded-full animate-ping"></div>
                      <div className="absolute bottom-3 left-16 w-1 h-1 bg-white rounded-full animate-ping"></div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
