Berikut adalah draf `README.md` yang lengkap dan siap pakai untuk proyek **Streamlit Launcher**, dengan penyesuaian konteks agar relevan digunakan bersama **Google Antigravity** (IDE berbasis VS Code dengan kemampuan AI agentic).

README ini menggabungkan informasi dari PyPI, statistik unduhan terbaru, catatan rilis v4.0.1, serta detail teknis dan profil pengembang.

---

# Streamlit Launcher for Antigravity

> **Jalankan, kelola, dan analisis aplikasi Streamlit langsung dari lingkungan Antigravity — tanpa perlu berpindah terminal.**

[![PyPI version](https://img.shields.io/badge/pypi-4.0.1-blue.svg)](https://pypi.org/project/streamlit-launcher/) [![Total Downloads](https://img.shields.io/badge/downloads-22.5k%2B-brightgreen.svg)](https://pepy.tech/projects/streamlit-launcher) [![Python](https://img.shields.io/badge/python-3.7%2B-blue.svg)]() [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]()

---

## 📖 Tentang Proyek

**Streamlit Launcher** adalah alat GUI ringan yang dirancang untuk mempermudah alur kerja *Data Scientist*, *Machine Learning Engineer*, dan peneliti dalam menjalankan serta mengelola aplikasi Streamlit secara lokal. 

Versi 4.0.1 telah berkembang menjadi platform **no-code** yang mengintegrasikan Streamlit, deep learning, dan machine learning dalam satu lingkungan terpadu, memungkinkan pengguna melatih model, memvisualisasikan data, dan melakukan tugas analitik tanpa menulis kode.

Dalam konteks **Google Antigravity** — IDE berbasis VS Code dengan agen AI bawaan — Launcher ini berfungsi sebagai *companion tool* yang memungkinkan Anda menjalankan *preview* aplikasi Streamlit secara instan dari dalam editor, tanpa harus membuka terminal terpisah.

---

## ✨ Fitur Utama (v4.0.1)

| Kategori | Fitur | Deskripsi Singkat |
|---|---|---|
| **Visualisasi** | Stock Chart & Chart Lengkap | Analisis tren saham dengan K-line chart interaktif |
| **Keamanan Data** | Enkripsi & Dekripsi CSV | Sistem keamanan data, manajemen data terenkripsi |
| **Bioinformatika** | Analisis DNA | Komposisi basa, pola motif, dan fitur sekuens |
| **Kesehatan** | Health Doctor | Pantau tekanan darah, kesehatan darah, diet, dan target berat |
| **Geospasial** | Data Peta | Peta interaktif, satellite view, dark mode, marker clustering |
| **API & Server** | API Key & Flask Server | Pembuatan API key, endpoint testing, dan server Flask terintegrasi |
| **Editor** | Pencarian & Pengaturan | Cari cepat di semua tabel; panel pengaturan UI yang fleksibel |
| **Mobile** | Dukungan Termux | Instalasi otomatis di Android melalui script khusus |
| **ML/AI** | Training Model | Latih model machine learning dan visualisasikan hasil tanpa kode |

---

## 🚀 Instalasi

### Prasyarat
- **Python** 3.7 atau lebih tinggi
- **pip** versi terbaru
- **Virtual environment** (sangat direkomendasikan)
- **Git** (opsional, untuk version control)

### Metode 1: Instalasi Cepat (Direkomendasikan)
```bash
pip install streamlit-launcher
```
Verifikasi:
```bash
streamlit-launcher --version
```

### Metode 2: Virtual Environment (Best Practice)
```bash
python -m venv streamlit_env

# Windows
streamlit_env\Scripts\activate
# macOS / Linux
source streamlit_env/bin/activate

pip install streamlit-launcher
```

### Metode 3: Development Mode
```bash
pip install streamlit-launcher[dev]
# atau
pip install streamlit-launcher pytest black flake8 mypy
```

### Metode 4: Dari Source (GitHub)
```bash
git clone https://github.com/royhtml/streamlit-launcher.git
cd streamlit-launcher
pip install -e .
```

### Metode 5: Termux (Android)
```bash
pkg update && pkg upgrade -y
pkg install python git clang cmake libffi openssl -y
pip install streamlit-launcher
```

> **Troubleshooting:** Jika terjadi *permission error*, gunakan `pip install --user streamlit-launcher`. Jika ada konflik dependensi, jalankan `pip install --upgrade --force-reinstall streamlit-launcher`.

---

## 🖥️ Penggunaan Dasar

### Menjalankan Launcher
```bash
# Mode default (port 8501)
streamlit_launcher

# Menentukan port kustom
streamlit_launcher --port 8502

# Host tertentu (misal: akses dari perangkat lain)
streamlit_launcher --host 0.0.0.0

# Debug mode
streamlit_launcher --debug true

# Membuka browser otomatis
streamlit_launcher --browser true

# Menjalankan aplikasi tertentu
streamlit_launcher --app my_app.py
```

### Opsi Command Line Lengkap
```bash
streamlit_launcher --help
```
```
Options:
  --port INTEGER   Port number to run the app (default: 8501)
  --host TEXT      Host address to bind to (default: localhost)
  --browser BOOLEAN  Auto-open browser
  --debug BOOLEAN    Enable debug mode
  --config PATH      Custom config file
  --app PATH         Specific Streamlit app to run
```

---

## 🧩 Integrasi dengan Google Antigravity

Google Antigravity adalah IDE AI-assisted berbasis VS Code yang memungkinkan pengembangan cepat melalui agen otonom. Streamlit Launcher melengkapi alur kerja ini dengan menyediakan **runtime launcher** yang dapat dipanggil langsung dari *task* atau *terminal* Antigravity.

### Alur Kerja yang Disarankan
1. **Buat aplikasi Streamlit** di dalam folder proyek Antigravity (misal: `app.py`).
2. **Jalankan Launcher** dari terminal terintegrasi Antigravity:
   ```bash
   streamlit_launcher --app app.py --port 8501
   ```
3. **Preview aplikasi** langsung di browser tanpa meninggalkan IDE.
4. **Iterasi cepat**: Agen Antigravity dapat memodifikasi kode, dan Launcher akan me-*reload* aplikasi secara otomatis (mode `--debug true`).

### Mengapa Menggunakan Launcher di Antigravity?
- **Zero-config**: Tidak perlu mengingat flag `streamlit run` yang panjang.
- **Port management**: Kelola beberapa instance Streamlit dengan mudah.
- **Konsisten**: Lingkungan yang sama antara *development* di Antigravity dan *deployment* lokal.

---

## 📦 Dependensi Teknis

| Komponen | Versi Minimum |
|---|---|
| Streamlit | 1.28.0 |
| pandas | 1.5.0 |
| numpy | 1.21.0 |
| plotly | 5.13.0 |
| scikit-learn | 1.2.0 |
| scipy | 1.9.0 |
| matplotlib | 3.5.0 |
| seaborn | 0.12.0 |

**Dependensi opsional:** `openpyxl`, `pyarrow`, `sqlalchemy`, `altair`, `bokeh`, `folium`, `xgboost`, `lightgbm`, `catboost`.

---

## 📊 Statistik & Komunitas

| Metrik | Nilai |
|---|---|
| Total Unduhan PyPI | **22.568+** |
| Unduhan 30 Hari Terakhir | **930** |
| Versi Terbaru | **4.0.1** (9 Nov 2025) |
| Lisensi | MIT |
| Author | **Dwi Bakti N Dev** |

---

## 👤 Pengembang

**Dwi Bakti N Dev** adalah pengembang perangkat lunak asal Indonesia yang dikenal sebagai pencipta utama Streamlit Launcher. Ia mulai mengembangkan proyek ini saat menempuh pendidikan di **Universitas Bina Sarana Informatika**, dengan tujuan menyederhanakan alur kerja analisis data bagi peneliti, mahasiswa, dan praktisi machine learning.

Ketertarikannya pada Python dan Streamlit mendorongnya untuk membangun Launcher sebagai alat GUI yang ringan namun kuat. Proyek ini kemudian dirilis sebagai paket open source di PyPI dengan lisensi MIT, dan terus diperbarui hingga versi 4.0.1 dengan fitur seperti grafik saham, analisis DNA, health doctor, keamanan CSV, API server, serta dukungan Termux.

> *“Saya ingin alat analisis data yang kuat bisa diakses tanpa harus menulis banyak kode. Streamlit Launcher adalah langkah kecil ke arah itu.”*

**Kontributor komunitas:** DwiDevelopes, katshinz, Vibe Coding.

---

## 🔗 Tautan Resmi

| Platform | Tautan |
|---|---|
| **PyPI** | [pypi.org/project/streamlit-launcher](https://pypi.org/project/streamlit-launcher/) |
| **GitHub** | [github.com/royhtml/streamlit-launcher](https://github.com/royhtml/streamlit-launcher) |
| **Statistik (Pepy)** | [pepy.tech/projects/streamlit-launcher](https://pepy.tech/projects/streamlit-launcher) |
| **Demo Online** | [stremlit-launcher.streamlit.app](https://stremlit-launcher.streamlit.app/) |
| **Google Antigravity** | [antigravity.google](https://antigravity.google/) |

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah **MIT License**. Lihat file [`LICENSE`](https://github.com/royhtml/streamlit-launcher/blob/main/LICENSE) untuk detailnya.

---

**Dibuat dengan ❤️ untuk komunitas data Indonesia 🇮🇩**  
*Streamlit Launcher — Data kompleks, insight jelas.*
