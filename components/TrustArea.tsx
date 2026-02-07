"use client";

import { motion } from "framer-motion";
import { GraduationCap, Lock, Leaf } from "lucide-react";

const trustPoints = [
  {
    icon: GraduationCap,
    title: "Akademik & Bilimsel Yaklaşım",
    description: "Güncel bilimsel kanıtlar ve mesleki etik ilkeler temel alınır.",
  },
  {
    icon: Lock,
    title: "Gizlilik & Etik İlke Vurgusu",
    description: "Tüm görüşmeler gizlilik ve etik sınırlar içinde yürütülür.",
  },
  {
    icon: Leaf,
    title: "Kısa Vadeli Değil Kalıcı Çözüm",
    description: "Hedefimiz uzun vadede sürdürebilir davranış değişiklikleri kazanmaktır.",
  },
];

export default function TrustArea() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-primary-600" size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {point.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}



