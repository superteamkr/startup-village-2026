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
            {/* X (Twitter) */}
            <a
              href="https://x.com/SuperteamKorea"
              target="_blank"
              rel="noopener noreferrer"
              title="X (Twitter)"
              className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
            >
              <svg className="w-5 h-5 fill-white" viewBox="0 0 512 512">
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/superteam-korea/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="w-11 h-11 rounded-xl bg-[#0077B5]/10 border border-[#0077B5]/20 flex items-center justify-center hover:bg-[#0077B5]/20 hover:-translate-y-1 transition-all duration-300"
            >
              <svg className="w-5 h-5 fill-[#0077B5]" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            {/* Telegram */}
            <a
              href="https://t.me/superteamkoreapublic"
              target="_blank"
              rel="noopener noreferrer"
              title="Telegram"
              className="w-11 h-11 rounded-xl bg-[#26A5E4]/10 border border-[#26A5E4]/20 flex items-center justify-center hover:bg-[#26A5E4]/20 hover:-translate-y-1 transition-all duration-300"
            >
              <svg className="w-5 h-5 fill-[#26A5E4]" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
            {/* Youtube */}
            <a
              href="https://www.youtube.com/@superteam-korea"
              target="_blank"
              rel="noopener noreferrer"
              title="Youtube"
              className="w-11 h-11 rounded-xl bg-[#FF0000]/10 border border-[#FF0000]/20 flex items-center justify-center hover:bg-[#FF0000]/20 hover:-translate-y-1 transition-all duration-300"
            >
              <svg className="w-6 h-6 fill-[#FF0000]" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            {/* Website */}
            <a
              href="https://www.superteamkr.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="Website"
              className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 hover:-translate-y-1 transition-all duration-300"
            >
              <svg className="w-5 h-5 fill-primary" viewBox="0 0 512 512">
                <path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M418.275,146h-83.396 c-10.536-27.398-25.163-53.176-43.443-76.219C343.261,85.039,384.03,110.626,418.275,146z M256,50.002 c23.924,25.871,42.99,55.27,56.201,87.998h-112.4C213.012,105.272,232.078,75.873,256,50.002z M55.921,296 c-4.253-12.748-6.662-26.792-6.662-42s2.409-29.252,6.662-42h94.645c-0.746,7.007-1.566,13.895-1.566,21s0.82,13.993,1.566,21 H55.921z M93.725,346h83.396c10.536,27.398,25.163,53.176,43.443,76.219C168.739,406.961,127.97,381.374,93.725,346z M177.121,146H93.725c34.245-35.374,75.014-60.961,126.838-76.219C202.284,92.824,187.657,118.602,177.121,146z M256,461.998 c-23.924-25.871-42.99-55.27-56.201-87.998h112.4C298.988,406.728,279.922,436.127,256,461.998z M319.748,346H192.252 c-1.158-6.893-2.252-13.667-2.252-21s1.094-14.107,2.252-21h127.496c1.158,6.893,2.252,13.667,2.252,21 S320.906,339.107,319.748,346z M291.436,422.219c18.28-23.043,32.907-48.821,43.443-76.219h83.396 C384.03,381.374,343.261,406.961,291.436,422.219z M361.434,296c0.746-7.007,1.566-13.895,1.566-21s-0.82-13.993-1.566-21h94.645 c4.253,12.748,6.662,26.792,6.662,42s-2.409,29.252-6.662,42H361.434z" />
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
