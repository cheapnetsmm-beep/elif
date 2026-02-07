"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, AlertCircle } from "lucide-react";

export default function SelfDiscoveryPage() {
  const [selectedTest, setSelectedTest] = useState<string | null>(null);

  const tests = [
    {
      id: "emotional-eating",
      title: "Duygusal Yeme ve Yeme Davranışını Keşfet",
      subtitle: "Stres, duygular ve tetikleyicilerin yeme davranışınız üzerindeki etkilerini fark edin.",
    },
    {
      id: "body-relationship",
      title: "Bedeninle Kurduğun İlişkiyi Keşfet",
      subtitle: "Beden algınızı ve yeme farkındalığınızı nazikçe gözlemleyin.",
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Kendini Keşfet
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Öz-farkındalık sağlamak amacıyla hazırlanmış rehberler
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {tests.map((test) => (
            <button
              key={test.id}
              onClick={() => setSelectedTest(selectedTest === test.id ? null : test.id)}
              className="w-full p-6 text-left bg-white border-2 border-gray-200 rounded-xl hover:border-primary-600 hover:bg-primary-50 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {test.title}
                  </h2>
                  <p className="text-gray-600">{test.subtitle}</p>
                </div>
                <CheckCircle2 className="text-primary-600" size={24} />
              </div>
            </button>
          ))}
        </div>

        {selectedTest && (
          <div className="bg-primary-50 p-8 rounded-2xl border border-primary-200">
            <p className="text-gray-700 leading-relaxed mb-4">
              Bu rehberler öz-farkındalık sağlamak amacıyla hazırlanmıştır ve bir tanı niteliği taşımaz. Profesyonel bir değerlendirme için <Link href="/randevu" className="text-primary-600 font-semibold hover:underline">randevu almanız</Link> önerilir.
            </p>
            <Link href="/randevu" className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors">
              Randevu Al
            </Link>
          </div>
        )}

        <div className="mt-12 p-6 rounded-2xl border border-amber-200 bg-amber-50 flex gap-4">
          <AlertCircle className="text-amber-600 flex-shrink-0 mt-0.5" size={24} />
          <div>
            <p className="text-gray-700 leading-relaxed text-sm">
              Bu sayfadaki rehberler yalnızca bilgilendirme ve öz-farkındalık amacıyla sunulmaktadır; tanı, tedavi veya tedavi planı yerine geçmez. Kişisel desteğiniz için randevu almanızı öneririm.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}



