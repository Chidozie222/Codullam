export default function Capabilities() {
  const services = [
    {
      title: "MVP Development",
      description: "From concept to launch-ready product, fast.",
    },
    {
      title: "Product Design",
      description:
        "UX/UI that blends clarity, usability, and brand personality.",
    },
    {
      title: "Full-Stack Engineering",
      description: "Scalable, secure, and flexible tech foundations.",
    },
    {
      title: "Cloud & DevOps",
      description:
        "Scalable deployment, continuous integration, and efficient release pipelines.",
    },
    {
      title: "Technical Strategy",
      description:
        "Guidance on architecture, integrations, and product growth.",
    },
    {
      title: "Maintenance & Iteration",
      description:
        "Continuous updates, feature improvements, and performance monitoring.",
    },
    {
      title: "API Integration & Automation",
      description:
        "Seamless data flow and smart systems that reduce manual work.",
    },
  ];
   return (
     <section className="relative bg-[#003024] text-white py-20 px-6 overflow-hidden">
       {/* Background design (optional circle patterns, like the image) */}
       <div className="absolute left-0 top-1/3 w-64 h-64 rounded-full bg-[#004835]/40 blur-3xl opacity-30 -z-10" />
       <div className="absolute right-0 bottom-1/4 w-64 h-64 rounded-full bg-[#004835]/40 blur-3xl opacity-30 -z-10" />

       <div className="max-w-6xl mx-auto text-center">
         {/* Heading */}
         <h2 className="text-2xl md:text-3xl font-semibold text-yellow-300 mb-4">
           We design, develop, and deliver products that help founders
           <br />
           go from zero to launch without the tech roadblocks.
         </h2>

         {/* Services Grid */}
         <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
           {services.map((service, i) => (
             <div
               key={i}
               className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3 text-left hover:bg-white/10 transition"
             >
               <p className="text-slate-200 text-sm mb-18">
                 {service.description}
               </p>
               <h3 className="font-semibold text-white">{service.title}</h3>
             </div>
           ))}
         </div>
       </div>
     </section>
   );
}
