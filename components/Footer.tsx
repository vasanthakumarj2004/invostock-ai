"use client";

import Link from "next/link";
import { ShieldCheck, Cookie, Scale, Users, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const handleOpenCookiePreferences = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("openCookiePreferences"));
    }
  };

  return (
    <footer
      id="main-footer"
      className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl mt-auto z-10 transition-colors"
      role="contentinfo"
      aria-label="Site Footer and Legal Disclosures"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand & DPDP Notice */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white shadow-md">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-lg font-black tracking-tight text-foreground">InvoStock AI</span>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
              Intelligent invoice OCR extraction and zero-trust inventory automation. Committed to privacy, transparency, and data principal autonomy under the Digital Personal Data Protection (DPDP) Act, 2023.
            </p>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[11px] font-bold border border-emerald-500/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              DPDP Act 2023 + Rules 2025 Compliant
            </div>
          </div>

          {/* Legal & Privacy Notices */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
              <Scale className="w-4 h-4 text-primary-500" />
              Privacy & Legal
            </h4>
            <ul className="space-y-2 text-xs font-medium text-zinc-600 dark:text-zinc-400">
              <li>
                <Link
                  href="/privacy"
                  id="footer-privacy-policy-link"
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors underline-offset-4 hover:underline"
                >
                  Privacy Policy (Section 5 Itemised Notice)
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  id="footer-cookie-policy-link"
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors underline-offset-4 hover:underline"
                >
                  Cookie Policy (Section 6)
                </Link>
              </li>
              <li>
                <Link
                  href="/children-policy"
                  id="footer-children-policy-link"
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors underline-offset-4 hover:underline"
                >
                  Children&apos;s Data Policy (Section 9)
                </Link>
              </li>
            </ul>
          </div>

          {/* Consent & Data Principal Rights */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
              <Users className="w-4 h-4 text-primary-500" />
              Your Data Rights
            </h4>
            <ul className="space-y-2 text-xs font-medium text-zinc-600 dark:text-zinc-400">
              <li>
                <Link
                  href="/data-rights"
                  id="footer-data-rights-link"
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors underline-offset-4 hover:underline"
                >
                  Exercise Data Principal Rights (Section 11)
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={handleOpenCookiePreferences}
                  id="footer-cookie-preferences-link"
                  className="text-left text-xs font-bold text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-1 cursor-pointer transition-colors"
                  aria-label="Manage Consent and Cookie Preferences"
                >
                  <Cookie className="w-3.5 h-3.5" />
                  Cookie Preferences / Manage Consent
                </button>
              </li>
              <li className="text-[11px] text-zinc-500 dark:text-zinc-400">
                Withdrawal is as easy as consent per Section 6(4).
              </li>
            </ul>
          </div>

          {/* Grievance Redressal Officer */}
          <div className="space-y-3" id="grievance-officer-section">
            <h4 className="text-xs font-black uppercase tracking-wider text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-primary-500" />
              Grievance Officer (Section 8(10))
            </h4>
            <div className="p-3.5 rounded-2xl bg-zinc-100/70 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 text-[11px] space-y-1.5 text-zinc-600 dark:text-zinc-400">
              <p className="font-bold text-zinc-900 dark:text-zinc-100">
                Rajesh Sharma <span className="text-[10px] font-semibold text-zinc-500">(Grievance &amp; DPO)</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Mail className="w-3 h-3 text-zinc-500 shrink-0" />
                <a href="mailto:grievance@invostock.ai" className="hover:underline text-primary-600 dark:text-primary-400">
                  grievance@invostock.ai
                </a>
              </p>
              <p className="flex items-start gap-1.5">
                <MapPin className="w-3 h-3 text-zinc-500 shrink-0 mt-0.5" />
                <span>Tech Hub, Bangalore, Karnataka - 560100, India</span>
              </p>
              <div className="pt-1 border-t border-zinc-200/50 dark:border-zinc-800/50 font-semibold text-zinc-700 dark:text-zinc-300">
                Stated SLA: 30-Day Response &amp; Resolution
              </div>
              <div className="pt-1">
                <Link href="/grievance-officer" className="text-primary-600 dark:text-primary-400 font-bold hover:underline">
                  View Full Grievance Procedure &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">
          <p>&copy; {new Date().getFullYear()} InvoStock AI Technologies Pvt. Ltd. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
            <span>&bull;</span>
            <Link href="/cookie-policy" className="hover:underline">Cookie Policy</Link>
            <span>&bull;</span>
            <Link href="/data-rights" className="hover:underline">Data Rights</Link>
            <span>&bull;</span>
            <Link href="/grievance-officer" className="hover:underline">Grievance Officer</Link>
            <span>&bull;</span>
            <Link href="/children-policy" className="hover:underline">Children&apos;s Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
