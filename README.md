# Remix CRUD – Oyun Koleksiyonu

Video oyunu ekleme, listeleme, güncelleme ve silme (CRUD) uygulaması. Remix + Netlify. Veriler tarayıcıda **localStorage** ile saklanır.

## Proje yapısı

- **app/Components** – StatCard, OyunForm, OyunList, OyunRow
- **app/Pages** – OyunPage (ana sayfa, state + localStorage)
- **app/Interfaces** – Oyun tipi, KATEGORI_SECENEKLERI (Aksiyon, Korku, RPG, vb.)
- **app/routes** – Remix route’ları (`_index.tsx`)

## Kullanılan teknolojiler

- Remix (React Router) v2
- TypeScript
- Bootstrap 5 (CDN) + özel mavi oyun teması
- Netlify (deploy)

## CRUD işlemleri

| İşlem | Açıklama |
|-------|----------|
| **Ekle** | Form ile yeni oyun (oyun adı, yapımcı, yıl, kategori) |
| **Listele** | Tüm oyunlar tabloda listelenir |
| **Güncelle** | "Düzenle" → formda düzenle → "Güncelle" |
| **Sil** | "Sil" butonu (onay ile) |

## Kurulum ve çalıştırma

```bash
npm install
npm run dev
```

Tarayıcıda: http://localhost:5173

## Build ve Netlify

```bash
npm run build
```

- Çıktı: `build/client`. Netlify’da Build command: `npm run build`, Publish directory: `build/client`.

## GitHub

Repo: [github.com/MuratElberKayaa/Remix-Crud---Oyun-Koleksiyonu](https://github.com/MuratElberKayaa/Remix-Crud---Oyun-Koleksiyonu)

## Netlify’a bağlama

1. [netlify.com](https://www.netlify.com) → **Sign up / Log in** (GitHub ile giriş önerilir).
2. **Add new site** → **Import an existing project** → **GitHub** → **Remix-Crud---Oyun-Koleksiyonu** repo’sunu seçin.
3. Build ayarları `netlify.toml` ile otomatik gelir: Build command: `npm run build`, Publish directory: `build/client`.
4. **Deploy site** ile yayına alın; canlı link **Site overview** veya **Domain management**’ta görünür.

Detaylı adımlar: **[NETLIFY_KURULUM.md](NETLIFY_KURULUM.md)**

## Lisans

Eğitim projesi – serbest kullanım.
