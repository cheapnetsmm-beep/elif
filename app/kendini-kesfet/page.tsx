"use client";

import { useState } from "react";
import Link from "next/link";
import { AlertCircle, Sparkles } from "lucide-react";

const DISCLAIMER =
  "Bu sonuçlar bir tanı niteliği taşımaz, sadece öz-farkındalık sağlamak amacıyla hazırlanmıştır. Profesyonel bir değerlendirme için uzman randevusu alınız.";

const LIKERT_EMOTIONAL = [
  "Hiç",
  "Nadiren",
  "Bazen",
  "Sık",
  "Çok sık",
] as const;

const LIKERT_BODY = [
  "Kesinlikle katılmıyorum",
  "Katılmıyorum",
  "Kararsızım",
  "Katılıyorum",
  "Kesinlikle katılıyorum",
] as const;

const QUESTIONS_EMOTIONAL = [
  "Açlık hissetmediğim hâlde, stresli veya üzgün olduğumda yeme isteği duyduğum olur.",
  "Gün içindeki yoğun duygular, ne ve ne kadar yiyeceğimi etkiler.",
  "Yeme sonrası fiziksel tokluktan çok duygusal rahatlama hissi yaşadığımı fark ederim.",
  "Yalnız kaldığımda veya kendimi yalnız hissettiğimde yeme alışkanlıklarım değişir.",
  "Bazı yiyecekleri \"iyi hissettirdiği\" için tercih ettiğimi düşünürüm.",
  "Yorgun veya zihinsel olarak tükenmiş olduğumda yeme kontrolüm zorlaşır.",
  "Yeme davranışım, o anki ruh halimle bağlantılıdır.",
  "Duygularımı fark etmek yerine yemekle bastırdığım zamanlar olur.",
  "Yeme sonrası suçluluk veya pişmanlık duygusu yaşarım.",
];

const QUESTIONS_BODY = [
  "Bedenimle ilgili düşüncelerim gün içindeki ruh halimi etkiler.",
  "Aynaya baktığımda bedenimle ilgili yargılayıcı bir iç ses devreye girer.",
  "Bedenimi, işlevlerinden çok görünümü üzerinden değerlendirdiğimi fark ederim.",
  "Kendimi başkalarıyla fiziksel olarak kıyasladığım zamanlar olur.",
  "Bedenime karşı daha anlayışlı ve şefkatli olmayı zor bulurum.",
  "Bedenimde sevdiğim yönleri fark etmekte zorlanırım.",
  "Yeme davranışım, bedenimle ilgili düşüncelerimden etkilenir.",
  "Bedenimi dinlemek (açlık, tokluk, yorgunluk) benim için her zaman kolay değildir.",
  "Bedenle kurduğum ilişkinin zaman içinde değişebileceğine inanıyorum.",
];

const FEEDBACK_EMOTIONAL =
  "Eğer çoğunlukla \"Bazen\" veya \"Sık/Çok sık\" yanıtları verdiyseniz, duygularınızla baş etme yöntemi olarak yemeğe yöneliyor olabilirsiniz. Bu, bilinçli farkındalık ve profesyonel rehberlikle dönüştürülebilecek bir süreçtir.";

const FEEDBACK_BODY =
  "Eğer çoğunlukla \"Katılıyorum\" / \"Kesinlikle Katılıyorum\" yanıtını verdiyseniz, bedeninizle ilişkinizin bazı anlarda zorlayıcı olabileceğini fark etmiş olabilirsiniz. Farkındalıkla, kendinize karşı daha nazik ve şefkatli bir yaklaşım geliştirebilirsiniz. Bedenle kurduğunuz ilişki değişebilir ve destekle daha dengeli bir hâle gelebilir.";

