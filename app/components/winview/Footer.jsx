import { Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-green-200/30 dark:border-green-700/30 bg-gradient-to-b from-green-100/60 via-white to-white dark:from-green-900/40 dark:via-neutral-800 dark:to-neutral-800 transition-colors duration-300">

      <div className="absolute inset-0 bg-gradient-to-t from-green-400/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-300/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-300/10 blur-3xl rounded-full" />

      <div className="w-full px-6 py-16 mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div>
           <div className="relative flex items-center -translate-y-20 -translate-x-16">
              <Image
                src="/logo-t.png"
                alt="Winview Logo"
                width={600}
                height={600}
                className="w-60 lg:w-72 h-auto object-contain shrink-0"
                priority
              />
              <div className="flex flex-col leading-[0.95] -ml-20">
                <span className="font-black text-2xl lg:text-3xl text-neutral-900 dark:text-white tracking-tight">
                  Winview
                </span>
                <span
                  className="text-xs font-bold uppercase tracking-widest text-green-600 dark:text-green-400 whitespace-nowrap"
                  style={{ letterSpacing: "0.18em" }}
                >
                  Microfinance Bank
                </span>
                <span
                  className="-mt-1 text-xs font-bold uppercase tracking-widest text-green-600 dark:text-green-400 whitespace-nowrap"
                  style={{ letterSpacing: "0.18em" }}
                >
                  Limited
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