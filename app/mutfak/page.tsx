import Image from "next/image";

export default function KitchenPage() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Bütüncül Beslenme Mutfağı
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Beslenmeyi yalnızca kalori ya da hesaplamalardan ibaret görmeyen; beden, zihin ve günlük yaşam dinamiklerini birlikte ele alan bir yaklaşımla hazırlanmıştır.
          </p>
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed mb-8">
            Bu alanda paylaşılan tarifler; bağırsak sağlığını, kan şekeri dengesini, inflamasyon süreçlerini ve zihinsel iyi oluşu destekleyebilecek besin kombinasyonlarına odaklanır. Her tarif, sürdürülebilir beslenme alışkanlıklarını teşvik etmeyi ve yemekle kurulan ilişkiyi daha dengeli bir zemine taşımayı amaçlar.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Buradaki içerikler bir diyet listesi ya da tedavi planı yerine geçmez; bireysel ihtiyaçlara göre şekillenebilecek bütüncül bir bakış açısı sunar.
          </p>
        </div>

        <div className="space-y-12">
          <article className="bg-white rounded-2xl shadow-soft p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Yoğurtlu Yulaf & Chia Kâsesi</h2>
            <div className="relative w-full min-h-[280px] h-[380px] sm:h-[420px] rounded-xl overflow-hidden mb-6 bg-gray-50">
              <Image
                src="/but2.jpeg"
                alt="Yoğurtlu Yulaf ve Chia Kâsesi"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 672px"
              />
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Malzemeler:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>1 kâse ev yoğurdu</li>
                <li>2 yemek kaşığı yulaf ezmesi</li>
                <li>1 tatlı kaşığı chia tohumu</li>
                <li>1 avuç yaban mersini ya da mevsim meyvesi</li>
                <li>Tarçın</li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Hazırlanışı:</h3>
              <p className="text-gray-700 leading-relaxed">
                Tüm malzemeleri bir kâsede karıştırın. Sindirilebilirliği artırmak için yulaf ve chia tohumunu yoğurt içerisinde 15-20 dakika (ya da geceden) bekleterek aktive edebilirsiniz.
              </p>
            </div>
            <div className="bg-primary-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Neden Bu Tarif?</h3>
              <p className="text-gray-700 leading-relaxed">
                Yoğurttan gelen probiyotiklerin ve yulaf-chia ikilisinden gelen prebiyotik liflerin bir arada bulunması, bağırsak mikrobiyotasının dengelenmesine yardımcı olabilir. Bu dengeli içerik, kan şekeri seviyesinin daha stabil seyretmesine katkıda bulunarak gün içindeki ani enerji değişimlerini minimize etmeyi hedefler.
              </p>
            </div>
          </article>

          <article className="bg-white rounded-2xl shadow-soft p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Anti-Stres Topları</h2>
            <div className="relative w-full min-h-[280px] h-[380px] sm:h-[420px] rounded-xl overflow-hidden mb-6 bg-gray-50">
              <Image
                src="/but1.jpeg"
                alt="Anti-Stres Topları"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 672px"
              />
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Malzemeler: (Yaklaşık 6-8 adet için)</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>1 adet olgun muz (Çatalla ezerek püre haline getirilmiş)</li>
                <li>3-4 yemek kaşığı yulaf ezmesi (Kıvam alana kadar kontrollü eklenmeli)</li>
                <li>1,5 yemek kaşığı ham kakao (Magnezyum ve polifenol kaynağı)</li>
                <li>1 yemek kaşığı kabak çekirdeği (Hafifçe dövülmüş)</li>
                <li>1 tatlı kaşığı chia tohumu</li>
                <li>Üzeri için: Hindistan cevizi tozu</li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Hazırlanışı:</h3>
              <p className="text-gray-700 leading-relaxed">
                Muz püresi, ham kakao ve chia tohumunu karıştırın. Yulaf ezmesini ekleyerek şekil verilebilir bir kıvam elde edin. İçine kabak çekirdeklerini ekleyip yuvarlayın. Buzdolabında 15-20 dakika dinlendirdikten sonra servis edebilirsiniz.
              </p>
            </div>
            <div className="bg-primary-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Neden Bu Tarif?</h3>
              <p className="text-gray-700 leading-relaxed">
                Bu tarif; stres dönemlerinde artan magnezyum ve potasyum ihtiyacını desteklemeyi hedefleyen, sinir sistemi ve beyin fonksiyonlarıyla uyumlu besin bileşenlerini bir araya getirir. İçeriğindeki doğal antioksidanlar ve sağlıklı yağ asitleri sayesinde zihinsel yükün dengelenmesine, duygudurum regülasyonuna ve odaklanma süreçlerine katkı sağlayabilir.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}



