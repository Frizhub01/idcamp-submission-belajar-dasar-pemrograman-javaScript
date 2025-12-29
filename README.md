# Submission: Belajar Dasar Pemrograman JavaScript (IDCamp 2025)

Selamat datang di repository kumpulan latihan dan submission saya untuk kelas **"Belajar Dasar Pemrograman JavaScript"** dari Dicoding. Repository ini berfungsi sebagai dokumentasi perjalanan belajar saya dalam menguasai logika pemrograman JavaScript, mulai dari konsep dasar hingga teknik lanjutan sesuai standar industri.

---

## Studi Kasus & Teknologi

Repository ini bukan hanya berisi satu aplikasi, melainkan kumpulan modul yang mendemonstrasikan penyelesaian masalah pemrograman (problem solving) menggunakan JavaScript.

### Studi Kasus
### 1. Menulis Komentar (`01-writing-comments`)
Latihan dasar untuk memahami tata cara penulisan komentar yang baik dalam kode.
* **Tugas:** Membuat komentar satu baris untuk *username* dan komentar banyak baris (*multi-line*) untuk menuliskan target belajar tahun ini.

### 2. Gaya Penulisan Kode (`02-code-style`)
Latihan memperbaiki (*refactoring*) kode agar sesuai dengan konvensi gaya penulisan JavaScript yang umum digunakan.
* **Tugas:** Memperbaiki kode yang berantakan dengan menerapkan aturan seperti penggunaan *semicolon*, indentasi 2 spasi, penggunaan variabel `const`, dan pemberian spasi yang tepat pada objek.

### 3. Pengujian Dasar (`03-writing-test`)
Pengenalan terhadap *Unit Testing* untuk memastikan fungsi berjalan dengan benar.
* **Tugas:** Menulis kode pengujian sederhana menggunakan modul bawaan `node:test` dan `node:assert` untuk memverifikasi hasil fungsi penjumlahan (`sum`).

### 4. Object-Oriented Programming (`optional-04-oop`)
Implementasi paradigma pemrograman berorientasi objek untuk membangun sistem yang terstruktur.
* **Studi Kasus:** Membuat **Sistem Manajemen Inventaris Barang**.
* **Fitur:** Menggunakan ES6 Class `Item` dan `Inventory` untuk menambah, menghapus, memperbarui, dan melihat daftar barang dalam inventaris.

### 5. Fungsi Rekursif (`optional-05-recursive`)
Penerapan teknik rekursi untuk menyelesaikan masalah matematika yang kompleks dengan kode yang lebih ringkas.
* **Tugas:** Membuat dua fungsi utama:
    1.  Menghitung nilai **Faktorial** dari bilangan bulat positif.
    2.  Menghasilkan **Deret Fibonacci** hingga elemen ke-n.

### 6. Pengujian Menyeluruh (`optional-06-full-coverage-testing`)
Tantangan lanjutan dalam pengujian perangkat lunak untuk mencapai *code coverage* yang maksimal.
* **Tugas:** Membuat skenario pengujian lengkap untuk fungsi `sum`, mencakup penanganan kasus negatif seperti input bukan angka (string) dan input angka negatif, guna memastikan aplikasi bebas bug.

### 7. Skenario Dunia Nyata (`optional-07-real-world-scenario`)
Implementasi logika bisnis yang mensimulasikan sistem aplikasi nyata.
* **Studi Kasus:** Membuat **Sistem Pengelolaan Pesanan Restoran**.
* **Fitur:** Mengelola data pesanan menggunakan *Array of Objects* dengan kemampuan:
    * Menambah pesanan dengan ID unik.
    * Menghitung total harga pesanan secara otomatis.
    * Memperbarui status pesanan (Menunggu, Diproses, Selesai).
    * Menghitung total pendapatan dari pesanan yang selesai.

