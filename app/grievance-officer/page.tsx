import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Clock, ShieldCheck, Scale, CheckCircle2, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Grievance Officer & Redressal Mechanism (Section 8(10)) | InvoStock AI",
  description:
    "Official Grievance Officer, contact details, postal address, and statutory 30-day response SLA under Section 8(10) of the DPDP Act 2023.",
  alternates: {
    canonical: "/grievance-officer",
  },
};

export default function GrievanceOfficerPage() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 xl:px-8 py-10 sm:py-16 text-foreground">
      {/* Header */}
      <div className="mb-10 text-center sm:text-left border-b border-zinc-200 dark:border-zinc-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 text-xs font-bold uppercase tracking-wider mb-4 border border-primary-500/20">
          <ShieldCheck className="w-4 h-4" /> Section 8(10) Statutory Appointment
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground mb-4">
          Grievance Officer &amp; Redressal Mechanism
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-medium">
          In strict compliance with <strong>Section 8(10) of the Digital Personal Data Protection Act, 2023 (DPDP Act)</strong> and the <strong>DPDP Rules, 2025</strong>, InvoStock AI Technologies Pvt. Ltd. has established an effective, accessible, and transparent grievance redressal mechanism for all Data Principals.
        </p>
      </div>

      <div className="space-y-10 text-sm sm:text-base leading-relaxed">
        {/* Officer Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-zinc-50 to-zinc-100/50 dark:from-zinc-900 dark:to-zinc-950 border-2 border-primary-500/30 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-zinc-200 dark:border-zinc-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">
                Designated Grievance Redressal Officer
              </span>
              <h2 className="text-2xl font-black text-foreground mt-0.5">Rajesh Sharma</h2>
              <p className="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Data Protection Officer (DPO) &amp; Nodal Grievance Officer
              </p>
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-500/20">
              Active Official Appointment
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-primary-500/10 text-primary-600 dark:text-primary-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Official Grievance Email</p>
                  <a
                    href="mailto:grievance@invostock.ai"
                    className="text-primary-600 dark:text-primary-400 font-semibold hover:underline"
                  >
                    grievance@invostock.ai
                  </a>
                  <p className="text-[11px] text-zinc-500 mt-0.5">Alternative: nodal@invostock.ai</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-primary-500/10 text-primary-600 dark:text-primary-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Physical Postal Address</p>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    InvoStock AI Technologies Pvt. Ltd.<br />
                    4th Floor, Tech Hub Tower, Outer Ring Road,<br />
                    Bangalore, Karnataka - 560100, India
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-primary-500/10 text-primary-600 dark:text-primary-400 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Statutory Response SLA</p>
                  <p className="text-emerald-600 dark:text-emerald-400 font-bold">
                    30 Calendar Days (Maximum)
                  </p>
                  <p className="text-[11px] text-zinc-500 mt-0.5">
                    Written acknowledgment provided within 48 hours of receipt.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-primary-500/10 text-primary-600 dark:text-primary-400 shrink-0">
                  <Scale className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Jurisdiction &amp; Board</p>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Subject to the jurisdiction of the Data Protection Board of India (DPBI).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process of Grievance Redressal */}
        <section className="space-y-4">
          <h3 className="text-xl font-bold tracking-tight text-foreground">
            How to File a Grievance
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400">
            If you believe your personal data has been handled inconsistently with the DPDP Act 2023, or if you are unsatisfied with a response to a Data Principal request, follow these simple steps:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <div className="w-7 h-7 rounded-full bg-primary-500 text-white font-black text-xs flex items-center justify-center">1</div>
              <h4 className="font-bold text-sm text-foreground">Submit Your Complaint</h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Email <a href="mailto:grievance@invostock.ai" className="text-primary-600 underline">grievance@invostock.ai</a> with your registered email, contact details, and a clear description of your grievance.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <div className="w-7 h-7 rounded-full bg-primary-500 text-white font-black text-xs flex items-center justify-center">2</div>
              <h4 className="font-bold text-sm text-foreground">Acknowledgment &amp; Tracking</h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                You will receive a formal acknowledgment and unique Ticket Reference Number within <strong>48 hours</strong>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <div className="w-7 h-7 rounded-full bg-primary-500 text-white font-black text-xs flex items-center justify-center">3</div>
              <h4 className="font-bold text-sm text-foreground">Investigation &amp; Resolution</h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                The Grievance Officer conducts an internal audit and delivers a written resolution within our <strong>30-day statutory SLA</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Escalation to Data Protection Board of India */}
        <div className="p-5 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 space-y-2 text-xs sm:text-sm">
          <h4 className="font-bold text-foreground flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4 text-primary-500" />
            Escalation to the Data Protection Board of India (DPBI)
          </h4>
          <p className="text-zinc-600 dark:text-zinc-400">
            Under <strong>Section 13(3) of the DPDP Act 2023</strong>, if:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-zinc-600 dark:text-zinc-400">
            <li>You receive no response from our Grievance Officer within 30 days of filing; OR</li>
            <li>You are dissatisfied with the final resolution provided by our Grievance Officer,</li>
          </ul>
          <p className="text-zinc-600 dark:text-zinc-400">
            You are entitled to file a formal complaint before the <strong>Data Protection Board of India</strong> in the manner and form prescribed by the Central Government.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-800 text-xs">
          <Link href="/privacy" className="text-primary-600 dark:text-primary-400 font-bold hover:underline">
            &larr; Return to Privacy Policy
          </Link>
          <span>&bull;</span>
          <Link href="/data-rights" className="text-primary-600 dark:text-primary-400 font-bold hover:underline">
            Exercise Data Rights Form
          </Link>
          <span>&bull;</span>
          <Link href="/cookie-policy" className="text-primary-600 dark:text-primary-400 font-bold hover:underline">
            Cookie Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
