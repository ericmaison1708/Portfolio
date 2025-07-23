import { mySocials } from "../constants";

const Footer = () => {
  return (
    <footer className="w-full border-t border-neutral-700 mt-10 pt-6 pb-4 text-sm text-neutral-400 bg-gradient-to-t from-black/40 via-transparent">
      <div className="c-space flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Điều khoản */}
        <div className="flex gap-4 text-xs md:text-sm">
          <a href="#" className="hover:text-white transition">
            Terms & Conditions
          </a>
          <span className="hidden md:inline">|</span>
          <a href="#" className="hover:text-white transition">
            Privacy Policy
          </a>
        </div>

        {/* Social */}
        <div className="flex gap-3">
          {mySocials.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
            >
              <img src={social.icon} alt={social.name} className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Bản quyền */}
        <p className="text-xs md:text-sm text-neutral-500 text-center">
          © 2025 Eric. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
