"use client";
import React from "react";

export default function CaseStudy() {
  return (
    <section className="flex flex-col md:flex-row h-screen">
      {/* LEFT SIDE — TEXT */}
      <div className="w-full md:w-1/2 flex flex-col px-10 md:px-20 py-6 text-[#003024] bg-white">
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">Tralick</h2>

        <p className="text-lg text-[#003024]/80 leading-relaxed mb-6 max-w-md">
          We match you with trusted collaborators who can execute your core
          features quickly and iteratively.
        </p>

        <div className="flex flex-wrap gap-3 mb-6">
          <button className="border border-[#003024] px-5 py-2 rounded-full text-sm font-medium hover:bg-[#003024] hover:text-white transition">
            PRODUCTIVITY
          </button>
          <button className="border border-[#003024] px-5 py-2 rounded-full text-sm font-medium hover:bg-[#003024] hover:text-white transition">
            PRODUCTIVITY
          </button>
        </div>

        <a
          href="#"
          className="inline-block text-[#003024] underline underline-offset-4 font-medium hover:text-[#007758] transition"
        >
          Our case studies ↗
        </a>

        <div className="flex gap-4 pt-8 justify-end">
          <button className="w-10 h-10 flex items-center justify-center border border-[#003024]/40 rounded-full hover:bg-[#003024]/10 transition">
            ←
          </button>
          <button className="w-10 h-10 flex items-center justify-center border border-[#003024] rounded-full hover:bg-[#003024]/10 transition">
            →
          </button>
        </div>
      </div>

      {/* RIGHT SIDE — IMAGE */}
      <div className="w-full md:w-1/2 h-screen md:h-full bg-[url('/9e8da4382b2dccd55420f305d0e903e33c12f4af.png')] bg-cover bg-center bg-no-repeat" />
    </section>
  );
}
