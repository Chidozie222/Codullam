"use client";
import React, { useState } from "react";

export default function ContactForm() {
   const [formData, setFormData] = React.useState({
     firstName: "",
     lastName: "",
     email: "",
     idea: "",
   });
   const [isSubmitting, setIsSubmitting] = React.useState(false);
   const [message, setMessage] = React.useState(null);

   const handleChange = (e) => {
     const { name, value } = e.target;
     setFormData((prev) => ({ ...prev, [name]: value }));
   };

   const handleSubmit = (e) => {
     e.preventDefault();
     setIsSubmitting(true);
     setMessage(null);

     // Simulate form submission success after a delay
     setTimeout(() => {
       setIsSubmitting(false);
       setMessage({
         type: "success",
         text: "Thank you! Your idea has been submitted. We'll be in touch soon.",
       });
       setFormData({
         firstName: "",
         lastName: "",
         email: "",
         idea: "",
       });
     }, 1500);

     // In a real app, you would send this data to a server/Firestore here.
     console.log("Form Data Submitted:", formData);
   };

  return (
    <section id="contact" className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 lg:mt-24">
        {/* Left Column: Text & Call to Action */}
        <div className="flex flex-col justify-center pr-0 lg:pr-12">
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight">
            Give your idea momentum <br className="hidden md:block" /> to go{" "}
            <span className="text-[#049773]">Live</span>
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-md">
            Let's co-create something powerful, **Equity-first**. We'll bring
            the tech, you bring the spark.
          </p>
        </div>

        {/* Right Column: Contact Form */}
        <div className="bg-gray-100 p-8 rounded-xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Form Fields */}
            <div>
              <label htmlFor="firstName" className="sr-only">
                First name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-[#049773] focus:border-[#049773] transition"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="sr-only">
                Last name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-[#049773] focus:border-[#049773] transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-[#049773] focus:border-[#049773] transition"
              />
            </div>

            <div>
              <label htmlFor="idea" className="sr-only">
                Tell us about your idea?
              </label>
              <textarea
                name="idea"
                id="idea"
                rows="4"
                placeholder="Tell us about your idea..."
                value={formData.idea}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-[#049773] focus:border-[#049773] transition resize-none"
              ></textarea>
            </div>

            {/* Message Display */}
            {message && (
              <div
                className={`p-3 rounded-lg text-sm ${
                  message.type === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {message.text}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 rounded-lg text-white font-semibold transition duration-300 ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#049773] hover:bg-[#03785a] shadow-md"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
