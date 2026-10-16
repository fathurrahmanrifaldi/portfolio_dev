import type { Project } from "@/lib/types";

/**
 * Projects, ordered by strength (strongest first).
 * Fill every "[TODO: ...]" string. Follow the order problem -> your contribution -> tech -> outcome.
 * To add a screenshot: put the file in /public/projects/ and set `image: "/projects/<file>.png"`.
 */
export const projects: Project[] = [
  {
    slug: "basara",
    title: "BASARA: Waste Bank System for RW 042",
    originalName: "Sistem Aplikasi Bank Sampah RW 042 (BASARA)",
    problem: "Pengelolaan operasional bank sampah di RW 042 masih mengandalkan pembukuan fisik manual",
    role: "Fullstack Web Developer",
    stack: ["Laravel, MySQL, Tailwind CSS"],
    features: [
      "Pencatatan setoran sampah multi-item dalam satu formulir dinamis",
      "Sistem pendukung keputusan untuk menentukan nasabah terbaik",
      "Portal Layanan Mandiri Warga & Dasbor Keuangan Interaktif",
    ],
    outcome: "Mengeliminasi pembukuan berbasis kertas, mempercepat rekapitulasi laporan bulanan dari hitungan jam menjadi hitungan detik, serta meningkatkan transparansi saldo warga.",
    architecture:
      "Laravel MVC app, PostgreSQL schema, auth, where it is deployed",
    challenges: [
      {
        challenge: "Risiko inkonsistensi saldo dan data korup saat pencatatan transaksi multi-tabel",
        solution: "Menerapkan `DB::transaction()` pada alur *checkout/store*, memastikan tabel `transaksi`, `detail_transaksi`, pembaruan saldo pada tabel `nasabah`, dan *record* `penarikan_dana` dieksekusi secara *atomic* (*all-or-nothing*)",
      },
    ],
    nextSteps: ["Integrasi WhatsApp API untuk notifikasi otomatis rincian setoran dan status pencairan saldo ke ponsel warga secara real-time"],
    liveUrl: "https://basara.up.railway.app/",
    githubUrl: "https://github.com/fathurrahmanrifaldi/BASARA",
    image: "/projects/basara.png",
    imageAlt: "Screenshot of the BASARA waste bank system dashboard",
  },
  {
    slug: "eva-salon",
    title: "Eva Salon Booking Website",
    originalName: "Website Booking Eva Salon",
    problem: "Manajemen jadwal dan pemesanan di Eva Salon masih manual dan rentan kesalahan",
    role: "Fullstack Web Developer",
    stack: ["Laravel, MySQL, Tailwind CSS"],
    features: [
      "Sistem pemesanan online dengan kalender interaktif",
      "Notifikasi otomatis ke pelanggan dan staf",
      "Dashboard administrasi untuk mengelola jadwal dan transaksi",
    ],
    outcome: "Meningkatkan efisiensi operasional salon, mengurangi antrian manual, dan memberikan pengalaman pelanggan yang lebih baik.",
    architecture: "Laravel MVC app, MySQL schema, auth, where it is deployed",
    challenges: [
      {
        challenge: "[TODO: a concrete problem you hit]",
        solution: "[TODO: how you solved it]",
      },
    ],
    nextSteps: ["[TODO: what you would improve next]"],
    liveUrl: "https://evasalon.up.railway.app/",
    githubUrl: "https://github.com/fathurrahmanrifaldi/eva-salon",
    image: "/projects/evasalon.png",
    imageAlt: "Screenshot of the Eva Salon booking website",
  },
  {
    slug: "simbako",
    title: "Sistem Manajemen Inventaris & POS Warung Sembako Berbasis PWA",
    originalName: "Sistem Inventaris dan Penyesuaian Stok - Warung Sembako Pak Raswan",
    problem: "Warung sembako konvensional umumnya mengandalkan pembukuan manual di buku tulis ",
    role: "Fullstack Web Developer",
    stack: ["Laravel, PostgreSQL, Tailwind CSS"],
    features: [
      "Sistem manajemen inventaris yang memungkinkan pencatatan dan pemantauan stok secara real-time",
      "Point of Sale (POS) berbasis PWA untuk memudahkan transaksi penjualan",
      "Laporan keuangan dan analisis penjualan yang dapat diakses secara mudah",
    ],
    outcome: "Meningkatkan efisiensi operasional warung sembako, mengurangi kesalahan pencatatan, dan memberikan visibilitas yang lebih baik terhadap kondisi stok.",
    architecture: "Laravel MVC app, PostgreSQL schema, auth, where it is deployed",
    challenges: [
      {
        challenge: "[TODO: a concrete problem you hit]",
        solution: "[TODO: how you solved it]",
      },
    ],
    nextSteps: ["[TODO: what you would improve next]"],
    liveUrl: "https://simbako.up.railway.app/login",
    githubUrl: "https://github.com/fathurrahmanrifaldi/simbako",
    image: "/projects/simbako.png",
    imageAlt: "Screenshot of the Warung Pak Raswan inventory system",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
