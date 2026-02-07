import Link from "next/link";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";

export default function PsychonutritionPage() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Psikonütrisyon Danışmanlığı
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Yeme davranışını yalnızca ne yediğimiz üzerinden değil; nasıl, ne zaman, neden ve hangi duyguyla yediğimiz üzerinden ele alan bütüncül bir yaklaşımdır.
          </p>
        </div>

        <div className="space-y-12 mb-16">
          <section>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bu danışmanlık sürecinde amaç: Kalıcı diyet listeleri vermek değil,
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li>Yemekle ilişkiyi anlamak ve dönüştürmek,</li>
              <li>Açlık–tokluk sinyallerini yeniden fark edebilmek,</li>
              <li>Duygusal yeme döngülerini çözümleyebilmek,</li>
              <li>Sürdürülebilir ve esnek bir beslenme davranışı geliştirmektir.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Psikonütrisyon, kilo odaklı hızlı çözümler yerine; beden, zihin ve yeme davranışı arasındaki ilişkiyi güçlendirmeyi hedefler.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Psikonütrisyon Nedir / Ne Değildir?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-primary-50 p-6 rounded-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="text-primary-600" size={24} />
                  <h3 className="text-xl font-bold text-gray-900">Psikonütrisyon:</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Yeme davranışını psikolojik ve bedensel boyutlarıyla ele alır.</li>
                  <li>• Yasaklar yerine farkındalık geliştirir.</li>
                  <li>• Kontrol yerine esneklik kazandırır.</li>
                  <li>• Kısa vadeli değil, uzun vadeli dönüşümü hedefler.</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <XCircle className="text-gray-600" size={24} />
                  <h3 className="text-xl font-bold text-gray-900">Psikonütrisyon Değildir:</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Hızlı kilo verdiren bir diyet programı</li>
                  <li>• Katı listeler ve yasaklar bütünü</li>
                  <li>• Sadece "irade" üzerinden ilerleyen bir yaklaşım</li>
                  <li>• Tek tip, herkes için aynı uygulanan bir protokol</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Psikonütrisyon Seans Paket Planı</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              6 görüşme / 50 dakika. Seanslar arası farkındalık ve gözlem çalışmaları ile süreç desteklenir. Aşağıda paylaşılan yapı, danışmanlık sürecinin genel çerçevesini sunar. Seansların içeriği, danışanın ihtiyacına göre esneyebilir ve derinleşebilir.
            </p>
            <div className="space-y-4">
              {[
                "1. Görüşme – Yeme Davranışının Haritası",
                "2. Görüşme – Duygusal Yeme ve Tetikleyiciler",
                "3. Görüşme – Beslenmede Kontrol, Kurallar ve Esneklik",
                "4. Görüşme – Açlık, Tokluk ve Beden Sinyalleri",
                "5. Görüşme – Günlük Hayatta Sürdürülebilirlik",
                "6. Görüşme – Sürecin Entegrasyonu ve Devam Planı",
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-800 font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Sık Sorulan Sorular</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Bu danışmanlık kilo verdirmeyi amaçlar mı?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Amaç doğrudan kilo vermek değil, yemekle ilişkiyi düzenlemektir. Kilo değişimi bazı danışanlarda sürecin doğal bir sonucu olabilir; ancak ana hedef bu değildir.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Görüşmelerde diyet listesi veriliyor mu?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Odak noktası liste değil, yeme davranışıdır. Gerekli görülen durumlarda yönlendirici beslenme önerileri yapılabilir.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Bu süreç kimler için uygundur?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Psikonütrisyon danışmanlığı; yeme davranışının duygularla ilişkisini daha iyi anlamak isteyen, tekrarlayan diyet döngülerinden yorulmuş, katı kurallar ve "yasak–kaçamak" düşünce yapısı arasında sıkıştığını hisseden, yemekle daha dengeli, esnek ve sürdürülebilir bir ilişki kurmayı hedefleyen kişiler için uygundur.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="text-center">
          <Link
            href="/randevu"
            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Randevu Al
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}



