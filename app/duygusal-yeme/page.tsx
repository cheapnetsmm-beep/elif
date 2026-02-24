import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Duygusal Yeme ile Baş Etme Yöntemleri",
  description:
    "Duygusal yeme nedir, fiziksel açlık ile farkları ve duygusal yeme ile baş etme yöntemleri. Farkındalıkla beslenme ve pratik öneriler.",
};

export default function DuygusalYemePage() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <BookOpen className="text-primary-500" size={20} />
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
              Rehber
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Duygusal Yeme ile Baş Etme Yöntemleri
          </h1>
        </div>

        <article className="prose prose-lg max-w-none space-y-10 text-gray-700">
          {/* Duygusal Yeme Nedir */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Duygusal Yeme Nedir?
            </h2>
            <p className="leading-relaxed">
              Duygusal yeme; fizyolojik açlık olmamasına rağmen, stres, kaygı,
              öfke, yalnızlık, sıkıntı veya mutsuzluk gibi duyguların etkisiyle
              yemek yeme davranışıdır.
            </p>
            <p className="leading-relaxed">
              Bu durumda amaç bedeni beslemekten çok, duyguyu bastırmak ya da
              rahatlama sağlamak olur.
            </p>
          </section>

          {/* Tablo */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Duygusal Açlık ile Fiziksel Açlık Arasındaki Farklar
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-primary-50 border-b border-gray-200">
                    <th className="px-4 py-3 font-semibold text-gray-900">
                      Fiziksel Açlık
                    </th>
                    <th className="px-4 py-3 font-semibold text-gray-900">
                      Duygusal Açlık
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-3">Yavaş gelişir.</td>
                    <td className="px-4 py-3">Aniden ortaya çıkar.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Mide kazınması hissi vardır.</td>
                    <td className="px-4 py-3">
                      Belirli bir yiyecek isteği olur.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Yemekle doyum sağlanır.</td>
                    <td className="px-4 py-3">Doygunluk hissi gecikir.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Suçluluk yaratmaz.</td>
                    <td className="px-4 py-3">
                      Pişmanlık ve suçluluk sık görülür.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 leading-relaxed">
              Bu farkı ayırt edebilmek, duygusal yeme ile baş etmenin ilk ve en
              kritik adımıdır.
            </p>
          </section>

          {/* Neden Ortaya Çıkar */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Duygusal Yeme Neden Ortaya Çıkar?
            </h2>
            <p className="mb-4 leading-relaxed">
              Duygusal yeme davranışının altında genellikle şu faktörler
              bulunur:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Stres ve kortizol artışı</li>
              <li>Bastırılmış duygular</li>
              <li>Yetersiz uyku</li>
              <li>Düzensiz öğün saatleri</li>
              <li>Çocukluktan gelen &quot;ödül olarak yemek&quot; alışkanlığı</li>
              <li>Mükemmeliyetçilik ve katı diyetler</li>
            </ul>
            <p className="mt-4 leading-relaxed">
              Özellikle çok kısıtlayıcı diyetler, duygusal yeme ataklarını
              tetikleyebilir.
            </p>
          </section>

          {/* Baş Etme Yöntemleri */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Duygusal Yeme ile Baş Etme Yöntemleri
            </h2>

            <div className="space-y-8">
              <div className="pl-4 border-l-4 border-primary-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  1. Açlık–Duygu Kontrolü Yapmayı Öğrenin
                </h3>
                <ul className="list-disc list-inside space-y-1 ml-2 mb-2">
                  <li>
                    Yemek yemeden önce kendinize şu soruyu sorun: &quot;Şu an
                    gerçekten aç mıyım, yoksa bir duygu mu yaşıyorum?&quot;
                  </li>
                  <li>
                    Gerekirse 5–10 dakika bekleyin. Fiziksel açlıkta istek devam
                    eder, duygusal açlıkta genellikle azalır.
                  </li>
                </ul>
              </div>

              <div className="pl-4 border-l-4 border-primary-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  2. Farkındalıkla Beslenme (Mindful Eating) Uygulayın
                </h3>
                <ul className="list-disc list-inside space-y-1 ml-2 mb-2">
                  <li>Yavaş yiyin.</li>
                  <li>Ekransız ortamda yemek yiyin.</li>
                  <li>Tat, koku ve dokuya odaklanın.</li>
                </ul>
                <p className="text-gray-600">
                  Bu yaklaşım, otomatik yeme davranışını azaltır ve tokluk
                  sinyallerini güçlendirir.
                </p>
              </div>

              <div className="pl-4 border-l-4 border-primary-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  3. Duygularınızı Yemekle Değil, Alternatiflerle Düzenleyin
                </h3>
                <p className="mb-2">
                  Yemek yerine şu alternatifleri deneyebilirsiniz:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-2 mb-2">
                  <li>10 dakikalık yürüyüş</li>
                  <li>Nefes egzersizi</li>
                  <li>Günlük tutmak</li>
                  <li>Ilık duş</li>
                  <li>Sevdiğiniz biriyle kısa bir sohbet</li>
                </ul>
                <p className="text-gray-600">
                  Amaç, duyguyu bastırmak değil regüle etmektir.
                </p>
              </div>

              <div className="pl-4 border-l-4 border-primary-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  4. Öğün Atlamayın ve Kan Şekerini Dengeleyin
                </h3>
                <p className="mb-2">Uzun açlıklar:</p>
                <ul className="list-disc list-inside space-y-1 ml-2 mb-2">
                  <li>Kan şekerinde dalgalanmalara</li>
                  <li>
                    Akşam saatlerinde kontrolsüz yeme ataklarına neden olabilir.
                  </li>
                </ul>
                <p className="text-gray-600">
                  Düzenli ve dengeli öğünler, duygusal yeme riskini belirgin
                  şekilde azaltır.
                </p>
              </div>

              <div className="pl-4 border-l-4 border-primary-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  5. Kendinize Yasaklar Koymayın
                </h3>
                <p className="text-gray-600">
                  &quot;Bunu asla yemem&quot; yaklaşımı, yeme isteğini daha da
                  artırır. Esnek ve sürdürülebilir beslenme modeli, suçluluk
                  döngüsünü kırar.
                </p>
              </div>
            </div>
          </section>

          {/* Kapanış */}
          <section className="p-6 rounded-2xl bg-primary-50 border border-primary-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Duygusal Yeme ile Barışmak Mümkün
            </h2>
            <p className="leading-relaxed mb-2">
              Duygusal yeme bir &quot;irade problemi&quot; değil, duygu
              düzenleme becerisiyle ilişkilidir.
            </p>
            <p className="leading-relaxed mb-2">
              Amaç tamamen ortadan kaldırmak değil, fark etmek ve yönetebilmektir.
            </p>
            <p className="leading-relaxed font-medium">
              Kendinize şefkatle yaklaşmak, bu sürecin en güçlü adımıdır.
            </p>
          </section>
        </article>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link
            href="/kendini-kesfet"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-colors"
          >
            Kendini Keşfet Rehberleri
            <ArrowRight size={20} />
          </Link>
          <Link
            href="/randevu"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-600 text-primary-600 rounded-xl font-semibold hover:bg-primary-50 transition-colors"
          >
            Randevu Al
          </Link>
        </div>
      </div>
    </div>
  );
}
