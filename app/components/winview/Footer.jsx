import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-green-200/30 dark:border-green-700/30 bg-gradient-to-b from-green-100/60 via-white to-white dark:from-green-900/40 dark:via-neutral-800 dark:to-neutral-800 transition-colors duration-300">
      
      {/* Soft Green Ambient Light */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-400/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-300/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-300/10 blur-3xl rounded-full" />

      <div className="w-full px-6 py-16 mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-20 h-20 rounded-xl overflow-hidden shadow-sm ring-1 ring-green-200/30 dark:ring-green-700/30">
                <img
                  src="https://ucarecdn.com/a074ace0-7537-49fc-8fc2-efaa47ded78a/-/crop/512x512/center/-/quality/smart/-/format/auto/"
                  srcSet="https://ucarecdn.com/a074ace0-7537-49fc-8fc2-efaa47ded78a/-/crop/512x512/center/-/quality/smart/-/format/auto/ 1x, https://ucarecdn.com/a074ace0-7537-49fc-8fc2-efaa47ded78a/-/crop/1024x1024/center/-/quality/smart/-/format/auto/ 2x"
                  sizes="80px"
                  alt="Winview Microfinance Bank Limited Logo"
                  className="w-full h-full object-cover"
                  decoding="async"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-2xl text-neutral-900 dark:text-white leading-tight tracking-tight">
                  Winview
                </span>
                <span className="text-xs font-bold text-green-600 dark:text-green-400 uppercase tracking-widest">
                  Microfinance Bank
                </span>
              </div>
            </div>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Trusted microfinance banking for individuals and small businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/open-account", label: "Open Account" },
                { href: "/about", label: "About" },
                { href: "/complaints", label: "Support" },
                { href: "/faq", label: "FAQ" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-6">
              Legal
            </h3>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms of Service", "Security"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+2347064200926"
                  className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
                >
                  +234 706 420 0926
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:support@winviewmicrofinance.com"
                  className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
                >
                  support@winviewmicrofinance.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-neutral-700 dark:text-neutral-300">
                  SBBC Complex 102A Barrister Collins Aimuan Road, Kuje, FCT-Abuja, Nigeria
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-green-200/30 dark:border-green-700/30 text-center">
          <p className="text-xs text-neutral-600 dark:text-neutral-400 tracking-wide">
            © 2025 Winview Microfinance Bank Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}