export const PROFILE_DATA = {
  accreditation: "A",
  established: "2012",
  location: "Kawasan Industri KIIC, Karawang, Jawa Barat",
  vision: "Terwujudnya lulusan yang berakhlak mulia, kompeten, berdaya saing global, dan berwawasan lingkungan.",
  missions: [
    "Mengembangkan karakter dan akhlak mulia peserta didik melalui pembiasaan nilai-nilai agama, etika, dan budi pekerti luhur dalam kehidupan sehari-hari.",
    "Menyelenggrakan proses pembelajaranyang inovatif dan berkualitas untuk menghasilkan lulusan yang kompeten di bidangnya.",
    "Meningkapkan keterampilan dan daya saing global peserta didik melalui penguasaan teknologi, bahasa asing, serta kolaborasi denga berbagai pihak.",
    "Menumbuhkan kesadaran dan kepedulian terhadap lingkungan melalui edukasi program ramah lingkunganserta pembiasaaan gaya hidup berkelanjutan di lingkungan sekolah.",
    "Menciptakan lingkungan sekolah yang kondusif, inklusif, dan inspiratif, sebagai pusat pengembangan potensi akademik, non akademik, dan karakter peserta didik."
  ],
  stats: [
    { value: "94%", label: "Tingkat Kesiapan Kerja Lulusan", description: "Lulusan langsung diserap industri, melanjutkan kuliah, atau berwirausaha." },
    { value: "50+", label: "Mitra Industri Aktif", description: "Bekerjasama dalam rekrutmen, magang, dan penyelarasan kurikulum." },
    { value: "1,200+", label: "Siswa Aktif", description: "Dididik oleh tenaga pengajar tersertifikasi industri & akademis." },
    { value: "100%", label: "Sertifikasi BNSP", description: "Setiap lulusan dilengkapi dengan sertifikat keahlian resmi BNSP." }
  ],
  facilities: [
    {
      title: "Gedung Pembelajaran Modern",
      description: "Ruang kelas ber-AC yang representatif dilengkapi dengan proyektor interaktif dan koneksi internet serat optik berkecepatan tinggi.",
      icon: "Building"
    },
    {
      title: "Workshop Pemesinan Presisi",
      description: "Dilengkapi mesin Bubut manual, mesin Milling, serta mesin CNC Bubut dan CNC Milling berstandar industri manufaktur modern.",
      icon: "Cpu"
    },
    {
      title: "Workshop Otomotif Standar Toyota/Daihatsu",
      description: "Bengkel praktek dengan dua post lift, alat diagnosa OBD-II Scanner pintar, uji emisi, dan berbagai model mesin EFI modern.",
      icon: "Wrench"
    },
    {
      title: "Lab Otomasi Elektronika & PLC",
      description: "Laboratorium pemrograman PLC Omron/Siemens, pneumatic systems, kendali mikrokontroler Arduino, dan sistem robotika lengan.",
      icon: "Activity"
    },
    {
      title: "Lab Jaringan Komputer & Server",
      description: "Sarana praktek jaringan komputer lengkap dengan Router & Switch Cisco, peralatan fusion splicer serat optik, dan server lokal.",
      icon: "Network"
    },
    {
      title: "Mini Warehouse & Logistik Simulator",
      description: "Ruang simulasi operasional logistik, manajemen inventori digital, barcode scanning, dan proses packing/shipping modern.",
      icon: "Boxes"
    }
  ]
};

