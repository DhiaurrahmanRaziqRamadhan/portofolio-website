import img1 from "../assets/portofolio/1.png";
import img2 from "../assets/portofolio/2.png";
import img3 from "../assets/portofolio/3.png";
import img4 from "../assets/portofolio/4.png";

// Fungsi untuk menyediakan data portofolio dalam bentuk array of objects
const getData = () => [
  {
    id: 1,
    title: "Aplikasi Catatan Pribadi",
    body: "Web App yang memungkinkan pengguna untuk menulis catatan pribadi dan menyimpannya dalam arsip, dikembangkan menggunakan ReactJS.",
    image: img1,
    status: "open",
    link: "https://dhiaurrahmanraziqramadhan.github.io/personal-notes-apps/",
  },
  {
    id: 2,
    title: "Cinema Hunt",
    body: "Website untuk mencari judul film favorit yang dibangun dengan menggunakan ReactJS dan Tailwind CSS, terintegrasi dengan API publik.",
    image: img2,
    status: "open",
    link: "https://dhiaurrahmanraziqramadhan.github.io/cinema-hunt/"
  },
  {
    id: 3,
    title: "Landing Page Sekolah Kak Seto",
    body: "Mengembangkan profil web modern untuk Sekolah Kak Seto menggunakan React dan Tailwind CSS untuk menciptakan pengalaman pengguna yang interaktif dan responsif.",
    image: img3,
    status: "open",
    link: "https://sekolahkakseto.sch.id/"
  },
  {
    id: 4,
    title: "E-Voting System",
    body: "Platform e-voting internal berbasis Laravel dengan fitur autentikasi, manajemen kandidat, dan rekapitulasi suara otomatis.",
    image: null, // Tidak ada gambar untuk proyek private ini
    status: "private",
    // Tidak ada 'link' karena proyek ini private
  },
  {
    id: 5,
    title: "Sistem Penjamin Mutu Jurusan (Skripsi)",
    body: "Aplikasi berbasis web untuk tugas akhir (skripsi), dirancang untuk mengelola pengguna dan file laporan dalam sistem penjaminan mutu internal jurusan Ilmu Komputer.",
    image: img4,
    status: "open",
    link: "https://evaluasiobe.com/",
  },
];

export { getData };
