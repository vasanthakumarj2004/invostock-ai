import type { Metadata } from "next";
import DataRightsClient from "./DataRightsClient";

export const metadata: Metadata = {
  title: "Data Principal Rights Intake (Section 11) | InvoStock AI",
  description:
    "Exercise your statutory rights under Chapter III (Section 11 to 14) of the Digital Personal Data Protection Act, 2023. Interactive intake form with stated 30-day resolution SLA.",
  alternates: {
    canonical: "/data-rights",
  },
};

export default function DataRightsPage() {
  return <DataRightsClient />;
}
