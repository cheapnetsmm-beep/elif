"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, BookOpen } from "lucide-react";

const areas = [
  {
    title: "Psikonütrisyon nedir?",
    href: "/psikonutrisyon",
    gradient: "from-purple-50 to-purple-50",
  },
  {
    title: "Online diyet nasıl ilerler?",
    href: "/diyetisyen",
    gradient: "from-emerald-50 to-emerald-50",
  },
  {
    title: "Duygusal yeme ile baş etme",
    href: "/kendini-kesfet",
    gradient: "from-pink-50 to-pink-50",
  },
  {
    title: "Sağlıklı ilişki & beden algısı",
    href: "/kendini-kesfet",
    gradient: "from-blue-50 to-blue-50",
  },
  {
    title: "Davranış değişikliği temelli beslenme",
    href: "/psikonutrisyon",
    gradient: "from-emerald-50 to-emerald-50",
  },
];

export default function ExpertiseAreas() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
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
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <BookOpen className="text-primary-500" size={20} />
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">Mini Uzmanlık Alanları</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Mini Uzmanlık Alanları
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="group h-full"
            >
              <Link
                href={area.href}
                className={`block bg-gradient-to-br ${area.gradient} to-white p-4 md:p-6 rounded-lg md:rounded-xl shadow-soft hover:shadow-elegant-lg transition-all duration-500 border border-gray-100/50 group-hover:border-primary-200 relative overflow-hidden h-full flex items-center min-h-[80px] md:min-h-[100px]`}
              >
                {/* Decorative Icon */}
                <div className="absolute top-3 right-3 md:top-4 md:right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <Sparkles className="text-primary-600" size={24} />
                </div>
                
                <div className="relative z-10 flex items-center justify-between w-full">
                  <span className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300 pr-6 md:pr-8 flex-1">
                    {area.title}
                  </span>
                  <ArrowRight className="text-primary-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 flex-shrink-0" size={18} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
