"use client";
import React, { useState, useEffect } from "react";
import styles from "../styles/hero.module.css";

export default function Hero() {
  const textArray = ["Build", "Grow", "Learn"];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);


  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); 
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % textArray.length);
        setFade(true); 
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden h-screen flex items-center justify-center bg-linear-to-b from-[#00a875] to-[#003024] text-white text-center">
      <div className="w-[90%] md:w-1/2 mx-auto">
        <h1 className="text-3xl md:text-6xl font-medium leading-tight">
          <span
            className={`${styles.Text} ${
              fade ? styles.fadeIn : styles.fadeOut
            }`}
          >
            {textArray[index]}
          </span>{" "}
          your MVP, without Tech Hassle
        </h1>

        <p className="mt-6 text-slate-100 text-2xl">
          We connect non-technical founders with expert tech support to develop,
          launch, and scale their products{" "}
          <span className="text-[#DDFA6C] italic">FAST</span>
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#contact"
            className="px-28 py-3 bg-[#DDFA6C] rounded-2xl text-[#003024] font-semibold shadow hover:bg-yellow-400 transition"
          >
            Get Started
          </a>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-28 md:h-40 bg-linear-to-t from-[#001b15] to-transparent pointer-events-none" />
    </section>
  );
}