export default function SelfDiscoveryPage() {
  const [emotionalAnswers, setEmotionalAnswers] = useState<(number | null)[]>(
    QUESTIONS_EMOTIONAL.map(() => null)
  );
  const [bodyAnswers, setBodyAnswers] = useState<(number | null)[]>(
    QUESTIONS_BODY.map(() => null)
  );

  const setEmotional = (index: number, value: number) => {
    setEmotionalAnswers((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  };

  const setBody = (index: number, value: number) => {
    setBodyAnswers((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  };

  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="text-primary-500" size={20} />
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
              Rehberler
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-3">
            Kendini Keşfet
          </h1>
          <p className="text-xl font-medium text-gray-700 mb-2">
            Farkındalık Kartları
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Öz-farkındalık sağlamak amacıyla hazırlanmış rehberler
          </p>
        </div>

        {/* Rehber 1: Duygusal Yeme */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-soft p-8 md:p-10 border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              1) Duygusal Yeme ve Yeme Davranışını Keşfet
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Stres, duygular ve tetikleyicilerin yeme davranışınız üzerindeki
              etkilerini fark edin.
            </p>

            <div className="space-y-8">
              {QUESTIONS_EMOTIONAL.map((q, i) => (
                <div key={i} className="border-b border-gray-100 pb-6 last:border-0">
                  <p className="font-medium text-gray-900 mb-4">
                    {i + 1}. {q}
                  </p>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {LIKERT_EMOTIONAL.map((label, optIndex) => (
                      <label
                        key={optIndex}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 cursor-pointer transition-colors ${
                          emotionalAnswers[i] === optIndex
                            ? "border-primary-600 bg-primary-50 text-primary-700"
                            : "border-gray-200 hover:border-primary-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name={`emotional-${i}`}
                          checked={emotionalAnswers[i] === optIndex}
                          onChange={() => setEmotional(i, optIndex)}
                          className="sr-only"
                        />
                        <span className="text-sm font-medium">{label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-xl bg-amber-50 border border-amber-200">
              <p className="text-sm text-gray-700 leading-relaxed">
                {DISCLAIMER}
              </p>
            </div>

            <div className="mt-6 p-6 rounded-xl bg-primary-50 border border-primary-200">
              <p className="text-gray-800 leading-relaxed">{FEEDBACK_EMOTIONAL}</p>
            </div>
          </div>
        </section>

        {/* Rehber 2: Beden İlişkisi */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-soft p-8 md:p-10 border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              2) Bedeninle Kurduğun İlişkiyi Keşfet
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Beden algınızı ve yeme farkındalığınızı nazikçe gözlemleyin.
            </p>

            <div className="space-y-8">
              {QUESTIONS_BODY.map((q, i) => (
                <div key={i} className="border-b border-gray-100 pb-6 last:border-0">
                  <p className="font-medium text-gray-900 mb-4">
                    {i + 1}. {q}
                  </p>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {LIKERT_BODY.map((label, optIndex) => (
                      <label
                        key={optIndex}
                        className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg border-2 cursor-pointer transition-colors text-sm ${
                          bodyAnswers[i] === optIndex
                            ? "border-primary-600 bg-primary-50 text-primary-700"
                            : "border-gray-200 hover:border-primary-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name={`body-${i}`}
                          checked={bodyAnswers[i] === optIndex}
                          onChange={() => setBody(i, optIndex)}
                          className="sr-only"
                        />
                        <span className="font-medium">{label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-xl bg-amber-50 border border-amber-200">
              <p className="text-sm text-gray-700 leading-relaxed">
                {DISCLAIMER}
              </p>
            </div>

            <div className="mt-6 p-6 rounded-xl bg-primary-50 border border-primary-200">
              <p className="text-gray-800 leading-relaxed">{FEEDBACK_BODY}</p>
            </div>
          </div>
        </section>

        {/* Sabit uyarı + Randevu */}
        <div className="p-6 rounded-2xl border border-amber-200 bg-amber-50 flex gap-4">
          <AlertCircle className="text-amber-600 flex-shrink-0 mt-0.5" size={24} />
          <div>
            <p className="text-gray-700 leading-relaxed text-sm mb-4">
              Bu sayfadaki rehberler yalnızca bilgilendirme ve öz-farkındalık
              amacıyla sunulmaktadır; tanı, tedavi veya tedavi planı yerine
              geçmez. Kişisel desteğiniz için randevu almanızı öneririm.
            </p>
            <Link
              href="/randevu"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Randevu Al
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
