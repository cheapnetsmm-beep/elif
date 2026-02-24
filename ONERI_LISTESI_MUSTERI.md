# Site İyileştirme Önerileri — Müşteriye Sunum

Aşağıdaki maddeler **doğrudan bizim tarafımızdan** uygulanabilir, **siteye eklenmesi risk oluşturmayan** ve **%100 sorunsuz** kabul edilebilecek iyileştirmelerdir. Müşteriden ek içerik veya onay beklemeden hayata geçirilebilir.

---

## 1. Gizlilik Politikası sayfası
- **Durum:** Footer / E-bülten bölümünde "gizlilik politikamızı" linki **/gizlilik** sayfasına gidiyor; bu sayfa şu an **yok** (404).
- **Yapılacak:** **Gizlilik Politikası** sayfası oluşturulacak. Genel şablon metin (kişisel verilerin toplanması, kullanımı, çerezler, iletişim) ile doldurulacak; müşteri isterse metni sonradan güncelleyebilir.
- **Fayda:** Yasal uyum, kullanıcı güveni, mevcut linkin çalışır olması.

---

## 2. Özel 404 (Sayfa bulunamadı) sayfası
- **Durum:** Var olmayan bir URL’e girildiğinde varsayılan Next.js 404 ekranı görünüyor.
- **Yapılacak:** Markaya uyumlu, sade bir **“Sayfa bulunamadı”** sayfası tasarlanacak; **Ana Sayfaya Dön** butonu eklenecek.
- **Fayda:** Profesyonel görünüm, kullanıcının sitede kalması.

---

## 3. Sitemap güncellemesi
- **Durum:** **sitemap.xml** içinde bazı sayfalar ve blog yazıları eksik.
- **Yapılacak:**
  - **/duygusal-yeme** sayfası sitemap’e eklenecek.
  - Eksik blog yazıları eklenecek:  
    `zihinsel-yorgunluk-nedir`, `ne-zaman-psikologa-gitmek-gerekir`, `sinir-koymak`, `duygusal-yeme`, `surdurulebilir-beslenme-aliskanliklari`, `beden-algisi-ve-yeme-iliskisi`.
- **Fayda:** Arama motorlarının tüm önemli sayfaları bulması, daha iyi SEO.

---

## 4. Blog yazıları için SEO (meta açıklama)
- **Durum:** Her blog yazısı için ayrı **meta description** tanımlı değil; arama sonuçlarında genel veya kesilmiş metin çıkabiliyor.
- **Yapılacak:** Her blog slug’ı için **sayfa bazlı meta title ve description** (Next.js `generateMetadata`) eklenecek. İçerik mevcut başlık ve ilk paragraflardan türetilebilir.
- **Fayda:** Google’da daha anlamlı ve tıklanabilir snippet’ler.

---

## 5. Erişilebilirlik (accessibility) kontrolleri
- **Durum:** Bazı buton/link ve görsellerde **aria-label** veya **anlamlı alt metin** eksik olabilir.
- **Yapılacak:** Form etiketleri, “Abone Ol” / “Gönder” gibi butonlar ve öne çıkan görseller gözden geçirilecek; gerekli yerlere **aria-label** veya **alt** metni eklenecek.
- **Fayda:** Erişilebilir kullanım, ekran okuyucu uyumu.

---

## 6. Favicon kontrolü
- **Durum:** Tarayıcı sekmesinde görünen ikon (favicon) tanımlı mı kontrol edilecek.
- **Yapılacak:** **public** klasöründe uygun **favicon.ico** (ve gerekirse **apple-touch-icon**) varsa layout’a bağlanacak; yoksa standart bir ikon ile placeholder eklenebilir (müşteri sonra kendi logosu ile değiştirebilir).
- **Fayda:** Sekmede markanın görünür olması, profesyonel izlenim.

---

## Özet tablo

| # | Öneri                         | Etki        | Süre (tahmini) |
|---|------------------------------|------------|----------------|
| 1 | Gizlilik Politikası sayfası  | Yüksek     | Kısa           |
| 2 | Özel 404 sayfası             | Orta       | Kısa           |
| 3 | Sitemap güncellemesi         | Orta (SEO) | Kısa           |
| 4 | Blog meta description       | Orta (SEO) | Orta           |
| 5 | Erişilebilirlik düzenlemeleri| Orta       | Kısa           |
| 6 | Favicon kontrolü            | Düşük      | Çok kısa       |

---

**Not:** Tüm maddeler müşteri onayına sunulabilir; onay sonrası sırayla veya toplu şekilde uygulanabilir. İçerik gerektiren tek madde Gizlilik Politikası metnidir; bu da şablon ile doldurulup müşteri inisiyatifine bırakılabilir.
