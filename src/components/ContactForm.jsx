"use client";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { User, Mail, Phone, Briefcase, DollarSign, MessageSquare, Send, CheckCircle } from "lucide-react";

const ContactForm = ({ activeTab = "talent", className = "" }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [messageLength, setMessageLength] = useState(0);
  const form = useRef();

  const handleMessageChange = (e) => {
    setMessageLength(e.target.value.length);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, form.current, {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => setIsSubmitted(true),
        (error) => console.log("FAILED...", error.text)
      );
  };

  const themes = {
    talent: {
      primary: "from-cyan-500 to-blue-600",
      secondary: "from-cyan-50 to-blue-50",
      accent: "text-cyan-600",
      border: "border-cyan-200",
      shadow: "shadow-cyan-300/30",
      focus: "focus:ring-cyan-200 focus:border-cyan-300",
      hover: "hover:border-cyan-400",
      gradient: "from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700",
      ping: "from-cyan-200 to-blue-200",
    },
    development: {
      primary: "from-emerald-500 to-teal-600",
      secondary: "from-emerald-50 to-teal-50",
      accent: "text-emerald-600",
      border: "border-emerald-200",
      shadow: "shadow-emerald-300/30",
      focus: "focus:ring-emerald-200 focus:border-emerald-300",
      hover: "hover:border-emerald-400",
      gradient: "from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700",
      ping: "from-emerald-200 to-teal-200",
    },
    apps: {
      primary: "from-purple-500 to-pink-600",
      secondary: "from-purple-50 to-pink-50",
      accent: "text-purple-600",
      border: "border-purple-200",
      shadow: "shadow-purple-300/30",
      focus: "focus:ring-purple-200 focus:border-purple-300",
      hover: "hover:border-purple-400",
      gradient: "from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700",
      ping: "from-purple-200 to-pink-200",
    },
  };

  const currentTheme = themes[activeTab] || themes.talent;

  const getServiceOptions = () => {
    switch (activeTab) {
      case "talent":
        return [
          "AI-Driven Precision Screening",
          "Technical Talent Acquisition",
          "Contract Staffing",
          "Talent Consulting",
        ];
      case "development":
        return ["Web Development", "Mobile App Development", "Cloud Solutions", "Database & Backend"];
      case "apps":
        return ["FarahGPT Integration", "Muslifie Partnership", "Custom App Development", "App Consultation"];
      default:
        return ["General Inquiry"];
    }
  };

  return (
    <section className={`py-10 bg-transparent relative overflow-hidden ${className}`} id="contact">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-20 left-20 w-4 h-4 bg-gradient-to-r ${currentTheme.ping} rounded-full animate-ping`}
        />
        <div
          className={`absolute top-40 right-32 w-3 h-3 bg-gradient-to-r ${currentTheme.ping} rounded-full animate-ping delay-300`}
        />
        <div
          className={`absolute bottom-32 left-48 w-2 h-2 bg-gradient-to-r ${currentTheme.ping} rounded-full animate-ping delay-700`}
        />
      </div>

      <div className="container relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 bg-gradient-to-r ${currentTheme.secondary} text-sm font-medium px-6 py-3 rounded-full ${currentTheme.border}`}
          >
            <Mail className="w-4 h-4 animate-pulse" />
            <span className={`bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent font-semibold`}>
              Contact Us
            </span>
          </div>
          <h2
            className={`text-5xl font-bold bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent mb-4`}
          >
            We are here to help you.
          </h2>
          <p className="text-xl text-gray-600 max-w-md mx-auto">We will reach you in an instant.</p>
        </div>

        {isSubmitted ? (
          <div className="text-center max-w-2xl mx-auto overflow-hidden">
            <div className="bg-gray-50/50 border border-gray-200 shadow-xl rounded-xl px-12 py-20 relative overflow-hidden">
              <div className="relative z-10">
                <div
                  className={`w-24 h-24 bg-gradient-to-r ${currentTheme.primary} rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg animate-pulse`}
                >
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
                <h2
                  className={`text-4xl font-bold bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent mb-4`}
                >
                  Thank You!
                </h2>
                <p className="text-lg text-gray-600">We will be reaching you in no time.</p>
              </div>
            </div>
          </div>
        ) : (
          <form ref={form} onSubmit={sendEmail} className="max-w-4xl mx-auto relative z-10">
            <div className="bg-gray-50/50 border border-gray-200 shadow-lg rounded-[24px] p-8  overflow-hidden">
              <div className="relative z-10 grid md:grid-cols-2 gap-6">
                {[
                  { label: "First Name", name: "first_name", icon: User },
                  { label: "Last Name", name: "last_name", icon: User },
                  { label: "Email Address", name: "user_email", icon: Mail, type: "email" },
                  { label: "Phone Number", name: "phone_number", icon: Phone },
                  { label: "Your Budget", name: "budget", icon: DollarSign },
                ].map(({ label, name, icon: Icon, type = "text" }) => (
                  <div className="group" key={name}>
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                      <Icon className={`w-4 h-4 ${currentTheme.accent}`} />
                      {label} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type={type}
                      name={name}
                      required
                      placeholder={`E.g. ${label.includes("Email") ? "name@site.com" : label.split(" ")[0]}`}
                      className={`w-full bg-white border-2 border-gray-200 text-gray-900 rounded-2xl placeholder-gray-400 px-5 py-4 text-lg transition-all duration-300 focus:outline-none ${currentTheme.focus} ${currentTheme.hover}`}
                    />
                  </div>
                ))}

                <div className="group">
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                    <Briefcase className={`w-4 h-4 ${currentTheme.accent}`} />
                    Select Service
                  </label>
                  <select
                    name="service"
                    className={`w-full bg-white border-2 border-gray-200 text-gray-900 rounded-2xl px-5 py-4 text-lg transition-all duration-300 focus:outline-none ${currentTheme.focus} ${currentTheme.hover}`}
                  >
                    {getServiceOptions().map((s, i) => (
                      <option key={i} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-8 group">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                  <MessageSquare className={`w-4 h-4 ${currentTheme.accent}`} />
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  maxLength={500}
                  onChange={handleMessageChange}
                  placeholder="Enter your message..."
                  className={`w-full bg-white border-2 border-gray-200 text-gray-900 rounded-2xl placeholder-gray-400 px-5 py-4 text-lg transition-all duration-300 focus:outline-none ${currentTheme.focus} ${currentTheme.hover} resize-none`}
                />
                <div className="text-sm text-right mt-2 font-medium">
                  <span
                    className={
                      messageLength > 450 ? "text-red-500" : messageLength > 400 ? "text-yellow-500" : "text-gray-500"
                    }
                  >
                    {messageLength}
                  </span>{" "}
                  / 500
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <button
                  type="submit"
                  className={`group relative text-white rounded-[32px] px-8 py-4 font-bold text-lg transition-all duration-300 bg-gradient-to-r ${currentTheme.gradient} hover:shadow-2xl ${currentTheme.shadow} hover:-translate-y-2 focus:outline-none focus:ring-4 active:transform active:scale-95 overflow-hidden`}
                >
                  <span className="relative flex items-center gap-3 z-10">
                    Send Message
                    <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
