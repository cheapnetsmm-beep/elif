# Elif Naz Öksüz - Diyetisyen & Psikolog Website

Modern, profesyonel ve görsel olarak zengin bir Next.js 14 web sitesi.

## 🚀 Özellikler

- ✅ Next.js 14 (App Router)
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ Framer Motion (Animasyonlar)
- ✅ Responsive Design
- ✅ SEO Optimizasyonu (Sitemap, Robots.txt, Structured Data)
- ✅ Google Analytics 4 Entegrasyonu
- ✅ Form İşlevselliği (API Routes)
- ✅ Görsel Optimizasyon (Next.js Image)

## 📦 Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Development server'ı başlat
npm run dev

# Production build
npm run build
npm start
```

## 🔧 Yapılandırma

### Environment Variables

`.env.local` dosyası oluşturun:

```env
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Email Service (Opsiyonel)
# RESEND_API_KEY=re_xxxxxxxxxxxxx
```

### Görsel Ekleme

1. `public/images/` klasörüne görsellerinizi ekleyin
2. Hero bölümündeki placeholder'ı gerçek görselle değiştirin
3. `next.config.js` içinde image domain'lerini ekleyin (gerekirse)

## 📁 Proje Yapısı

```
├── app/
│   ├── api/              # API routes
│   ├── blog/             # Blog sayfaları
│   ├── diyetisyen/       # Diyetisyen sayfası
│   ├── psikolog/         # Psikolog sayfası
│   └── ...
├── components/           # React componentleri
├── public/               # Statik dosyalar
└── ...
```

## 🎨 Özelleştirme

- Renkler: `tailwind.config.ts` içinde `primary` ve `accent` renkleri
- İçerik: Her sayfa kendi klasöründe
- Stil: `app/globals.css` ve component dosyaları

## 📝 Notlar

- Form gönderimleri şu anda console'a loglanıyor. Production için email servisi entegrasyonu yapılmalı.
- Google Analytics için `NEXT_PUBLIC_GA_ID` environment variable'ı gerekli.
- Görseller için `public/images/` klasörünü kullanın.

## 🚀 Deployment

Vercel, Netlify veya başka bir hosting servisine deploy edebilirsiniz.

```bash
# Vercel
vercel

# Netlify
netlify deploy
```


