import Script from "next/script";

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Elif Naz Öksüz",
    "jobTitle": "Diyetisyen & Psikolog",
    "description": "Diyetisyen ve psikolog kimliğimle, beslenme danışmanlığı, psikolojik destek ve psikonütrisyon temelli bütüncül bir süreç sunuyorum.",
    "url": "https://elifnazoksuz.com",
    "image": "https://elifnazoksuz.com/images/elif-naz-oksuz.jpg",
    "sameAs": [
      "https://instagram.com/elifnazoksuz",
      "https://youtube.com/@elifnazoksuz",
      "https://twitter.com/elifnazoksuz"
    ],
    "email": "dyt.psk.elifnazoksuz@gmail.com",
    "telephone": "+905376118096",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "TR"
    },
    "knowsAbout": [
      "Beslenme Danışmanlığı",
      "Psikolojik Destek",
      "Psikonütrisyon",
      "Bilişsel Davranışçı Terapi",
      "Online Danışmanlık",
      "Duygusal Yeme",
      "Yeme Bozuklukları",
      "Kilo Yönetimi",
      "Stres Yönetimi"
    ],
    "offers": [
      {
        "@type": "Service",
        "name": "Bireysel Beslenme Danışmanlığı",
        "description": "Beslenmeyi yalnızca listeler üzerinden değil, yaşam tarzı, günlük rutinler ve bireysel ihtiyaçlar doğrultusunda ele alan yapılandırılmış bir destek sürecidir.",
        "provider": {
          "@type": "Person",
          "name": "Elif Naz Öksüz"
        },
        "serviceType": "Online Diyetisyen",
        "areaServed": "TR",
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://elifnazoksuz.com/diyetisyen"
        }
      },
      {
        "@type": "Service",
        "name": "Bireysel Psikolojik Destek",
        "description": "Bilişsel Davranışçı Terapi (BDT) yaklaşımı ile yaşadığınız zorlanmaları anlamlandırmanıza ve daha işlevsel baş etme yolları geliştirmenize alan açan profesyonel bir destek sürecidir.",
        "provider": {
          "@type": "Person",
          "name": "Elif Naz Öksüz"
        },
        "serviceType": "Online Psikolog",
        "areaServed": "TR",
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://elifnazoksuz.com/psikolog"
        }
      },
      {
        "@type": "Service",
        "name": "Bütüncül Psikonütrisyon Programları",
        "description": "Yeme davranışını yalnızca ne yediğimiz üzerinden değil; nasıl, ne zaman, neden ve hangi duyguyla yediğimiz üzerinden ele alan bütüncül bir yaklaşımdır.",
        "provider": {
          "@type": "Person",
          "name": "Elif Naz Öksüz"
        },
        "serviceType": "Psikonütrisyon",
        "areaServed": "TR",
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://elifnazoksuz.com/psikonutrisyon"
        }
      }
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Elif Naz Öksüz - Diyetisyen & Psikolog",
    "url": "https://elifnazoksuz.com",
    "description": "Online beslenme danışmanlığı ve psikolojik destek hizmetleri",
    "inLanguage": "tr-TR",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://elifnazoksuz.com/blog?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <Script
        id="organization-schema"
        strategy="beforeInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="website-schema"
        strategy="beforeInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
