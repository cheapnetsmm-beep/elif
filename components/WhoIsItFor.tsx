"use client";

import { motion } from "framer-motion";
import { Sparkles, CheckCircle2 } from "lucide-react";

const targetGroups = [
  {
    title: "Duygusal Yeme Yaşayanlar",
    description: "Stres, üzüntü veya yoğun duygular sırasında yeme davranışınız değişiyorsa.",
    gradient: "from-pink-50 to-pink-100/50",
    borderColor: "border-pink-200",
  },
  {
    title: "Kilo Kontrolünde Zorlananlar",
    description: "Tekrarlayan diyet döngülerinden yorulmuş ve kalıcı çözüm arayanlar.",
    gradient: "from-blue-50 to-blue-100/50",
    borderColor: "border-blue-200",
  },
  {
    title: "Yeme Farkındalığı Kazanmak İsteyenler",
    description: "Açlık-tokluk sinyallerini yeniden fark edebilmek isteyenler.",
    gradient: "from-primary-50 to-primary-100/50",
    borderColor: "border-primary-200",
  },
  {
    title: "Stres & Kaygı Kaynaklı Yeme Sorunu Olanlar",
    description: "Günlük stres ve kaygının yeme davranışınızı etkilediğini fark edenler.",
    gradient: "from-purple-50 to-purple-100/50",
    borderColor: "border-purple-200",
  },
  {
    title: "Diyet Yapıp Bırakanlar",
    description: "Katı kurallar ve yasaklar arasında sıkıştığını hissedenler.",
    gradient: "from-orange-50 to-orange-100/50",
    borderColor: "border-orange-200",
  },
  {
    title: "Bütüncül Sağlık Yaklaşımı İsteyenler",
    description: "Beden ve zihin sağlığını birlikte ele almak isteyenler.",
    gradient: "from-green-50 to-green-100/50",
    borderColor: "border-green-200",
  },
];

export default function WhoIsItFor() {
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
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="text-primary-500" size={20} />
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">Kimler İçin Uygun?</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Kimler İçin Uygun?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Kendinizi bu gruplardan birinde görüyor musunuz?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {targetGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className={`bg-gradient-to-br ${group.gradient} to-white p-5 md:p-6 rounded-xl md:rounded-2xl shadow-soft hover:shadow-elegant-lg transition-all duration-500 border-2 ${group.borderColor} h-full relative overflow-hidden`}>
                {/* Icon */}
                <div className="absolute top-3 right-3 md:top-4 md:right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <CheckCircle2 className="text-primary-600" size={40} />
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-primary-600 transition-colors duration-300 pr-10 md:pr-12">
                    {group.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {group.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${group.gradient} opacity-0 group-hover:opacity-20 rounded-xl md:rounded-2xl transition-opacity duration-500`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
