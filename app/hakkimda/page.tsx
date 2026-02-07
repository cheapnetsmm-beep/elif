import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Diyetisyen & Psikolog
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-600 mb-12">
            Elif Naz Öksüz
          </h2>
          
          {/* Professional Photo with Elegant Frame */}
          <div className="flex justify-center mb-12">
            <div className="relative group">
              {/* Soft Decorative Frame Elements */}
              <div className="absolute -inset-3 bg-gradient-to-br from-primary-50/20 via-accent-pink/10 to-primary-100/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="absolute -inset-1 bg-white/40 rounded-2xl"></div>
              
              {/* Image Container - Soft and Harmonious */}
              <div className="relative rounded-2xl overflow-hidden shadow-soft border-2 border-gray-100/80 group-hover:shadow-elegant transition-all duration-500 group-hover:scale-[1.01]">
                {/* Very Subtle Overlay for Harmony */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent z-10 pointer-events-none"></div>
                <Image
                  src="/images/elif1.jpeg"
                  alt="Elif Naz Öksüz - Diyetisyen & Psikolog"
                  width={400}
                  height={500}
                  className="object-cover w-[300px] h-[400px] md:w-[400px] md:h-[500px] relative z-0"
                  priority
                  style={{ filter: 'brightness(0.98) contrast(0.98) saturate(1.02)' }}
                />
              </div>
              
              {/* Minimal Corner Accents */}
              <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-primary-300/50 rounded-tl-lg opacity-50"></div>
              <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-primary-300/50 rounded-tr-lg opacity-50"></div>
              <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-primary-300/50 rounded-bl-lg opacity-50"></div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-primary-300/50 rounded-br-lg opacity-50"></div>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Kimdir?</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              2021 yılında Acıbadem Üniversitesi Beslenme ve Diyetetik bölümünden derece ile mezun oldum. Lisans eğitimim sırasında psikoloji alanına duyduğum ilgi doğrultusunda çift anadal programı ile psikoloji eğitimine başladım ve 2023 yılında Acıbadem Üniversitesi Psikoloji bölümünden mezun oldum.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Acıbadem Bakırköy ve Acıbadem Altunizade Hastanelerinde edindiğim klinik deneyimler, beslenme alanında uygulamaya dayalı bir bakış açısı kazanmamı sağladı. Psikoloji alanındaki uygulama deneyimlerimi ise Dünya Danışmanlık Merkezi ve Rehber Psikoloji bünyesinde sürdürdüm. Ayrıca Belgrad'da uluslararası klinik psikoloji staj programına katılarak farklı klinik yaklaşımları gözlemleme ve deneyimleme fırsatı buldum.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              DATEM'den aldığım Bilişsel Davranışçı Terapi (BDT) eğitimi doğrultusunda çalışmalarımı bu ekol çerçevesinde yürütüyorum.
            </p>
          </div>

          <div className="bg-primary-50 p-8 rounded-2xl border-l-4 border-primary-600">
            <p className="text-xl text-gray-800 italic leading-relaxed">
              "Bireyin iyilik halinin, bedensel ve psikolojik boyutların birbirinden ayrılamayacağı bütünsel bir dengeye dayandığına inanıyorum. Diyetisyen ve psikolog kimliğimle; beslenme danışmanlığı ile psikolojik desteği, ihtiyaca göre bağımsız disiplinler olarak veya bu iki alanın kesişim noktası olan psikonütrisyon temelinde entegre bir süreçle sunuyorum. Türkiye'de henüz yeni gelişmekte olan ve bütüncül bir yaklaşım içeren psikonütrisyon alanında, bu bakış açısını benimseyen bireylere, kişisel hedefleri ve yaşam dinamikleri doğrultusunda profesyonel bir rehberlik sunmayı amaçlıyorum."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


