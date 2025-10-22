"use client";
import React from "react";
import { Lightbulb, Code2, Wrench, LifeBuoy } from "lucide-react";

export default function Equity() {
  return (
    <section className="flex flex-col md:flex-row items-start justify-between px-8 md:px-20 py-32 bg-white text-[#003024]">
      {/* LEFT SIDE */}
      <div className="w-full md:w-1/2 mb-10 md:mb-0">
        <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
          Choose equity that matters.
        </h2>
        <p className="text-lg text-[#003024]/70 leading-relaxed max-w-md">
          Forget hiring devs you can’t afford or learning to code. Here’s how we
          make things happen.
        </p>
      </div>

      {/* RIGHT SIDE — 4 Steps */}
      <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {/* 1. Share your idea */}
        <div className="flex items-start gap-3">
          <Lightbulb className="w-6 h-6 mt-1 text-[#003024]" />
          <div>
            <h3 className="text-lg font-semibold mb-1">Share your idea</h3>
            <p className="text-[#003024]/70 text-sm leading-relaxed">
              Walk us through your concept, goals, and what success looks like
              for you.
            </p>
          </div>
        </div>

        {/* 2. Meet your tech crew */}
        <div className="flex items-start gap-3">
          <Code2 className="w-6 h-6 mt-1 text-[#003024]" />
          <div>
            <h3 className="text-lg font-semibold mb-1">Meet your tech crew</h3>
            <p className="text-[#003024]/70 text-sm leading-relaxed">
              We match you with trusted collaborators who can execute your core
              features quickly and iteratively.
            </p>
          </div>
        </div>

        {/* 3. Build & Launch */}
        <div className="flex items-start gap-3">
          <Wrench className="w-6 h-6 mt-1 text-[#003024]" />
          <div>
            <h3 className="text-lg font-semibold mb-1">Build & Launch</h3>
            <p className="text-[#003024]/70 text-sm leading-relaxed">
              From prototype to MVP in weeks. We cut the fluff, ship fast, and
              refine through real user feedback.
            </p>
          </div>
        </div>

        {/* 4. Grow with support */}
        <div className="flex items-start gap-3">
          <LifeBuoy className="w-6 h-6 mt-1 text-[#003024]" />
          <div>
            <h3 className="text-lg font-semibold mb-1">Grow with support</h3>
            <p className="text-[#003024]/70 text-sm leading-relaxed">
              We iterate fast using user feedback, live data, and lean startup
              principles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
