"use client";

import { motion } from "framer-motion";
import { Quote, Sparkles, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ayşe K.",
    text: "Sadece kilo vermedim, yemekle ilişkim değişti. Artık daha bilinçli ve dengeli bir yaklaşımım var.",
    gradient: "from-blue-50 to-blue-100/50",
  },
  {
    name: "Mehmet Y.",
    text: "Online görüşmeler çok pratik oldu. Hem beslenme hem de psikolojik destek almak harika bir deneyimdi.",
    gradient: "from-primary-50 to-primary-100/50",
  },
  {
    name: "Zeynep A.",
    text: "Duygusal yeme konusunda çok yardımcı oldu. Artık stresli olduğumda yemek yemek yerine başka yöntemler kullanıyorum.",
    gradient: "from-pink-50 to-pink-100/50",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50/50 relative overflow-hidden">
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
          className="absolute top-20 right-20 w-48 h-48 border border-primary-200/15 rounded-full"
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
          className="absolute bottom-20 left-20 w-40 h-40 border border-pink-200/15 rounded-full"
        />
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
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">Danışan Yorumları</span>
          </div>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Danışanlarım yalnızca kilo değil, alışkanlık ve farkındalık kazanıyor.
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Danışan Yorumları
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className={`bg-gradient-to-br ${testimonial.gradient} to-white p-6 md:p-8 rounded-2xl shadow-soft hover:shadow-elegant-lg transition-all duration-500 border border-gray-100/50 h-full relative overflow-hidden`}>
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 md:top-6 md:right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <Quote className="text-primary-600" size={48} />
                </div>
                
                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex gap-1 mb-3 md:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-yellow-400" size={16} />
                    ))}
                  </div>
                  
                  <Quote className="text-primary-300 mb-3 md:mb-4" size={24} />
                  <p className="text-gray-700 leading-relaxed mb-4 md:mb-6 italic text-base md:text-lg">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base flex-shrink-0">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="text-primary-600 font-semibold text-sm md:text-base">
                      {testimonial.name}
                    </div>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute bottom-0 right-0 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-tl from-primary-200/20 to-transparent rounded-tl-full"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
