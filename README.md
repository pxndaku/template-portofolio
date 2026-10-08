# 🎨 Portfolio Template — v1

Template portfolio pribadi yang modern dan responsif — cocok untuk desainer, developer, freelancer, atau mahasiswa yang mau tampil profesional. Dibuat dengan HTML + CSS + JavaScript murni: **tanpa framework, tanpa build step**. Upload ke hosting apapun dan langsung jalan.

Template ini berbahasa Inggris (standar template portfolio di Gumroad) — semua teks mudah diganti.

## ✨ Fitur

- 🌙 **Dark / light mode** toggle (tersimpan otomatis)
- ⌨️ Animasi teks ketikan di hero
- 🗂️ Filter kategori projects (All / UI-UX / Web / Mobile)
- 📱 Responsif penuh + menu mobile
- 📊 Skill bars animasi CSS
- 🕓 Timeline pengalaman
- 📬 Form kontak via email (mailto, tanpa backend)

## 📁 Struktur File

```
template-portfolio/
├── index.html      → struktur halaman
├── css/
│   └── style.css   → semua tampilan (termasuk dark mode)
├── js/
│   └── app.js      → data + logika (CONFIG, SKILLS, PROJECTS)
└── README.md       → file ini
```

## 🚀 Cara Pakai

1. Buka `index.html` di browser — langsung jalan.
2. Untuk online-kan: upload semua file ke Netlify / Vercel / GitHub Pages / hosting apapun.

## ✏️ Cara Kustomisasi

### 1. Nama, email & teks animasi
Buka `js/app.js`, edit `CONFIG`:
```js
const CONFIG = {
  name: "Namamu",
  email: "email@kamu.com",
  roles: ["UI/UX Designer", "Frontend Developer"],
};
```
Lalu ganti teks nama di `index.html` (hero, about, footer) dan link sosial media (`href="#"`).

### 2. Skills
Edit array `SKILLS` di `js/app.js`:
```js
{ name: "Figma", level: 90 },
```

### 3. Projects
Edit array `PROJECTS` di `js/app.js`. Setiap project:
```js
{
  title: "Judul Project",
  category: "UI/UX", // harus ada di FILTERS
  thumb: "linear-gradient(135deg,#6366f1,#a78bfa)", // warna thumbnail
  icon: "🛒",
  desc: "Deskripsi singkat...",
  tags: ["Figma", "Mobile"],
  demo: "https://link-demo.com",
  code: "https://github.com/...",
},
```
Untuk pakai gambar asli sebagai thumbnail, ganti `thumb` dengan URL gambar dan tambahkan di CSS: `background-size: cover;`.

### 4. Warna tema
Buka `css/style.css`, edit di `:root`:
```css
--primary: #6366f1; /* warna utama */
```

### 5. Pengalaman, testimoni, tentang
Edit langsung di `index.html` bagian `<!-- EXPERIENCE -->`, `<!-- TESTIMONIALS -->`, `<!-- ABOUT -->`.

## 📄 Lisensi

Bebas dipakai untuk 1 portfolio milikmu. Dilarang menjual ulang template ini apa adanya.
