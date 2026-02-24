"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "cookie-consent-accepted";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const accepted = localStorage.getItem(STORAGE_KEY);
      if (!accepted) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[100] px-4 py-4 bg-slate-800/95 backdrop-blur-sm border-t border-slate-700 shadow-lg"
      role="dialog"
      aria-label="Çerez bildirimi"
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-gray-200">
          Sitemizde deneyiminizi iyileştirmek için çerezler kullanıyoruz. Devam ederek{" "}
          <Link href="/gizlilik" className="text-primary-400 hover:text-primary-300 underline">
            Gizlilik Politikamızı
          </Link>{" "}
          kabul etmiş olursunuz.
        </p>
        <div className="flex items-center gap-3 flex-shrink-0">
          <Link
            href="/gizlilik"
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            Gizlilik
          </Link>
          <button
            type="button"
            onClick={accept}
            className="px-4 py-2 bg-primary-600 text-white text-sm font-semibold rounded-lg hover:bg-primary-700 transition-colors"
            aria-label="Çerezleri kabul et"
          >
            Kabul ediyorum
          </button>
        </div>
      </div>
    </div>
  );
}
