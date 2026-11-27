"use client";

import { Settings } from "lucide-react";

export default function ReopenPreferencesButton({
  children,
  className,
  id,
}: {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const handleClick = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("openCookiePreferences"));
    }
  };

  return (
    <button
      type="button"
      id={id || "page-open-cookie-preferences"}
      onClick={handleClick}
      className={
        className ||
        "px-5 py-2.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-primary-500/20 transition-all flex items-center gap-2 cursor-pointer"
      }
    >
      {children || (
        <>
          <Settings className="w-4 h-4" />
          Manage / Change Cookie Preferences Now
        </>
      )}
    </button>
  );
}
