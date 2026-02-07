"use client";

import { motion } from "framer-motion";
import { Clock, Lock, Calendar, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Zaman & Mekân Bağımsız",
    description: "Bulunduğunuz yerden, size uygun zamanda görüşme yapabilirsiniz.",
    gradient: "from-blue-100 to-blue-50",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Lock,
    title: "Ev Konforunda Gizli Görüşme",
    description: "Kendi ortamınızda, rahat ve güvenli bir şekilde görüşme yapabilirsiniz.",
    gradient: "from-purple-100 to-purple-50",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: Calendar,
    title: "Daha Düzenli İletişim",
    description: "Online platform sayesinde daha sık ve düzenli takip mümkündür.",
    gradient: "from-primary-100 to-primary-50",
    iconBg: "bg-primary-100",
    iconColor: "text-primary-600",
  },
];

export default function WhyOnline() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-primary-50/20 to-white relative overflow-hidden">
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
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">Neden Online?</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Neden Online?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Online danışmanlığın avantajları
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group text-center"
              >
                <div className={`bg-gradient-to-br ${benefit.gradient} to-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-soft hover:shadow-elegant-lg transition-all duration-500 border border-gray-100/50 h-full`}>
                  <div className={`w-20 h-20 md:w-24 md:h-24 ${benefit.iconBg} rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                    <Icon className={benefit.iconColor} size={32} />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
