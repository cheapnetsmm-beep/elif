import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingButtons from "@/components/FloatingButtons";
import StructuredData from "@/components/StructuredData";
import CookieBanner from "@/components/CookieBanner";
import dynamic from "next/dynamic";

// Lazy load Google Analytics
const GoogleAnalytics = dynamic(() => import("@/components/GoogleAnalytics"), {
  ssr: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elifnazoksuz.com"),
  title: {
    default: "Elif Naz Öksüz | Diyetisyen & Psikolog | Online Danışmanlık",
    template: "%s | Elif Naz Öksüz",
  },
  description: "Diyetisyen ve psikolog kimliğimle, beslenme danışmanlığı, psikolojik destek ve psikonütrisyon temelli bütüncül bir süreç sunuyorum. Online diyetisyen ve psikolog hizmetleri ile sağlıklı yaşam yolculuğunuzda yanınızdayım.",
  keywords: [
    "diyetisyen",
    "psikolog",
    "online danışmanlık",
    "psikonütrisyon",
    "beslenme danışmanlığı",
    "psikolojik destek",
    "bütüncül sağlık",
    "online diyetisyen",
    "online psikolog",
    "diyetisyen ankara",
    "psikolog ankara",
    "duygusal yeme",
    "beslenme terapisi",
    "bilişsel davranışçı terapi",
    "beslenme programı",
    "kilo verme",
    "sağlıklı beslenme",
  ],
  authors: [{ name: "Elif Naz Öksüz" }],
  creator: "Elif Naz Öksüz",
  publisher: "Elif Naz Öksüz",
  openGraph: {
    title: "Elif Naz Öksüz | Diyetisyen & Psikolog | Online Danışmanlık",
    description: "Online beslenme danışmanlığı ve psikolojik destek hizmetleri. Bütüncül sağlık yaklaşımı ile yanınızdayım.",
    type: "website",
    locale: "tr_TR",
    url: "https://elifnazoksuz.com",
    siteName: "Elif Naz Öksüz - Diyetisyen & Psikolog",
    images: [
      {
        url: "/images/elif-naz-oksuz.jpg",
        width: 1200,
        height: 630,
        alt: "Elif Naz Öksüz - Diyetisyen & Psikolog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elif Naz Öksüz | Diyetisyen & Psikolog",
    description: "Online beslenme danışmanlığı ve psikolojik destek hizmetleri",
    images: ["/images/elif-naz-oksuz.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://elifnazoksuz.com",
  },
  category: "health",
  classification: "Health & Wellness",
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
        {/* Preload critical resources */}
        <link rel="preload" href="/logos.png" as="image" />
      </head>
      <body>
        <StructuredData />
        <GoogleAnalytics />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
        <FloatingButtons />
        <CookieBanner />
      </body>
    </html>
  );
}


