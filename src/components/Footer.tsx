export default function Footer() {
  const IconInstagram = ({ className = "w-6 h-6" }) => (
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );

  const IconTwitter = ({ className = "w-6 h-6" }) => (
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2 1.7-1.4 1.2-4.5-1.7-5.5.9-.6 1.8-1 3-1.2C7 9 5.5 8.7 4.2 8s-2.1-1.6-2.8-3.4c1.4.6 3.1 1.4 4.5 1.7C4.6 4.7 3.5 3 2.5 1s.2-2.1 0-3.4c1.6 1.3 2.7 3 2.7 4.7C6.8 5.4 7.5 5 8.2 4.6c1.2-.5 2.5-1.3 3.5-2-.3.4-.6.8-.8 1.4-1.2.6-2.5 1-3.8 1.2s-2.7 0-4.1-.1" />
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2 1.7-1.4 1.2-4.5-1.7-5.5.9-.6 1.8-1 3-1.2C7 9 5.5 8.7 4.2 8s-2.1-1.6-2.8-3.4c1.4.6 3.1 1.4 4.5 1.7C4.6 4.7 3.5 3 2.5 1s.2-2.1 0-3.4c1.6 1.3 2.7 3 2.7 4.7C6.8 5.4 7.5 5 8.2 4.6c1.2-.5 2.5-1.3 3.5-2-.3.4-.6.8-.8 1.4-1.2.6-2.5 1-3.8 1.2s-2.7 0-4.1-.1" />
    </svg>
  );

  const IconLinkedIn = ({ className = "w-6 h-6" }) => (
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );

  const footerLinks = {
    company: [
      { name: "About us", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "FAQs", href: "#" },
    ],
    resources: [
      { name: "Case Studies", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms & Conditions", href: "#" },
    ],
  };
  return (
    <footer className="bg-[#003024] text-white pt-16 pb-6 mt-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 border-b border-white/10 pb-10">
          {/* Logo and Social */}
          <div className="md:col-span-2 lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              {/* Logo SVG - simplified based on image, assuming a custom 'O' like element */}
              <svg
                width="40"
                height="40"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Simplified green circle pattern */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#90EE90"
                  strokeWidth="10"
                />
                <circle cx="50" cy="50" r="20" fill="#90EE90" />
              </svg>
              <span className="text-3xl font-bold text-white">Codullam</span>
            </div>

            <div className="flex space-x-3">
              <a
                href="#"
                aria-label="Instagram"
                className="bg-[#049773] p-3 rounded-lg hover:bg-[#03785a] transition"
              >
                <IconInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="bg-[#049773] p-3 rounded-lg hover:bg-[#03785a] transition"
              >
                <IconTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="bg-[#049773] p-3 rounded-lg hover:bg-[#03785a] transition"
              >
                <IconLinkedIn className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#049773] transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#049773] transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Contact us
            </h4>
            <div className="space-y-3 text-sm text-gray-300">
              <p>+234 802 5542 1076</p>
              <p>
                <a
                  href="mailto:hello@codullam.africa"
                  className="hover:text-[#049773] transition"
                >
                  hello@codullam.africa
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center md:text-left">
          <p className="text-xs text-gray-400">
            All rights reserved. &copy; {new Date().getFullYear()} Codullam
            Technologies.
          </p>
        </div>
      </div>
    </footer>
  );
}
