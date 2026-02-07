import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PsychologistPage() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Online Psikolog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Psikolojik danışmanlık süreci; bireyin yaşadığı zorlanmaları anlamlandırmasına, düşünce ve duygu dünyasını daha yakından tanımasına ve günlük yaşamda daha işlevsel baş etme yolları geliştirmesine alan açan profesyonel bir destek sürecidir.
          </p>
        </div>

        <div className="space-y-12 mb-16">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Çalışma Yaklaşımı</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Danışmanlık sürecinde Bilişsel Davranışçı Terapi (BDT) yaklaşımı benimsenmektedir. BDT; bireyin yaşadığı güçlükleri, düşünceler, duygular ve davranışlar arasındaki etkileşim üzerinden ele alan, bilimsel temellere dayanan ve yapılandırılmış bir terapi yaklaşımıdır.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bu yaklaşımda amaç; kişinin otomatikleşmiş düşünce kalıplarını fark etmesi, bu düşüncelerin duygusal tepkiler ve davranışlar üzerindeki etkisini anlaması ve daha işlevsel alternatifler geliştirebilmesidir. Süreç yalnızca konuşmaya dayalı değil; farkındalık kazandıran ve günlük yaşama aktarılabilir becerilerle desteklenen bir yapıdadır.
            </p>
          </section>

          <section className="bg-primary-50 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Online Danışmanlık</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tüm görüşmeler online platformlar üzerinden gerçekleştirilir. Bu yapı; zaman ve mekân esnekliği sağlarken, sürecin profesyonel çerçevesini ve sürekliliğini korur.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Online danışmanlıkta da yüz yüze görüşmelerde geçerli olan:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Gizlilik</li>
              <li>Etik sınırlar</li>
              <li>Profesyonel sorumluluk</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              aynı şekilde geçerlidir.
            </p>
          </section>
        </div>

        {/* Cross-Reference Section */}
        <section className="bg-gradient-to-br from-primary-50 via-pink-50 to-purple-50 p-8 rounded-2xl mb-12 border-2 border-pink-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Kalıcı Değişim Bedenle Uyum Gerektirir.
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-center">
              Duygusal yeme veya yeme bozukluklarıyla mücadelede psikolojik destek temeldir. Ancak bedenin ihtiyaç duyduğu doğru besin ve farkındalıkla bu iyileşme süreci hızlanır ve kalıcı hale gelir.
            </p>
            <div className="text-center">
              <Link
                href="/diyetisyen"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-pink-600 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-pink-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Bireysel Beslenme Danışmanlığı Hakkında Bilgi Alın
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </section>

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



