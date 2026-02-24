import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Clock, Globe, Heart, MessageCircle, Mail, Phone } from "lucide-react";

export default function DietitianPage() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Online Diyetisyen Danışmanlığı
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Diyetisyen & Psikolog Elif Naz Öksüz ile Online Diyet: Sağlıklı Yaşam Elinizin Altında!
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Yoğun temponuz, uzak mesafeniz ya da zaman kısıtlamalarınız sağlıklı beslenmenize engel olmasın. Size özel, bilimsel temellere dayalı ve size bir tık kadar yakın bir beslenme danışmanlığı alabilirsiniz.
          </p>
          <div className="relative w-full max-w-2xl mx-auto aspect-video rounded-2xl overflow-hidden bg-gray-100">
            <Image
              src="/images/diet.jpeg"
              alt="Online Diyetisyen Danışmanlığı"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 672px"
              priority
            />
          </div>
        </div>

        {/* Online Diyet Programı Avantajları */}
        <section className="mb-16 bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl border border-primary-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Online Diyet Programımız ile:</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <Clock className="text-primary-600 mx-auto mb-3" size={32} />
              <p className="text-gray-700 font-semibold">Zamandan tasarruf edin</p>
            </div>
            <div className="text-center">
              <Globe className="text-primary-600 mx-auto mb-3" size={32} />
              <p className="text-gray-700 font-semibold">Nerede olursanız olun destek alın</p>
            </div>
            <div className="text-center">
              <Heart className="text-primary-600 mx-auto mb-3" size={32} />
              <p className="text-gray-700 font-semibold">Kişiye özel, sürdürülebilir beslenme alışkanlıkları kazanın</p>
            </div>
          </div>
        </section>

        <div className="space-y-12 mb-16">
          {/* Online Diyet Nedir */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Online Diyet Nedir ve Kimler İçin Uygundur?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Online diyet; tüm görüşmelerin, diyet listesi paylaşımlarının ve takibin, internet üzerinden (WhatsApp, görüntülü görüşme, e-posta veya özel uygulama aracılığıyla) yapıldığı esnek bir beslenme danışmanlığı modelidir. Tıpkı yüz yüze görüşmedeki gibi kişisel ve özeldir.
            </p>
            <div className="bg-primary-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Bu Hizmet Tam Size Göre Eğer:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle2 className="text-primary-600 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span>Farklı bir şehirde veya ülkedesiniz.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-primary-600 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span>Yoğun iş, okul temposuna sahipseniz</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-primary-600 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span>Evden çıkmakta zorlanıyorsanız</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Süreç Nasıl İşliyor */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Online Diyet Süreci Nasıl İşliyor?</h2>
            
            <div className="space-y-8">
              {/* Adım 1 */}
              <div className="bg-white border-2 border-primary-100 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Ön Görüşme ve Analiz (Sizi Tanıyoruz)</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="font-semibold mr-2">• Detaylı Anamnez Formu:</span>
                        <span>Size özel hazırlanan formu doldurmanızı istiyorum. (Sağlık geçmişi, tahlil sonuçları, beslenme alışkanlıkları, yaşam tarzı, uyku düzeni, stres seviyesi.)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-semibold mr-2">• Görüntülü İlk Görüşme:</span>
                        <span>Ortalama 45 dakika süren görüşmemizde hedeflerinizi belirliyor, motivasyonunuzu anlıyor ve aklınızdaki tüm soruları yanıtlıyorum.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Adım 2 */}
              <div className="bg-white border-2 border-primary-100 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Size Özel Liste Hazırlama</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Anamnez ve görüşme sonuçlarına göre, sevdiğiniz/sevmediğiniz yiyecekleri, bütçenizi ve mutfak alışkanlıklarınızı gözeterek size özel beslenme programınızı hazırlıyorum.
                    </p>
                  </div>
                </div>
              </div>

              {/* Adım 3 */}
              <div className="bg-white border-2 border-primary-100 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Haftalık Takip ve Motivasyon</h3>
                    <ul className="space-y-3 text-gray-700 mb-4">
                      <li className="flex items-start">
                        <span className="font-semibold mr-2">• Haftalık Kontrol Günü:</span>
                        <span>Belirlediğimiz günde görüntülü/sesli görüşme ile yaşadığınız zorlukları, kazandığınız yeni alışkanlıkları ve bu süreçteki deneyimlerinizi değerlendiriyoruz.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-semibold mr-2">• Liste Güncelleme:</span>
                        <span>Haftalık görüşmelerimizden aldığımız duygusal ve fizyolojik geri bildirimler doğrultusunda listenizi düzenli olarak revize ediyorum. Bu güncellemeler; sosyal yaşamınıza uyum sağlamak ve programın etkinliğini koruyarak size özel, sürdürülebilir bir beslenme kültürü kazandırmak amacını taşır.</span>
                      </li>
                    </ul>
                    <div className="bg-primary-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <MessageCircle className="text-primary-600" size={20} />
                        <span className="font-semibold text-gray-900">Yanınızdayım Hattı (WhatsApp/E-posta Desteği)</span>
                      </div>
                      <p className="text-gray-700 text-sm">
                        İhtiyaç duyabileceğiniz anlarda, acil soru ve destek talepleriniz için 10.00–18.00 saatleri arasında WhatsApp ve e-posta ile destek sağlıyorum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Adım 4 */}
              <div className="bg-white border-2 border-primary-100 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Kalıcı Alışkanlık Kazanımı</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Hedefe ulaştıktan sonra, kilonuzu korumanız için beslenme bilincini geliştiriyor ve sürdürülebilir beslenme alışkanlıkları kazanmanızı sağlıyorum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Çalışma Alanları */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Hangi Alanlarda Destek Oluyoruz?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-primary-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Fonksiyonel Beslenme</h3>
                <p className="text-gray-700 leading-relaxed">
                  Metabolizmayı destekleyen, bağışıklığı güçlendiren ve enerji seviyesini dengeleyen beslenme stratejileri.
                </p>
              </div>
              <div className="bg-primary-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Psikoloji Destekli Beslenme</h3>
                <p className="text-gray-700 leading-relaxed">
                  Yeme davranışları, duygusal yeme ve motivasyon süreçlerini dikkate alan bütüncül yaklaşım.
                </p>
              </div>
              <div className="bg-primary-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Kilo Yönetimi</h3>
                <p className="text-gray-700 leading-relaxed">
                  Sağlıklı kilo verme- kilo alma programları.
                </p>
              </div>
              <div className="bg-primary-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Hastalıkta Beslenme</h3>
                <p className="text-gray-700 leading-relaxed">
                  Diyabet, İnsülin Direnci, Hipertansiyon, PCOS (Polikistik Over Sendromu) gibi durumlarda tıbbi beslenme tedavisi.
                </p>
              </div>
              <div className="bg-primary-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Gebelik ve Emzirme Dönemi Beslenmesi</h3>
                <p className="text-gray-700 leading-relaxed">
                  Anne ve bebek sağlığı için özel beslenme programları.
                </p>
              </div>
              <div className="bg-primary-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Sporcu Beslenmesi</h3>
                <p className="text-gray-700 leading-relaxed">
                  Performans artışı, kas kütlesi kazanımı.
                </p>
              </div>
              <div className="bg-primary-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Kurumsal Çalışan Beslenmesi</h3>
                <p className="text-gray-700 leading-relaxed">
                  Ofis çalışanlarına özel pratik beslenme planları.
                </p>
              </div>
            </div>
          </section>

          {/* Çalışma Yaklaşımı */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Çalışma Yaklaşımı</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Beslenme danışmanlığı sürecinde amaç; kısa vadeli sonuçlardan ziyade, sürdürülebilir ve uygulanabilir beslenme alışkanlıkları kazandırmaktır. Her danışan için süreç; mevcut sağlık durumu, beslenme öyküsü, günlük yaşam koşulları ve hedefler doğrultusunda yapılandırılır. Hazırlanan planlar; katı kurallar yerine, danışanın yaşamına uyum sağlayabilecek esneklikte ilerler.
            </p>
          </section>
        </div>

        {/* Cross-Reference Section */}
        <section className="bg-gradient-to-br from-pink-50 via-primary-50 to-purple-50 p-8 rounded-2xl mb-12 border-2 border-primary-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Unutmayın: Yeme Davranışı Duygularla Başlar.
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-center">
              Beslenme planınız ne kadar mükemmel olursa olsun, eğer stres, kaygı veya duygusal yeme örüntülerini çözmezsek, kalıcı sonuç almanız zorlaşır. En yüksek başarıyı yakalamak için psikolog desteği ile beslenme danışmanlığını birleştirmenizi öneriyoruz.
            </p>
            <div className="text-center">
              <Link
                href="/psikolog"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-600 to-primary-600 text-white rounded-lg font-semibold hover:from-pink-700 hover:to-primary-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Yeme Davranışı Terapisi Hakkında Bilgi Alın
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* Bize Ulaşın */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white p-8 rounded-2xl mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Bize Ulaşın!</h2>
          <p className="text-lg text-primary-100 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
            "Sağlığınızı ve yaşam kalitenizi bir bütün olarak ele alıyoruz. Bedensel ihtiyaçlarınız kadar, zihinsel ve duygusal dengenizi de önemsiyoruz. Beslenme, yaşam tarzı ve kişisel alışkanlıklarınızı bir arada değerlendirerek size özel, sürdürülebilir ve keyifli bir yolculuk tasarlıyoruz. Hazırsanız, gelin ilk adımı birlikte atalım."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/randevu"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Ön Başvuru Formunu Doldur
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              <MessageCircle className="mr-2" size={20} />
              WhatsApp İletişim
            </Link>
            <Link
              href="mailto:dyt.psk.elifnazoksuz@gmail.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              <Mail className="mr-2" size={20} />
              E-posta Gönder
            </Link>
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
