"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, UtensilsCrossed, Heart, Brain, Sparkles } from "lucide-react";

const services = [
  {
    icon: UtensilsCrossed,
    title: "Bireysel Beslenme Danışmanlığı",
    description: "Beslenmeyi yalnızca listeler üzerinden değil, yaşam tarzı, günlük rutinler ve bireysel ihtiyaçlar doğrultusunda ele alan yapılandırılmış bir destek sürecidir.",
    href: "/diyetisyen",
    color: "primary",
    gradient: "from-primary-100 to-primary-50",
    iconColor: "text-primary-600",
    bgGradient: "from-primary-500/10 to-primary-100/10",
  },
  {
    icon: Heart,
    title: "Bireysel Psikolojik Destek",
    description: "Bilişsel Davranışçı Terapi (BDT) yaklaşımı ile yaşadığınız zorlanmaları anlamlandırmanıza ve daha işlevsel baş etme yolları geliştirmenize alan açan profesyonel bir destek sürecidir.",
    href: "/psikolog",
    color: "accent-pink",
    gradient: "from-pink-100 to-pink-50",
    iconColor: "text-pink-600",
    bgGradient: "from-pink-500/10 to-pink-100/10",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #14b8a6 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 right-20 w-64 h-64 border-2 border-primary-200/30 rounded-full"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 left-20 w-48 h-48 border-2 border-pink-200/30 rounded-full"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-primary-100/20 to-pink-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="text-primary-500" size={20} />
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">Hizmetlerimiz</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Hizmetlerimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            İhtiyacınıza göre şekillenen bütüncül sağlık hizmetleri
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative"
              >
                {/* Card */}
                <div className={`relative bg-gradient-to-br ${service.gradient} to-white p-8 rounded-3xl shadow-soft hover:shadow-elegant-lg transition-all duration-500 border border-gray-100/50 h-full overflow-hidden`}>
                  {/* Background Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Decorative Corner Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/40 to-transparent rounded-bl-full opacity-50"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary-100/30 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Subtle Pattern Overlay */}
                  <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-500">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, #14b8a6 1px, transparent 0)`,
                      backgroundSize: '20px 20px'
                    }}></div>
                  </div>
                  
                  {/* Icon Container */}
                  <div className="relative z-10 mb-6">
                    <div className="relative inline-block">
                      <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg relative`}>
                        <Icon className={service.iconColor} size={36} />
                        {/* Icon Glow Effect */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10`}></div>
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-2 border-primary-100">
                        <Sparkles className="text-primary-500" size={14} />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <Link
                      href={service.href}
                      className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 group-hover:gap-3 transition-all duration-300"
                    >
                      Detaylı Bilgi
                      <ArrowRight className="ml-1 group-hover:translate-x-2 transition-transform duration-300" size={20} />
                    </Link>
                  </div>

                  {/* Decorative Corner */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 rounded-bl-full transition-opacity duration-500`}></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
