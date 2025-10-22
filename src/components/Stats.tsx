"use client";
import React from "react";

export default function Stats() {
  const items = [
    { value: "15+", label: "years of technical experience" },
    { value: "5", label: "minimum expert talents per project" },
    { value: "12–24", label: "weeks on average to launch" },
    { value: "7", label: "happy founder in the last year" },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Descriptive Header */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-800 text-3xl font-semibold leading-relaxed">
            Codullam designs, builds, and launches with purpose across multiple
            industries. Every deadline respected. Every idea sharpened.
          </p>
        </div>

        {/* Stats Grid: 
          - On mobile (default), it shows 2 columns.
          - On medium screens (md) and up, it expands to 4 columns.
        */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((it) => (
            <div
              key={it.value}
              // Card styling with a touch of brand color and hover effect
              className="p-6 rounded-xl bg-gray-50 text-center"
            >
              {/* Statistic Value */}
              <div className="text-5xl md:text-6xl font-extrabold text-[#003024]">
                {it.value}
              </div>
              {/* Description Label */}
              <div className="text-sm text-gray-600 mt-2">{it.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
