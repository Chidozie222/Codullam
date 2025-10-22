"use client";

import Image from "next/image";
import styles from "./AboutPage.module.css";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-gray-900">

      {/* Hero Section */}
      <section className={`relative py-20 px-6 md:px-16 ${styles.heroBg}`}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
              Build Your MVP with{" "}
              <span className="text-(--brand-green)">Codullam</span>
            </h1>
            <p className="mt-4 text-gray-600">
              We partner with non-technical founders, taking equity instead of
              large upfront payments. Launch your vision with our expert team.
            </p>
            <button className="mt-6 bg-(--brand-dark) hover:bg-(--brand-green) text-white px-6 py-3 rounded-md font-medium transition">
              Let’s Build Together
            </button>
          </div>

          <div className="relative">
            <Image
              src="/images/about-hero.jpg"
              alt="About Hero"
              width={600}
              height={400}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Your Vision Section */}
      <section className="py-20 px-6 md:px-16 text-center bg-subtle">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
          Your Vision, Our Expertise
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          At Codullam, we believe that great ideas shouldn’t be held back by
          technical barriers. We exist to empower non-technical founders and
          bring innovative products to market.
        </p>
      </section>

      {/* How We Work */}
      <section className="py-20 px-6 md:px-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            How We Work
          </h3>
          <p className="text-gray-600 leading-relaxed">
            We operate on an equity-based partnership model. Instead of charging
            large upfront fees, we take a small slice of equity. This aligns our
            incentives with your success, ensuring we’re committed to building a
            high-quality MVP that resonates with your target audience.
          </p>
        </div>
        <Image
          src="/images/how-we-work.svg"
          alt="How We Work Illustration"
          width={500}
          height={400}
          className="mx-auto"
        />
      </section>

      {/* Our Beliefs */}
      <section className="py-20 px-6 md:px-16 grid md:grid-cols-2 gap-12 items-center bg-subtle">
        <Image
          src="/images/our-beliefs.svg"
          alt="Our Beliefs Illustration"
          width={500}
          height={400}
          className="mx-auto order-last md:order-first"
        />
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Our Beliefs
          </h3>
          <p className="text-gray-600 leading-relaxed">
            We believe in the power of collaboration, transparency, and
            iterative development. We’re passionate about building products that
            solve real problems and make a positive impact. We’re committed to
            fostering long-term partnerships, providing ongoing support as you
            grow.
          </p>
        </div>
      </section>

      {/* What It’s Like to Work With Us */}
      <section className="py-20 px-6 md:px-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            What It’s Like to Work With Us
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Working with Codullam is a collaborative and transparent journey. We
            guide you from ideation and design to development and launch. Our
            experienced team works closely with you to ensure your vision is
            realized, every step of the way.
          </p>
        </div>
        <Image
          src="/images/work-with-us.svg"
          alt="Work With Us Illustration"
          width={500}
          height={400}
          className="mx-auto"
        />
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-(--brand-green) text-white">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Ready to Launch Your MVP?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto">
          Let’s turn your idea into a reality. Schedule a free consultation to
          discuss your project.
        </p>
        <button className="mt-6 bg-white text-(--brand-dark) px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">
          Let’s Build Together
        </button>
      </section>

    </main>
  );
}
