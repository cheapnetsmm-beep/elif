"use client";

import Link from "next/link";
import { Instagram, Youtube, Twitter, Mail, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Elif Naz Öksüz</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Diyetisyen ve psikolog kimliğimle, beslenme danışmanlığı, psikolojik destek ve psikonütrisyon temelli bütüncül bir süreç sunuyorum.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/elifnazoksuz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-[#E4405F] hover:to-[#C13584] transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-[#E4405F]/50 border border-slate-700 hover:border-[#E4405F]"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://youtube.com/@elifnazoksuz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-[#FF0000] hover:to-[#CC0000] transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-[#FF0000]/50 border border-slate-700 hover:border-[#FF0000]"
                aria-label="YouTube"
              >
                <Youtube size={24} />
              </a>
              <a
                href="https://twitter.com/elifnazoksuz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-[#1DA1F2] hover:to-[#0d8bd9] transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-[#1DA1F2]/50 border border-slate-700 hover:border-[#1DA1F2]"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="text-xl font-bold mb-6">İletişim</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="mailto:dyt.psk.elifnazoksuz@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors duration-200">
                  <Mail size={18} className="flex-shrink-0" />
                  dyt.psk.elifnazoksuz@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+905376118096" className="flex items-center gap-2 hover:text-white transition-colors duration-200">
                  <Phone size={18} className="flex-shrink-0" />
                  0537 611 80 96
                </a>
              </li>
              <li>
                <a href="https://wa.me/905376118096?text=Merhaba,%20randevu%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors duration-200">
                  <MessageCircle size={18} className="flex-shrink-0" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Hızlı Linkler</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/hakkimda" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">
                  Hakkımda
                </Link>
              </li>
              <li>
                <Link href="/hizmetler" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">
                  Hizmetler
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">
                  İletişim
                </Link>
              </li>
              <li>
                <Link href="/randevu" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">
                  Randevu Al
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-bold mb-6">E-bülten</h4>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Ücretsiz kaynaklar, güncel içerikler ve özel indirimlerden haberdar olun.
            </p>
            <form 
              action="/api/newsletter" 
              method="POST"
              className="flex flex-col gap-2"
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const email = formData.get("email") as string;
                
                try {
                  const response = await fetch("/api/newsletter", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email }),
                  });
                  
                  const data = await response.json();
                  if (response.ok) {
                    alert(data.message);
                    e.currentTarget.reset();
                  } else {
                    alert(data.error);
                  }
                } catch (error) {
                  alert("Bir hata oluştu. Lütfen tekrar deneyin.");
                }
              }}
            >
              <input
                type="email"
                name="email"
                placeholder="E-posta adresiniz"
                required
                className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
              >
                Abone Ol
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Elif Naz Öksüz. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}


