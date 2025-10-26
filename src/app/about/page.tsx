"use client";
import Image from "next/image";
import { MoveRight } from "lucide-react";

const BRAND_DARK = "#003024";
const BRAND_GREEN = "#DDFA6C";

interface PlaceholderImageProps {
  src: string;
  alt: string;
  className?: string;
}

// --- CLEAN PlaceholderImage COMPONENT ---
const PlaceholderImage = ({
  src,
  alt,
  className = "",
}: PlaceholderImageProps) => (
  <div className={`relative bg-white ${className}`}>
    <Image
      src={src}
      alt={alt}
      fill
      priority
      className="object-contain object-center"
      onError={(e) => {
        const parent = e.currentTarget.parentElement;
        if (parent) {
          parent.innerHTML = `
      <div class='absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400 text-sm font-medium'>
        Image not found: ${alt}
      </div>`;
        }
      }}
    />
  </div>
);

export default function AboutPage() {
  const features = [
    {
      title: "How We Work",
      text: "We operate on an equity-based partnership model. Instead of charging large upfront fees, we take a small slice of equity...",
      imageSrc: "/2e0af7a9c9f21c58839aa4d00997b94aa238b9da.png",
      imageAlt: "Team collaboration illustration",
      reverse: false,
    },
    {
      title: "Our Beliefs",
      text: "We believe in the power of collaboration, transparency, and iterative development...",
      imageSrc: "/315fcefe7b41818c70f453c0ec9696b264295b5b.png",
      imageAlt: "Brainstorming and ideas illustration",
      reverse: true,
    },
    {
      title: "What It’s Like to Work With Us",
      text: "Working with Codullam is a collaborative and transparent journey...",
      imageSrc: "/eb90bc49ff7a189344a9a6b004c80e30f0d3eed0.png",
      imageAlt: "Team meeting illustration",
      reverse: false,
    },
  ];

  return (
    <main className="min-h-screen pt-24 bg-white text-gray-900">
      {/* 1. Hero Section */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Build Your MVP withCodullam
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-lg">
              We partner with non-technical founders, taking{" "}
              <b>equity instead of large upfront payments</b>. Launch your
              vision with our expert team.
            </p>
            <button
              className={`mt-10 flex items-center gap-2 font-semibold text-lg px-8 py-3 rounded-xl transition-all bg-[${BRAND_DARK}] hover:bg-green-800 text-[${BRAND_GREEN}]`}
            >
              Let’s Build Together <MoveRight size={20} />
            </button>
          </div>

          {/* ✅ FIXED IMAGE */}
          <div className="relative flex justify-center md:justify-end">
            <PlaceholderImage
              src="/3b32307bb3995431cdab9f759325f1c465189260.jpg"
              alt="Team collaborating on a project"
              className="w-full md:max-w-lg aspect-16/10"
            />
          </div>
        </div>
      </section>

      {/* 2. Vision Section */}
      <section className="py-20 px-6 md:px-16 text-center bg-gray-50 border-y border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your Vision, Our Expertise
          </h2>
          <p className="text-lg text-gray-600">
            At Codullam, we believe that great ideas shouldn’t be held back by
            technical barriers. We exist to empower non-technical founders and
            bring innovative products to market.
          </p>
        </div>
      </section>

      {/* 3. Feature Sections */}
      {features.map((feature, index) => (
        <section
          key={index}
          className={`py-20 px-6 md:px-16 ${
            index % 2 === 1 ? "bg-white" : "bg-gray-50 border-b border-gray-100"
          }`}
        >
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* ✅ FIXED IMAGE */}
            <div
              className={`relative flex justify-center ${
                feature.reverse ? "md:order-first" : "md:order-last"
              }`}
            >
              <PlaceholderImage
                src={feature.imageSrc}
                alt={feature.imageAlt}
                className="w-full max-w-md h-96"
              />
            </div>

            {/* Text */}
            <div
              className={`flex flex-col justify-center ${
                feature.reverse ? "md:order-last" : "md:order-first"
              }`}
            >
              <h3 className="text-4xl font-bold mb-4">{feature.title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {feature.text}
              </p>
            </div>
          </div>
        </section>
      ))}

      {/* 4. CTA */}
      <section
        className={`py-20 px-6 md:px-16 text-center`}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Ready to Launch Your MVP?
        </h2>
        <p className="mt-4 text-xl max-w-3xl mx-auto text-black">
          Let’s turn your idea into a reality. Schedule a free consultation to
          discuss your project.
        </p>
        <button
          className={`mt-8 flex items-center justify-center mx-auto gap-2 font-bold text-lg px-8 py-3 rounded-xl transition-all bg-[${BRAND_DARK}] text-[${BRAND_GREEN}]`}
        >
          Let’s Build Together <MoveRight size={20} />
        </button>
      </section>
    </main>
  );
}
