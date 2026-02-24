"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-primary-50/30 to-white">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #14b8a6 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Enhanced Gradient Orbs */}
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
          className="absolute top-20 left-10 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl gpu-accelerated"
          style={{ willChange: 'transform' }}
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
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-accent-pink/20 rounded-full blur-3xl gpu-accelerated"
          style={{ willChange: 'transform' }}
        />
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-accent-purple/15 rounded-full blur-3xl gpu-accelerated"
          style={{ willChange: 'transform' }}
        />
      </div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-32 right-32 w-64 h-64 border-2 border-primary-200/20 rounded-full"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-32 left-32 w-48 h-48 border-2 border-pink-200/20 rounded-full"
        />
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-primary-200/10 to-pink-200/10 rounded-2xl rotate-45"></div>
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-gradient-to-br from-purple-200/10 to-primary-200/10 rounded-2xl rotate-12"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center min-h-[70vh] md:min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Enhanced Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-200 shadow-sm"
            >
              <Sparkles className="text-primary-500" size={16} />
              <span className="text-xs font-semibold text-primary-600 uppercase tracking-[0.2em]">
                Online Psikolojik Destek & Beslenme Danışmanlığı
              </span>
            </motion.div>

            {/* Enhanced Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-3 md:space-y-4"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                Diyetisyen &<br />Psikolog
              </div>
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400 bg-clip-text text-transparent leading-[1.1] tracking-tight">
                Elif Naz Öksüz
              </div>
            </motion.h1>

            {/* Enhanced Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="pt-4 md:pt-6 pl-4 md:pl-6 relative"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-primary-300 rounded-full"></div>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 italic leading-relaxed font-medium">
                "Zihin neyle meşgulse, beden onu hisseder; beden neyle beslenirse, zihin ona göre yanıt verir."
              </p>
            </motion.div>

            {/* Enhanced Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl"
            >
              Diyetisyen ve psikolog kimliğimle, danışanın ihtiyacına göre beslenme danışmanlığı, psikolojik destek ve psikonütrisyon temelli bütüncül bir süreç sunuyorum.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.8 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              {["Bütüncül Yaklaşım", "Bilimsel Temelli", "Kişiye Özel"].map((feature, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2 bg-primary-50 px-4 py-2 rounded-full border border-primary-100"
                >
                  <CheckCircle2 className="text-primary-600" size={16} />
                  <span className="text-sm font-medium text-gray-700">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4"
            >
              <a
                href="/hizmetler"
                className="group inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm md:text-base"
              >
                Hizmetlerimiz
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </a>
              <a
                href="/randevu"
                className="group inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl font-semibold hover:from-primary-700 hover:to-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm md:text-base"
              >
                Online Görüşme Planla
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </a>
            </motion.div>
          </motion.div>

          {/* Enhanced Right Visual - Image Only */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            {/* Image with Frame */}
            <div className="relative w-full h-full min-h-[600px] rounded-[2rem] overflow-hidden border-4 border-white/90 shadow-2xl">
              <Image
                src="/ana.jpg"
                alt="Elif Naz Öksüz"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 0vw, 500px"
              />
              {/* Frame glow effect */}
              <div className="absolute inset-0 ring-4 ring-white/50 rounded-[2rem] pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
