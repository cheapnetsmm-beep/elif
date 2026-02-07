"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Online görüşmeler güvenli mi?",
    answer: "Evet, tüm görüşmeler güvenli online platformlar üzerinden gerçekleştirilir. Yüz yüze görüşmelerde geçerli olan gizlilik, etik sınırlar ve profesyonel sorumluluk aynı şekilde geçerlidir.",
  },
  {
    question: "Seans süresi ne kadar?",
    answer: "Standart görüşmeler 50 dakika sürmektedir. İlk değerlendirme görüşmesi biraz daha uzun olabilir.",
  },
  {
    question: "Diyet listesi zorlayıcı mı?",
    answer: "Hayır, yaklaşımımız katı kurallar ve yasaklar üzerine değil, esnek ve sürdürülebilir beslenme alışkanlıkları üzerine kuruludur. Planlarınız yaşam tarzınıza uyum sağlayacak şekilde hazırlanır.",
  },
  {
    question: "Psikolog + diyetisyen birlikte mi ilerliyor?",
    answer: "Evet, her iki kimliğimle de çalışabilirim. İhtiyacınıza göre beslenme danışmanlığı, psikolojik destek veya her ikisini birlikte sunabilirim.",
  },
  {
    question: "Süreç kaç hafta sürer?",
    answer: "Süreç danışanın ihtiyacına göre şekillenir. Bazı danışanlar için 6-8 görüşme yeterli olurken, bazıları için daha uzun bir süreç gerekebilir. İlk görüşmede birlikte değerlendiririz.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #14b8a6 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      {/* Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 border border-primary-200/20 rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 border border-pink-200/20 rounded-full"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sık Sorulan Sorular
          </h2>
          <p className="text-xl text-gray-600">
            Merak ettikleriniz için yanıtlar
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl overflow-hidden shadow-soft hover:shadow-elegant transition-all relative group"
            >
              {/* Decorative Left Border */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-primary-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Subtle Background Pattern */}
              <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-300">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, #14b8a6 1px, transparent 0)`,
                  backgroundSize: '15px 15px'
                }}></div>
              </div>
              
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gradient-to-r hover:from-primary-50/30 hover:to-transparent transition-all duration-300 relative z-10"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4 group-hover:text-primary-600 transition-colors duration-300">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  <div className={`w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center transition-all duration-300 ${
                    openIndex === index ? "bg-primary-600 rotate-180" : "group-hover:bg-primary-200"
                  }`}>
                    <ChevronDown
                      className={`flex-shrink-0 transition-all duration-300 ${
                        openIndex === index ? "text-white rotate-180" : "text-primary-600"
                      }`}
                      size={18}
                    />
                  </div>
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden relative z-10"
                  >
                    <div className="px-6 py-4 text-gray-600 leading-relaxed border-t border-gray-100 bg-gradient-to-b from-white to-primary-50/20">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



