"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Brain, Heart, UtensilsCrossed, Sparkles } from "lucide-react";

export default function WhyTwoExpertise() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-primary-50/30 to-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-[0.02]">
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
          className="absolute top-20 right-10 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl"
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
          className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-accent-pink/20 rounded-full blur-3xl"
        />
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
            <Sparkles className="text-primary-500" size={20} />
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">Geleceğin Sağlık Yaklaşımı</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Neden İki Uzmanlık?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Zihin ve beden bir bütündür. En kalıcı sonuçlar, bu iki alanın birlikte ele alınmasıyla gelir.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Why Two Expertise */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-soft border border-gray-100 relative overflow-hidden group">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary-50/50 to-transparent rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-pink-50/30 to-transparent rounded-tr-full"></div>
              
              {/* Subtle Pattern */}
              <div className="absolute inset-0 opacity-[0.02]">
                <div className="absolute inset-0" style={{
                  backgroundImage: `linear-gradient(45deg, #14b8a6 1px, transparent 1px), linear-gradient(-45deg, #14b8a6 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }}></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  İki Uzmanlık, Bir Bütüncül Çözüm
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Beslenme ve psikoloji birbirinden ayrı düşünülemez. Yeme davranışlarımızın kökeni çoğunlukla duygusal ve psikolojik faktörlerde yatar. Aynı şekilde, bedenimizin ihtiyaçları zihinsel sağlığımızı doğrudan etkiler.
                </p>
                <div className="space-y-4">
                  <motion.div 
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-primary-50/50 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <UtensilsCrossed className="text-primary-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Beslenme Danışmanlığı</h4>
                      <p className="text-gray-600 text-sm">
                        Doğru besinleri, doğru zamanda ve doğru miktarda almanız için rehberlik eder.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-pink-50/50 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-pink-50 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <Heart className="text-pink-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Psikolojik Destek</h4>
                      <p className="text-gray-600 text-sm">
                        Duygusal yeme, stres ve kaygı gibi faktörleri anlamlandırmanıza yardımcı olur.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-purple-50/50 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <Brain className="text-purple-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Psikonütrisyon</h4>
                      <p className="text-gray-600 text-sm">
                        İki alanı birleştirerek kalıcı ve sürdürülebilir değişim sağlar.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white p-8 rounded-3xl shadow-elegant-lg relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
              
              {/* Subtle Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '25px 25px'
                }}></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">
                  Birlikte Çalışmanın Avantajları
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-primary-50 leading-relaxed">
                      <strong>Duygusal yeme döngüsünü kırma:</strong> Stres, kaygı veya üzüntü anlarında neden yemek yediğinizi anlayıp, daha sağlıklı baş etme yolları geliştirebilirsiniz.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-primary-50 leading-relaxed">
                      <strong>Kalıcı alışkanlık değişimi:</strong> Sadece ne yediğinizi değil, neden yediğinizi de değiştirerek sürdürülebilir sonuçlar elde edersiniz.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-primary-50 leading-relaxed">
                      <strong>Bütüncül iyileşme:</strong> Beden ve zihin birlikte iyileşir, yaşam kaliteniz her açıdan artar.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-primary-50 leading-relaxed">
                      <strong>Kişiye özel yaklaşım:</strong> Her iki uzmanlık alanından gelen bilgiler birleşerek size en uygun çözümü oluşturur.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-soft border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Örnek Senaryo
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Stresli olduğunuzda abur cubura yöneliyorsunuz. Sadece diyet listesi bu davranışı değiştirmez. Psikolojik destek ile stres yönetimi öğrenirken, beslenme danışmanlığı ile sağlıklı alternatifler geliştirirsiniz. İkisi birlikte kalıcı çözüm sağlar.
              </p>
              <Link
                href="/psikonutrisyon"
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 mt-4 group"
              >
                Psikonütrisyon Hakkında Daha Fazla
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <Link
            href="/hizmetler"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl font-semibold hover:from-primary-700 hover:to-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Tüm Hizmetlerimizi Keşfedin
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
