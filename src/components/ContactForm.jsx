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

    const formData = new FormData();
    const inputs = form.current.querySelectorAll("input, select, textarea");

    inputs.forEach((input) => {
      if (input.name) {
        formData.append(input.name, input.value);
      }
    });

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, form.current, {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          setIsSubmitted(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

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
      ping: "from-cyan-400/20 to-blue-500/20",
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
      ping: "from-emerald-400/20 to-teal-500/20",
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
      ping: "from-purple-400/20 to-pink-500/20",
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
    <section className={`py-20 relative overflow-hidden ${className}`} id="contact">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
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

      {/* Content */}
      <div className="container relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 bg-gradient-to-r ${currentTheme.secondary} backdrop-blur-sm ${currentTheme.accent} px-6 py-3 rounded-full text-sm font-medium mb-6 ${currentTheme.border}`}
          >
            <Mail className="w-4 h-4 animate-pulse" />
            <span className={`bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent`}>Contact Us</span>
          </div>
          <h2
            className={`text-5xl font-bold bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent mb-4 leading-tight`}
          >
            We are here to help you.
          </h2>
          <p className="text-xl text-slate-300 font-medium max-w-md mx-auto">We will reach you in an instant.</p>
        </div>

        {/* Form or Success Message */}
        {isSubmitted ? (
          <div className="text-center max-w-2xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-md px-12 py-20 rounded-[24px] shadow-lg border border-slate-700/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-800/10 to-slate-700/5 rounded-[24px]" />
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${currentTheme.primary}`} />
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
                <p className="text-lg text-slate-300">We will be reaching you in no time.</p>
              </div>
            </div>
          </div>
        ) : (
          <form ref={form} onSubmit={sendEmail} className="max-w-4xl mx-auto relative z-10">
            <div className="bg-slate-800/50 backdrop-blur-md rounded-[24px] shadow-lg border border-slate-700/50 p-8 relative overflow-hidden">
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${currentTheme.primary}`} />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-800/10 to-slate-700/5 rounded-[24px]" />
              <div className="relative z-10 grid md:grid-cols-2 gap-6">
                {/* Form Fields */}
                {[
                  { label: "First Name", name: "first_name", icon: User },
                  { label: "Last Name", name: "last_name", icon: User },
                  { label: "Email Address", name: "user_email", icon: Mail, type: "email" },
                  { label: "Phone Number", name: "phone_number", icon: Phone },
                  { label: "Your Budget", name: "budget", icon: DollarSign },
                ].map(({ label, name, icon: Icon, type = "text" }) => (
                  <div className="group" key={name}>
                    <label className={`flex items-center gap-2 text-sm font-semibold text-slate-300 mb-3`}>
                      <Icon className={`w-4 h-4 ${currentTheme.accent}`} />
                      {label} <span className="text-red-400">*</span>
                    </label>
                    <input
                      type={type}
                      name={name}
                      required
                      placeholder={`E.g. ${label.includes("Email") ? "name@website.com" : label.split(" ")[0]}`}
                      className={`w-full bg-slate-700/50 border-2 border-slate-600 text-white rounded-2xl placeholder-slate-400 px-5 py-4 text-lg transition-all duration-300 focus:outline-none ${currentTheme.focus} focus:bg-slate-700/70 ${currentTheme.hover}`}
                    />
                  </div>
                ))}

                {/* Service Select */}
                <div className="group">
                  <label className="flex items-center gap-2 text-sm font-semibold text-slate-300 mb-3">
                    <Briefcase className={`w-4 h-4 ${currentTheme.accent}`} />
                    Select Service
                  </label>
                  <select
                    name="service"
                    className={`w-full bg-slate-700/50 border-2 border-slate-600 text-white rounded-2xl px-5 py-4 text-lg transition-all duration-300 focus:outline-none ${currentTheme.focus} focus:bg-slate-700/70 ${currentTheme.hover} cursor-pointer appearance-none`}
                  >
                    {getServiceOptions().map((s, i) => (
                      <option key={i} value={s} className="bg-slate-700 text-white">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="mt-8 group">
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-300 mb-3">
                  <MessageSquare className={`w-4 h-4 ${currentTheme.accent}`} />
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  maxLength={500}
                  placeholder="Enter your message..."
                  onChange={handleMessageChange}
                  className={`w-full bg-slate-700/50 border-2 border-slate-600 text-white rounded-2xl placeholder-slate-400 px-5 py-4 text-lg transition-all duration-300 focus:outline-none ${currentTheme.focus} focus:bg-slate-700/70 ${currentTheme.hover} resize-none`}
                />
                <div className="text-sm text-right text-slate-400 mt-2 font-medium">
                  <span
                    className={
                      messageLength > 450 ? "text-red-400" : messageLength > 400 ? "text-yellow-400" : "text-slate-400"
                    }
                  >
                    {messageLength}
                  </span>{" "}
                  / 500
                </div>
              </div>

              {/* Submit */}
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
