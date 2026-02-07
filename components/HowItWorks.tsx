"use client";

import { motion } from "framer-motion";
import { FileSearch, ClipboardList, Calendar, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: FileSearch,
    title: "Ön görüşme & İhtiyaç Analizi",
    description: "İlk görüşmede mevcut durumunuz, hedefleriniz ve beklentileriniz detaylı şekilde değerlendirilir.",
  },
  {
    icon: ClipboardList,
    title: "Psikolojik + Beslenme Değerlendirmesi",
    description: "Kapsamlı bir değerlendirme ile bedensel ve psikolojik ihtiyaçlarınız belirlenir.",
  },
  {
    icon: Calendar,
    title: "Kişiye Özel Plan Oluşturma",
    description: "Değerlendirme sonuçlarına göre size özel, sürdürülebilir bir plan hazırlanır.",
  },
  {
    icon: CheckCircle2,
    title: "Düzenli Online Takip",
    description: "Süreç boyunca düzenli görüşmelerle ilerleme değerlendirilir ve plan güncellenir.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-gray-50 via-white to-primary-50/20 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #14b8a6 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-10 w-96 h-96 bg-primary-300/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-accent-pink/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Nasıl Çalışıyorum?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Süreç boyunca yanınızdayım
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-200 via-primary-400 to-primary-200 opacity-30"></div>

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="relative"
                >
                  <div className={`flex flex-col md:flex-row items-center gap-6 md:gap-8 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}>
                    {/* Mobile: Full width card */}
                    <div className="md:hidden w-full bg-gradient-to-br from-white to-primary-50/30 p-6 rounded-2xl shadow-soft border border-primary-100">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white shadow-lg flex-shrink-0">
                          <Icon size={24} />
                        </div>
                        <div className="flex-1">
                          <div className="text-primary-600 font-bold text-sm mb-1">
                            Adım {index + 1}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {step.description}
                      </p>
                    </div>

                    {/* Desktop: Split layout */}
                    <div className={`hidden md:flex flex-1 ${isEven ? "md:text-right" : "md:text-left"} ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                      <div className={`inline-block max-w-md ${isEven ? "md:text-right" : "md:text-left"}`}>
                        <div className={`flex items-center gap-4 mb-4 ${isEven ? "md:flex-row-reverse" : ""}`}>
                          <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <Icon size={32} />
                          </div>
                          <div>
                            <div className="text-primary-600 font-bold text-lg mb-1">
                              Adım {index + 1}
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                              {step.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-base">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Desktop: Center dot */}
                    <div className="hidden md:block w-20 h-20 bg-white rounded-full border-4 border-primary-600 relative z-10 shadow-lg flex items-center justify-center">
                      <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                    </div>
                    
                    {/* Desktop: Empty space */}
                    <div className="hidden md:block flex-1"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}



