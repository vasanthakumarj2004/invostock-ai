import type { Metadata } from "next";
import Link from "next/link";
import { Cookie, RotateCcw } from "lucide-react";
import ReopenPreferencesButton from "@/components/ReopenPreferencesButton";

export const metadata: Metadata = {
  title: "Cookie Policy (Section 6 DPDP Act) | InvoStock AI",
  description:
    "Learn about cookies, technical storage, and consent preferences on InvoStock AI in accordance with Section 6 of the Digital Personal Data Protection Act, 2023.",
  alternates: {
    canonical: "/cookie-policy",
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 xl:px-8 py-10 sm:py-16 text-foreground">
      {/* Header */}
      <div className="mb-10 text-center sm:text-left border-b border-zinc-200 dark:border-zinc-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 text-xs font-bold uppercase tracking-wider mb-4 border border-primary-500/20">
          <Cookie className="w-4 h-4" /> Section 6 DPDP Act Consent Notice
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground mb-4">
          Cookie &amp; Local Storage Policy
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-medium max-w-3xl">
          This Cookie Policy explains how <strong>InvoStock AI Technologies Pvt. Ltd.</strong> uses cookies, local browser storage, and related tracking technologies. In compliance with <strong>Section 6 of the Digital Personal Data Protection (DPDP) Act, 2023</strong>, we require affirmative consent for non-essential cookies and empower you to withdraw or modify your consent at any time.
        </p>

        {/* One-Click Reopen Consent Manager */}
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <ReopenPreferencesButton id="page-open-cookie-preferences" />
          <span className="text-xs text-zinc-500 font-medium">
            (One-click consent withdrawal per Section 6(4))
          </span>
        </div>
      </div>

      <div className="space-y-12 text-sm sm:text-base leading-relaxed">
        {/* Section 1: What are cookies? */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            1. What Are Cookies and Local Storage?
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Cookies are small cryptographic text files placed on your browser or device when you navigate a website. Local storage allows a web application to store data locally within your browser without sending it with every HTTP request.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400">
            On InvoStock AI, cookies are predominantly used for secure session authentication, preventing unauthorized API calls, and keeping you logged in safely.
          </p>
        </section>

        {/* Section 2: Comprehensive Cookie Table */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            2. Itemised List of Cookies Used on InvoStock AI
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Below is the complete itemisation of all cookies and browser storage technologies utilized by our platform:
          </p>

          <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 font-bold border-b border-zinc-200 dark:border-zinc-800">
                <tr>
                  <th className="p-3 sm:p-4">Cookie / Key</th>
                  <th className="p-3 sm:p-4">Category</th>
                  <th className="p-3 sm:p-4">Purpose</th>
                  <th className="p-3 sm:p-4">Duration</th>
                  <th className="p-3 sm:p-4">Attributes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-600 dark:text-zinc-400">
                <tr>
                  <td className="p-3 sm:p-4 font-mono font-bold text-foreground">auth_token</td>
                  <td className="p-3 sm:p-4">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold">
                      Strictly Essential
                    </span>
                  </td>
                  <td className="p-3 sm:p-4">Stores the cryptographically signed JWT token verifying your user account identity.</td>
                  <td className="p-3 sm:p-4">24 Hours</td>
                  <td className="p-3 sm:p-4 font-mono text-[11px]">HttpOnly, Secure, SameSite=Lax</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-mono font-bold text-foreground">consent_preferences</td>
                  <td className="p-3 sm:p-4">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold">
                      Strictly Essential
                    </span>
                  </td>
                  <td className="p-3 sm:p-4">Records your affirmative consent choices (Accept, Reject, Custom) under DPDP Act Section 6.</td>
                  <td className="p-3 sm:p-4">365 Days</td>
                  <td className="p-3 sm:p-4 font-mono text-[11px]">Secure, SameSite=Strict</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-mono font-bold text-foreground">marketing_visitor_data</td>
                  <td className="p-3 sm:p-4">
                    <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-bold">
                      Marketing / Attribution
                    </span>
                  </td>
                  <td className="p-3 sm:p-4">Optional context regarding geographic region used for localized currency formats.</td>
                  <td className="p-3 sm:p-4">30 Days</td>
                  <td className="p-3 sm:p-4 font-mono text-[11px]">HttpOnly, Secure, SameSite=Lax</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-mono font-bold text-foreground">theme</td>
                  <td className="p-3 sm:p-4">
                    <span className="px-2 py-0.5 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-[10px] font-bold">
                      Functional (Storage)
                    </span>
                  </td>
                  <td className="p-3 sm:p-4">Remembers your preference between Dark Mode and Light Mode.</td>
                  <td className="p-3 sm:p-4">Persistent</td>
                  <td className="p-3 sm:p-4 font-mono text-[11px]">Browser LocalStorage</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Section 6(4) Withdrawal Right */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <RotateCcw className="w-5 h-5 text-primary-500" />
            3. Right to Withdraw Consent (Section 6(4))
          </h2>
          <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-3">
            <p className="text-zinc-700 dark:text-zinc-300 text-xs sm:text-sm">
              Section 6(4) of the DPDP Act 2023 mandates:
            </p>
            <blockquote className="border-l-2 border-primary-500 pl-3 italic text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
              &ldquo;The Data Principal shall have the right to withdraw her consent at any time, with the ease of doing so being comparable to the ease with which such consent was given.&rdquo;
            </blockquote>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
              You can withdraw or modify your cookie consent at any moment by clicking the <strong>Cookie Preferences</strong> link located in the footer of every page, or by clicking the button below:
            </p>
            <div>
              <ReopenPreferencesButton
                id="withdraw-consent-btn"
                className="px-4 py-2 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-bold text-xs hover:opacity-90 transition-opacity cursor-pointer"
              >
                Withdraw or Change Consent
              </ReopenPreferencesButton>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-800 text-xs">
          <Link href="/privacy" className="text-primary-600 dark:text-primary-400 font-bold hover:underline">
            &larr; Itemised Privacy Policy (Sec. 5)
          </Link>
          <span>&bull;</span>
          <Link href="/data-rights" className="text-primary-600 dark:text-primary-400 font-bold hover:underline">
            Exercise Data Rights (Sec. 11)
          </Link>
          <span>&bull;</span>
          <Link href="/grievance-officer" className="text-primary-600 dark:text-primary-400 font-bold hover:underline">
            Grievance Officer (Sec. 8(10))
          </Link>
          <span>&bull;</span>
          <Link href="/children-policy" className="text-primary-600 dark:text-primary-400 font-bold hover:underline">
            Children&apos;s Policy (Sec. 9)
          </Link>
        </div>
      </div>
    </div>
  );
}
