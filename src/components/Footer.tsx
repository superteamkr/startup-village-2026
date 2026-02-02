import { motion } from "framer-motion";
import logoColor from "@/assets/logo-color.svg";

const Footer = () => {
  return (
    <footer className="py-16 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <a href="#" className="inline-block transition-transform hover:scale-105">
              <img src={logoColor} alt="Startup Village Seoul" className="h-20 w-auto" />
            </a>
          </motion.div>

          {/* Links */}
          <nav className="flex items-center gap-8 text-sm text-white/60 font-bold">
            <a
              href="#about"
              className="hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#schedule"
              className="hover:text-primary transition-colors"
            >
              Schedule
            </a>
            <a
              href="#faq"
              className="hover:text-primary transition-colors"
            >
              FAQ
            </a>
            <a
              href="https://luma.com/startupvillagekr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Events
            </a>
            <a
              href="mailto:admin@superteamkr.com"
              className="hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            {/* X */}
            <a
              href="#"
              title="X"
              className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
            >
              <svg className="w-5 h-5 fill-white" viewBox="0 0 512 512">
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </a>
            {/* Telegram */}
            <a
              href="#"
              title="Telegram"
              className="w-11 h-11 rounded-xl bg-[#26A5E4]/10 border border-[#26A5E4]/20 flex items-center justify-center hover:bg-[#26A5E4]/20 hover:-translate-y-1 transition-all duration-300"
            >
              <svg className="w-5 h-5 fill-[#26A5E4]" viewBox="0 0 496 512">
                <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z" />
              </svg>
            </a>
            {/* Youtube */}
            <a
              href="#"
              title="Youtube"
              className="w-11 h-11 rounded-xl bg-[#FF0000]/10 border border-[#FF0000]/20 flex items-center justify-center hover:bg-[#FF0000]/20 hover:-translate-y-1 transition-all duration-300"
            >
              <svg className="w-6 h-6 fill-[#FF0000]" viewBox="0 0 576 512">
                <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V174.4l149 71.6-149 71.6z" />
              </svg>
            </a>
            {/* Website */}
            <a
              href="#"
              title="Website"
              className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 hover:-translate-y-1 transition-all duration-300"
            >
              <svg className="w-5 h-5 fill-primary" viewBox="0 0 512 512">
                <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 30.7 140.9 91 171.4 171.6zM312.8 32c25.1 35.5 44.1 84.4 53.6 144H145.6C155.1 116.4 174.1 67.5 199.2 32h113.6zM135.3 32C109.8 66.2 90 119.7 80 183.6H33.4C63.9 103 126.5 42.7 204.8 12zM131.2 256c0 22 1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64H134.4c-2.1 20.6-3.2 42-3.2 64zM33.4 328H80c10 63.9 29.8 117.4 55.3 151.6C57.1 448.9 4.5 388.5 33.4 328zM248 512c-2.1 0-4.1 0-6.1-.1c-13.4-1.3-25.7-8.1-34.9-19c-25.1-35.5-44.1-84.4-53.6-144h224.3c-9.5 59.6-28.5 108.5-53.6 144c-9.2 10.9-21.5 17.7-34.9 19c-1.8 .2-3.6 .1-5.2 .1zm154.5-12c25.5-34.2 45.3-87.7 55.3-151.6h46.6c-30.5 80.6-93.1 140.9-171.4 171.6z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 text-center">
          <p className="text-sm text-white/60">
            ⓒ 2026 Superteam Korea
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
