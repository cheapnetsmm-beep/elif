"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Calendar, X, Phone, Mail } from "lucide-react";
import FreeConsultationModal from "./FreeConsultationModal";

export default function FloatingButtons() {
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const whatsappNumber = "905376118096";
  const whatsappMessage = encodeURIComponent("Merhaba, randevu almak istiyorum.");

  useEffect(() => {
    // Show WhatsApp button after 3 seconds
    const timer = setTimeout(() => {
      setShowWhatsApp(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* WhatsApp Button */}
      <AnimatePresence>
        {showWhatsApp && (
          <motion.a
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-24 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-[#20BA5A] transition-colors duration-300 group"
            aria-label="WhatsApp ile iletişim"
          >
            <MessageCircle size={24} />
            <span className="absolute right-full mr-3 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              WhatsApp ile İletişim
            </span>
          </motion.a>
        )}
      </AnimatePresence>

      {/* Hemen Randevu Al Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Link
          href="/randevu"
          className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-full shadow-2xl flex items-center justify-center hover:from-primary-700 hover:to-primary-800 transition-all duration-300 group"
          aria-label="Hemen Randevu Al"
        >
          <Calendar size={28} />
          <span className="absolute right-full mr-3 px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Hemen Randevu Al
          </span>
        </Link>
      </motion.div>

      {/* Bize Ulaşın Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 left-6 z-50 px-4 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full shadow-2xl flex items-center gap-2 hover:from-pink-700 hover:to-purple-700 transition-all duration-300 font-semibold"
        aria-label="Bize Ulaşın"
      >
        <Phone size={20} />
        <span className="hidden sm:inline">Bize Ulaşın</span>
        <span className="sm:hidden">İletişim</span>
      </motion.button>

      {/* Free Consultation Modal */}
      <FreeConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

