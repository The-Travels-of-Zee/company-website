"use client";
import { useState } from "react";

export default function CustomNewsletterForm({ title = "Subscribe", apiUrl = "/api/newsletter" }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("idle");
  const [successMessage, setSuccessMessage] = useState("");

  const subscribe = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    if (!email) {
      setError("Email is required");
      setStatus("error");
      return;
    }

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setSuccessMessage(data.message || "Successfully subscribed!");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setError(error.message || "An error occurred. Please try again.");
      console.error("Subscription error:", error);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={subscribe} className="relative">
        <div className="flex items-center border border-cyan-200 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-cyan-400">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            disabled={status === "loading"}
            className="w-full px-4 py-3 outline-none text-blue-800 placeholder:text-blue-300 bg-white"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-3 font-medium transition whitespace-nowrap"
          >
            {status === "loading" ? "Subscribing..." : title}
          </button>
        </div>

        {status === "error" && <p className="text-red-500 mt-2 text-sm">{error}</p>}
        {status === "success" && <p className="text-cyan-600 mt-2 text-sm">{successMessage}</p>}
      </form>
    </div>
  );
}
