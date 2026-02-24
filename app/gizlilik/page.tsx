import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: "Elif Naz Öksüz - Diyetisyen & Psikolog web sitesi gizlilik politikası. Kişisel verilerinizin nasıl toplandığı ve korunduğu.",
};

export default function GizlilikPage() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 font-medium"
        >
          ← Ana Sayfaya Dön
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">Gizlilik Politikası</h1>
        <p className="text-gray-500 text-sm mb-10">Son güncelleme: Ocak 2026</p>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Genel Bilgiler</h2>
            <p className="leading-relaxed">
              Bu web sitesi, Elif Naz Öksüz (“biz”, “bizim”) tarafından işletilmektedir. Gizliliğinize saygı duyuyoruz. Bu politika, sitede toplanan kişisel verilerin nasıl kullanıldığını ve korunduğunu açıklamaktadır.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Toplanan Bilgiler</h2>
            <p className="leading-relaxed mb-3">
              Aşağıdaki durumlarda kişisel bilgileriniz toplanabilir:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>İletişim formu veya randevu talebi doldurduğunuzda (ad, e-posta, telefon)</li>
              <li>E-bülten aboneliği için e-posta adresinizi verdiğinizde</li>
              <li>Tarayıcı ve cihaz bilgileri (çerezler ve benzeri teknolojiler aracılığıyla)</li>
            </ul>
            <p className="leading-relaxed mt-3">
              Bu bilgiler yalnızca hizmet sunumu, iletişim ve yasal yükümlülükler çerçevesinde kullanılır.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Bilgilerin Kullanımı</h2>
            <p className="leading-relaxed">
              Toplanan veriler; randevu ve danışmanlık taleplerinizi yanıtlamak, e-bülten göndermek, site deneyimini iyileştirmek ve yürürlükteki mevzuata uyum sağlamak amacıyla kullanılır. Verileriniz, açık rızanız olmadan üçüncü taraflarla paylaşılmaz (yasal zorunluluklar hariç).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Çerezler (Cookies)</h2>
            <p className="leading-relaxed">
              Site, ziyaretinizi analiz etmek ve kullanıcı deneyimini geliştirmek amacıyla çerez kullanabilir. Tarayıcı ayarlarınızdan çerezleri kısıtlayabilir veya devre dışı bırakabilirsiniz; bu durumda sitenin bazı özellikleri düzgün çalışmayabilir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Veri Güvenliği</h2>
            <p className="leading-relaxed">
              Kişisel verilerinizin güvenliği için uygun teknik ve idari önlemler alınmaktadır. Verileriniz yalnızca yetkili kişiler tarafından ve gerektiği sürece işlenir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Haklarınız</h2>
            <p className="leading-relaxed">
              6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında, kişisel verilerinize erişim, düzeltme, silme talep etme ve işlenmesine itiraz etme haklarına sahipsiniz. Bu talepleriniz için{" "}
              <a href="mailto:dyt.psk.elifnazoksuz@gmail.com" className="text-primary-600 hover:underline">
                dyt.psk.elifnazoksuz@gmail.com
              </a>{" "}
              adresi üzerinden bizimle iletişime geçebilirsiniz.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. İletişim</h2>
            <p className="leading-relaxed">
              Gizlilik politikasına dair sorularınız için:{" "}
              <a href="/iletisim" className="text-primary-600 hover:underline">
                İletişim
              </a>{" "}
              sayfamızdan veya{" "}
              <a href="mailto:dyt.psk.elifnazoksuz@gmail.com" className="text-primary-600 hover:underline">
                dyt.psk.elifnazoksuz@gmail.com
              </a>{" "}
              üzerinden bize ulaşabilirsiniz.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            ← Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </div>
  );
}
