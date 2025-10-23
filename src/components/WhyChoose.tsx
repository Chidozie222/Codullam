export default function WhyChoose() {
const IconFounderCentric = ({ className = "w-6 h-6" }) => (
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
    <path d="M12 2a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3Z" />
    <path d="M14.31 16.51a2.82 2.82 0 0 0-.74-1.2l-1.39-1.38a.86.86 0 0 0-1.22 0l-1.39 1.38a2.82 2.82 0 0 0-.74 1.2" />
    <path d="M7 19c.66 0 2-.4 5-.4s4.34.4 5 .4" />
    <path d="M12 10v4" />
    <path d="M15 19v-2" />
    <path d="M9 19v-2" />
    <path d="M3 22h18" />
  </svg>
);

const IconEquity = ({ className = "w-6 h-6" }) => (
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
    <path d="M12 1v22" />
    <path d="m17 5-5-5-5 5" />
    <path d="m17 19-5 5-5-5" />
    <path d="M5 12h14" />
    <path d="M22 12h-3" />
    <path d="M5 12H2" />
  </svg>
);

const IconSupport = ({ className = "w-6 h-6" }) => (
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
    <path d="M12 2a10 10 0 0 0-9.84 8.74c.23 2.15.82 4.19 1.8 6.02L3 21l3-1.8c1.83.98 3.87 1.57 6.02 1.8A10 10 0 0 0 12 2Z" />
    <path d="M10 9h4" />
    <path d="M10 13h4" />
    <path d="M12 10v2" />
  </svg>
);

const IconDevelopment = ({ className = "w-6 h-6" }) => (
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
    <path d="m18 16 3-3-3-3" />
    <path d="m6 8-3 3 3 3" />
    <path d="m14.5 4-5 16" />
  </svg>
);

const IconExpertise = ({ className = "w-6 h-6" }) => (
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
    <path d="M12 18a6 6 0 0 0 8 0 6 6 0 0 0-8 0Z" />
    <path d="M22 2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2Z" />
    <path d="M12 13v6" />
    <path d="M12 13h6" />
    <path d="M12 13H6" />
  </svg>
  );
  
  const features = [
    {
      icon: IconFounderCentric,
      title: "Founder-Centric Approach",
      description:
        "Our mission is to help non-technical founders build and launch their minimum viable products (MVPs) efficiently and effectively.",
    },
    {
      icon: IconEquity,
      title: "Equity-Based Partnership",
      description:
        "Our mission is to help non-technical founders build and launch their minimum viable products (MVPs) efficiently and effectively.",
    },
    {
      icon: IconSupport,
      title: "End-to-End Support",
      description:
        "Our mission is to help non-technical founders build and launch their minimum viable products (MVPs) efficiently and effectively.",
    },
    {
      icon: IconDevelopment,
      title: "Accelerated Development",
      description:
        "Our mission is to help non-technical founders build and launch their minimum viable products (MVPs) efficiently and effectively.",
    },
    {
      icon: IconExpertise,
      title: "Reliable Expertise",
      description:
        "Our mission is to help non-technical founders build and launch their minimum viable products (MVPs) efficiently and effectively.",
    },
  ];

 type FeatureCardProps = {
   icon: React.ComponentType<{ className?: string }>;
   title: string;
   description: string;
 };

 const FeatureCard: React.FC<FeatureCardProps> = ({
   icon: Icon,
   title,
   description,
 }) => (
   <div className="flex flex-col items-center text-center p-4">
     <Icon className="w-8 h-8 mb-4 text-[#049773]" />
     <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
     <p className="text-gray-500 text-sm">{description}</p>
     <a
       href="#"
       className="text-[#049773] hover:text-[#003024] text-sm font-medium mt-2 transition"
     >
       Learn more
     </a>
   </div>
 );

  return (
    <section className="container mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          Why Choose Codullam
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
