"use client";

import { motion } from "framer-motion";
import { Instagram, Youtube, Twitter, Sparkles } from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/dyt.psk.elifnazzoksuz",
    icon: Instagram,
    color: "from-[#E4405F] to-[#C13584]",
    hoverColor: "hover:from-[#E4405F] hover:to-[#C13584]",
    label: "@dyt.psk.elifnazzoksuz",
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@elifnazoksuz",
    icon: Youtube,
    color: "from-[#FF0000] to-[#CC0000]",
    hoverColor: "hover:from-[#FF0000] hover:to-[#CC0000]",
    label: "@elifnazoksuz",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/elifnazoksuz",
    icon: Twitter,
    color: "from-[#1DA1F2] to-[#0d8bd9]",
    hoverColor: "hover:from-[#1DA1F2] hover:to-[#0d8bd9]",
    label: "@elifnazoksuz",
  },
];

export default function SocialMedia() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
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
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="text-primary-500" size={20} />
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">Sosyal Medya</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Bizi Takip Edin
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Güncel içerikler, ipuçları ve paylaşımlar için sosyal medya hesaplarımızı takip edin
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className={`bg-gradient-to-br ${social.color} to-white p-8 rounded-3xl shadow-soft hover:shadow-elegant-lg transition-all duration-500 border border-gray-100/50 h-full relative overflow-hidden`}>
                  {/* Background Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${social.color} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/40 to-transparent rounded-bl-full"></div>
                  
                  {/* Icon Container */}
                  <div className="relative z-10 mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${social.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                      <Icon className="text-white" size={36} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                      {social.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {social.label}
                    </p>
                    <div className="flex items-center text-primary-600 font-semibold group-hover:gap-3 transition-all duration-300">
                      <span>Takip Et</span>
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.div>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}