### Teknologi yang Digunakan
* **JavaScript (ES6+):** Menggunakan fitur modern seperti *Arrow Function*, *Destructuring*, *Modules*, dan *Async/Await*.
* **Node.js:** Sebagai *Runtime Environment* untuk menjalankan kode JavaScript di sisi server/lokal.
* **Node Test Runner:** Framework pengujian bawaan Node.js untuk menjaga kualitas kode.

---

## Materi yang Dipelajari

Kelas ini ditujukan untuk individu yang ingin melangkah menjadi seorang Web Developer/Back-end developer menggunakan teknologi Node.js menggunakan standar kompetensi industri yang divalidasi oleh AWS. Di akhir kelas, siswa dapat menguasai dasar JavaScript untuk pengembangan aplikasi web menggunakan Node.js.

Berikut adalah detail materi yang telah dipelajari dan diterapkan dalam repository ini:

* **Persiapan Belajar**
    Pengenalan kelas dan apa saja yang akan dipelajari.

* **Gerbang Dunia JavaScript**
    Menggunakan Runtime Environment Browser, Node.js, Bun, atau Deno untuk menjalankan kode JavaScript di komputer secara lokal.

* **Mengarungi Lautan Sintaksis**
    Mengidentifikasi penggunaan sintaks yang tepat untuk membuat variabel, menentukan tipe data, operator, dan jenis komentar di JavaScript.

* **Bermain dengan Function**
    Menggunakan fungsi untuk mengabstraksikan kode JavaScript agar kode menjadi reusable.

* **Bukan Sembarang Data**
    Menggunakan struktur data seperti Object, Array, Map, dan Set secara efektif untuk mengelola data yang ada di dalam program.

* **Sang Pengatur Program**
    Mengorelasikan penggunaan sintaks kondisional, looping, dan penanganan eror untuk membentuk sebuah alur program.

* **Modularisasi Harmonis**
    Menggunakan ECMAScript Module untuk memecah kode ke dalam berkas JavaScript terpisah secara efektif. 

* **Menyelami Dunia OOP**
    Menafsirkan sebuah masalah yang ada di pemrograman dengan menggunakan paradigma Object-Oriented Programming.

* **Functional Programming**
    Memecahkan masalah pemrograman dengan menggunakan paradigma Functional Programming.

* **Asynchronous Process**
    Menggunakan callback, Promise, dan async-await untuk menangani proses asynchronous di JavaScript.

* **Code Quality**
    Menulis kode JavaScript dengan gaya penulisan yang konsisten, aman, dan teruji.

* **Evaluasi Pembelajaran**
    Ujian akhir kelas dan Submission (Proyek Akhir).

---

## Cara Menjalankan Kode

Pastikan **Node.js** sudah terinstal di komputer Anda. Karena proyek ini menggunakan format *ES Modules*, Anda dapat menjalankannya langsung melalui terminal.

1.  **Clone repository ini:**
    ```bash
    git clone [https://github.com/Frizhub01/nama-repo-anda.git](https://github.com/Frizhub01/nama-repo-anda.git)
    ```
2.  **Masuk ke folder proyek:**
    ```bash
    cd nama-repo-anda
    ```
3.  **Menjalankan Studi Kasus (Contoh: Real World Scenario):**
    ```bash
    node optional-07-real-world-scenario/main.js
    ```
4.  **Menjalankan Pengujian (Testing):**
    ```bash
    node --test optional-06-full-coverage-testing/index.test.js
    ```

---

## Penulis

* **Nama:** Muhamad Afriza
* **GitHub:** [@Frizhub01](https://github.com/Frizhub01)
* **Instagram:** [@frz_326](https://www.instagram.com/frz_326/)
* **Kredensial:** [Sertifikat Kelulusan Kelas JavaScript](https://www.dicoding.com/certificates/07Z6J7JQ2XQR)

Dibuat dengan semangat belajar sebagai bagian dari perjalanan di IDCamp.
