"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, MessageCircle, ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            İletişim
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sorularınız veya randevu talepleriniz için benimle iletişime geçebilirsiniz.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid sm:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto"
        >
          <a
            href="mailto:dyt.psk.elifnazoksuz@gmail.com"
            className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
              <Mail className="text-primary-600" size={26} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">E-posta</h3>
            <span className="text-sm text-primary-600 break-all">dyt.psk.elifnazoksuz@gmail.com</span>
          </a>
          <a
            href="tel:+905376118096"
            className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
              <Phone className="text-primary-600" size={26} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Telefon</h3>
            <span className="text-sm text-primary-600">0537 611 80 96</span>
          </a>
          <a
            href="https://wa.me/905376118096?text=Merhaba,%20randevu%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-[#25D366]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#25D366]/20 transition-colors">
              <MessageCircle className="text-[#25D366]" size={26} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
            <span className="text-sm text-primary-600">0537 611 80 96</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-10"
        >
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors"
          >
            İletişim sayfasına git
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
