import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Mail, MapPin, Clock, FileText, Lock, Users, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy - Section 5 Itemised Notice | InvoStock AI",
  description:
    "Comprehensive, itemised privacy notice under Section 5 of the Digital Personal Data Protection (DPDP) Act, 2023 and DPDP Rules 2025.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 xl:px-8 py-10 sm:py-16 text-foreground">
      {/* Header */}
      <div className="mb-10 text-center sm:text-left border-b border-zinc-200 dark:border-zinc-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 text-xs font-bold uppercase tracking-wider mb-4 border border-primary-500/20">
          <ShieldCheck className="w-4 h-4" /> DPDP Act 2023 &amp; Rules 2025 Statutory Notice
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground mb-4">
          Privacy Policy &amp; Notice
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-medium max-w-3xl">
          This Privacy Notice is provided by <strong>InvoStock AI Technologies Pvt. Ltd.</strong> (&ldquo;InvoStock AI&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) in compliance with <strong>Section 5 of the Digital Personal Data Protection Act, 2023 (DPDP Act)</strong> and the <strong>DPDP Rules, 2025</strong>. It itemises the specific categories of personal data we process, the lawful purposes, retention periods, your rights as a Data Principal, and our grievance mechanism.
        </p>
        <p className="text-xs text-zinc-500 mt-3">
          Last Updated: October 17, 2026 &bull; Effective Date: Immediately
        </p>
      </div>

      <div className="space-y-12 leading-relaxed text-sm sm:text-base">
        {/* Section 1: Data Fiduciary Identity */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            1. Identity of the Data Fiduciary
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            <strong>InvoStock AI Technologies Pvt. Ltd.</strong> operates as the <em>Data Fiduciary</em> under Section 2(i) of the DPDP Act 2023 in respect of the personal data collected through this platform.
          </p>
          <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 text-xs sm:text-sm space-y-1">
            <p><strong>Entity Name:</strong> InvoStock AI Technologies Private Limited</p>
            <p><strong>Registered Office:</strong> Tech Hub Tower, Outer Ring Road, Bangalore, Karnataka - 560100, India</p>
            <p><strong>Contact Email:</strong> <a href="mailto:privacy@invostock.ai" className="text-primary-600 dark:text-primary-400 underline">privacy@invostock.ai</a></p>
          </div>
        </section>

        {/* Section 2: Section 5 Itemisation */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            2. Itemised Personal Data Categories, Purposes &amp; Retention (Section 5)
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            In accordance with Section 5(1) of the DPDP Act, we explicitly itemise each category of personal data collected, the specific purpose for which it is processed, and the retention period:
          </p>

          <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 font-bold border-b border-zinc-200 dark:border-zinc-800">
                <tr>
                  <th className="p-3 sm:p-4">Data Category</th>
                  <th className="p-3 sm:p-4">Specific Personal Data Elements</th>
                  <th className="p-3 sm:p-4">Purpose of Processing</th>
                  <th className="p-3 sm:p-4">Retention Period</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-600 dark:text-zinc-400">
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-foreground">User Account &amp; Identity</td>
                  <td className="p-3 sm:p-4">Name, email address, hashed password, phone number, city, pincode</td>
                  <td className="p-3 sm:p-4">User registration, secure authentication (<code className="text-xs">auth_token</code>), account recovery, and customer support</td>
                  <td className="p-3 sm:p-4">Duration of active account + 180 days after account deletion for statutory/tax reconciliation</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-foreground">Invoice &amp; Business Documents</td>
                  <td className="p-3 sm:p-4">Uploaded PDF/image invoices, supplier names, invoice numbers, line items, item pricing, and totals</td>
                  <td className="p-3 sm:p-4">AI OCR optical character recognition, parsing line items, and updating user inventory records</td>
                  <td className="p-3 sm:p-4">Stored in encrypted form until explicitly deleted by the user via the dashboard</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-foreground">Security &amp; Rate-Limiting Telemetry</td>
                  <td className="p-3 sm:p-4">IP address, client user-agent, request timestamp, request method/path</td>
                  <td className="p-3 sm:p-4">Abuse prevention, DDoS mitigation, sliding-window rate limiting, and bot protection</td>
                  <td className="p-3 sm:p-4">30 days in sliding Redis memory cache, after which records automatically expire</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-foreground">Contextual Analytics &amp; Cookies</td>
                  <td className="p-3 sm:p-4">Cookie consent choices, regional geolocation attribution, UI theme preference</td>
                  <td className="p-3 sm:p-4">Honoring consent preferences, currency localisation, and preserving dark/light mode</td>
                  <td className="p-3 sm:p-4">Consent preference: 365 days; Marketing cookie: 30 days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Lawful Basis for Processing */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            3. Lawful Basis for Processing (Section 4 &amp; 6)
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            We process your personal data only under valid legal bases recognized under the DPDP Act 2023:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-zinc-600 dark:text-zinc-400">
            <li>
              <strong>Consent (Section 6):</strong> You give unconditional, informed, specific, and clear affirmative consent when registering, uploading invoices, or configuring cookie preferences.
            </li>
            <li>
              <strong>Legitimate Uses (Section 7):</strong> Necessary for compliance with applicable Indian laws, cybersecurity compliance, or responding to lawful legal orders.
            </li>
          </ul>
        </section>

        {/* Section 4: Data Principal Rights under Section 11 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <Users className="w-5 h-5 text-primary-500" />
            4. Data Principal Rights (Section 11, 12, 13 &amp; 14)
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Under Chapter III of the DPDP Act 2023, you are guaranteed six statutory rights as a Data Principal:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
              <h3 className="font-bold text-sm text-foreground mb-1">1. Right to Access Information (Section 11)</h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                You have the right to obtain a summary of personal data being processed, identities of third parties with whom data has been shared, and any other information prescribed.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
              <h3 className="font-bold text-sm text-foreground mb-1">2. Right to Correction &amp; Completion (Section 12)</h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                You have the right to correct inaccurate or misleading personal data and update incomplete information in your profile.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
              <h3 className="font-bold text-sm text-foreground mb-1">3. Right to Erasure (Section 12)</h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                You have the right to request erasure of your personal data when it is no longer necessary for the purpose for which it was processed.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
              <h3 className="font-bold text-sm text-foreground mb-1">4. Right to Withdraw Consent (Section 6(4))</h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                You may withdraw consent at any time as easily as it was given, without affecting the lawfulness of processing prior to withdrawal.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
              <h3 className="font-bold text-sm text-foreground mb-1">5. Right of Grievance Redressal (Section 13)</h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                You have the right to register a grievance with our designated Grievance Officer and receive resolution within our 30-day SLA.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
              <h3 className="font-bold text-sm text-foreground mb-1">6. Right to Nominate (Section 14)</h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                You have the right to nominate an individual who shall exercise your rights in the event of your death or incapacity.
              </p>
            </div>
          </div>
          <div className="pt-2">
            <Link
              href="/data-rights"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary-600 text-white font-bold text-xs hover:bg-primary-700 transition-colors"
            >
              Submit a Data Principal Rights Request &rarr;
            </Link>
          </div>
        </section>

        {/* Section 5: Children's Personal Data Policy */}
        <section className="space-y-3" id="childrens-data">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            5. Processing of Children&apos;s Personal Data (Section 9)
          </h2>
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm space-y-2 text-zinc-700 dark:text-zinc-300">
            <p>
              <strong>Strict Minor Protection:</strong> InvoStock AI is a business and inventory management platform intended strictly for adults and commercial entities. We do not knowingly target, market to, or collect personal data from individuals under 18 years of age.
            </p>
            <p>
              In strict adherence to <strong>Section 9 of the DPDP Act 2023</strong>:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>We do not engage in any processing of personal data that is likely to cause any detrimental effect on the well-being of a child.</li>
              <li>We do not undertake tracking, behavioral monitoring, or targeted advertising directed at children.</li>
              <li>If we discover that personal data of a minor has been inadvertently submitted, we will immediately delete such data within 48 hours upon notification to <a href="mailto:grievance@invostock.ai" className="underline font-bold">grievance@invostock.ai</a>.</li>
            </ul>
            <p className="pt-1">
              <Link href="/children-policy" className="text-primary-600 dark:text-primary-400 font-bold hover:underline">
                Read our dedicated Children&apos;s Data Policy &rarr;
              </Link>
            </p>
          </div>
        </section>

        {/* Section 6: Cross-Border Transfers */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            6. Cross-Border Data Transfers (Section 16)
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            To provide low-latency cloud OCR processing and high-availability database replication:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-zinc-600 dark:text-zinc-400">
            <li>
              <strong>Infrastructure Partners:</strong> Our web hosting is provided via Vercel Inc. and cloud database clusters via Neon / AWS (with data centers in the United States and India).
            </li>
            <li>
              <strong>Safeguards:</strong> All cross-border transfers employ AES-256-GCM encryption in transit and at rest, and adhere strictly to any restrictions or blacklists notified by the Central Government under Section 16 of the DPDP Act.
            </li>
          </ul>
        </section>

        {/* Section 7: Security Measures */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <Lock className="w-5 h-5 text-primary-500" />
            7. Technical &amp; Organizational Security Measures (Section 8(5))
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            We employ rigorous security safeguards to protect personal data against breach, loss, or unauthorized access:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm">
            <li>End-to-end authenticated encryption via AES-256-GCM for sensitive API payloads.</li>
            <li>Enforced HSTS (HTTP Strict Transport Security), modern Content Security Policy (CSP), and nosniff protections.</li>
            <li>HttpOnly, Secure, SameSite=Lax authentication tokens preventing XSS token harvesting.</li>
            <li>Sliding-window IP rate limiting via Upstash Redis to prevent credential stuffing and brute-force extraction.</li>
            <li>Continuous penetration testing and automated vulnerability assessments.</li>
          </ul>
        </section>

        {/* Section 8: Grievance Redressal Officer */}
        <section className="space-y-3" id="grievance-officer">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <Mail className="w-5 h-5 text-primary-500" />
            8. Grievance Redressal Officer &amp; SLA (Section 8(10))
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            If you have any questions, concerns, or grievances regarding the processing of your personal data, you may reach out directly to our appointed Grievance Officer:
          </p>
          <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2 text-xs sm:text-sm">
            <p><strong>Grievance Redressal Officer:</strong> Rajesh Sharma</p>
            <p><strong>Designation:</strong> Data Protection Officer &amp; Nodal Officer</p>
            <p><strong>Official Email:</strong> <a href="mailto:grievance@invostock.ai" className="text-primary-600 dark:text-primary-400 font-bold hover:underline">grievance@invostock.ai</a></p>
            <p><strong>Postal Address:</strong> InvoStock AI Technologies Pvt. Ltd., Tech Hub Tower, Outer Ring Road, Bangalore, Karnataka - 560100, India</p>
            <p className="font-bold text-primary-600 dark:text-primary-400 pt-1">
              Stated SLA: Acknowledgment within 48 hours &bull; Final Resolution within 30 days (DPDP Act Rule 14)
            </p>
          </div>
          <p className="text-xs text-zinc-500">
            <strong>Escalation to Board:</strong> Under Section 13(3) of the DPDP Act, if you are not satisfied with the resolution provided by our Grievance Officer, or if no response is received within the 30-day SLA, you have the right to file a complaint before the <strong>Data Protection Board of India (DPBI)</strong>.
          </p>
        </section>
      </div>
    </div>
  );
}
