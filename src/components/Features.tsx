
export default function Features() {
  const cards = [
    {
      title: "Built in weeks, MVP-ready",
      desc: "Our plug-and-play teams cut onboarding time so your MVP launches in weeks—ready for real users and early feedback.",
    },
    {
      title: "Scalable Architecture, future-proof",
      desc: "Skip the heavy dev costs. Trade equity for expertise—your success powers ours, without draining your runway.",
    },
    {
      title: "Lean & efficient, focus on growth",
      desc: "We build modular, secure systems with clean architecture and API-ready integrations, built to evolve with your product.",
    },
  ];
  return (
    <section id="features" className="container mx-auto px-6 py-12 my-24">
      <h2 className="text-4xl text-center font-medium">
        Made for Founders, Not Tech Leads.
      </h2>
      <p className="text-center text-black font-normal mt-2 max-w-3/5 mx-auto text-2xl">
        Big ideas shouldn’t wait on a technical cofounder. You bring the vision.
        We bring the tech — for a slice of equity.
      </p>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-16 w-9/12 mx-auto">
        {cards.map((c) => (
          <div key={c.title} className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold">{c.title}</h3>
            <p className="mt-3 text-slate-600 text-sm">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
