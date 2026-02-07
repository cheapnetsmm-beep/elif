"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Sparkles, CheckCircle2, Gift } from "lucide-react";
import Toast from "./Toast";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name }),
      });

      const data = await response.json();

      if (response.ok) {
        setToast({ message: data.message, type: "success" });
        setEmail("");
        setName("");
      } else {
        setToast({ message: data.error || "Bir hata oluştu.", type: "error" });
      }
    } catch (error) {
      setToast({ message: "Bir hata oluştu. Lütfen tekrar deneyin.", type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-600 to-primary-700 text-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="text-white" size={20} />
              <span className="text-sm font-semibold text-white/90 uppercase tracking-wider">Ücretsiz Kaynaklar</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              E-bültenimize Abone Olun
            </h2>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Beslenme ve psikoloji hakkında güncel içerikler, ücretsiz kaynaklar ve özel indirimlerden haberdar olun.
            </p>

            {/* Special Offer Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/30">
              <Gift className="text-white" size={18} />
              <span className="text-sm font-semibold">İlk abonelere özel %20 indirim!</span>
            </div>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Adınız (Opsiyonel)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="E-posta adresiniz"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
                      <span>Gönderiliyor...</span>
                    </>
                  ) : (
                    <>
                      <Mail size={20} />
                      <span>Abone Ol</span>
                    </>
                  )}
                </button>
              </div>
              
              <p className="text-sm text-white/70 mt-4">
                Abone olarak{" "}
                <a href="/gizlilik" className="underline hover:text-white">
                  gizlilik politikamızı
                </a>{" "}
                kabul etmiş olursunuz.
              </p>
            </form>

            {/* Benefits List */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 max-w-3xl mx-auto">
              <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                <CheckCircle2 className="text-white flex-shrink-0 mt-0.5" size={20} />
                <div className="text-left">
                  <h4 className="font-semibold mb-1">Ücretsiz Kaynaklar</h4>
                  <p className="text-sm text-white/80">E-kitaplar, rehberler ve daha fazlası</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                <CheckCircle2 className="text-white flex-shrink-0 mt-0.5" size={20} />
                <div className="text-left">
                  <h4 className="font-semibold mb-1">Güncel İçerikler</h4>
                  <p className="text-sm text-white/80">Blog yazıları ve uzman görüşleri</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                <CheckCircle2 className="text-white flex-shrink-0 mt-0.5" size={20} />
                <div className="text-left">
                  <h4 className="font-semibold mb-1">Özel İndirimler</h4>
                  <p className="text-sm text-white/80">Kampanyalar ve özel fırsatlar</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
}

