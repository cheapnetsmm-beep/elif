import Link from "next/link";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { notFound } from "next/navigation";

const blogPosts: Record<string, any> = {
  "bagirsak-beyin-ekseni": {
    title: "Bağırsak-Beyin Ekseni: Ruh Hali ve Sağlık Üzerindeki Etkileri",
    date: "7 Ocak 2026",
    category: "Beslenme & Psikoloji",
    content: (
      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Bağırsak-Beyin Ekseni Nedir?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bağırsaklar "ikinci beyin" olarak adlandırılır çünkü 100 milyondan fazla sinir hücresi içerir ve vagus siniri üzerinden beyinle sürekli iletişim halindedir. Bu iletişim; sinirsel, hormonal, bağışıklık kaynaklı ve metabolik yollarla gerçekleşir.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Bağırsak Mikrobiyotası Neden Önemli?</h2>
          <div className="space-y-4">
            <div className="bg-primary-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sindirim</h3>
              <p className="text-gray-700 leading-relaxed">
                Bağırsak mikrobiyotası, sindiremediğimiz lifleri fermente ederek kısa zincirli yağ asitleri (KZYA) üretir. KZYA'lar, bağırsak hücrelerini besler, inflamasyonu azaltır ve enerji sağlar.
              </p>
            </div>
            <div className="bg-primary-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Bağışıklık Sistemi</h3>
              <p className="text-gray-700 leading-relaxed">
                Bağırsak mikrobiyotası, bağışıklık sisteminin gelişimini ve fonksiyonunu etkiler. "Dost" bakteriler, bağışıklık hücrelerini eğitir ve zararlı mikroorganizmalara karşı koruma sağlar.
              </p>
            </div>
            <div className="bg-primary-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Vitamin Üretimi</h3>
              <p className="text-gray-700 leading-relaxed">
                Bağırsak mikrobiyotası, K vitamini ve bazı B vitaminleri gibi önemli vitaminleri üretir.
              </p>
            </div>
            <div className="bg-primary-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Nörotransmiter Sentezi</h3>
              <p className="text-gray-700 leading-relaxed">
                Bağırsak mikrobiyotası, serotonin, dopamin ve GABA gibi nörotransmiterlerin üretiminde rol oynar. Bu nörotransmiterler, ruh halimizi, uyku düzenimizi ve bilişsel fonksiyonlarımızı etkiler.
              </p>
            </div>
            <div className="bg-primary-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Toksin Metabolizması</h3>
              <p className="text-gray-700 leading-relaxed">
                Bağırsak mikrobiyotası, bazı toksinleri metabolize ederek vücuttan atılmasını sağlar.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">3. Mikrobiyota Bozulduğunda Neler Olur?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>Kaygı ve depresyon artabilir.</li>
            <li>Odaklanma ve hafıza zayıflayabilir. (beyin sisi)</li>
            <li>Bağışıklık sistemi zayıflar.</li>
            <li>Sindirim problemleri ortaya çıkar (şişkinlik, gaz, kabızlık/ishal)</li>
            <li>Uyku düzeni bozulur.</li>
            <li>İnflamasyon artarak nörolojik hastalara zemin hazırlayabilir.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Bağırsak Sağlığı Ruh Halini Nasıl Etkiler?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Mikrobiyota; serotonin, dopamin ve GABA gibi nörotransmiterlerin üretimini etkiler. Bu kimyasallar ruh hali, motivasyon, stres yönetimi ve uyku üzerinde belirleyicidir. Bu nedenle bağırsak dengesizliği, kaygı bozukluğu, depresyon ve stres yönetiminde güçlük yaratabilir.
          </p>
          <div className="bg-primary-100 border-l-4 border-primary-600 p-6 rounded-r-xl">
            <p className="text-lg text-gray-800 italic">
              "Bağırsak-beyin eksenini güçlendirmek, hem bedeninizi hem ruh halinizi iyileştirir. Bu süreci birlikte yönetmek isterseniz, benimle iletişime geçebilirsiniz."
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Kronik Stres ve Bağırsaklar</h2>
          <p className="text-gray-700 leading-relaxed">
            Kronik stres bağırsak geçirgenliğini artırır ("leaky gut"), inflamasyonu tetikler ve mikrobiyotayı bozar. Bu döngü ruh halini daha da kötüleştirir. Yani stres hem bağırsakları hem ruhsal durumu eş zamanlı etkiler.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Beslenme Bağırsak ve Beyin Sağlığını Nasıl Destekler?</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Destekleyici Besinler:</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Prebiyotik Gıdalar:</strong> Soğan, sarımsak, pırasa, kuşkonmaz, muz, yulaf</li>
                <li><strong>Probiyotik Gıdalar:</strong> Yoğurt, kefir, turşu, kimchi, fermente ürünler</li>
                <li><strong>Lifli Besinler:</strong> Sebzeler, meyveler, baklagiller</li>
                <li><strong>Omega-3:</strong> Somon, ceviz, chia ve keten tohumu</li>
                <li><strong>Antioksidan Kaynakları:</strong> Renkli sebze ve meyveler</li>
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Kaçınılması Gerekenler:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Aşırı şeker ve işlenmiş gıdalar</li>
                <li>Alkol ve fazla kafein</li>
                <li>Gereksiz antibiyotik kullanımı</li>
                <li>Hareketsiz yaşam</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Yaşam Tarzı Alışkanlıkları</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>Düzenli egzersiz mikrobiyotayı zenginleştirir.</li>
            <li>Yeterli ve kaliteli uyku hormonal dengeyi düzenler.</li>
            <li>Nefes egzersizleri, meditasyon ve mindfulness bağırsak-beyin aksını iyileştirir.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">8. Bağırsak Sağlığı İyileşirse Ruh Hali de Düzelir mi?</h2>
          <p className="text-gray-700 leading-relaxed">
            Evet. Yapılan pek çok çalışma, bağırsak florasının güçlendirilmesinin depresyon, anksiyete, stres ve bilişsel fonksiyonlarda iyileşme sağladığını göstermektedir.
          </p>
        </section>

        <section className="mb-8 bg-primary-50 p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Sonuç</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Bağırsak sağlığı, zihinsel ve duygusal sağlığın temel belirleyicilerinden biridir. Sağlıklı bir bağırsak florası oluşturmak; beslenme, uyku, stres yönetimi ve hareketli yaşamla mümkündür. Bu eksen dengelendiğinde hem beden hem zihin daha uyumlu çalışır.
          </p>
        </section>
      </div>
    ),
  },
  "demir-eksikligi": {
    title: "Demir Eksikliği: Belirtileri, Nedenleri ve Eksikliği Nasıl Giderilir?",
    date: "7 Ocak 2026",
    category: "Beslenme",
    content: (
      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            Sürekli yorgun musunuz? Solgun bir cildiniz mi var? Baş dönmesi veya nefes darlığı yaşıyor musunuz? Konsantrasyon güçlüğü mü çekiyorsunuz? Bu şikayetler, dünya genelinde milyonlarca insanı etkileyen demir eksikliğinin habercisi olabilir.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Demir, vücutta oksijen taşımak için gerekli hemoglobin üretimi ve enerji metabolizması için hayati bir mineraldir. Eksikliği hem enerji seviyelerini düşürür hem bağışıklığı zayıflatır hem de bilişsel fonksiyonları olumsuz etkileyebilir. Dünya Sağlık Örgütü (WHO), aneminin küresel bir sağlık sorunu olduğunu ve özellikle kadınlar ve çocuklar arasında yaygın olduğunu belirtmektedir.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Demir Eksikliği Riski Taşıyan Gruplar</h2>
          <div className="bg-primary-50 p-6 rounded-xl">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="font-semibold mr-2">• Kadınlar:</span>
                <span>Adet, gebelik ve emzirme dönemlerinde ihtiyaç artar.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">• Çocuklar ve gençler:</span>
                <span>Hızlı büyüme döneminde demir ihtiyacı yükselir</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">• Vejetaryenler ve veganlar:</span>
                <span>Bitkisel demirin emilimi hayvansal kaynaklara göre daha düşüktür</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">• Kronik hastalıklar:</span>
                <span>Bazı sağlık durumları demir emilimini etkileyebilir</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Demir Emilimini Etkileyen Faktörler</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Besinlerdeki demirin tamamı vücudumuz tarafından aynı şekilde kullanılmaz. Demiri iki ana türe ayırabiliriz:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Hem Demir</h3>
              <p className="text-gray-700 leading-relaxed">
                Sadece hayvansal kaynaklı gıdalarda (kırmızı et, tavuk, balık) bulunur ve vücut tarafından daha verimli bir şekilde emilir.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Hem Olmayan Demir (Bitkisel Kaynaklı)</h3>
              <p className="text-gray-700 leading-relaxed">
                Bitkisel kaynaklı gıdalarda (ıspanak, mercimek, kuru fasulye) ve demirle zenginleştirilmiş ürünlerde bulunur. Emilimi daha düşüktür.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Demir Emilimini Nasıl Arttırabiliriz?</h2>
          <div className="space-y-4">
            <div className="bg-primary-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">C Vitamini ile Kombin</h3>
              <p className="text-gray-700 leading-relaxed">
                Bitkisel demirin emilimini artırmak için C vitamini zengini besinlerle tüketin (limonlu salata, portakal suyu ile smoothie).
              </p>
            </div>
            <div className="bg-red-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Demir Emilimini Engelleyenler</h3>
              <p className="text-gray-700 leading-relaxed">
                Çay, kahve ve süt ürünleri demir emilimini azaltabilir. Demir yönünden zengin bir öğün sonrası çay/kahve tüketmek için 1-2 saat beklemek önemlidir.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Demir Açısından Zengin, Kan Yapıcı 10 Besin</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { num: "1", food: "Kırmızı et", desc: "Karaciğer ve sığır eti, hem demir açısından en güçlü kaynak." },
              { num: "2", food: "Yumurta", desc: "Özellikle sarısı, kahvaltının vazgeçilmez demir kaynağı." },
              { num: "3", food: "Pekmez", desc: "Keçiboynuzu ve üzüm pekmezi, ölçülü tüketildiğinde bitkisel demir sağlar." },
              { num: "4", food: "Koyu yeşil yapraklı sebzeler", desc: "Ispanak, pazı, karalahana (C vitamini ile birlikte)." },
              { num: "5", food: "Baklagiller", desc: "Mercimek, nohut, kuru fasulye ve barbunya hem lif hem protein sağlar." },
              { num: "6", food: "Kuru meyveler", desc: "Kuru erik, kayısı, üzüm tatlı krizlerini bastırırken demir desteği verir." },
              { num: "7", food: "Kabak çekirdeği", desc: "Bir avuç günlük demir ihtiyacının önemli kısmını karşılar." },
              { num: "8", food: "Deniz ürünleri", desc: "İstiridye, midye, sardalya mükemmel hem demir kaynağıdır." },
              { num: "9", food: "Tavuk ve hindi", desc: "But gibi koyu renkli etler, beyaz göğüs etlerine göre daha fazla demir içerir." },
              { num: "10", food: "Demirle zenginleştirilmiş tahıllar", desc: "Kahvaltılık gevrek ve ekmekler için iyi bir alternatif." },
            ].map((item) => (
              <div key={item.num} className="bg-white border-2 border-primary-100 p-5 rounded-xl hover:border-primary-300 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.food}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8 bg-primary-50 p-6 rounded-xl border-l-4 border-primary-600">
          <p className="text-gray-800 leading-relaxed mb-4">
            <strong>Doğru beslenme stratejileri ile demir eksikliği yönetilebilir ve önlenebilir.</strong> Anahtar, sadece demir zengini gıdaları bilmek değil, aynı zamanda emilimi artıracak ve engelleyecek faktörleri tanımaktır. Dengeli bir tabak, enerji seviyenizi yükseltir ve genel sağlığınızı iyileştirir.
          </p>
          <p className="text-gray-800 leading-relaxed italic">
            Demir eksikliği konusunda kişiselleştirilmiş bir beslenme planı ile sağlığınızı desteklemek isterseniz, profesyonel danışmanlık için benimle iletişime geçebilirsiniz.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Demir Eksikliği Hakkında Sıkça Sorulan Sorular (SSS)</h2>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                1. Demir eksikliğinin en yaygın belirtileri nelerdir?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                En yaygın belirtiler arasında kronik yorgunluk ve halsizlik, soluk ten rengi, efor sırasında nefes darlığı, baş dönmesi, baş ağrısı, tırnaklarda kolay kırılma ve saç dökülmesi yer alır.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                2. Çay/kahve içmek kansızlık yapar mı?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Çay/kahve, "kansızlık" yapmaz ama içerdiği tanenler nedeniyle yemeklerle birlikte tüketildiğinde besinlerdeki demirin emilimini %50-60 oranında azaltabilir. Bundan dolayı demir eksikliği olan kişilerin çayı öğünlerden en az 1-2 saat sonra tüketmeleri önerilir.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                3. Demir ilacı kullanırken nelere dikket etmeliyim?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Demir ilaçlarını doktorunuzun önerdiği şekilde kullanmalısınız. Genellikle aç karnına ve C vitamini (örn: bir bardak portakal suyu) ile birlikte alınması emilimi artırır. Süt, kalsiyum takviyeleri, antiasitler ve çay/kahve ile birlikte almaktan kaçının.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                4. Vejetaryenler demir eksikliği riskini nasıl azaltabilir?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Vejetaryenler, demir açısından zengin mercimek, nohut, tofu, ıspanak, kinoa ve kabak çekirdeği gibi bitkisel kaynaklara odaklanmalıdır. En önemlisi, belirtilen gıdaları mutlaka portakal, biber, kivi, domates gibi C vitamini zengini besinlerle birlikte tüketerek demir emilimini artırmaları gerekir.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                5. Demir eksikliği kilo aldırır mı?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Doğrudan kilo aldırmaz fakat demir eksikliğinin neden olduğu yorgunluk ve halsizlik, fiziksel aktivite seviyesini düşürerek dolaylı yoldan kilo alımına zemin hazırlayabilir. Tiroid fonksiyonlarını etkileyerek metabolizmayı yavaşlatabilir.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                6. Çocuklarda demir eksikliği neden önemlidir?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Demir, çocukların büyüme, gelişme ve özellikle beyin gelişimi için kritik öneme sahiptir. Eksikliği, öğrenme güçlükleri, dikkat eksikliğine yol açabilir.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                7. Demir Eksikliği Tedavisi Ne Kadar Sürer?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Tedavi süresi kişiye ve eksikliğin şiddetine göre değişir, ancak genellikle:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Hemoglobin seviyeleri genellikle 2-3 ay içinde normale döner.</li>
                <li>Vücudun demir depolarını (ferritin) tamamen doldurmak için tedavi, hemoglobin normale döndükten sonra genellikle 6 ay veya daha uzun süre devam etmelidir. Doktor kontrolü ve kan tahlilleri tedavinin sonlandırılması için belirleyicidir.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    ),
  },
  "irade-degil-psikoloji": {
    title: "İrade Değil Psikoloji: Yeme Davranışlarımızı Gerçekte Ne Yönetiyor?",
    date: "7 Ocak 2026",
    category: "Psikonütrisyon",
    content: (
      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            İnsanlar genellikle "diyet başarısızlığını" irade eksikliğine bağlar. Psikolog ve diyetisyen olarak, bu yaygın inanca nasıl yaklaşıyoruz? Yeme davranışlarımızı gerçekten yöneten, o çok bahsedilen irade midir?
          </p>
          <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-xl">
            <p className="text-gray-800 leading-relaxed">
              <strong>Bu, üzerinde durmamız gereken en temel yanlış inanışlardan biri.</strong> Hayır, yeme davranışlarımızı yöneten şey büyük ölçüde irade gücü değil, psikolojimiz ve biyolojimizdir. İrade, sınırlı bir kaynaktır. Kendimizi sürekli kısıtlamaya zorladığımızda, irademiz er ya da geç tükenir ve ardından kontrolsüz yeme davranışları oluşabilir. Bu bir zayıflık değil, kısıtlayıcı diyet kültürünün doğal bir sonucudur. Bizim odağımız, 'iradeyi zorlamak' yerine, yeme davranışının arkasındaki duygusal ve bilişsel nedenleri anlamak ve bunlara çözümler üretmektir.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Yeme Davranışlarımızın Psikolojik Temelleri</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Yemek, bebeklikten itibaren bizim için sadece biyolojik bir ihtiyaç değil, aynı zamanda bir konfor ve güvenlik kaynağıdır. Stres, kaygı veya yalnızlık gibi zorlu duygularla baş edemediğimizde, beynimiz hızla bize tanıdık ve anlık haz veren bir başa çıkma mekanizmasına yönelir: Yemeğe.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Özellikle tatlı ve yağlı yiyecekler, beyindeki dopamin salınımını tetikleyerek geçici bir rahatlama sağlar. Ancak bu durum, duygusal sorun çözülmediği için kısa sürede suçluluk ve pişmanlığa dönüşür, bu da yeni bir duygusal döngüyü ve tekrar yeme isteğini tetikler.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Duygusal Yeme: Fizyolojik ve Psikolojik Döngü</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Stres altındayken vücudumuz kortizol hormonu salgılar. Kortizol, vücudu acil duruma hazırlar ve bu durum, beynimizde hızlı enerji, yani glikoz sinyali oluşturur. Bu biyolojik çağrıya en hızlı yanıt verenler ise basit karbonhidratlar ve şekerlerdir.
          </p>
          <div className="bg-primary-50 p-6 rounded-xl mb-4">
            <p className="text-gray-800 leading-relaxed">
              Yani, duygusal yeme hem psikolojik bir kaçış (duyguyu bastırma) hem de biyolojik bir tepkidir (hızlı enerji talebi). Bu yiyecekleri tüketmek, kısa süreliğine o gerginliği veya boşluğu doldursa da, temeldeki stres kaynağı orada durmaya devam ettiği için döngü tekrar eder.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Bu durumun çözümü, stresi yönetmeyi öğrenmek ve beslenme planını stresli dönemleri destekleyecek şekilde dengelemektir.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Vücut İmajı ve Öz Değer</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Vücut imajı ve öz değer, yeme davranışlarımız üzerinde sandığımızdan çok daha güçlü bir etkiye sahip. Çünkü yeme davranışı yalnızca fizyolojik açlıkla ilgili değil; duygularımız, kendimizle kurduğumuz ilişki ve bedenimize dair iç konuşmamız bu davranışı sürekli şekillendiriyor.
          </p>
          <div className="bg-red-50 p-6 rounded-xl">
            <p className="text-gray-800 leading-relaxed">
              Öz değer düşük olduğunda ya da kişi bedenini sürekli eleştirdiğinde, beslenme otomatik olarak 'kontrol etmem gereken bir sorun' hâline geliyor. Bu da kısıtlama–yeme atakları–pişmanlık döngüsünü tetikleyebiliyor.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Kalıcı başarı, sadece dış görünüşe değil, vücudun genel sağlığına ve iyiliğine odaklanan, kendine şefkatli bir yaklaşımla mümkündür. Sağlıklı yeme davranışını sürdürülebilir yapan şey ise mükemmellik değil; sürdürülebilirlik, esneklik ve öz-şefkat.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Zihin Yapısını Değiştirmek: İlk Adımlar</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Zihin yapısını değiştirmenin ilk adımı, farkındalık kazanmaktır. İki kritik adım öneriyorum:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Duygusal Tetikleyicileri Tanıma</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                'Şu an neden yemek istiyorum? Gerçekten aç mıyım, yoksa canım mı sıkkın, gergin miyim?' sorularını sormak ve bunlara cevap vermek. Yemek yemeden önceki 5 dakikalık duygusal durumu not etmek.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Farkındalıkla Yeme (Mindful Eating) Pratiği</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Bu, yeme eylemini otomatik pilottan çıkarır. Yemeğin kokusuna, dokusuna, tadına odaklanmak; yavaşlamak. Bu pratik, beynimiz ile midemiz arasındaki bağlantıyı güçlendirerek, doygunluk sinyallerini daha erken algılamamızı sağlar.
              </p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Amaç, yemeği bir dikkat dağıtma aracı değil, tam aksine o ana odaklanma pratiği haline getirmektir.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Sezgisel Yeme (Intuitive Eating) Yaklaşımı</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sezgisel yeme, hem biyolojik ihtiyaçlara hem de psikolojik sürece saygı duyan bir yaklaşımdır. Kurallar dayatan diyetlerin aksine, bedenimizin doğal bilgeliğine güvenmeyi öğretir.
          </p>
          <div className="bg-primary-50 p-6 rounded-xl mb-4">
            <p className="text-gray-800 leading-relaxed mb-4">
              Duygusal yeme çoğunlukla bu sinyallerin göz ardı edilmesiyle başlar. Sezgisel yeme ise bize iki temel içsel sinyali yeniden hatırlatır:
            </p>
            <ul className="space-y-2 text-gray-800 ml-4">
              <li><strong>Fizyolojik Açlık:</strong> Midede hissedilen, yavaşça ortaya çıkan gerçek biyolojik açlık sinyali.</li>
              <li><strong>Fizyolojik Tokluk:</strong> Bedende oluşan rahatlama, doygunluk ve tatmin hissi.</li>
            </ul>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Kritik nokta şudur: Yiyecekleri 'iyi' ya da 'kötü' olarak etiketlememek. Hiçbir yiyecek doğası gereği 'kötü' değildir. Bu izin alanı, yiyeceklere duyulan zihinsel yükü ve yasaklama psikolojisini azaltır. Böylece duygusal açlık ortaya çıktığında kişi, otomatik olarak yemeğe yönelmek yerine o duyguyu fark edip farklı baş etme yollarını kullanma şansı bulur. Artık yemek, bir "kaçamak" değil; bedenle uyumlu, bilinçli bir deneyim haline gelir.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Biyolojik Faktörler: Hormonlar ve Kan Şekeri</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Biyolojik düzenlemeyi anlamadan, psikolojiyi tam olarak yönetemeyiz. Açlık hormonu olan ghrelin ve tokluk hormonu olan leptin, yeme dürtümüzü kontrol eder.
          </p>
          <div className="bg-yellow-50 p-6 rounded-xl">
            <p className="text-gray-800 leading-relaxed">
              Ancak uyku eksikliği, kronik stres veya sağlıksız beslenme düzenleri bu hassas hormonal dengeyi bozar. Özellikle rafine karbonhidratlarla beslenme, kan şekerini hızla yükseltip ardından düşürerek, vücudun acil enerji ihtiyacı sinyali vermesine neden olur. Bu hızlı düşüş, psikolojik olarak iradenin en zayıf olduğu, ani ve kontrolsüz atıştırma ataklarının yaşandığı andır.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Dengeli bir beslenme düzeni oluşturmak, kan şekerini sabit tutarak bu biyolojik zayıflık anlarını en aza indirir.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Beslenmeyi Öz-Bakım Olarak Görmek</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bu, benim en önem verdiğim zihinsel dönüşümlerden biridir. Bireylerin beslenmeyi kısıtlayıcı bir süreç olarak görmekten çıkıp, öz-bakım temelli bir yaklaşım benimsemeleri için önce dili dönüştürürüz.
          </p>
          <div className="bg-primary-50 p-6 rounded-xl">
            <p className="text-gray-800 leading-relaxed mb-3">
              'Diyet yapmak zorundayım' yerine, 'bedenimi destekleyici seçimler yapıyorum' demeyi öğreniriz. Böylece beslenme bir zorunluluk ya da baskı unsuru olmaktan çıkar; kişinin kendisine yaptığı temel bir yatırım olarak yeniden çerçevelenir.
            </p>
            <p className="text-gray-800 leading-relaxed">
              Danışanlarıma, sürdürülebilir beslenme seçimlerinin enerjilerini, uyku kalitelerini, zihinsel açıklıklarını nasıl arttırdığını deneyimlemeleri için alan açarım. Böylece motivasyon kaynağı 'kilo verme baskısı' değil, daha iyi hissetme haline dönüşür.
            </p>
          </div>
        </section>

        <section className="mb-8 bg-primary-50 p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Kalıcı Değişim İçin Üç Bütünsel Tavsiye</h2>
          <p className="text-gray-800 leading-relaxed mb-6 text-lg">
            Yeme davranışlarında kalıcı değişim isteyen herkes için bu üç tavsiye, değişimin temel direklerini oluşturur:
          </p>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Duygusal Farkındalık Geliştirin</h3>
              <p className="text-gray-700 leading-relaxed">
                Açlık hissettiğinizde durun ve kendinize sorun: 'Şu an karnım mı aç, yoksa ruhum mu?' Duygusal boşluğu yemekle doldurmak yerine, duyguyu tanımlamak ve ona uygun bir çözüm bulmayı pratik edin. (nefes egzersizi, yürüyüş).
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Yiyecekleri Nötrleştirin</h3>
              <p className="text-gray-700 leading-relaxed">
                "Yiyecekleri 'iyi' veya 'kötü' olarak etiketlemeyi bıraktığınızda, beslenme çok daha özgür bir hale gelir. Kendinize küçük keyif alanları tanımak, yasaklama duygusunu azaltır ve aşırı yeme isteğini büyük ölçüde önler. Çünkü uzun vadede sürdürülebilir bir beslenmenin temeli esnekliktir."
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Kendinize Şefkat Gösterin</h3>
              <p className="text-gray-700 leading-relaxed">
                Mükemmel olmayı beklemeyin. "Bir öğünde beklediğinizden fazla yediğinizi düşünürseniz, kendinizi eleştirmek yerine bunu bir öğrenme anı olarak görün ve bir rutininize geri dönün. Bu yolculuk uzun soluklu bir maraton. Kendinize göstereceğiniz şefkat, ilerlemenizi güçlendiren en önemli araçtır.
              </p>
            </div>
          </div>
        </section>
      </div>
    ),
  },
  "zihinsel-yorgunluk-nedir": {
    title: "Zihinsel Yorgunluk Nedir? Belirtileri, Nedenleri ve Baş Etme Yolları",
    date: "30 Ocak 2026",
    category: "Psikoloji",
    content: (
      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <p className="text-xl text-gray-700 leading-relaxed mb-4 italic">
            Zihinsel yorgunluk, kişinin fiziksel olarak çok yorulmamış olsa bile zihinsel ve duygusal olarak tükenmiş hissetmesi durumudur. Gün içinde yapılması gereken işler azalmış olsa bile, zihin sürekli çalışıyor gibi hissedilebilir. Dinlenmeye rağmen geçmeyen bu yorgunluk hali, günümüzde birçok kişinin yaşadığı ancak çoğu zaman fark edilmesi zor olan bir durumdur.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4 italic">
            Birçok kişi bu durumu "hiçbir şey yapmadım ama çok yoruldum" ya da "tatil yaptım ama zihnim hâlâ dolu" sözleriyle ifade eder.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Zihinsel Yorgunluk Nedir?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Zihinsel yorgunluk; yoğun düşünme, sürekli zihinsel uyarılma ve duygusal yüklenme sonucunda ortaya çıkar. Kişi odaklanmakta zorlanabilir, karar vermekte güçlük yaşayabilir ve zihnini susturamadığını hissedebilir.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Fiziksel yorgunluktan farklı olarak, zihinsel yorgunlukta dinlenmek her zaman yeterli olmaz. Çünkü sorun bedenin değil, zihnin dinlenememesidir.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Zihinsel Yorgunluk Nasıl Ortaya Çıkar?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Zihinsel yorgunluk çoğu zaman tek bir nedene bağlı değildir. Zaman içinde biriken sorumluluklar ve zihinsel yükler bu durumu besler.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Sürekli düşünmek, aynı konular üzerinde tekrar tekrar durmak, gün içinde çok sayıda karar vermek zorunda kalmak ve zihnin kendini toparlayacağı alanlara yeterince yer açamamak zihinsel yorgunluğun ortaya çıkmasında etkili olur.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Zihinsel Yorgunluğun Belirtileri</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Zihinsel yorgunluk kişiden kişiye farklı şekillerde hissedilebilir. En sık görülen belirtiler şunlardır:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>Konsantrasyon güçlüğü</li>
            <li>Sürekli yorgun ve bitkin hissetme</li>
            <li>Tahammülün azalması, çabuk sinirlenme</li>
            <li>Unutkanlık</li>
            <li>Keyif alamama</li>
            <li>Uykuya rağmen geçmeyen yorgunluk hissi</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Bu belirtiler uzun süredir devam ediyorsa ve günlük yaşamı etkilemeye başlamışsa dikkate alınması gerekir.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Zihinsel Yorgunluğun Nedenleri</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Modern yaşamın getirdiği hız ve beklentiler zihinsel yorgunluğun en önemli nedenleri arasındadır. Sürekli ulaşılabilir olmak, dijital ekranlara uzun süre maruz kalmak ve zihni gerçekten dinlendirecek molalara yeterince yer vermemek bu durumu derinleştirir.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Bunun yanında duygusal yük taşımak, herkesin ihtiyacını gözetmeye çalışmak ve kendine ait alanı ihmal etmek de zihinsel yorgunluğu artırabilir.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Zihinsel Yorgunluk ile Psikolojik Yorgunluk Aynı Şey mi?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Zihinsel yorgunluk ve psikolojik yorgunluk birbiriyle ilişkili kavramlar olsa da birebir aynı değildir. Zihinsel yorgunluk daha çok düşünsel yük, dikkat ve odaklanma süreçleriyle ilgilidir.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Psikolojik yorgunluk ise duygusal olarak tükenmiş hissetme, isteksizlik ve umutsuzluk gibi duygusal süreçleri kapsar. Ancak bu iki durum çoğu zaman bir arada görülür ve birbirini besleyebilir.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Zihinsel Yorgunlukla Başa Çıkma Yolları</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Zihinsel yorgunlukla başa çıkmak için günlük yaşamda küçük ama etkili adımlar atılabilir:
          </p>
          <ul className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
            <li>Uyku düzenine özen göstermek</li>
            <li>Aynı anda tek işe odaklanmaya çalışmak</li>
            <li>Gün içinde dijital molalar vermek</li>
            <li>Kısa zihinsel dinlenme aralıkları oluşturmak</li>
            <li>Düzenli fiziksel hareketi hayatın bir parçası haline getirmek</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Bu adımlar zihnin toparlanmasına alan açabilir; ancak her zaman yeterli olmayabilir.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ne Zaman Uzmandan Destek Alınmalı?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Zihinsel yorgunluk uzun süredir devam ediyorsa, kişinin günlük işlevselliğini ve yaşam kalitesini belirgin şekilde etkiliyorsa, bir uzmandan destek almak faydalı olabilir.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Psikoterapi süreci, zihinsel yüklerin fark edilmesi, sınırların yeniden düzenlenmesi ve kişinin kendisiyle daha dengeli bir ilişki kurması açısından destekleyici bir alan sunar.
          </p>
          <div className="bg-primary-50 p-6 rounded-xl border-l-4 border-primary-600">
            <p className="text-gray-800 leading-relaxed">
              Zihinsel yorgunluk bir güçsüzlük ya da yetersizlik göstergesi değildir. Çoğu zaman uzun süre güçlü kalmaya çalışmanın, durmadan düşünmenin ve kendine yeterince alan açamamanın bir sonucudur. Bu durumu fark etmek ve zihnin dinlenmesine izin vermek, ruhsal iyilik halini destekleyen önemli bir adımdır.
            </p>
          </div>
        </section>
      </div>
    ),
  },
  "ne-zaman-psikologa-gitmek-gerekir": {
    title: "Ne Zaman Psikoloğa Gitmek Gerekir?",
    date: "30 Ocak 2026",
    category: "Psikoloji",
    content: (
      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <p className="text-xl text-gray-700 leading-relaxed mb-4 italic">
            Psikoloğa gitmek çoğu zaman yalnızca "ciddi bir sorun yaşandığında" akla gelen bir seçenek olarak görülür. Oysa psikolojik destek almak, yalnızca kriz anlarında değil; <strong>kendini tanımak, duygusal yükleri hafifletmek ve yaşam kalitesini artırmak</strong> için de başvurulabilecek bir süreçtir.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Psikoloğa Gitmek İçin Mutlaka Büyük Bir Sorun Olması Gerekir mi?</h2>
          <p className="text-gray-700 leading-relaxed">
            Hayır. Psikoloğa gitmek için ağır bir ruhsal rahatsızlık yaşamak gerekmez. Terapi süreci; kişinin düşünce, duygu ve davranışlarını anlamlandırmasına, tekrarlayan örüntüleri fark etmesine ve daha işlevsel baş etme yolları geliştirmesine yardımcı olur.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Psikoloğa Gitmem Gerektiğini Nasıl Anlarım?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Aşağıdaki durumlardan biri ya da birkaçı <strong>uzun süredir devam ediyorsa</strong>, profesyonel destek almak faydalı olabilir.
          </p>
          <div className="space-y-4">
            <div className="bg-primary-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Duygusal Zorlanmalar</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Sürekli kaygı, huzursuzluk ya da mutsuzluk hissi</li>
                <li>Nedensiz öfke patlamaları</li>
                <li>Boşluk, anlamsızlık ya da tükenmişlik duyguları</li>
              </ul>
            </div>
            <div className="bg-primary-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Günlük İşlevselliğin Zorlanması</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Uykuya dalmakta zorlanma ya da sık uyanma</li>
                <li>İştah değişiklikleri, duygusal yeme atakları</li>
                <li>Günlük sorumlulukları yerine getirmekte isteksizlik</li>
              </ul>
            </div>
            <div className="bg-primary-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">İlişkilerde Tekrarlayan Sorunlar</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Partner, aile veya arkadaş ilişkilerinde sürekli çatışmalar</li>
                <li>Sınır koymakta zorlanma</li>
                <li>Yalnızlık veya anlaşılmama hissi</li>
              </ul>
            </div>
            <div className="bg-primary-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Zorlayıcı Yaşam Olayları</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Ayrılık veya boşanma</li>
                <li>Yas ve kayıp süreçleri</li>
                <li>Taşınma, iş değişikliği</li>
                <li>Travmatik deneyimler</li>
              </ul>
            </div>
            <div className="bg-primary-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Kendini Anlamaya Yönelik İhtiyaç</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>"Neden hep aynı şeyleri yaşıyorum?" sorusunun sıkça akla gelmesi</li>
                <li>Kimlik, amaç veya yaşam yönüyle ilgili kafa karışıklığı</li>
                <li>Kişisel gelişim ve farkındalık isteği</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Psikoloğa gitmek, yalnızca sorunları çözmek için değil; <strong>kendini daha iyi tanımak ve içsel kaynakları güçlendirmek</strong> için de tercih edilebilir.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">"Bu Kadar Küçük Bir Şey İçin Psikoloğa Gidilir mi?"</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Terapide "küçük" ya da "önemsiz" sorunlar yoktur. <strong>Sizi zorlayan her konu ele alınmaya değerdir.</strong>
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bir düşünce ya da duygu zihninizi sürekli meşgul ediyorsa, günlük yaşamınızı etkiliyorsa ve kendi başınıza çözmekte zorlanıyorsanız, bu terapi için geçerli bir sebeptir.
          </p>
          <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-xl">
            <p className="text-gray-800 leading-relaxed font-semibold">
              Psikolojik destek almak bir zayıflık değil; kişinin kendisiyle ilgilenmesi ve sorumluluk almasıdır.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Terapi Süreci Ne Sağlar?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Psikoterapi süreci;
          </p>
          <ul className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
            <li>Kişinin kendini daha iyi tanımasını,</li>
            <li>Duygularını düzenlemesini,</li>
            <li>İşlevsel olmayan düşünce ve davranış örüntülerini fark etmesini,</li>
            <li>Daha sağlıklı baş etme becerileri geliştirmesini sağlar.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Amaç, sorunları tamamen ortadan kaldırmak değil; <strong>onlarla daha sağlıklı bir ilişki kurabilmektir.</strong>
          </p>
        </section>

        <section className="mb-8 bg-primary-50 p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Psikoloğa Gitmek Bir Başlangıçtır</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Eğer bu yazıyı okurken kendinizden bir şeyler bulduysanız, bu farkındalık değişimin ilk adımı olabilir.
          </p>
          <p className="text-gray-800 leading-relaxed text-lg font-medium">
            Psikoloğa gitmeye karar vermek; <strong>kendiniz için attığınız bilinçli ve sağlıklı bir adımdır.</strong>
          </p>
        </section>
      </div>
    ),
  },
  "sinir-koymak": {
    title: "Sınır Koymak ve Hayır Diyebilmek: Kendi Bahçeni Korumak",
    date: "30 Ocak 2026",
    category: "Psikoloji",
    content: (
      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <p className="text-xl text-gray-700 leading-relaxed mb-4 italic">
            Sınır koymak, yalnızca başkalarına neye izin verip vermediğinizi anlatmak değildir. Aynı zamanda kendinize, <strong>kim olduğunuzu ve neye değer verdiğinizi</strong> hatırlatma biçimidir.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4 italic">
            Bunu bir bahçe gibi düşünebilirsiniz. Size ait, emek verdiğiniz, özenle büyüttüğünüz bir bahçe…
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bu bahçenin sınırları olmazsa, herkes içeri girip çiçeklere dokunabilir, toprağı eşeleyebilir ya da farkında olmadan zarar verebilir. Psikolojik sınırlar da tam olarak böyledir.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Psikolojik Sınırlar Nedir?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Psikolojik sınırlar; sizi başkalarından ayıran, <strong>öz kimliğinizi</strong> ve öz değer duygunuzu koruyan, ilişkilerde neyin kabul edilebilir neyin edilemez olduğunu belirleyen içsel ve dışsal sınırlardır.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sağlıklı sınırlar sayesinde kişi:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>Kendini daha güvende hisseder,</li>
            <li>Yaşamı üzerinde kontrol duygusu geliştirir,</li>
            <li>İlişkilerinde daha net ve dengeli bir duruş sergiler.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Sınır koymak; baskı kurmak, küsmek ya da karşı tarafı cezalandırmak değildir. Aksine, <strong>açık, net</strong> bir iletişim biçimidir.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Neden Sınır Koymak Bu Kadar Zor?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Birçok kişi sınır koymakta zorlanır. Bunun nedeni çoğu zaman bugünkü ilişkiler değil, <strong>erken dönem öğrenmeleridir.</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>Başkalarının ihtiyaçlarını kendi ihtiyaçlarının önüne koymayı öğrenmiş olmak</li>
            <li>Hayır dendiğinde sevilmeyeceğine inanmak</li>
            <li>Sınır koymayı bencillik ya da suçlulukla eşleştirmek</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Bu durumda kişi, kendi bahçesinin sınırlarını fark etse bile, o sınırları korumaya cesaret edemez.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Sınır Koymanın Psikolojik Etkileri</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Klinik gözlemler ve araştırmalar, sınır koyabilen bireylerin psikolojik iyi oluşlarının daha yüksek olduğunu göstermektedir.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>Özsaygı güçlenir.</li>
            <li>İlişkilerde denge ve netlik artar.</li>
            <li>Bastırılmış öfke ve suçluluk azalır.</li>
            <li>Stres ve tükenmişlik hissi hafifler.</li>
            <li>Kişi, kendi alanını korudukça içsel olarak daha sağlam hisseder.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Hayır Demek Bencillik midir?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sınır koymak çoğu zaman yanlış anlaşılır. Oysa psikolojik açıdan bakıldığında:
          </p>
          <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-xl mb-4">
            <p className="text-gray-800 leading-relaxed font-semibold">
              Sınır koymak, özsaygının davranışa dökülmüş halidir.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Kendi ihtiyaçlarınıza hayır demediğinizde, başkalarının beklentilerine evet demek zorunda kalırsınız. Kendinize "hayır" deme hakkı tanımak, hayatınızdaki gerçek "evetler" için alan açar.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Sınır Koymayı Öğrenmek Mümkün mü?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sınır koymak doğuştan gelen bir beceri değildir; <strong>öğrenilebilir.</strong>
          </p>
          <ul className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
            <li>Rahatsızlık hissini fark etmek</li>
            <li>Kısa, net ve açıklamasız cümleler kurabilmek</li>
            <li>Karşı tarafın tepkisinin sizin sorumluluğunuz olmadığını kabul etmek</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Bu süreç herkes için kolay olmayabilir. Bu nedenle psikoterapi, sınır koyma becerisini güvenli bir alanda çalışmak için önemli bir destek sunar.
          </p>
        </section>

        <section className="mb-8 bg-primary-50 p-8 rounded-2xl">
          <p className="text-gray-800 leading-relaxed text-lg font-semibold">
            Unutmayın: Kendi bahçenizi korumayı öğrenmek, kendinizle kurduğunuz ilişkinin bir parçasıdır.
          </p>
        </section>
      </div>
    ),
  },
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link
          href="/blog"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 font-semibold"
        >
          <ArrowLeft className="mr-2" size={20} />
          Blog'a Dön
        </Link>

        <article>
          <div className="mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <Calendar size={16} />
              <span>{post.date}</span>
              <span className="text-primary-600 font-semibold flex items-center gap-1">
                <Tag size={16} />
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            {post.content}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/randevu"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Randevu Al
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}

