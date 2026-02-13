# Remix CRUD – Kitap Kütüphanesi

[dnm11remix.netlify.app](https://dnm11remix.netlify.app/) benzeri, özgün bir **Remix** CRUD uygulaması. Kitap ekleme, listeleme, güncelleme ve silme (CRUD) işlemleri yapılır; veriler tarayıcıda **localStorage** ile saklanır.

## Proje yapısı

- **app/Components** – StatCard, KitapForm, KitapList, KitapRow
- **app/Pages** – KitapPage (ana sayfa, state + localStorage)
- **app/Interfaces** – Kitap tipi ve `createKitap` helper
- **app/routes** – Remix route’ları (`_index.tsx`)

## Kullanılan teknolojiler

- Remix (React Router) v2
- TypeScript
- Bootstrap 5 (CDN)
- Netlify (deploy)

## CRUD işlemleri

| İşlem    | Açıklama |
|----------|----------|
| **Ekle** | Form ile yeni kitap (ad, yazar, yıl, kategori) |
| **Listele** | Tüm kitaplar tabloda listelenir |
| **Güncelle** | Satırdaki "Düzenle" ile formda düzenleyip "Güncelle" |
| **Sil** | "Sil" butonu ile kayıt silinir (onay ile) |

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

- Çıktı: `build/client` (Netlify bu klasörü yayınlar).
- Repo’yu Netlify’a bağlayıp otomatik deploy kullanabilirsiniz; `netlify.toml` zaten yapılandırıldı.

## Ekran görüntüsü

Proje çalıştıktan sonra bir ekran görüntüsü alıp **screenshots/** klasörüne ekleyin (gereklilik: en az 1 adet).

## GitHub ve Netlify (teslim)

1. **GitHub:** Yeni public repo oluşturun; bu klasörün içeriğini push edin. Teslim formuna repo linkini yazın.
2. **Netlify:** [app.netlify.com](https://app.netlify.com) → Add new site → Import from Git → Bu repo. Build: `npm run build`, Publish: `build/client`. Teslim formuna site linkini yazın.

Tüm gereksinimlerin listesi için **GEREKLILIKLER.md** dosyasına bakın.

## Lisans

Eğitim projesi – serbest kullanım.
