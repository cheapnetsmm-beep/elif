import Link from "next/link";
import { ArrowRight, UtensilsCrossed, Heart, Brain } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Bütüncül Psikonütrisyon Programları",
    description: "Yeme davranışını yalnızca ne yediğimiz üzerinden değil; nasıl, ne zaman, neden ve hangi duyguyla yediğimiz üzerinden ele alan bütüncül bir yaklaşımdır. Beslenme danışmanlığı ve psikolojik desteği birleştirerek kalıcı ve sürdürülebilir sonuçlar sağlar.",
    href: "/psikonutrisyon",
    color: "accent-purple",
    featured: true,
  },
  {
    icon: UtensilsCrossed,
    title: "Online Beslenme Danışmanlığı",
    description: "Beslenmeyi yalnızca listeler üzerinden değil, yaşam tarzı, günlük rutinler ve bireysel ihtiyaçlar doğrultusunda ele alan yapılandırılmış bir destek sürecidir.",
    href: "/diyetisyen",
    color: "primary",
  },
  {
    icon: Heart,
    title: "Online Psikolojik Destek",
    description: "Bilişsel Davranışçı Terapi (BDT) yaklaşımı ile yaşadığınız zorlanmaları anlamlandırmanıza ve daha işlevsel baş etme yolları geliştirmenize alan açan profesyonel bir destek sürecidir.",
    href: "/psikolog",
    color: "accent-pink",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Hizmetlerimiz
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            İhtiyacınıza göre şekillenen bütüncül sağlık hizmetleri
          </p>
        </div>

        <div className="space-y-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isFeatured = service.featured;
            return (
              <div
                key={index}
                className={`${
                  isFeatured
                    ? "bg-gradient-to-br from-purple-50 via-primary-50 to-pink-50 border-2 border-purple-200"
                    : "bg-gradient-to-br from-white to-gray-50 border border-gray-100"
                } p-8 rounded-3xl shadow-soft hover:shadow-elegant-lg transition-all duration-300`}
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className={`w-20 h-20 ${
                    isFeatured ? "bg-gradient-to-br from-purple-400 to-primary-500" : `bg-${service.color}-100`
                  } rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`${
                      isFeatured ? "text-white" : `text-${service.color}-600`
                    }`} size={36} />
                  </div>
                  <div className="flex-1">
                    {isFeatured && (
                      <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 bg-purple-100 rounded-full">
                        <span className="text-xs font-semibold text-purple-700 uppercase tracking-wider">
                          ⭐ Önerilen
                        </span>
                      </div>
                    )}
                    <h2 className={`text-2xl ${isFeatured ? "md:text-3xl" : ""} font-bold text-gray-900 mb-4`}>
                      {service.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <Link
                      href={service.href}
                      className={`inline-flex items-center ${
                        isFeatured
                          ? "bg-gradient-to-r from-purple-600 to-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-primary-700"
                          : "text-primary-600 font-semibold hover:text-primary-700"
                      } transition-all duration-300`}
                    >
                      {isFeatured ? "Program Detayları" : "Detaylı Bilgi"}
                      <ArrowRight className="ml-1" size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
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



