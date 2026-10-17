"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Users,
  CheckCircle2,
  FileText,
  Clock,
  ShieldCheck,
  Send,
  AlertCircle,
  HelpCircle,
} from "lucide-react";

const RIGHTS_LIST = [
  {
    id: "access",
    title: "1. Right to Access Information (Section 11)",
    desc: "Obtain a summary of personal data being processed by us, a description of processing activities, and identities of all third parties with whom your personal data has been shared.",
  },
  {
    id: "correction",
    title: "2. Right to Correction & Completion (Section 12)",
    desc: "Correct inaccurate, misleading, or out-of-date personal data, and update incomplete personal data held in our systems.",
  },
  {
    id: "erasure",
    title: "3. Right to Erasure / Deletion (Section 12)",
    desc: "Request the permanent erasure of your personal data when it is no longer necessary for the purpose for which it was collected, or upon withdrawal of consent.",
  },
  {
    id: "withdraw",
    title: "4. Right to Withdraw Consent (Section 6(4))",
    desc: "Revoke previously granted consent for data processing. Withdrawal is as easy as consent and does not affect lawful processing conducted prior to revocation.",
  },
  {
    id: "grievance",
    title: "5. Right of Grievance Redressal (Section 13)",
    desc: "Register a complaint with our designated Grievance Officer regarding any act or omission of the Data Fiduciary in relation to your personal data.",
  },
  {
    id: "nominee",
    title: "6. Right to Nominate (Section 14)",
    desc: "Designate another individual who shall, in the event of your death or incapacity, have the statutory right to exercise data principal rights on your behalf.",
  },
];

