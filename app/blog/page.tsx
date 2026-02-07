import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

// En yeni tarih önce (tarihe göre sıralı)
const blogPosts = [
  {
    id: "zihinsel-yorgunluk-nedir",
    title: "Zihinsel Yorgunluk Nedir? Belirtileri, Nedenleri ve Baş Etme Yolları",
    excerpt: "Zihinsel yorgunluk; yoğun düşünme, sürekli zihinsel uyarılma ve duygusal yüklenme sonucunda ortaya çıkar. Belirtileri, nedenleri ve başa çıkma yolları.",
    date: "30 Ocak 2026",
    category: "Psikoloji",
  },
  {
    id: "ne-zaman-psikologa-gitmek-gerekir",
    title: "Ne Zaman Psikoloğa Gitmek Gerekir?",
    excerpt: "Psikolojik destek almak yalnızca kriz anlarında değil; kendini tanımak, duygusal yükleri hafifletmek ve yaşam kalitesini artırmak için de başvurulabilecek bir süreçtir.",
    date: "30 Ocak 2026",
    category: "Psikoloji",
  },
  {
    id: "sinir-koymak",
    title: "Sınır Koymak ve Hayır Diyebilmek: Kendi Bahçeni Korumak",
    excerpt: "Sınır koymak, yalnızca başkalarına neye izin verip vermediğinizi anlatmak değildir. Aynı zamanda kendinize kim olduğunuzu ve neye değer verdiğinizi hatırlatma biçimidir.",
    date: "30 Ocak 2026",
    category: "Psikoloji",
  },
  {
    id: "bagirsak-beyin-ekseni",
    title: "Bağırsak-Beyin Ekseni: Ruh Hali ve Sağlık Üzerindeki Etkileri",
    excerpt: "Bağırsaklar 'ikinci beyin' olarak adlandırılır. Bağırsak sağlığının ruh halinizi ve genel sağlığınızı nasıl etkilediğini keşfedin.",
    date: "7 Ocak 2026",
    category: "Beslenme & Psikoloji",
  },
  {
    id: "demir-eksikligi",
    title: "Demir Eksikliği: Belirtileri, Nedenleri ve Eksikliği Nasıl Giderilir?",
    excerpt: "Sürekli yorgun musunuz? Solgun bir cildiniz mi var? Demir eksikliğinin belirtileri, nedenleri ve beslenme ile nasıl giderileceğini öğrenin.",
    date: "7 Ocak 2026",
    category: "Beslenme",
  },
  {
    id: "irade-degil-psikoloji",
    title: "İrade Değil Psikoloji: Yeme Davranışlarımızı Gerçekte Ne Yönetiyor?",
    excerpt: "Yeme davranışlarımızı gerçekten irade mi yönetiyor? Psikolog ve diyetisyen gözüyle yeme davranışlarının psikolojik ve biyolojik temellerini keşfedin.",
    date: "7 Ocak 2026",
    category: "Psikonütrisyon",
  },
  {
    id: "duygusal-yeme",
    title: "Duygusal Yeme ile Baş Etme Yöntemleri",
    excerpt: "Stres ve duyguların yeme davranışınızı nasıl etkilediğini ve bu durumla nasıl baş edebileceğinizi keşfedin.",
    date: "15 Mart 2025",
    category: "Psikonütrisyon",
  },
  {
    id: "surdurulebilir-beslenme",
    title: "Sürdürülebilir Beslenme Alışkanlıkları",
    excerpt: "Kısa vadeli diyetler yerine uzun vadede sürdürebileceğiniz beslenme alışkanlıkları nasıl geliştirilir?",
    date: "10 Mart 2025",
    category: "Beslenme",
  },
  {
    id: "beden-algisi",
    title: "Beden Algısı ve Yeme İlişkisi",
    excerpt: "Bedeninizle kurduğunuz ilişkinin yeme davranışınızı nasıl etkilediğini anlamak için rehber.",
    date: "5 Mart 2025",
    category: "Psikoloji",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sağlık, beslenme ve psikoloji üzerine yazılar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl shadow-soft hover:shadow-elegant-lg transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar size={16} />
                  <span>{post.date}</span>
                  <span className="text-primary-600 font-semibold">• {post.category}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
                >
                  Devamını Oku
                  <ArrowRight className="ml-1" size={20} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}


