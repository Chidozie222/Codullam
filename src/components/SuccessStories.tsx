"use client";
import React from "react";

// In a real application, you would import these avatars or use a component library.
// We use placeholder images here to ensure the component is self-contained and runnable.
const stories = [
  {
    name: "Skye Olawale",
    text: "Codullam helped me build a robust e-commerce platform from scratch without upfront costs.",
    // Placeholder image using initials
    avatarPlaceholder: "SO",
  },
  {
    name: "Mensan Ubongog",
    text: "I was able to launch a mobile app for a healthcare startup, overcoming technical challenges with Codullam’s support and with an equity-based partnership.",
    // Placeholder image using initials
    avatarPlaceholder: "MU",
  },
];

// Inline SVG for Arrows to avoid external dependencies
const ArrowLeft = ({ className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ArrowRight = ({ className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export default function SuccessStories() {
  // Since we are showing both stories, we remove the index state and navigation logic.

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <div
          className="bg-[linear-gradient(to_bottom,rgb(4,151,115)_0%,rgb(0,48,36)_100%)] 
                   text-white py-16 px-4 sm:px-8 text-center rounded-2xl shadow-2xl max-w-6xl mx-auto"
        >
          {/* Header */}
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-lime-300 mb-4">
            SUCCESS STORIES
          </h2>
          <p className="mb-12 max-w-xl mx-auto text-lg text-white/90">
            Big ideas shouldn’t wait on a technical cofounder. You bring the
            vision. We bring the tech for a slice of equity.
          </p>

          {/* Navigation Arrows (Visual only, to match the image) */}
          <div className="flex items-center justify-center gap-4 mb-12">
            {/* Left Arrow - Styled as static/inactive */}
            <button
              aria-label="Previous Story (Visual)"
              className="bg-white/10 text-white/80 rounded-full w-10 h-10 flex items-center justify-center border border-white/20 cursor-default"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            {/* Right Arrow - Styled as active */}
            <button
              aria-label="Next Story (Visual)"
              className="bg-lime-500 text-black rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:shadow-xl transition duration-300"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Main Content: Responsive Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {stories.map((story, index) => (
              <div
                key={story.name}
                // Custom, darker green for the card background, with a subtle border and depth
                className="bg-[#004d3c]/50 p-8 rounded-2xl text-left shadow-2xl backdrop-blur-sm border border-lime-500/10 transition hover:bg-[#004d3c]/70 hover:shadow-lime-500/10 duration-300"
              >
                {/* Avatar with Placeholder logic */}
                <div className="w-14 h-14 rounded-full mx-auto mb-4 bg-[#049773] flex items-center justify-center ring-2 ring-lime-300 text-xl font-semibold">
                  {story.avatarPlaceholder}
                  {/* Using a placeholder service URL for visual completeness, if required
                    <img
                      src={`https://placehold.co/56x56/049773/ffffff?text=${story.avatarPlaceholder}`}
                      alt={story.name}
                      className="w-full h-full rounded-full object-cover"
                    /> 
                  */}
                </div>

                <h4 className="text-lime-300 font-bold text-center text-xl mt-2 mb-4">
                  {story.name}
                </h4>

                <p className="text-base text-center text-white/90 leading-relaxed italic">
                  &ldquo;{story.text}&rdquo;
                </p>
              </div>
            ))}
          </div>

          {/* Removed Dots: Not necessary for a static grid view */}
        </div>
      </div>
    </section>
  );
}