export default function DataRightsClient() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    selectedRight: "access",
    details: "",
    nomineeName: "",
    nomineeContact: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;

    // Generate statutory reference ticket ID
    const generatedTicket = `DPDP-${Date.now().toString().slice(-6)}-${Math.floor(100 + Math.random() * 900)}`;
    setTicketId(generatedTicket);
    setSubmitted(true);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 xl:px-8 py-10 sm:py-16 text-foreground">
      {/* Page Header */}
      <div className="mb-10 text-center sm:text-left border-b border-zinc-200 dark:border-zinc-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 text-xs font-bold uppercase tracking-wider mb-4 border border-primary-500/20">
          <Users className="w-4 h-4" /> Chapter III Statutory Rights (Section 11–14)
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground mb-4">
          Data Principal Rights &amp; Intake
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-medium max-w-3xl">
          The <strong>Digital Personal Data Protection Act, 2023</strong> empowers you with enforceable statutory rights over your personal data. Use this portal to inspect, correct, erase, nominate, withdraw consent, or file a grievance.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-bold text-emerald-600 dark:text-emerald-400">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> Acknowledgment: Within 48 Hours
          </span>
          <span>&bull;</span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> Statutory Resolution SLA: Within 30 Days
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: All 6 Statutory Rights */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            The 6 Statutory Data Principal Rights
          </h2>
          <div className="space-y-4">
            {RIGHTS_LIST.map((right) => (
              <div
                key={right.id}
                className="p-4 sm:p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-1.5 transition-all hover:border-primary-500/40"
              >
                <h3 className="font-bold text-sm sm:text-base text-foreground flex items-center justify-between">
                  <span>{right.title}</span>
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {right.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-primary-500/5 border border-primary-500/20 text-xs space-y-1">
            <p className="font-bold text-foreground">Grievance Redressal SLA Guarantee</p>
            <p className="text-zinc-600 dark:text-zinc-400">
              Per Rule 14 of the DPDP Rules 2025, every request is formally logged and processed without unreasonable fee or obstacle. If unresolved within 30 days, you have the right to approach the <strong>Data Protection Board of India</strong>.
            </p>
          </div>
        </div>

        {/* Right Column: Interactive Intake Form */}
        <div className="lg:col-span-5">
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 shadow-xl sticky top-6">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4" id="data-rights-form">
                <div>
                  <h3 className="text-lg font-black tracking-tight text-foreground">
                    Exercise Your Rights
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                    Submit your statutory request directly to our Data Protection Officer.
                  </p>
                </div>

                {/* Full Name */}
                <div className="space-y-1">
                  <label htmlFor="fullName" className="text-xs font-bold text-foreground">
                    Full Legal Name *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Aditi Rao"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 text-foreground"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-1">
                  <label htmlFor="email" className="text-xs font-bold text-foreground">
                    Registered Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 text-foreground"
                  />
                </div>

                {/* Phone Number (Optional) */}
                <div className="space-y-1">
                  <label htmlFor="phone" className="text-xs font-bold text-foreground">
                    Phone Number (Optional)
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 text-foreground"
                  />
                </div>

                {/* Select Right */}
                <div className="space-y-1">
                  <label htmlFor="selectedRight" className="text-xs font-bold text-foreground">
                    Select Data Principal Right *
                  </label>
                  <select
                    id="selectedRight"
                    value={formData.selectedRight}
                    onChange={(e) => setFormData({ ...formData, selectedRight: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 text-foreground"
                  >
                    <option value="access">Access Information (Section 11)</option>
                    <option value="correction">Correction &amp; Updating (Section 12)</option>
                    <option value="erasure">Erasure / Deletion (Section 12)</option>
                    <option value="withdraw">Withdraw Consent (Section 6(4))</option>
                    <option value="grievance">Grievance Redressal (Section 13)</option>
                    <option value="nominee">Nominate an Individual (Section 14)</option>
                  </select>
                </div>

                {/* Nominee Details (If Nominate is chosen) */}
                {formData.selectedRight === "nominee" && (
                  <div className="p-3.5 rounded-xl bg-zinc-100 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 space-y-2 text-xs">
                    <p className="font-bold text-foreground">Nominee Information (Section 14)</p>
                    <input
                      type="text"
                      placeholder="Nominee Full Name"
                      value={formData.nomineeName}
                      onChange={(e) => setFormData({ ...formData, nomineeName: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-xs"
                    />
                    <input
                      type="text"
                      placeholder="Nominee Contact (Email / Phone)"
                      value={formData.nomineeContact}
                      onChange={(e) => setFormData({ ...formData, nomineeContact: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-xs"
                    />
                  </div>
                )}

                {/* Details / Message */}
                <div className="space-y-1">
                  <label htmlFor="details" className="text-xs font-bold text-foreground">
                    Description &amp; Specific Request Details *
                  </label>
                  <textarea
                    id="details"
                    required
                    rows={3}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="Provide specific details about the data or invoice records in question..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 text-foreground resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  id="submit-data-rights-request"
                  className="w-full py-3 px-4 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-bold text-sm shadow-lg shadow-primary-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Submit Request (30-Day SLA)
                </button>

                <p className="text-[11px] text-zinc-500 text-center">
                  Protected under the Digital Personal Data Protection Act, 2023.
                </p>
              </form>
            ) : (
              /* Success / Ticket Confirmation */
              <div className="text-center py-6 space-y-4 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-foreground">
                    Request Formally Registered
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                    Your Data Principal Rights request has been securely logged with our Data Protection Officer.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 text-xs space-y-1">
                  <p className="text-zinc-500">Statutory Ticket ID:</p>
                  <p className="font-mono font-bold text-sm text-primary-600 dark:text-primary-400">
                    {ticketId}
                  </p>
                  <p className="text-zinc-500 pt-1">
                    Resolution Deadline: <strong>Within 30 Calendar Days</strong>
                  </p>
                </div>

                <p className="text-xs text-zinc-600 dark:text-zinc-400">
                  A formal acknowledgment has been scheduled to <strong>{formData.email}</strong>. For inquiries regarding this ticket, reference your Ticket ID to <a href="mailto:grievance@invostock.ai" className="text-primary-600 underline">grievance@invostock.ai</a>.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: "",
                      email: "",
                      phone: "",
                      selectedRight: "access",
                      details: "",
                      nomineeName: "",
                      nomineeContact: "",
                    });
                  }}
                  className="px-5 py-2 rounded-xl text-xs font-bold bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 text-foreground transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