export const MAJORS_DATA = [
  {
    id: "tp",
    shortName: "TP",
    name: "Teknik Pemesinan",
    tagline: "Membentuk Ahli Manufaktur Presisi Era Industri 4.0",
    description: "Jurusan Teknik Pemesinan membekali siswa dengan kompetensi pengerjaan logam menggunakan mesin manual maupun otomatis berbasis komputer (CNC). Fokus utama pembelajaran meliputi pembubutan, pengefraisan, perancangan gambar teknik CAD/CAM, dan pengoperasian mesin CNC industri tingkat tinggi.",
    skills: [
      "Pemrograman & Pengoperasian Mesin CNC (Lathe & Milling)",
      "Desain Manufaktur CAD/CAM (AutoCAD, SolidWorks, Mastercam)",
      "Teknik Pemesinan Bubut & Frais Manual Presisi",
      "Kelistrikan Mesin & Perawatan Alat Perkakas",
      "Metrologi Industri & Pengukuran Presisi"
    ],
    careers: [
      "CNC Programmer / Operator Mesin CNC",
      "CAD/CAM Mechanical Draftsman",
      "Quality Control (QC) Inspector Logam",
      "Technopreneur Bengkel Logam & Bubut",
      "Maintenance Supervisor Industri Manufaktur"
    ],
    features: [
      "Praktek dengan Mesin CNC 3-Axis Modern",
      "Sertifikasi Kompetensi Gambar CAD Berstandar Industri",
      "Kerjasama Khusus dengan Perusahaan Machining KIIC"
    ],
    color: "blue"
  },
  {
    id: "tkr",
    shortName: "TKR",
    name: "Teknik Kendaraan Ringan",
    tagline: "Teknisi Otomotif Handal Berbasis Teknologi Injeksi EFI & Elektrik",
    description: "Jurusan Teknik Kendaraan Ringan mencetak mekanik otomotif profesional yang menguasai perawatan dan perbaikan kendaraan roda empat. Siswa dilatih mendiagnosis kerusakan mesin injeksi (EFI), transmisi otomatis/manual, sistem kemudi, pengereman (ABS), hingga kelistrikan body modern.",
    skills: [
      "Dignosa Mesin EFI (Electronic Fuel Injection) via OBD Scanner",
      "Overhaul Engine (Tune-up & Rekondisi Komponen)",
      "Sistem Sasis & Pemindah Daya Otomotif",
      "Kelistrikan Otomotif Modern & Air Conditioning (AC)",
      "Spooring & Balancing Roda Digital"
    ],
    careers: [
      "Mekanik Otomotif Profesional Bengkel Resmi",
      "Service Advisor & Estimator Kerusakan Otomotif",
      "Technical Trainer Industri Otomotif",
      "Wirausaha Bengkel Mobil Mandiri",
      "Quality Control Pabrik Perakitan Mobil"
    ],
    features: [
      "Kurikulum Selaras dengan PT Astra Daihatsu Motor (Pintar Bersama ADM)",
      "Praktek Unit Mobil EFI & Transmisi Otomatis Terbaru",
      "Peluang Karir Langsung di Jaringan Bengkel Resmi & Manufaktur Otomotif"
    ],
    color: "amber"
  },
  {
    id: "tei",
    shortName: "TEI",
    name: "Teknik Elektronika Industri",
    tagline: "Pelopor Sistem Otomasi Pabrik, PLC, dan Robotika Manufaktur",
    description: "Jurusan Teknik Elektronika Industri berfokus pada sistem kelistrikan industri, sistem kontrol otomatis menggunakan Programmable Logic Controller (PLC), sensor pintar, elektronika daya, pneumatic, serta dasar-dasar robotika industri untuk mendukung otomatisasi pabrik modern.",
    skills: [
      "Pemrograman PLC (Programmable Logic Controller) Omron & Siemens",
      "Perancangan Sistem Sensor & Actuator Industri",
      "Sistem Pneumatic & Hydraulic Kontrol",
      "Troubleshooting & Perbaikan Mainboard Elektronika",
      "Perancangan Sistem Mikrokontroler & Internet of Things (IoT)"
    ],
    careers: [
      "Automation & PLC Programmer Engineer",
      "Teknisi Maintenance Mesin Otomasi Pabrik",
      "Quality Control (QC) Elektronik & Instrumen",
      "Teknisi Instrumentasi & Sensor",
      "Wirausaha Pembuatan Alat Sensor & Kontrol Rumah Tangga/Industri"
    ],
    features: [
      "Laboratorium PLC & Pneumatik Standar Industri Global",
      "Sertifikasi Otomasi Industri Kerjasama Internasional",
      "Praktek Troubleshooting Hardware Elektronika Tingkat Tinggi"
    ],
    color: "emerald"
  },
  {
    id: "tjkt",
    shortName: "TJKT",
    name: "Teknik Jaringan Komputer dan Telekomunikasi",
    tagline: "Arsitek Infrastruktur Jaringan, Server Cloud, dan Fiber Optic",
    description: "Jurusan TJKT menyiapkan siswa menjadi administrator IT dan teknisi jaringan handal yang menguasai setup server, perutean data cerdas (Routing/Switching), instalasi nirkabel, manajemen fiber optik, cloud computing, hingga dasar perlindungan jaringan (Cybersecurity).",
    skills: [
      "Setup Jaringan & Routing Router Cisco & Mikrotik",
      "Administrasi Server Windows & Linux (Web, Mail, Database Server)",
      "Penyambungan (Splicing) & Instalasi Kabel Fiber Optic",
      "Konfigurasi Hotspot, Wireless & Cloud Computing",
      "Network Monitoring & Sistem Keamanan Jaringan"
    ],
    careers: [
      "Network Administrator / IT Support Officer",
      "Teknisi Jaringan & Fiber Optic Provider Internet",
      "Server Administrator / Cloud Infrastructure Assistant",
      "Technical Support Engineering",
      "Wirausaha Penyedia Jasa IT & Instalasi Jaringan"
    ],
    features: [
      "Lab Khusus dengan Peralatan Cisco & Mikrotik Terstandar",
      "Materi Pembelajaran Khusus Fiber Optic Menjawab Kebutuhan Telekomunikasi Modern",
      "Sertifikasi Mikrotik Certified Network Associate (MTCNA) Opsional"
    ],
    color: "indigo"
  },
  {
    id: "ml",
    shortName: "ML",
    name: "Manajemen Logistik",
    tagline: "Ahli Rantai Pasok, Operasional Gudang Modern, dan Distribusi Global",
    description: "Jurusan Manajemen Logistik membekali siswa dengan pemahaman rantai pasok (Supply Chain), operasional pergudangan (Warehousing), kontrol inventaris, transportasi, administrasi dokumen pengapalan/impor-ekspor, serta sistem logistik terintegrasi digital yang sangat dibutuhkan oleh kawasan industri raksasa seperti KIIC.",
    skills: [
      "Sistem Manajemen Gudang (Warehouse Management System - WMS)",
      "Manajemen Inventori & Administrasi Stok Barang",
      "Dokumentasi Ekspor-Impor, Bea Cukai & Shipping",
      "Operasional Forklift & Alat Angkut Gudang Standar K3",
      "Proses Order Fulfillment & Distribusi Logistik"
    ],
    careers: [
      "Warehouse Administrator / Stock Controller",
      "Logistics Planning & Distribution Staff",
      "Inventory Planner & Auditor Logistik",
      "Staff Shipping & Ekspor Impor Dokumen",
      "Supply Chain Operations Assistant"
    ],
    features: [
      "Simulasi Operasional Gudang Menggunakan Software Logistik Modern",
      "Kerjasama Erat dengan Perusahaan Pergudangan Global di KIIC & Bekasi",
      "Materi Keselamatan Kerja (K3) Bersertifikasi khusus Logistik"
    ],
    color: "sky"
  }
];

