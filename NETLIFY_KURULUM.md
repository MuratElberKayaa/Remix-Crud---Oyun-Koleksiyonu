# Netlify ile Yayına Alma

## 1. Netlify hesabı

- [netlify.com](https://www.netlify.com) → **Sign up** veya **Log in**
- **Sign up with GitHub** ile giriş yapın (repo’ya erişim için en kolay yol)

---

## 2. Yeni site oluşturma

1. Netlify panelinde **Add new site** → **Import an existing project**
2. **Deploy with GitHub** (veya Git provider olarak GitHub) seçin
3. GitHub’dan erişim istenirse **Authorize Netlify** / **Configure Netlify on GitHub** ile izin verin
4. Repo listesinden **Remix-Crud---Oyun-Koleksiyonu** (veya `MuratElberKayaa/Remix-Crud---Oyun-Koleksiyonu`) seçin

---

## 3. Build ayarları

Projede `netlify.toml` olduğu için Netlify çoğu ayarı otomatik alır. Kontrol edin:

| Ayar | Değer |
|------|--------|
| **Branch to deploy** | `main` |
| **Build command** | `npm run build` |
| **Publish directory** | `build/client` |

Bu değerler `netlify.toml` ile geliyorsa **Deploy site** / **Deploy Remix-Crud---Oyun-Koleksiyonu** butonuna basın.

---

## 4. Deploy

- İlk deploy birkaç dakika sürebilir (bağımlılıklar indirilir, build alınır)
- Bittiğinde **Site is live** veya **Production deploy succeeded** mesajını görürsünüz
- **Site URL** veya **Domain management** kısmındaki link (örn. `https://rastgele-isim-12345.netlify.app`) sizin canlı sitenizdir

---

## 5. Sonraki güncellemeler

- GitHub’daki `main` dalına her **push** yaptığınızda Netlify otomatik yeni deploy başlatır
- Deploy’lar **Site overview** → **Deploys** sekmesinden takip edilir

---

## Sorun çıkarsa

- **Build failed:** Netlify → **Deploys** → ilgili deploy → **Deploy log** ile hata mesajına bakın
- **Node sürümü:** `netlify.toml` içinde `NODE_VERSION = "18"` tanımlı; gerekirse Netlify’da **Site settings** → **Environment** → **Environment variables** ile de kontrol edebilirsiniz
