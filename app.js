/**
 * ============================================================
 * TUGAS MANDIRI — PEMROGRAMAN INTERNET (JAVASCRIPT DASAR)
 * Program Studi : Pendidikan Sistem dan Teknologi Informasi
 * Universitas   : Universitas Pendidikan Indonesia
 * Study Case    : Sistem Poin & Keanggotaan Member Kedai Kopi
 * Berkas        : app.js (STARTER CODE MAHASISWA)
 * ============================================================
 *
 * PETUNJUK PENGERJAAN:
 * 1. Buka file index.html di browser (klik dua kali atau via Live Server).
 * 2. Buka tab Developer Tools dengan menekan tombol F12 -> pilih tab "Console".
 * 3. Kerjakan tugas ini secara bertahap dari AKTIVITAS 1 sampai AKTIVITAS 6
 *    dengan melengkapi bagian bertanda "// TODO:".
 * 4. Simpan progres pekerjaanmu dengan melakukan minimal 3 kali Git Commit
 *    sesuai panduan di PANDUAN_TUGAS_MANDIRI.md.
 * ============================================================
 */


// ============================================================
// AKTIVITAS 1: Setup Berkas & Integrasi JavaScript Eksternal
// ============================================================
// Menampilkan judul sistem ke tab Console (F12)
console.log("=== SISTEM POIN MEMBER KEDAI KOPI ===");

// TODO 1: Tulis satu baris console.log() untuk memastikan file app.js sudah terhubung!
// Contoh output: "Skrip app.js berhasil terhubung!"
console.log("JavaScript Telah Terhubung");



// ============================================================
// AKTIVITAS 2: Variabel & Dialog Interaktif
// ============================================================

// ---- BAGIAN 2A: VARIABEL IDENTITAS KEDAI KOPI ----
// TODO 2A:
// 1. Buat konstanta "NAMA_KEDAI" bertipe string (misal: "Kopi PSTI Kampus").
const NAMA_KEDAI = "Kopi PSTI UPI";
// 2. Buat variabel "namaKasir" (misal: "Kak Eko") dan "shiftKerja" menggunakan "let".
let NAMA_KASIR = "Grace";
let SHIFT_KERJA = "Pagi";
// 3. Cetak nilai NAMA_KEDAI, namaKasir, dan shiftKerja ke Console menggunakan console.log().
console.log("Kedai ini bernama " + NAMA_KEDAI); // mencetak nama kedai dengan menggabungkan String dan Tipe data
console.log("Kasir yang bertugas bernama " + NAMA_KASIR); // mencetak nama kasir
console.log("Kasir tersebut bertugas untuk shift " + SHIFT_KERJA); // mencetak shift kerja

// ---- DEMO PERBEDAAN LET vs CONST ----
// TODO 2B:
// Ubah (re-assign) nilai variabel "namaKasir" dengan nama kasir lain,
NAMA_KASIR = "Valentine"
// lalu cetak ke Console untuk membuktikan bahwa variabel "let" nilainya dapat diubah.
console.log("Kasir baru telah diterima : " + NAMA_KASIR);


// ---- BAGIAN 2B: INPUT INTERAKTIF & PENGANDAIAN DASAR ----
// TODO 2C:
// 1. Tampilkan pop-up salam pembuka selamat datang menggunakan alert().
alert("Selamat Datang ke Kopi PSTI UPI");
// 2. Tampilkan dialog prompt() untuk meminta nama pengunjung, simpan hasilnya ke variabel "namaPelanggan".
let NAMA_PELANGGAN = prompt("Halo! Masukkan nama kamu untuk Berbelanja");
// 3. Gunakan percabangan "if - else":
//    - JIKA namaPelanggan ada isinya: tampilkan alert sapaan dan log ke console.
if (NAMA_PELANGGAN) {
    alert("Halo! " + NAMA_PELANGGAN + ". Yuk berbelanja dan dapatkan hadiah!");
    console.log("Pengunjung terdaftar : " + NAMA_PELANGGAN);
}
//    - JIKA namaPelanggan kosong / klik Cancel: beri nilai default "Pelanggan Setia" dan tampilkan alert pemberitahuan.
else {
    alert("Nama tidak/belum berhasil didaftarkan");
    NAMA_PELANGGAN = "Pelanggan Setia";
    console.log("Baiklah, sementara kami memanggilmu " + NAMA_PELANGGAN + ". OKAY:)");
}



// ============================================================
// AKTIVITAS 3: Operasi Aritmatika — Akumulasi Poin Transaksi
// ============================================================
// Catatan: Gunakan bilangan bulat (integer murni tanpa desimal/float).

// TODO 3:
// 1. Buat 3 variabel poin transaksi: "poinKopi", "poinMakanan", dan "poinMerchandise"
//    (isi dengan angka bulat bebas, misal: 45, 35, 20).
let POIN_KOPI = 45;
let POIN_MAKANAN = 35;
let POIN_MERCHANDISE = 20;
// 2. Buat variabel "totalPoin" yang menjumlahkan ketiga variabel poin di atas.
let TOTAL_POIN = POIN_KOPI + POIN_MAKANAN + POIN_MERCHANDISE;
// 3. Cetak rincian perolehan poin dan totalPoin ke Console menggunakan console.log().
console.log("Perolehan Poin atas Pembelian Kopi Kamu Sudah Mencapai " + POIN_KOPI + " Poin!");
console.log("Perolehan Poin atas Pembelian Makanan Kamu Sudah Mencapai " + POIN_MAKANAN + " Poin!");
console.log("Perolehan Poin atas Pembelian Merchandise Kamu Sudah Mencapai " + POIN_MERCHANDISE + " Poin!");
console.log("Total Keseluruhan Poin Kamu Sudah Mencapai " + TOTAL_POIN + " Poin!");


