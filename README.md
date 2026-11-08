# FullElektrik

FullElektrik için Next.js App Router ile geliştirilmiş, Türkçe ve responsive kurumsal web sitesi. Elektrik tesisatı, diafon sistemleri ve güvenlik kamerası hizmetlerini tanıtır.

## Teknolojiler

- Next.js 16
- React 19
- Tailwind CSS 4
- Manrope (yerel font)
- Vercel Web Analytics ve Speed Insights

## Başlangıç

```bash
npm install
npm run dev
```

Siteyi `http://localhost:3000` adresinde açabilirsiniz.

Üretim derlemesi:

```bash
npm run build
npm start
```

Lint kontrolü:

```bash
npm run lint
```

## Yayın Öncesi Ayarlar

İletişim bilgileri ve site adresi `lib/site.js` içinde tutulur. Bilgileri güncellemek için:

- `phone`: Görünen telefon numarası
- `whatsapp`: Ülke koduyla WhatsApp numarası, örneğin `905xxxxxxxxx`
- `email`: E-posta adresi
- `serviceAreas`: Hizmet verilen bölgeler
- `region`: Bölge adı
- `siteUrl`: Yayın adresi

alanlarını düzenleyin. `NEXT_PUBLIC_SITE_URL` ortam değişkeni tanımlanırsa `siteUrl` yerine bu değer kullanılır.

İletişim alanlarından biri boş bırakılırsa sitede gerçek olmayan bilgi gösterilmez; ilgili alanda düzenlenmesi gereken metin görünür. WhatsApp numarası tanımlanmadığında WhatsApp bağlantıları genel paylaşım ekranını açar.

## Vercel ile Yayınlama

Proje Vercel'e hazır yapılandırılmıştır (`vercel.json`). GitHub deposu Vercel'e bağlandığında `main` dalına yapılan her push otomatik olarak yayına alınır.

1. [vercel.com/new](https://vercel.com/new) adresinden `Samettalha/fullelektrik` deposunu içe aktarın.
2. Framework otomatik olarak Next.js seçilir; build ve output ayarlarını değiştirmeyin.
3. Ortam değişkenleri:
   - `NEXT_PUBLIC_SITE_URL` (isteğe bağlı): Özel alan adı için `https://www.alanadiniz.com`. Tanımlanmazsa Vercel'in üretim adresi otomatik kullanılır.
4. Yayın sonrası proje panelinden **Analytics > Enable** ve **Speed Insights > Enable** adımlarını izleyerek ziyaretçi ve performans verilerini görmeye başlayın.

Komut satırından yayınlamak için:

```bash
npx vercel login
npx vercel --prod
```

Analytics ve Speed Insights bileşenleri `app/layout.js` içine eklenmiştir; ek paket kurulumu gerekmez.

## İçerik ve Görseller

- Hizmet içerikleri `lib/services.js`, ana sayfa içerikleri `lib/content.js` dosyasındadır.
- Görseller `public/images` altında yer alır.
- Sosyal paylaşım görseli `public/images/og-image.png` dosyasıdır.
- Marka ikonu `app/icon.svg` dosyasındadır.

Görsel kaynakları:

- https://unsplash.com/photos/LMb98OOtoYU
- https://unsplash.com/photos/PkHf7BUWbtk
- https://unsplash.com/photos/GXLPLG3_Vf4
- https://unsplash.com/photos/ujSsIk5iZmA
- https://www.pexels.com/photo/modern-intercom-on-an-old-textured-wall-35603415

Manrope fontu SIL Open Font License kapsamında kullanılmaktadır.
