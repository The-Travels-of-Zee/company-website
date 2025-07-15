"use client";

import React, { useState, useEffect } from "react";
import { X, Mail } from "lucide-react";
import CustomNewsletterForm from "./CustomNewsletterForm";

const NewsletterPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000); // Show after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
    }, 200);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-opacity duration-300 ${
        isClosing ? "opacity-0" : "opacity-100"
      }`}
      onClick={handleBackdropClick}
    >
      <div
        className={`relative bg-white max-w-md w-full mx-4 rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-xl transition-transform duration-300 ${
          isClosing ? "scale-95" : "scale-100"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background blobs (decorative) */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-100 rounded-full blur-2xl opacity-40" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-100 rounded-full blur-2xl opacity-30" />
        </div>

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex justify-center mb-5">
          <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center border border-cyan-200 shadow-sm">
            <Mail className="w-6 h-6 text-cyan-600" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">Stay in the Loop</h2>
        <p className="text-sm text-center text-gray-600 mb-6">
          Join our newsletter for updates, insights, and early access to AI tools.
        </p>

        {/* Form */}
        <CustomNewsletterForm title="Subscribe Now" apiUrl="/api/newsletter" />

        {/* Highlights */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-sm text-gray-600">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center border border-cyan-200 mb-2">
              <span className="text-cyan-600 text-lg">📬</span>
            </div>
            Weekly Tips
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center border border-cyan-200 mb-2">
              <span className="text-cyan-600 text-lg">🚀</span>
            </div>
            Early Access
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center border border-cyan-200 mb-2">
              <span className="text-cyan-600 text-lg">💡</span>
            </div>
            Insights
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-center text-gray-400 mt-6">No spam. Unsubscribe anytime.</p>
      </div>
    </div>
  );
};

export default NewsletterPopup;
