import { PERSONAL_INFO } from "../../constants/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="w-full py-12 mt-20 border-t border-outline-variant bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm font-semibold text-[#1D1D1F]">
          © {currentYear} Engineered with Precision
        </div>
        
        <nav className="flex flex-wrap justify-center gap-8">
          {[
            { name: "GitHub", url: PERSONAL_INFO.github },
            { name: "LinkedIn", url: PERSONAL_INFO.linkedin },
            { name: "Email", url: `mailto:${PERSONAL_INFO.email}` },
          ].map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-on-surface-variant hover:text-[#1D1D1F] underline-offset-4 hover:underline transition-all duration-300"
            >
              {social.name}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