// ============================================================
// AKTIVITAS 4: Percabangan if-else — Penentuan Tier Membership
// ============================================================

// TODO 4:
// 1. Buat variabel "tierMember" dan "benefit" bertipe string kosong ("").
let TIER_MEMBER = "";
let BENEFIT = "";
// 2. Gunakan percabangan "if - else if - else" berdasarkan nilai "totalPoin":
//    - totalPoin >= 100 : tierMember = "Platinum", benefit = "Diskon 20% + Gratis 1 Minuman Signature"
if (TOTAL_POIN >= 100) {
    TIER_MEMBER = "Platinum";
    BENEFIT = "Diskon 20% + Gratis 1 Minuman Signature";
}
//    - totalPoin >= 70  : tierMember = "Gold", benefit = "Diskon 10% di setiap transaksi"
else if (TOTAL_POIN >= 70) {
    TIER_MEMBER = "Gold";
    BENEFIT = "Diskon 10% di setiap transaksi";
}
//    - totalPoin >= 40  : tierMember = "Silver", benefit = "Diskon 5% untuk menu minuman"
else if (TOTAL_POIN >= 40) {
    TIER_MEMBER = "Silver";
    BENEFIT = "Diskon 5% untuk menu minuman";
}
//    - selain itu       : tierMember = "Bronze", benefit = "Member Reguler (kumpulkan poin untuk naik tier)"
else {
    TIER_MEMBER = "Bronze";
    BENEFIT = "Member Reguler (kumpulkan poin untuk naik tier)";
}
// 3. Cetak hasil tierMember dan benefit ke Console.
console.log ("Semangat! Tier Member Kamu : " + TIER_MEMBER);
console.log ("Benefitnya : " + BENEFIT);
// 4. Tampilkan ringkasan hasil member (nama, total poin, tier, benefit) via dialog alert().
alert(
    "Nama : " + NAMA_PELANGGAN + "\n" +
    "Total Poin : " + TOTAL_POIN + "\n" +
    "Tier Member : " + TIER_MEMBER + "\n" +
    "Benefit : " + BENEFIT
);



// ============================================================
// AKTIVITAS 5: Function — Membuat Fungsi yang Bisa Dipakai Ulang
// ============================================================

// TODO 5A:
// Buat fungsi "hitungTotalPoin(p1, p2, p3)" yang menerima 3 parameter nilai poin,
function HITUNG_TOTAL_POIN(p1, p2, p3) {
// menjumlahkannya, dan mengembalikan (return) nilai total penjumlahannya.
    let POIN = p1 + p2 + p3;
    return POIN;
}

// TODO 5B:
// Buat fungsi "tentukanTierMember(poin)" yang menerima 1 parameter nilai poin,
function TENTUKAN_TIER_MEMBER(POIN) {
// dan mengembalikan (return) string nama tier beserta keterangannya.
    if (POIN >= 100) return "Platinum";
    if (POIN >= 70) return "Gold";
    if (POIN >= 40) return "Silver";
    return "Bronze";
}

// TODO 5C:
// Buktikan bahwa fungsi di atas bisa dipakai ulang (reusable):
// 1. Hitung total poin dan tentukan tier untuk simulasi Pelanggan B (misal poin: 35, 25, 20).
let PELANGGAN_B = HITUNG_TOTAL_POIN(35, 25, 20);
let TIER_PELANGGAN_B = TENTUKAN_TIER_MEMBER(PELANGGAN_B);
// 2. Hitung total poin dan tentukan tier untuk simulasi Pelanggan C (misal poin: 15, 10, 5).
let PELANGGAN_C = HITUNG_TOTAL_POIN(15, 10, 5);
let TIER_PELANGGAN_C = TENTUKAN_TIER_MEMBER(PELANGGAN_C);
// 3. Cetak data Pelanggan B dan C ke tab Console.
// Pelanggan B
console.log("Total Poin Pelanggan B adalah : " + PELANGGAN_B);
console.log("Tier member Pelanggan B adalah : " + TIER_PELANGGAN_B);
// Pelanggan C
console.log("Total Poin Pelanggan C adalah : " + PELANGGAN_C);
console.log("Tier member Pelanggan C adalah : " + TIER_PELANGGAN_C);



// ============================================================
// AKTIVITAS 6: Array & For Loop — Daftar Menu Rekomendasi
// ============================================================

// TODO 6A:
// Buat variabel Array bernama "menuRekomendasi" yang berisi minimal 5 nama menu kopi/makanan.




// TODO 6B:
// Gunakan perulangan "for loop" untuk mencetak setiap menu ke Console dengan format:
// "1. Nama Menu", "2. Nama Menu", dst. Gunakan (i + 1) untuk nomor urutnya.




// TODO 6C:
// Cetak jumlah total menu di akhir daftar menggunakan properti ".length".
// Akhiri program dengan: console.log("=== TUGAS MANDIRI SELESAI DENGAN SUKSES! ===");

