import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Başlıklar — üstte tam genişlik */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
          Diyetisyen & Psikolog
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-primary-600 mb-12">
          Elif Naz Öksüz
        </h2>

        {/* Kimdir? + 3 paragraf ile fotoğraf yan yana, üst ve alt hizalı */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch mb-12">
          <div className="order-2 lg:order-1 flex flex-col prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 !mt-0">Kimdir?</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              2021 yılında Acıbadem Üniversitesi Beslenme ve Diyetetik bölümünden derece ile mezun oldum. Lisans eğitimim sırasında psikoloji alanına duyduğum ilgi doğrultusunda çift anadal programı ile psikoloji eğitimine başladım ve 2023 yılında Acıbadem Üniversitesi Psikoloji bölümünden mezun oldum.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Acıbadem Bakırköy ve Acıbadem Altunizade Hastanelerinde edindiğim klinik deneyimler, beslenme alanında uygulamaya dayalı bir bakış açısı kazanmamı sağladı. Psikoloji alanındaki uygulama deneyimlerimi ise Dünya Danışmanlık Merkezi ve Rehber Psikoloji bünyesinde sürdürdüm. Ayrıca Belgrad'da uluslararası klinik psikoloji staj programına katılarak farklı klinik yaklaşımları gözlemleme ve deneyimleme fırsatı buldum.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              DATEM'den aldığım Bilişsel Davranışçı Terapi (BDT) eğitimi doğrultusunda çalışmalarımı bu ekol çerçevesinde yürütüyorum.
            </p>
            <p className="text-sm text-gray-500 mt-auto">
              Sorularınız ve randevu için iletişim sayfamdan bana ulaşabilirsiniz.
            </p>
          </div>

          <div className="order-1 lg:order-2 flex justify-center items-center lg:justify-end lg:items-start min-h-[280px] lg:min-h-0">
            <div className="relative group shrink-0">
              <div className="absolute -inset-2 bg-gradient-to-br from-primary-50/30 to-primary-100/20 rounded-3xl blur-lg"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <Image
                  src="/images/elifnazhak.jpeg"
                  alt="Elif Naz Öksüz - Diyetisyen & Psikolog"
                  width={450}
                  height={560}
                  className="object-cover w-full max-w-[320px] md:max-w-[380px] h-auto aspect-[3/4]"
                  priority
                  sizes="(max-width: 1024px) 320px, 380px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Alıntı kutusu — altta tam genişlik, yatay */}
        <div className="bg-primary-50 p-6 rounded-2xl border-l-4 border-primary-600">
          <p className="text-lg text-gray-800 italic leading-relaxed max-w-none">
            "Bireyin iyilik halinin, bedensel ve psikolojik boyutların birbirinden ayrılamayacağı bütünsel bir dengeye dayandığına inanıyorum. Diyetisyen ve psikolog kimliğimle; beslenme danışmanlığı ile psikolojik desteği, ihtiyaca göre bağımsız disiplinler olarak veya bu iki alanın kesişim noktası olan psikonütrisyon temelinde entegre bir süreçle sunuyorum. Türkiye'de henüz yeni gelişmekte olan ve bütüncül bir yaklaşım içeren psikonütrisyon alanında, bu bakış açısını benimseyen bireylere, kişisel hedefleri ve yaşam dinamikleri doğrultusunda profesyonel bir rehberlik sunmayı amaçlıyorum."
          </p>
        </div>
      </div>
    </div>
  );
}