export const INDUSTRIAL_DATA = {
  description: "Terletak tepat di jantung Kawasan Industri KIIC (Karawang International Industrial City), SMK Perguruan Cikini memiliki keunggulan kompetitif yang luar biasa. Kami menghubungkan secara langsung kurikulum sekolah dengan kebutuhan nyata perusahaan multi-nasional ternama.",
  benefits: [
    {
      title: "Kelas Industri Eksklusif",
      description: "Penyelarasan kurikulum khusus dengan instruktur tamu langsung dari jajaran manajemen teknis perusahaan mitra otomotif dan elektronik ternama."
    },
    {
      title: "Praktek Kerja Lapangan (PKL)",
      description: "Siswa ditempatkan untuk magang di perusahaan terkemuka selama 6 bulan, merasakan langsung budaya kerja profesional berskala internasional."
    },
    {
      title: "Rekrutmen Lulusan Terpadu",
      description: "Sistem rekrutmen terpusat di sekolah (Bursa Kerja Khusus - BKK Percik KIIC) yang rutin mengadakan seleksi tes tulis dan wawancara kerja langsung dari mitra industri."
    },
    {
      title: "Kunjungan Industri Terbuka",
      description: "Program terjadwal tahunan bagi siswa kelas X dan XI untuk meninjau langsung alur produksi modern pada pabrik manufaktur raksasa."
    }
  ],
  partners: [
    { name: "PT Toyota Motor Manufacturing Indonesia", logoText: "Toyota TMMIN", category: "Otomotif" },
    { name: "PT Astra Daihatsu Motor", logoText: "Daihatsu ADM", category: "Otomotif" },
    { name: "PT Denso Indonesia", logoText: "Denso", category: "Otomotif & Elektronik" },
    { name: "PT Yamaha Motor Parts Mfg.", logoText: "Yamaha YPMI", category: "Otomotif" },
    { name: "PT Epson Indonesia", logoText: "Epson", category: "Elektronik & Manufaktur" },
    { name: "PT JVC Kenwood Indonesia", logoText: "JVCKenwood", category: "Elektronik" },
    { name: "PT DHL Supply Chain Indonesia", logoText: "DHL Logistics", category: "Logistik" },
    { name: "PT Sharp Semiconductor Indonesia", logoText: "Sharp SSI", category: "Elektronik" }
  ],
  testimonials: [
    {
      quote: "Siswa magang dari Percik KIIC memiliki disiplin kerja yang sangat tinggi, keterampilan teknis pemesinan presisi mereka di atas rata-rata sekolah kejuruan lainnya. Sangat siap kerja.",
      author: "Ir. Hendi Wijaya",
      role: "Manager Production Engineering PT Denso Indonesia",
      avatarSeed: "hendi"
    },
    {
      quote: "Melalui Bursa Kerja Khusus (BKK) Percik KIIC, kami mendapatkan teknisi perawatan mesin otomasi PLC yang handal dan langsung memahami standard operasional keselamatan kerja.",
      author: "Shigeru Tanaka",
      role: "Technical Advisor PT Yamaha Motor Parts Mfg.",
      avatarSeed: "tanaka"
    }
  ]
};
