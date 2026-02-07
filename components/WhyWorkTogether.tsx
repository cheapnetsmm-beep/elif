"use client";

import { motion } from "framer-motion";
import { Brain, FlaskConical, MessageCircle, Leaf, Sparkles } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Zihin & Beden Bütünlüğü",
    description: "Sağlık, bedensel ve psikolojik süreçlerin birbirinden bağımsız ele alınamayacağı bir bütündür.",
    gradient: "from-blue-100 to-blue-50",
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: FlaskConical,
    title: "Bilimsel ve Kişiye Özel Yaklaşım",
    description: "Güncel bilimsel kanıtlar ve mesleki etik ilkeler temel alınarak yürütülür.",
    gradient: "from-primary-100 to-primary-50",
    iconColor: "text-primary-600",
    bgColor: "bg-primary-50",
  },
  {
    icon: MessageCircle,
    title: "Online & Gizli Görüşme",
    description: "Zaman ve mekân esnekliği sağlarken, profesyonel çerçeve ve süreklilik korunur.",
    gradient: "from-purple-100 to-purple-50",
    iconColor: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Leaf,
    title: "Sürdürülebilir Değişim",
    description: "Hedefimiz kısa vadeli çözümler yerine uzun vadede sürdürebilir davranış değişiklikleri kazanmaktır.",
    gradient: "from-green-100 to-green-50",
    iconColor: "text-green-600",
    bgColor: "bg-green-50",
  },
];

export default function WhyWorkTogether() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-primary-50/30 to-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #14b8a6 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}></div>
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
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">Neden Birlikte Çalışmalıyız?</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Neden Birlikte Çalışmalıyız?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Bütüncül bir yaklaşımla sağlık hedeflerinize ulaşın
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className={`bg-gradient-to-br ${feature.gradient} to-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-soft hover:shadow-elegant-lg transition-all duration-500 border border-gray-100/50 h-full relative overflow-hidden`}>
                  {/* Decorative Background Pattern */}
                  <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 opacity-5">
                    <div className="w-full h-full bg-gradient-to-br from-gray-400 to-transparent rounded-full blur-2xl"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${feature.gradient} rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                      <Icon className={feature.iconColor} size={28} />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-primary-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-xl md:rounded-2xl transition-opacity duration-500`}></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
