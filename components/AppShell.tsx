"use client";

import { Suspense } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Pages that should render without the internal Sidebar and Navbar
const PUBLIC_ROUTES = [
  "/",
  "/login",
  "/register",
  "/privacy",
  "/cookie-policy",
  "/grievance-officer",
  "/data-rights",
  "/children-policy",
];

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isPublic = PUBLIC_ROUTES.includes(pathname ?? "");

  // Public page: full-width, no Sidebar, no Navbar. Includes the DPDP-compliant Footer.
  if (isPublic) {
    return (
      <main className="flex-1 min-w-0 overflow-y-auto relative z-0 flex flex-col justify-between">
        <div className="flex-1">{children}</div>
        <Footer />
      </main>
    );
  }

  return (
    <>
      <Suspense fallback={<div className="w-64 h-screen border-r border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-950/50" />}>
        <Sidebar />
      </Suspense>

      <div className="flex-1 min-w-0 flex flex-col relative z-10">
        <Suspense fallback={<header className="h-[72px] m-4 bg-white/70 dark:bg-zinc-950/60 rounded-2xl" />}>
          <Navbar />
        </Suspense>

        <div className="flex-1 overflow-y-auto relative z-0 flex flex-col justify-between">
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </div>
    </>
  );
}