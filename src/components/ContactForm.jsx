"use client";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { User, Mail, Phone, Briefcase, DollarSign, MessageSquare, Send, CheckCircle, Sparkles } from "lucide-react";

const ContactForm = ({ activeTab = "talent", className = "" }) => {
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

  // Theme configurations based on active tab
  const themes = {
    talent: {
      primary: "from-cyan-400 to-blue-500",
      secondary: "from-cyan-500/10 to-blue-500/10",
      accent: "text-cyan-400",
      border: "border-cyan-500/30",
      shadow: "shadow-cyan-500/25",
      focus: "focus:ring-cyan-500/20 focus:border-cyan-500",
      hover: "hover:border-cyan-300",
      gradient: "from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700",
    },
    development: {
      primary: "from-emerald-400 to-teal-500",
      secondary: "from-emerald-500/10 to-teal-500/10",
      accent: "text-emerald-400",
      border: "border-emerald-500/30",
      shadow: "shadow-emerald-500/25",
      focus: "focus:ring-emerald-500/20 focus:border-emerald-500",
      hover: "hover:border-emerald-300",
      gradient: "from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700",
    },
    apps: {
      primary: "from-purple-400 to-pink-500",
      secondary: "from-purple-500/10 to-pink-500/10",
      accent: "text-purple-400",
      border: "border-purple-500/30",
      shadow: "shadow-purple-500/25",
      focus: "focus:ring-purple-500/20 focus:border-purple-500",
      hover: "hover:border-purple-300",
      gradient: "from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700",
    },
  };

  const currentTheme = themes[activeTab] || themes.talent;

  const getServiceOptions = () => {
    switch (activeTab) {
      case "talent":
        return ["Executive Search", "Technical Recruitment", "Contract Staffing", "Talent Consulting"];
      case "development":
        return ["Web Development", "Mobile App Development", "Cloud Solutions", "Database & Backend"];
      case "apps":
        return ["FarahGPT Integration", "Muslifie Partnership", "Custom App Development", "App Consultation"];
      default:
        return ["General Inquiry"];
    }
  };

  return (
    <section className={`py-20 relative overflow-hidden ${className}`}>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 -right-40 w-80 h-80 bg-gradient-to-r from-cyan-400/5 to-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-cyan-400/4 to-blue-500/4 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-cyan-400/3 to-blue-500/3 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Tech grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Floating tech elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full animate-ping delay-300"></div>
        <div className="absolute bottom-32 left-48 w-2 h-2 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full animate-ping delay-700"></div>
      </div>

      <div className="container relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-800/10 to-slate-700/5 backdrop-blur-sm border border-slate-700/50 rounded-full text-cyan-400 font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            Get in Touch
            <Sparkles className="w-4 h-4" />
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 leading-tight">
            We are here to help you.
          </h2>
          <p className="text-xl text-slate-300 font-medium max-w-md mx-auto">We will reach you in an instant.</p>
        </div>

        {isSubmitted ? (
          <div className="text-center max-w-2xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-md px-12 py-20 rounded-[24px] shadow-lg border border-slate-700/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-800/10 to-slate-700/5 rounded-[24px]"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></div>

              <div className="relative z-10">
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg animate-pulse">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
                  Thank You!
                </h2>
                <p className="text-lg text-slate-300">We will be reaching you in no time.</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-md rounded-[24px] shadow-lg border border-slate-700/50 p-8 relative overflow-hidden">
              {/* Top gradient line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></div>

              {/* Form background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-800/10 to-slate-700/5 rounded-[24px]"></div>

              <div className="relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div className="group">
                    <label className="flex items-center gap-2 text-sm font-semibold text-slate-300 mb-3 transition-colors group-focus-within:text-cyan-400">
                      <User className="w-4 h-4 text-cyan-400" />
                      First Name <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="first_name"
                        placeholder="E.g. John"
                        required
                        className="w-full bg-slate-700/50 border-2 border-slate-600 text-white rounded-2xl placeholder-slate-400 px-5 py-4 text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:border-cyan-400 focus:bg-slate-700/70 hover:border-slate-500 hover:shadow-md group-hover:shadow-lg"
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/0 to-blue-500/0 group-focus-within:from-cyan-400/5 group-focus-within:to-blue-500/5 transition-all duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Last Name */}
                  <div className="group">
                    <label className="flex items-center gap-2 text-sm font-semibold text-slate-300 mb-3 transition-colors group-focus-within:text-cyan-400">
                      <User className="w-4 h-4 text-cyan-400" />
                      Last Name <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="last_name"
                        placeholder="E.g. Doe"
                        required
                        className="w-full bg-slate-700/50 border-2 border-slate-600 text-white rounded-2xl placeholder-slate-400 px-5 py-4 text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:border-cyan-400 focus:bg-slate-700/70 hover:border-slate-500 hover:shadow-md group-hover:shadow-lg"
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/0 to-blue-500/0 group-focus-within:from-cyan-400/5 group-focus-within:to-blue-500/5 transition-all duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Email Address */}
                  <div className="group">
                    <label className="flex items-center gap-2 text-sm font-semibold text-slate-300 mb-3 transition-colors group-focus-within:text-cyan-400">
                      <Mail className="w-4 h-4 text-cyan-400" />
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="user_email"
                        placeholder="E.g. name@website.com"
                        required
                        className="w-full bg-slate-700/50 border-2 border-slate-600 text-white rounded-2xl placeholder-slate-400 px-5 py-4 text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:border-cyan-400 focus:bg-slate-700/70 hover:border-slate-500 hover:shadow-md group-hover:shadow-lg"
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/0 to-blue-500/0 group-focus-within:from-cyan-400/5 group-focus-within:to-blue-500/5 transition-all duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="group">
                    <label className="flex items-center gap-2 text-sm font-semibold text-slate-300 mb-3 transition-colors group-focus-within:text-cyan-400">
                      <Phone className="w-4 h-4 text-cyan-400" />
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="phone_number"
                        placeholder="E.g. +1 3006005000"
                        required
                        className="w-full bg-slate-700/50 border-2 border-slate-600 text-white rounded-2xl placeholder-slate-400 px-5 py-4 text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:border-cyan-400 focus:bg-slate-700/70 hover:border-slate-500 hover:shadow-md group-hover:shadow-lg"
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/0 to-blue-500/0 group-focus-within:from-cyan-400/5 group-focus-within:to-blue-500/5 transition-all duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Select Service */}
                  <div className="group">
                    <label className="flex items-center gap-2 text-sm font-semibold text-slate-300 mb-3 transition-colors group-focus-within:text-cyan-400">
                      <Briefcase className="w-4 h-4 text-cyan-400" />
                      Select Service
                    </label>
                    <div className="relative">
                      <select
                        name="service"
                        className="w-full bg-slate-700/50 border-2 border-slate-600 text-white rounded-2xl px-5 py-4 text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:border-cyan-400 focus:bg-slate-700/70 hover:border-slate-500 hover:shadow-md appearance-none cursor-pointer"
                      >
                        {getServiceOptions().map((service, index) => (
                          <option key={index} value={service} className="bg-slate-700 text-white">
                            {service}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                        <svg
                          className="w-6 h-6 text-slate-400 group-focus-within:text-cyan-400 transition-colors"
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
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/0 to-blue-500/0 group-focus-within:from-cyan-400/5 group-focus-within:to-blue-500/5 transition-all duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Your Budget */}
                  <div className="group">
                    <label className="flex items-center gap-2 text-sm font-semibold text-slate-300 mb-3 transition-colors group-focus-within:text-cyan-400">
                      <DollarSign className="w-4 h-4 text-cyan-400" />
                      Your Budget <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="budget"
                        placeholder="E.g. $3000"
                        required
                        className="w-full bg-slate-700/50 border-2 border-slate-600 text-white rounded-2xl placeholder-slate-400 px-5 py-4 text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:border-cyan-400 focus:bg-slate-700/70 hover:border-slate-500 hover:shadow-md group-hover:shadow-lg"
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/0 to-blue-500/0 group-focus-within:from-cyan-400/5 group-focus-within:to-blue-500/5 transition-all duration-300 pointer-events-none"></div>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="mt-8 group">
                  <label className="flex items-center gap-2 text-sm font-semibold text-slate-300 mb-3 transition-colors group-focus-within:text-cyan-400">
                    <MessageSquare className="w-4 h-4 text-cyan-400" />
                    Message <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      rows="5"
                      maxLength={500}
                      placeholder="Enter your message..."
                      required
                      onChange={handleMessageChange}
                      className="w-full bg-slate-700/50 border-2 border-slate-600 text-white rounded-2xl placeholder-slate-400 px-5 py-4 text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:border-cyan-400 focus:bg-slate-700/70 hover:border-slate-500 hover:shadow-md resize-none group-hover:shadow-lg"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/0 to-blue-500/0 group-focus-within:from-cyan-400/5 group-focus-within:to-blue-500/5 transition-all duration-300 pointer-events-none"></div>
                  </div>
                  <div className="text-sm text-right text-slate-400 mt-2 font-medium">
                    <span
                      className={
                        messageLength > 450
                          ? "text-red-400"
                          : messageLength > 400
                          ? "text-yellow-400"
                          : "text-slate-400"
                      }
                    >
                      {messageLength}
                    </span>{" "}
                    / 500
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-8 flex justify-center">
                  <button
                    onClick={sendEmail}
                    className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-[32px] px-8 py-4 font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50 hover:-translate-y-2 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 active:transform active:scale-95 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
