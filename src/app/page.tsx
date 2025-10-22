import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";
import Capabilities from "../components/Capabilities";
import CaseStudy from "../components/CaseStudy";
import Equity from "../components/Equity";
import SuccessStories from "../components/SuccessStories";
import WhyChoose from "../components/WhyChoose";
import ContactForm from "../components/ContactForm";

export default function Page() {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <Capabilities />
      <CaseStudy />
      <Equity />
      <SuccessStories />
      <WhyChoose />
      <ContactForm />
    </>
  );
}
