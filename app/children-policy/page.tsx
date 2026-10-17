import type { Metadata } from "next";
import Link from "next/link";
import { ShieldAlert, CheckCircle2, Mail, Users, AlertTriangle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Children's Data Policy (Section 9 Compliance) | InvoStock AI",
  description:
    "Explicit declaration and protections concerning minors and children under Section 9 of the Digital Personal Data Protection Act, 2023.",
  alternates: {
    canonical: "/children-policy",
  },
};

export default function ChildrenPolicyPage() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 xl:px-8 py-10 sm:py-16 text-foreground">
      {/* Header */}
      <div className="mb-10 text-center sm:text-left border-b border-zinc-200 dark:border-zinc-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-500/20">
          <ShieldAlert className="w-4 h-4" /> Section 9 DPDP Act 2023 Statutory Protection
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground mb-4">
          Children&apos;s Personal Data Policy
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-medium">
          This policy sets forth the explicit safeguards and zero-tolerance commitments of <strong>InvoStock AI Technologies Pvt. Ltd.</strong> regarding the protection of personal data belonging to children (defined as individuals under 18 years of age) pursuant to <strong>Section 9 of the Digital Personal Data Protection Act, 2023</strong> and the <strong>DPDP Rules, 2025</strong>.
        </p>
      </div>

      <div className="space-y-10 text-sm sm:text-base leading-relaxed">
        {/* Core Explicit Statement */}
        <div className="p-6 sm:p-8 rounded-3xl bg-amber-500/10 border-2 border-amber-500/30 text-zinc-800 dark:text-zinc-200 space-y-4">
          <h2 className="text-xl font-black text-foreground flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            1. Explicit Age Restriction &amp; Non-Collection Declaration
          </h2>
          <p>
            <strong>InvoStock AI is strictly a commercial B2B platform</strong> designed for enterprise inventory management, supplier document processing, and accounting automation. Our services are directed exclusively at business entities, corporate enterprises, and adult individuals above 18 years of age.
          </p>
          <p className="font-semibold text-foreground">
            We do not knowingly market to, target, solicit, or collect personal data from children or individuals under the age of 18.
          </p>
        </div>

        {/* Section 9 Statutory Prohibitions */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            2. Statutory Safeguards under Section 9 of the DPDP Act 2023
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            In accordance with Section 9(1), 9(2), and 9(3) of the Act:
          </p>

          <div className="space-y-3">
            <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-foreground text-sm">No Detrimental Processing</h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                  We shall not undertake any processing of personal data that is likely to cause any detrimental effect on the physical, psychological, educational, or emotional well-being of a child.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-foreground text-sm">Prohibition of Tracking and Behavioral Monitoring</h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                  We strictly prohibit and do not engage in tracking, profiling, or behavioral monitoring of children or any individual under 18 across any of our applications or web surfaces.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-foreground text-sm">No Targeted Advertising</h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                  InvoStock AI contains zero targeted advertising, advertising networks, or third-party ad retargeting mechanisms directed at minors.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-foreground text-sm">Verifiable Parental Consent Requirement</h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                  If any future feature ever permits authorized student or minor usage, verifiable consent of the parent or lawful guardian shall be obtained prior to any processing, in such manner as may be prescribed under the Rules.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Parental Inquiries & Rapid Erasure Procedure */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            3. Parental Inquiries &amp; Rapid Deletion Procedure
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            If you are a parent or lawful guardian and have reason to believe that a minor under your care has provided personal data to InvoStock AI without your consent, please contact us immediately:
          </p>

          <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2 text-xs sm:text-sm">
            <p><strong>Direct Escalation Contact:</strong> Rajesh Sharma (Grievance Officer)</p>
            <p><strong>Email:</strong> <a href="mailto:grievance@invostock.ai" className="text-primary-600 dark:text-primary-400 font-bold hover:underline">grievance@invostock.ai</a></p>
            <p><strong>Subject Line:</strong> <em>URGENT: Minor Data Deletion Request (Section 9 DPDP Act)</em></p>
            <p className="text-emerald-600 dark:text-emerald-400 font-bold pt-1">
              Guaranteed SLA: Deletion completed within 24 to 48 hours of verification.
            </p>
          </div>
        </section>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-800 text-xs">
          <Link href="/privacy" className="text-primary-600 dark:text-primary-400 font-bold hover:underline">
            &larr; Itemised Privacy Policy
          </Link>
          <span>&bull;</span>
          <Link href="/data-rights" className="text-primary-600 dark:text-primary-400 font-bold hover:underline">
            Data Principal Rights
          </Link>
          <span>&bull;</span>
          <Link href="/grievance-officer" className="text-primary-600 dark:text-primary-400 font-bold hover:underline">
            Grievance Officer
          </Link>
        </div>
      </div>
    </div>
  );
}
