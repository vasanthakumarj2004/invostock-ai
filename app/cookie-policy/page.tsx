import type { Metadata } from "next";
import CookiePolicyClient from "./CookiePolicyClient";

export const metadata: Metadata = {
  title: "Cookie Policy (Section 6 DPDP Act) | InvoStock AI",
  description:
    "Learn about cookies, technical storage, and consent preferences on InvoStock AI in accordance with Section 6 of the Digital Personal Data Protection Act, 2023.",
  alternates: {
    canonical: "/cookie-policy",
  },
};

export default function CookiePolicyPage() {
  return <CookiePolicyClient />;
}
