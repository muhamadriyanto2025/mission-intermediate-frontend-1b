import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  Pause,
  Info,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Star,
  Plus,
  Check,
  X,
  User,
  Crown,
  LogOut,
  Eye,
  EyeOff,
  Pencil,
  Megaphone,
  Download,
  MonitorPlay,
  Sparkles,
  Tv,
  Subtitles,
  Ban,
  ArrowLeft,
  RotateCcw,
  RotateCw,
  Maximize2,
  ListVideo,
  Copy,
  CheckCircle2,
  ThumbsUp,
  Film,
  CreditCard
} from 'lucide-react';

// ============================================================================
// DATA KATALOG LENGKAP CHILL 1.0 (SERIES & FILM)
// ============================================================================
const MEDIA_ITEMS = [
  {
    id: 'duty-after-school',
    title: 'Duty After School',
    type: 'series',
    year: 2023,
    ageRating: '18+',
    duration: '10 Episode',
    rating: '4.8/5',
    genres: ['Aksi', 'Fantasi Ilmiah & Fantasi', 'KDrama', 'Thriller'],
    badge: 'Episode Baru',
    isTop10: true,
    isPremium: false,
    isContinueWatching: true,
    continueProgress: 65,
    cast: ['Shin Hyun-soo', 'Lee Soon-won', 'Im Se-mi', 'Kim Ki-hae', 'Choi Moon-hee'],
    creator: 'Sung Yong-il',
    synopsis:
      'Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.',
    poster:
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80',
    backdrop:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1800&q=85',
    episodes: [
      {
        number: 1,
        title: 'Episode 1',
        duration: '75 min',
        synopsis:
          'Bola-bola ungu misterius melayang di langit seluruh dunia selama lebih dari setahun tanpa bergerak, hingga pemerintah mengumumkan wajib militer bagi siswa kelas 3 SMA.',
        thumb:
          'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=500&q=80',
      },
      {
        number: 2,
        title: 'Episode 2',
        duration: '64 min',
        synopsis:
          'Para siswa kelas 3-2 mulai menjalani pelatihan fisik dan menembak di bawah pengawasan Letnan Lee Chun-ho yang tegas dan tanpa kompromi.',
        thumb:
          'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=500&q=80',
      },
      {
        number: 3,
        title: 'Episode 3',
        duration: '66 min',
        synopsis:
          'Ketika bola raksasa jatuh ke Bumi dan melepaskan makhluk mematikan, latihan militer berubah menjadi pertempuran nyata demi bertahan hidup.',
        thumb:
          'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=500&q=80',
      },
      {
        number: 4,
        title: 'Episode 4',
        duration: '62 min',
        synopsis:
          'Terjebak di gedung sekolah yang hancur, para siswa harus bekerja sama menyusun strategi pelarian sambil merawat rekan yang terluka.',
        thumb:
          'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=500&q=80',
      },
      {
        number: 5,
        title: 'Episode 5',
        duration: '68 min',
        synopsis:
          'Perjalanan menuju titik evakuasi memaksa pleton siswa melewati kota yang sunyi namun dipenuhi ancaman yang mengintai di setiap sudut.',
        thumb:
          'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=500&q=80',
      },
    ],
  },
  {
    id: 'happiness',
    title: 'Happiness',
    type: 'series',
    year: 2021,
    ageRating: '18+',
    duration: '12 Episode',
    rating: '4.9/5',
    genres: ['Aksi', 'KDrama', 'Thriller', 'Drama'],
    badge: 'Episode Baru',
    isTop10: true,
    isPremium: true,
    isContinueWatching: false,
    cast: ['Han Hyo-joo', 'Park Hyung-sik', 'Jo Woo-jin'],
    creator: 'Ahn Gil-ho',
    synopsis:
      'Sebuah gedung apartemen bertingkat tinggi yang baru dibangun di kota besar menjadi lokasi karantina ketat ketika wabah penyakit menular misterius memicu rasa haus ekstrem dan konflik antar penghuni.',
    poster:
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80',
    backdrop:
      'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=1800&q=85',
    episodes: [
      {
        number: 1,
        title: 'Episode 1',
        duration: '65 min',
        synopsis:
          'Yoon Sae-bom dan Jung Yi-hyun menyelidiki kasus penyerangan aneh yang berkaitan dengan obat eksperimental Next.',
        thumb:
          'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=500&q=80',
      },
      {
        number: 2,
        title: 'Episode 2',
        duration: '63 min',
        synopsis:
          'Impian Sae-bom menempati apartemen baru terganggu saat gejala infeksi mulai muncul di antara para tetangga.',
        thumb:
          'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=500&q=80',
      },
      {
        number: 3,
        title: 'Episode 3',
        duration: '67 min',
        synopsis:
          'Pihak militer menutup seluruh akses keluar masuk gedung apartemen tanpa kepastian kapan karantina akan berakhir.',
        thumb:
          'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=500&q=80',
      },
      {
        number: 4,
        title: 'Episode 4',
        duration: '64 min',
        synopsis:
          'Persediaan makanan dan air mulai menipis, memicu ketegangan kelas sosial di antara penghuni lantai bawah dan atas.',
        thumb:
          'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=500&q=80',
      },
    ],
  },
  {
    id: 'avatar-way-of-water',
    title: 'Avatar: The Way of Water',
    type: 'film',
    year: 2022,
    ageRating: '13+',
    duration: '3j 12m',
    rating: '4.9/5',
    genres: ['Aksi', 'Petualangan', 'Fantasi Ilmiah & Fantasi'],
    badge: null,
    isTop10: true,
    isPremium: true,
    isContinueWatching: false,
    cast: ['Sam Worthington', 'Zoe Saldaña', 'Sigourney Weaver', 'Stephen Lang'],
    creator: 'James Cameron',
    synopsis:
      'Jake Sully tinggal bersama keluarga barunya di planet Pandora. Ketika ancaman lama kembali untuk menyelesaikan apa yang pernah dimulai, Jake harus bekerja sama dengan Neytiri dan pasukan bangsa Na’vi untuk melindungi rumah mereka.',
    poster:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    backdrop:
      'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1800&q=85',
  },
  {
    id: 'dont-look-up',
    title: "Don't Look Up",
    type: 'film',
    year: 2021,
    ageRating: '18+',
    duration: '2j 18m',
    rating: '4.5/5',
    genres: ['Drama', 'Komedi', 'Fantasi Ilmiah & Fantasi'],
    badge: null,
    isTop10: false,
    isPremium: false,
    isContinueWatching: true,
    continueProgress: 52,
    cast: ['Leonardo DiCaprio', 'Jennifer Lawrence', 'Meryl Streep', 'Jonah Hill'],
    creator: 'Adam McKay',
    synopsis:
      'Dua astronom tingkat rendah melakukan tur media besar-besaran untuk memperingatkan umat manusia tentang komet yang mendekat dan akan menghancurkan Bumi.',
    poster:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
    backdrop:
      'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'all-of-us-are-dead',
    title: 'All of Us Are Dead',
    type: 'series',
    year: 2022,
    ageRating: '18+',
    duration: '12 Episode',
    rating: '4.7/5',
    genres: ['KDrama', 'Thriller', 'Aksi', 'Drama'],
    badge: 'Episode Baru',
    isTop10: true,
    isPremium: false,
    isContinueWatching: true,
    continueProgress: 74,
    cast: ['Park Ji-hu', 'Yoon Chan-young', 'Cho Yi-hyun', 'Lomon'],
    creator: 'Lee Jae-kyoo',
    synopsis:
      'Sebuah SMA menjadi titik nol wabah virus zombie yang menyebar sangat cepat. Para siswa yang terjebak harus berjuang mencari jalan keluar sebelum terinfeksi.',
    poster:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
    backdrop:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80',
    episodes: [
      {
        number: 1,
        title: 'Episode 1',
        duration: '66 min',
        synopsis:
          'Di laboratorium sains SMA Hyosan, seorang siswi tergigit tikus percobaan yang membawa virus mutasi berbahaya.',
        thumb:
          'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=500&q=80',
      },
      {
        number: 2,
        title: 'Episode 2',
        duration: '68 min',
        synopsis:
          'Wabah menyebar ke seluruh kantin dan koridor sekolah dalam hitungan menit, memaksa On-jo dan Cheong-san bersembunyi di ruang kelas.',
        thumb:
          'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=500&q=80',
      },
      {
        number: 3,
        title: 'Episode 3',
        duration: '61 min',
        synopsis:
          'Tanpa sinyal ponsel dan bantuan dari luar, para penyintas merakit barikade darurat dan mencari jalur menuju atap sekolah.',
        thumb:
          'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=500&q=80',
      },
    ],
  },
  {
    id: 'blue-lock',
    title: 'Blue Lock',
    type: 'series',
    year: 2023,
    ageRating: '13+',
    duration: '24 Episode',
    rating: '4.6/5',
    genres: ['Anime', 'Aksi', 'Drama'],
    badge: 'Episode Baru',
    isTop10: false,
    isPremium: false,
    isContinueWatching: true,
    continueProgress: 81,
    cast: ['Kazuki Ura', 'Tasuku Kaito', 'Yuki Ono'],
    creator: 'Muneyuki Kaneshiro',
    synopsis:
      'Tiga ratus penyerang muda terbaik Jepang dikumpulkan dalam fasilitas pelatihan ketat untuk menciptakan striker paling egois dan mematikan di dunia.',
    poster:
      'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=600&q=80',
    backdrop:
      'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1600&q=80',
    episodes: [
      {
        number: 1,
        title: 'Episode 1',
        duration: '24 min',
        synopsis:
          'Yoichi Isagi menerima undangan misterius ke proyek Blue Lock setelah tim sekolahnya gagal melaju ke turnamen nasional.',
        thumb:
          'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=500&q=80',
      },
      {
        number: 2,
        title: 'Episode 2',
        duration: '24 min',
        synopsis:
          'Ujian pertama di Gedung 5 menuntut Isagi menemukan senjata utamanya di lapangan dalam permainan eliminasi berkecepatan tinggi.',
        thumb:
          'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=500&q=80',
      },
    ],
  },
  {
    id: 'a-man-called-otto',
    title: 'A Man Called Otto',
    type: 'film',
    year: 2023,
    ageRating: '13+',
    duration: '2j 06m',
    rating: '4.4/5',
    genres: ['Drama', 'Komedi'],
    badge: null,
    isTop10: false,
    isPremium: false,
    isContinueWatching: true,
    continueProgress: 38,
    cast: ['Tom Hanks', 'Mariana Treviño', 'Rachel Keller'],
    creator: 'Marc Forster',
    synopsis:
      'Otto Anderson adalah pria pemarah yang merasa hidupnya kehilangan tujuan, hingga keluarga muda yang hangat pindah ke rumah di seberang jalannya.',
    poster:
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80',
    backdrop:
      'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'suzume',
    title: 'Suzume',
    type: 'film',
    year: 2023,
    ageRating: '13+',
    duration: '2j 02m',
    rating: '4.9/5',
    genres: ['Anime', 'Petualangan', 'Fantasi Ilmiah & Fantasi'],
    badge: 'Episode Baru',
    isTop10: false,
    isPremium: false,
    isContinueWatching: false,
    cast: ['Nanoka Hara', 'Hokuto Matsumura', 'Eri Fukatsu'],
    creator: 'Makoto Shinkai',
    synopsis:
      'Seorang gadis berusia 17 tahun membantu pemuda misterius menutup pintu-pintu gaib di seluruh Jepang yang melepaskan bencana dari dunia lain.',
    poster:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
    backdrop:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'jurassic-world-dominion',
    title: 'Jurassic World Dominion',
    type: 'film',
    year: 2022,
    ageRating: '13+',
    duration: '2j 27m',
    rating: '4.5/5',
    genres: ['Aksi', 'Petualangan', 'Fantasi Ilmiah & Fantasi'],
    badge: null,
    isTop10: true,
    isPremium: false,
    isContinueWatching: false,
    cast: ['Chris Pratt', 'Bryce Dallas Howard', 'Laura Dern', 'Sam Neill'],
    creator: 'Colin Trevorrow',
    synopsis:
      'Empat tahun setelah kehancuran Isla Nublar, dinosaurus kini hidup dan berburu berdampingan dengan manusia di seluruh penjuru dunia.',
    poster:
      'https://images.unsplash.com/photo-1516934024742-b461fba47600?auto=format&fit=crop&w=600&q=80',
    backdrop:
      'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'sonic-the-hedgehog-2',
    title: 'Sonic the Hedgehog 2',
    type: 'film',
    year: 2022,
    ageRating: 'SU',
    duration: '2j 02m',
    rating: '4.6/5',
    genres: ['Anak-anak', 'Petualangan', 'Komedi', 'Aksi'],
    badge: null,
    isTop10: true,
    isPremium: false,
    isContinueWatching: false,
    cast: ['Ben Schwartz', 'Idris Elba', 'Jim Carrey'],
    creator: 'Jeff Fowler',
    synopsis:
      'Ketika Dr. Robotnik kembali bersama Knuckles mencari zamrud berkekuatan dahsyat, Sonic bekerja sama dengan Tails memulai petualangan keliling dunia.',
    poster:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80',
    backdrop:
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'big-hero-6',
    title: 'Big Hero 6',
    type: 'film',
    year: 2014,
    ageRating: 'SU',
    duration: '1j 42m',
    rating: '4.8/5',
    genres: ['Anak-anak', 'Aksi', 'Petualangan', 'Fantasi Ilmiah & Fantasi'],
    badge: null,
    isTop10: true,
    isPremium: false,
    isContinueWatching: false,
    cast: ['Ryan Potter', 'Scott Adsit', 'Daniel Henney'],
    creator: 'Don Hall',
    synopsis:
      'Ikatan erat antara robot tiup Baymax dan Hiro Hamada melahirkan tim pahlawan teknologi tinggi untuk mengungkap konspirasi di San Fransokyo.',
    poster:
      'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=600&q=80',
    backdrop:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'the-tomorrow-war',
    title: 'The Tomorrow War',
    type: 'film',
    year: 2021,
    ageRating: '16+',
    duration: '2j 18m',
    rating: '4.7/5',
    genres: ['Aksi', 'Fantasi Ilmiah & Fantasi', 'Perang'],
    badge: null,
    isTop10: true,
    isPremium: false,
    isContinueWatching: false,
    cast: ['Chris Pratt', 'Yvonne Strahovski', 'J.K. Simmons'],
    creator: 'Chris McKay',
    synopsis:
      'Penjelajah waktu dari tahun 2051 tiba untuk merekrut prajurit masa kini guna menyelamatkan umat manusia dari kepunahan melawan spesies alien.',
    poster:
      'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=600&q=80',
    backdrop:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'guardians-of-the-galaxy-3',
    title: 'Guardians of the Galaxy Vol. 3',
    type: 'film',
    year: 2023,
    ageRating: '13+',
    duration: '2j 30m',
    rating: '4.9/5',
    genres: ['Aksi', 'Petualangan', 'Komedi', 'Fantasi Ilmiah & Fantasi'],
    badge: 'Episode Baru',
    isTop10: true,
    isPremium: true,
    isContinueWatching: false,
    cast: ['Chris Pratt', 'Zoe Saldaña', 'Dave Bautista', 'Bradley Cooper'],
    creator: 'James Gunn',
    synopsis:
      'Masih berduka atas kehilangan Gamora, Peter Quill mengumpulkan kembali timnya di sekitar Knowhere untuk mempertahankan alam semesta dan menyelamatkan Rocket.',
    poster:
      'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=600&q=80',
    backdrop:
      'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'ted-lasso',
    title: 'Ted Lasso',
    type: 'series',
    year: 2023,
    ageRating: '16+',
    duration: '3 Season',
    rating: '4.9/5',
    genres: ['Britania', 'Komedi', 'Drama'],
    badge: 'Episode Baru',
    isTop10: true,
    isPremium: true,
    isContinueWatching: false,
    cast: ['Jason Sudeikis', 'Hannah Waddingham', 'Brett Goldstein', 'Juno Temple'],
    creator: 'Bill Lawrence',
    synopsis:
      'Pelatih sepak bola perguruan tinggi Amerika yang penuh optimisme direkrut untuk melatih klub sepak bola Liga Utama Inggris meskipun ia tidak memiliki pengalaman sama sekali.',
    poster:
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80',
    backdrop:
      'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=1600&q=80',
    episodes: [
      {
        number: 1,
        title: 'Episode 1: Pilot',
        duration: '30 min',
        synopsis:
          'Pelatih sepak bola Amerika Ted Lasso tiba di London untuk menangani klub AFC Richmond dengan pendekatan penuh empati dan biskuit buatan sendiri.',
        thumb:
          'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=500&q=80',
      },
      {
        number: 2,
        title: 'Episode 2: Biscuits',
        duration: '29 min',
        synopsis:
          'Hari pertama Ted memimpin latihan di lapangan disambut skeptisisme para pemain bintang dan pers olahraga Inggris.',
        thumb:
          'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=500&q=80',
      },
      {
        number: 3,
        title: 'Episode 3: Trent Crimm: The Independent',
        duration: '31 min',
        synopsis:
          'Seorang jurnalis olahraga paling kritis menghabiskan seharian penuh mengikuti kegiatan Ted di dalam dan luar stadion.',
        thumb:
          'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=500&q=80',
      },
    ],
  },
  {
    id: 'alice-in-borderland',
    title: 'Alice in Borderland',
    type: 'series',
    year: 2022,
    ageRating: '18+',
    duration: '2 Season',
    rating: '4.8/5',
    genres: ['Aksi', 'Thriller', 'Fantasi Ilmiah & Fantasi'],
    badge: 'Episode Baru',
    isTop10: true,
    isPremium: false,
    isContinueWatching: false,
    cast: ['Kento Yamazaki', 'Tao Tsuchiya', 'Nijiro Murakami'],
    creator: 'Shinsuke Sato',
    synopsis:
      'Seorang gamer tanpa arah dan dua temannya mendapati diri mereka berada di Tokyo versi paralel yang kosong dan dipaksa mengikuti permainan mematikan untuk bertahan hidup.',
    poster:
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80',
    backdrop:
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1600&q=80',
    episodes: [
      {
        number: 1,
        title: 'Episode 1',
        duration: '49 min',
        synopsis:
          'Arisu, Karube, dan Chota keluar dari stasiun Shibuya dan menemukan seluruh kota mendadak sepi tanpa satu pun manusia.',
        thumb:
          'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=500&q=80',
      },
      {
        number: 2,
        title: 'Episode 2',
        duration: '51 min',
        synopsis:
          'Setelah melewati permainan pertama yang menegangkan, mereka bertemu Usagi dan menyadari visa hidup mereka memiliki batas waktu.',
        thumb:
          'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=500&q=80',
      },
    ],
  },
  {
    id: 'my-perfect-stranger',
    title: 'My Perfect Stranger',
    type: 'series',
    year: 2023,
    ageRating: '13+',
    duration: '16 Episode',
    rating: '4.6/5',
    genres: ['KDrama', 'Drama', 'Romantis', 'Kejahatan'],
    badge: null,
    isTop10: false,
    isPremium: false,
    isContinueWatching: false,
    cast: ['Kim Dong-wook', 'Jin Ki-joo', 'Seo Ji-hye'],
    creator: 'Kang Soo-yeon',
    synopsis:
      'Seorang pembawa berita dan seorang editor secara tak terduga terjebak bersama di tahun 1987 dan bekerja sama mengungkap misteri kasus pembunuhan berantai.',
    poster:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80',
    backdrop:
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1600&q=80',
    episodes: [
      {
        number: 1,
        title: 'Episode 1',
        duration: '65 min',
        synopsis:
          'Yoon Hae-joon menemukan mobil penjelajah waktu dan mencoba menggunakannya untuk mencegah tragedi di desa Woojung.',
        thumb:
          'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=500&q=80',
      },
    ],
  },
];

// 14 Genre resmi sesuai Footer & Dropdown Genre Chill 1.0
const GENRES_LIST = [
  'Aksi',
  'Anak-anak',
  'Anime',
  'Britania',
  'Drama',
  'Fantasi Ilmiah & Fantasi',
  'Kejahatan',
  'KDrama',
  'Komedi',
  'Petualangan',
  'Perang',
  'Romantis',
  'Sains & Alam',
  'Thriller',
];

const HELP_LINKS = ['FAQ', 'Kontak Kami', 'Privasi', 'Syarat & Ketentuan'];

// Data 3 Paket Langganan (Frame 13.1, 14.1, 15.1)
const SUBSCRIPTION_PLANS = [
  {
    id: 'individual',
    name: 'Individual',
    subtitle: 'Mulai dari Rp49,990/bulan',
    accounts: '1 Akun',
    price: 49000,
    priceFormatted: 'Rp49,000',
    features: ['Tidak ada iklan', 'Kualitas 720p', 'Download konten pilihan'],
  },
  {
    id: 'berdua',
    name: 'Berdua',
    subtitle: 'Mulai dari Rp79,990/bulan',
    accounts: '2 Akun',
    price: 79000,
    priceFormatted: 'Rp79,000',
    features: ['Tidak ada iklan', 'Kualitas 1080p', 'Download konten pilihan'],
  },
  {
    id: 'keluarga',
    name: 'Keluarga',
    subtitle: 'Mulai dari Rp159,990/bulan',
    accounts: '5-7 Akun',
    price: 159000,
    priceFormatted: 'Rp159,000',
    features: ['Tidak ada iklan', 'Kualitas 4K', 'Download konten pilihan'],
  },
];

// ============================================================================
// KOMPONEN LOGO CHILL (Clapperboard + Teks Bold)
// ============================================================================
const ChillLogo = ({ size = 'md', onClick }) => {
  const isLarge = size === 'lg';
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-2 select-none group focus:outline-none"
    >
      <svg
        viewBox="0 0 28 28"
        fill="none"
        className={`text-white transition-transform duration-200 group-hover:scale-105 ${
          isLarge ? 'w-9 h-9 sm:w-11 sm:h-11' : 'w-6 h-6 sm:w-7 sm:h-7'
        }`}
      >
        <path
          d="M4 12.5H24V22C24 23.1046 23.1046 24 22 24H6C4.89543 24 4 23.1046 4 22V12.5Z"
          fill="currentColor"
        />
        <path
          d="M3.5 9.8L22.8 4.6L23.8 8.3L4.5 13.5L3.5 9.8Z"
          fill="currentColor"
        />
        <path
          d="M7.5 8.7L10.5 11.8M13.5 7.1L16.5 10.2M19.5 5.5L22.5 8.6"
          stroke="#181A1C"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
      <span
        className={`font-extrabold tracking-wide text-white uppercase ${
          isLarge ? 'text-3xl sm:text-4xl' : 'text-xl sm:text-2xl'
        }`}
      >
        CHILL
      </span>
    </button>
  );
};

// ============================================================================
// KOMPONEN GRID 6 BENEFIT BERLANGGANAN (Dipakai di 10.6 & 13.1)
// ============================================================================
const BenefitsGrid = ({ compact = false }) => {
  const benefits = [
    { icon: Download, label: 'Download Konten Pilihan' },
    { icon: Ban, label: 'Tidak Ada Iklan' },
    { icon: MonitorPlay, label: 'Tonton Semua Konten' },
    { icon: Sparkles, label: 'Kualitas Maksimal Sampai Dengan 4K' },
    { icon: Tv, label: 'Tonton di TV, Tablet, Mobile, dan Laptop' },
    { icon: Subtitles, label: 'Subtitle Untuk Konten Pilihan' },
  ];

  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-3 ${
        compact ? 'gap-x-4 gap-y-5' : 'gap-x-8 gap-y-8 sm:gap-y-10'
      }`}
    >
      {benefits.map((b, idx) => {
        const IconComp = b.icon;
        return (
          <div
            key={idx}
            className="flex flex-col items-center text-center space-y-2 sm:space-y-2.5"
          >
            <div
              className={`rounded-xl bg-[#222831]/80 border border-white/10 flex items-center justify-center text-white ${
                compact ? 'w-10 h-10' : 'w-12 h-12 sm:w-14 sm:h-14'
              }`}
            >
              <IconComp className={compact ? 'w-5 h-5' : 'w-6 h-6 sm:w-7 sm:h-7'} />
            </div>
            <p
              className={`text-[#E7E8E9] font-medium leading-snug max-w-[175px] ${
                compact ? 'text-[11px] sm:text-xs' : 'text-xs sm:text-sm'
              }`}
            >
              {b.label}
            </p>
          </div>
        );
      })}
    </div>
  );
};

// ============================================================================
// KOMPONEN KARTU PAKET BIRU (Dipakai di 13.1, 14.1, dan 15.1)
// ============================================================================
const BluePackageCard = ({
  plan,
  buttonText = 'Langganan',
  onSelect,
  className = '',
}) => {
  return (
    <div
      className={`rounded-2xl bg-gradient-to-b from-[#3A5BFF] via-[#2340B8] to-[#15257E] p-6 sm:p-7 text-white shadow-xl shadow-[#0F1E93]/40 border border-white/15 flex flex-col justify-between ${className}`}
    >
      <div>
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#1C274C]/90 text-white text-xs sm:text-sm font-bold mb-5">
          {plan.name}
        </span>

        <p className="text-xs sm:text-sm text-white/95 font-medium">{plan.subtitle}</p>
        <p className="text-xs text-white/80 mt-0.5 mb-5">{plan.accounts}</p>

        <ul className="space-y-2.5 text-xs sm:text-sm text-white/95 mb-7">
          {plan.features.map((feat, i) => (
            <li key={i} className="flex items-center gap-2.5">
              <Check className="w-4 h-4 text-white shrink-0" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-2 border-t border-white/15 text-center space-y-2">
        <button
          type="button"
          onClick={() => onSelect && onSelect(plan)}
          className="w-full py-2.5 px-5 rounded-full bg-white hover:bg-[#E7E8E9] text-[#0F1E93] font-bold text-xs sm:text-sm transition-transform hover:scale-[1.02] active:scale-98 shadow-md"
        >
          {buttonText}
        </button>
        <p className="text-[11px] text-white/80">Syarat dan Ketentuan Berlaku</p>
      </div>
    </div>
  );
};

// ============================================================================
// HALAMAN 1.1 MASUK & 2.1 DAFTAR (AUTH PAGES)
// ============================================================================
const AuthPage = ({ mode, onSwitchMode, onSuccessAuth }) => {
  const isRegister = mode === 'register';
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) {
      setErrorMsg('Silakan masukkan username terlebih dahulu.');
      return;
    }
    if (!password.trim()) {
      setErrorMsg('Silakan masukkan kata sandi terlebih dahulu.');
      return;
    }
    if (isRegister && password !== confirmPassword) {
      setErrorMsg('Konfirmasi kata sandi tidak cocok.');
      return;
    }
    setErrorMsg('');
    onSuccessAuth(username.trim());
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 sm:p-6 bg-[#181A1C] overflow-hidden">
      {/* Background Kursi Bioskop dengan Overlay Gelap */}
      <img
        src={
          isRegister
            ? 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1800&q=80'
            : 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1800&q=80'
        }
        alt="Cinema Theater Background"
        className="absolute inset-0 w-full h-full object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" />

      {/* Quick Demo Button di Pojok Kanan Atas agar Evaluator/User Mudah Masuk */}
      <button
        type="button"
        onClick={() => onSuccessAuth('William')}
        className="absolute top-4 right-4 z-20 px-4 py-2 rounded-full bg-[#181A1C]/90 hover:bg-[#0F1E93] text-white text-xs font-semibold border border-white/20 backdrop-blur-md transition"
      >
        Masuk Instan (Demo) →
      </button>

      {/* Kartu Form Tengah (#181A1C/90) */}
      <div className="relative z-10 w-full max-w-[460px] rounded-2xl bg-[#181A1C]/90 backdrop-blur-md border border-white/10 p-6 sm:p-10 shadow-2xl">
        <div className="flex flex-col items-center text-center mb-7">
          <ChillLogo size="lg" />
          <h1 className="text-2xl sm:text-[32px] font-bold text-white mt-5">
            {isRegister ? 'Daftar' : 'Masuk'}
          </h1>
          <p className="text-xs sm:text-sm text-[#C1C2C4] mt-1">
            {isRegister ? 'Selamat datang!' : 'Selamat datang kembali!'}
          </p>
        </div>

        {errorMsg && (
          <div className="mb-4 px-3.5 py-2.5 rounded-xl bg-red-500/15 border border-red-500/40 text-red-300 text-xs">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          {/* Username */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-white mb-1.5">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Masukkan username"
              className="w-full px-4 py-3 rounded-full bg-transparent border border-white/25 text-white placeholder-[#9D9EA1] text-xs sm:text-sm focus:outline-none focus:border-[#3254FF] transition"
            />
          </div>

          {/* Kata Sandi */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-white mb-1.5">
              Kata Sandi
            </label>
            <div className="relative">
              <input
                type={showPass ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan kata sandi"
                className="w-full px-4 py-3 pr-11 rounded-full bg-transparent border border-white/25 text-white placeholder-[#9D9EA1] text-xs sm:text-sm focus:outline-none focus:border-[#3254FF] transition"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                aria-label="Tampilkan atau sembunyikan kata sandi"
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#9D9EA1] hover:text-white"
              >
                {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Konfirmasi Kata Sandi (Khusus Halaman Daftar 2.1) */}
          {isRegister && (
            <div>
              <label className="block text-xs sm:text-sm font-medium text-white mb-1.5">
                Konfirmasi Kata Sandi
              </label>
              <div className="relative">
                <input
                  type={showConfirmPass ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Masukkan kata sandi"
                  className="w-full px-4 py-3 pr-11 rounded-full bg-transparent border border-white/25 text-white placeholder-[#9D9EA1] text-xs sm:text-sm focus:outline-none focus:border-[#3254FF] transition"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPass(!showConfirmPass)}
                  aria-label="Tampilkan konfirmasi kata sandi"
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#9D9EA1] hover:text-white"
                >
                  {showConfirmPass ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Baris Link Switch Mode & Lupa Kata Sandi */}
          <div className="flex items-center justify-between text-xs sm:text-sm pt-0.5">
            <p className="text-[#9D9EA1]">
              {isRegister ? 'Sudah punya akun? ' : 'Belum punya akun? '}
              <button
                type="button"
                onClick={() => {
                  setErrorMsg('');
                  onSwitchMode(isRegister ? 'login' : 'register');
                }}
                className="text-white font-semibold hover:underline"
              >
                {isRegister ? 'Masuk' : 'Daftar'}
              </button>
            </p>
            {!isRegister && (
              <button
                type="button"
                onClick={() => onSuccessAuth('William')}
                className="text-white hover:underline font-medium"
              >
                Lupa kata sandi?
              </button>
            )}
          </div>

          {/* Tombol Primary & Google */}
          <div className="pt-3 space-y-2.5">
            <button
              type="submit"
              className="w-full py-3 rounded-full bg-[#3D4142] hover:bg-[#0F1E93] text-white font-semibold text-xs sm:text-sm border border-white/15 transition-colors"
            >
              {isRegister ? 'Daftar' : 'Masuk'}
            </button>

            <p className="text-center text-xs text-[#9D9EA1] py-0.5">Atau</p>

            <button
              type="button"
              onClick={() => onSuccessAuth('William')}
              className="w-full py-3 rounded-full bg-transparent hover:bg-white/10 text-white font-semibold text-xs sm:text-sm border border-white/25 flex items-center justify-center gap-2.5 transition"
            >
              {/* Google G SVG */}
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17Z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.29v3.14C3.26 21.3 7.31 24 12 24Z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.24c-.24-.72-.38-1.49-.38-2.24s.14-1.52.38-2.24V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.99-3.14Z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.99 3.14c.95-2.85 3.6-4.96 6.72-4.96Z"
                />
              </svg>
              <span>{isRegister ? 'Daftar dengan Google' : 'Masuk dengan Google'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// ============================================================================
// KOMPONEN KAROSEL HORIZONTAL (Row 1 Landscape & Row 2-4 Portrait + Hover Card)
// ============================================================================
const MediaRowCarousel = ({
  title,
  items,
  variant = 'portrait', // 'landscape' | 'portrait'
  myListIds,
  onToggleMyList,
  onOpenDetail,
  onStartPlay,
}) => {
  const scrollRef = useRef(null);

  const scrollByAmount = (dir) => {
    if (!scrollRef.current) return;
    const distance = scrollRef.current.clientWidth * 0.75;
    scrollRef.current.scrollBy({
      left: dir === 'left' ? -distance : distance,
      behavior: 'smooth',
    });
  };

  if (!items || items.length === 0) return null;

  return (
    <section className="relative py-4 sm:py-6">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14 mb-3.5 sm:mb-5">
        <h2 className="text-lg sm:text-2xl lg:text-[28px] font-bold text-white tracking-tight">
          {title}
        </h2>
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14">
        {/* Tombol Panah Kiri */}
        <button
          type="button"
          onClick={() => scrollByAmount('left')}
          aria-label={`Geser ${title} ke kiri`}
          className="hidden md:flex items-center justify-center absolute left-3 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#2F3334]/95 hover:bg-[#0F1E93] text-white border border-white/15 shadow-xl transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-3.5 sm:gap-5 overflow-x-auto scroll-smooth pb-2 no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {items.map((item) => {
            const isSaved = myListIds.includes(item.id);

            if (variant === 'landscape') {
              return (
                <div
                  key={item.id}
                  onClick={() => onOpenDetail(item)}
                  className="relative flex-none w-[260px] sm:w-[300px] lg:w-[325px] aspect-video rounded-xl overflow-hidden bg-[#1F2225] cursor-pointer group border border-white/5 hover:border-[#3254FF]/60 transition-all duration-300 hover:scale-[1.03]"
                >
                  <img
                    src={item.backdrop}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181A1C] via-[#181A1C]/25 to-transparent" />

                  {item.badge && (
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#0F1E93] text-white">
                      {item.badge}
                    </span>
                  )}

                  {/* Bottom Title & Star Rating */}
                  <div className="absolute bottom-3 inset-x-3.5 flex items-center justify-between gap-2">
                    <h3 className="text-white font-bold text-sm sm:text-base truncate">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1 text-xs sm:text-sm font-medium text-white shrink-0">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span>{item.rating}</span>
                    </div>
                  </div>
                </div>
              );
            }

            // Portrait 2:3 Card + Hover Preview Card sesuai Screenshot 3.1
            return (
              <div
                key={item.id}
                onClick={() => onOpenDetail(item)}
                className="relative flex-none w-[150px] sm:w-[195px] lg:w-[225px] aspect-[2/3] rounded-xl overflow-hidden bg-[#1F2225] cursor-pointer group border border-white/5 hover:border-[#3254FF]/60 transition-all duration-300 hover:scale-[1.04] hover:shadow-2xl"
              >
                <img
                  src={item.poster}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Top-Left Badge 'Episode Baru' */}
                {item.badge && (
                  <span className="absolute top-2.5 left-2.5 z-10 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-[#0F1E93] text-white shadow-md">
                    {item.badge}
                  </span>
                )}

                {/* Top-Right Red Ribbon 'Top 10' */}
                {item.isTop10 && (
                  <div className="absolute top-0 right-2.5 z-10 bg-[#B71F1D] text-white px-2 py-1.5 rounded-b-md text-center leading-tight shadow-md">
                    <span className="block text-[9px] font-semibold uppercase">Top</span>
                    <span className="block text-xs font-extrabold">10</span>
                  </div>
                )}

                {/* Hover Card Controls sesuai Figma 3.1 */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#181A1C] via-[#181A1C]/75 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-3 sm:p-4">
                  <div className="flex items-center justify-between gap-1.5 mb-2.5">
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onStartPlay(item);
                        }}
                        aria-label={`Putar ${item.title}`}
                        className="w-8 h-8 rounded-full bg-white hover:bg-[#3254FF] text-[#181A1C] hover:text-white flex items-center justify-center transition"
                      >
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      </button>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleMyList(item.id);
                        }}
                        aria-label="Tambah ke Daftar Saya"
                        className="w-8 h-8 rounded-full bg-[#181A1C]/90 hover:bg-[#2F3334] text-white border border-white/40 flex items-center justify-center transition"
                      >
                        {isSaved ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </button>

                      <button
                        type="button"
                        onClick={(e) => e.stopPropagation()}
                        aria-label="Suka"
                        className="hidden sm:flex w-8 h-8 rounded-full bg-[#181A1C]/90 hover:bg-[#2F3334] text-white border border-white/40 items-center justify-center transition"
                      >
                        <ThumbsUp className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenDetail(item);
                      }}
                      aria-label="Detail Selengkapnya"
                      className="w-8 h-8 rounded-full bg-[#181A1C]/90 hover:bg-[#2F3334] text-white border border-white/40 flex items-center justify-center transition"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] mb-1">
                    <span className="px-1.5 py-0.5 rounded bg-white/15 text-white font-semibold">
                      {item.ageRating}
                    </span>
                    <span className="text-[#C1C2C4] font-medium">{item.duration}</span>
                  </div>

                  <p className="text-[11px] text-[#C1C2C4] line-clamp-1">
                    {item.genres.slice(0, 3).join(' • ')}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tombol Panah Kanan */}
        <button
          type="button"
          onClick={() => scrollByAmount('right')}
          aria-label={`Geser ${title} ke kanan`}
          className="hidden md:flex items-center justify-center absolute right-3 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#2F3334]/95 hover:bg-[#0F1E93] text-white border border-white/15 shadow-xl transition"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

// ============================================================================
// MODAL POP-UP DETAIL SERIES (8.1/8.2) & POP-UP DETAIL FILM (9.1)
// ============================================================================
const DetailModal = ({
  item,
  isSaved,
  isSubscribed,
  onToggleMyList,
  onClose,
  onPlayMedia,
  onSelectRelated,
  relatedFilms,
}) => {
  const [muted, setMuted] = useState(true);

  if (!item) return null;
  const isSeries = item.type === 'series';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl rounded-2xl bg-[#181A1C] border border-white/15 shadow-2xl overflow-hidden my-auto"
      >
        {/* Tombol X Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup"
          className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-[#181A1C]/80 hover:bg-[#0F1E93] text-white border border-white/20 flex items-center justify-center transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Banner */}
        <div className="relative w-full h-[260px] sm:h-[360px] overflow-hidden">
          <img
            src={item.backdrop}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181A1C] via-[#181A1C]/35 to-transparent" />

          <div className="absolute bottom-5 inset-x-5 sm:inset-x-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              {item.title}
            </h2>

            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <button
                  type="button"
                  onClick={() => onPlayMedia(item, isSeries ? item.episodes?.[0] : null)}
                  className="px-6 py-2 rounded-full bg-[#0F1E93] hover:bg-[#192DB7] text-white font-semibold text-xs sm:text-sm transition"
                >
                  Mulai
                </button>

                <button
                  type="button"
                  onClick={() => onToggleMyList(item.id)}
                  aria-label="Simpan ke Daftar Saya"
                  className="w-9 h-9 rounded-full bg-[#181A1C]/80 hover:bg-[#2F3334] text-white border border-white/35 flex items-center justify-center transition"
                >
                  {isSaved ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </button>

                {/* Badge 'Premium' untuk konten terkunci (Frame 8.2) */}
                {item.isPremium && !isSubscribed && (
                  <span className="px-3.5 py-1.5 rounded-full bg-[#B78B1E] text-white text-xs font-bold shadow">
                    Premium
                  </span>
                )}
              </div>

              <button
                type="button"
                onClick={() => setMuted(!muted)}
                className="w-9 h-9 rounded-full bg-[#181A1C]/70 border border-white/40 text-white flex items-center justify-center"
              >
                {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Body Detail */}
        <div className="p-5 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 text-xs sm:text-sm">
            {/* Sinopsis & Metadata Kiri */}
            <div className="md:col-span-7 space-y-3">
              <div className="flex items-center gap-3 text-[#C1C2C4]">
                <span>{item.year}</span>
                <span>{item.duration}</span>
                <span className="px-2 py-0.5 rounded border border-white/30 text-xs">
                  {item.ageRating}
                </span>
              </div>
              <p className="text-[#E7E8E9] leading-relaxed">{item.synopsis}</p>
            </div>

            {/* Cast, Genre, Pembuat Film Kanan */}
            <div className="md:col-span-5 space-y-2.5 text-xs sm:text-sm">
              <p className="text-[#C1C2C4]">
                <span className="text-[#9D9EA1]">Cast : </span>
                <span className="text-white">{item.cast.join(', ')}</span>
              </p>
              <p className="text-[#C1C2C4]">
                <span className="text-[#9D9EA1]">Genre : </span>
                <span className="text-white">{item.genres.join(', ')}</span>
              </p>
              <p className="text-[#C1C2C4]">
                <span className="text-[#9D9EA1]">Pembuat Film : </span>
                <span className="text-white">{item.creator}</span>
              </p>
            </div>
          </div>

          {/* JIKA SERIES (8.1 / 8.2): Daftar Episode */}
          {isSeries && item.episodes && (
            <div className="pt-2 space-y-3">
              <h3 className="text-white font-bold text-base sm:text-lg">Episode</h3>
              <div className="divide-y divide-white/10">
                {item.episodes.map((ep) => (
                  <div
                    key={ep.number}
                    onClick={() => onPlayMedia(item, ep)}
                    className="py-3.5 px-2 sm:px-3 rounded-xl hover:bg-[#1F2225] flex items-center gap-3 sm:gap-4 cursor-pointer transition group"
                  >
                    <span className="text-[#C1C2C4] font-bold text-sm w-5 text-center shrink-0">
                      {ep.number}
                    </span>

                    <div className="relative w-24 sm:w-32 aspect-video rounded-lg overflow-hidden bg-[#1F2225] shrink-0">
                      <img
                        src={ep.thumb}
                        alt={ep.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition"
                      />
                      <div className="absolute inset-0 bg-black/35 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                        <Play className="w-5 h-5 text-white fill-white" />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h4 className="text-white font-semibold text-xs sm:text-sm truncate">
                          {ep.title}
                        </h4>
                        <span className="text-[#9D9EA1] text-xs shrink-0">{ep.duration}</span>
                      </div>
                      <p className="text-[#9D9EA1] text-xs line-clamp-2 leading-relaxed">
                        {ep.synopsis}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* JIKA FILM (9.1): Rekomendasi Serupa 3 Kolom */}
          {!isSeries && relatedFilms && relatedFilms.length > 0 && (
            <div className="pt-2 space-y-3">
              <h3 className="text-white font-bold text-base sm:text-lg">
                Rekomendasi Serupa
              </h3>
              <div className="grid grid-cols-3 gap-3 sm:gap-5">
                {relatedFilms.slice(0, 3).map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => onSelectRelated(rel)}
                    className="relative aspect-[2/3] rounded-xl overflow-hidden bg-[#1F2225] cursor-pointer group border border-white/5 hover:border-[#3254FF]/60 transition"
                  >
                    <img
                      src={rel.poster}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {rel.isTop10 && (
                      <div className="absolute top-0 right-2 bg-[#B71F1D] text-white px-1.5 py-1 rounded-b-md text-center leading-tight">
                        <span className="block text-[8px] font-bold uppercase">Top</span>
                        <span className="block text-[11px] font-extrabold">10</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// HALAMAN 10.1 TONTON SERIES/FILM + 10.6 POP-UP LAYANAN PREMIUM
// ============================================================================
const VideoPlayerView = ({
  media,
  episode,
  isSubscribed,
  onBack,
  onUpgradePremium,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [subtitlesOn, setSubtitlesOn] = useState(true);
  const [progress, setProgress] = useState(28);
  const [showEpisodeDrawer, setShowEpisodeDrawer] = useState(false);
  const [currentEp, setCurrentEp] = useState(episode || media?.episodes?.[0] || null);

  const isLockedPremium = media?.isPremium && !isSubscribed;

  useEffect(() => {
    if (!isPlaying || isLockedPremium) return;
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : +(prev + 0.3).toFixed(1)));
    }, 700);
    return () => clearInterval(timer);
  }, [isPlaying, isLockedPremium]);

  if (!media) return null;

  return (
    <div className="relative w-full h-screen bg-black text-white flex flex-col justify-between overflow-hidden select-none">
      {/* Visual Video Layer */}
      <img
        src={currentEp?.thumb || media.backdrop}
        alt={media.title}
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[15000ms] ease-linear ${
          isPlaying && !isLockedPremium ? 'scale-110 brightness-90' : 'scale-100 brightness-50'
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/75" />

      {/* Header Top Bar */}
      <div className="relative z-20 px-4 sm:px-8 py-5 flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-3 text-white hover:text-[#3254FF] transition"
        >
          <ArrowLeft className="w-6 h-6" />
          <span className="font-semibold text-sm sm:text-lg">
            {currentEp ? `${media.title} - ${currentEp.title}` : media.title}
          </span>
        </button>

        {subtitlesOn && !isLockedPremium && (
          <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-white/15 text-xs">
            Subtitle: Bahasa Indonesia
          </span>
        )}
      </div>

      {/* Tengah: Tombol Pause/Play Besar atau 10.6 Pop-up Premium */}
      {isLockedPremium ? (
        <div className="relative z-30 flex items-center justify-center px-4">
          <div className="w-full max-w-xl rounded-2xl bg-[#181A1C]/95 backdrop-blur-md border border-white/15 p-6 sm:p-9 text-center shadow-2xl space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white flex items-center justify-center gap-2">
                <span>Layanan Premium</span>
                <Sparkles className="w-5 h-5 text-amber-400" />
              </h2>
              <p className="text-xs sm:text-sm text-[#C1C2C4] mt-1.5">
                Tingkatkan paket anda untuk dapat menonton video ini.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-xs sm:text-sm font-semibold text-white">
                Kenapa Harus Berlangganan?
              </p>
              <BenefitsGrid compact />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={onUpgradePremium}
                className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#0F1E93] hover:bg-[#192DB7] text-white font-bold text-xs sm:text-sm shadow-lg transition"
              >
                Ubah Jadi Premium
              </button>
              <button
                type="button"
                onClick={onBack}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#222831] hover:bg-[#2F3334] text-white text-xs sm:text-sm transition"
              >
                Kembali
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative z-20 flex flex-col items-center justify-center">
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/15 hover:bg-[#0F1E93]/90 backdrop-blur-md border border-white/30 flex items-center justify-center transition-transform hover:scale-105"
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 sm:w-9 sm:h-9 text-white fill-white" />
            ) : (
              <Play className="w-8 h-8 sm:w-9 sm:h-9 text-white fill-white ml-1" />
            )}
          </button>

          {subtitlesOn && (
            <div className="mt-16 px-4 py-1.5 rounded bg-black/70 text-xs sm:text-base text-white max-w-xl text-center">
              "Kita tidak boleh menyerah sekarang, bertahanlah sampai bantuan tiba!"
            </div>
          )}
        </div>
      )}

      {/* Bottom Controls Bar */}
      <div className="relative z-20 px-4 sm:px-8 pb-6 space-y-3">
        {/* Scrubber */}
        <div
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const pct = Math.min(100, Math.max(0, ((e.clientX - rect.left) / rect.width) * 100));
            setProgress(Math.round(pct));
          }}
          className="w-full h-1.5 bg-white/25 rounded-full cursor-pointer overflow-hidden"
        >
          <div className="h-full bg-[#3254FF]" style={{ width: `${progress}%` }} />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 sm:gap-5">
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="hover:text-[#3254FF] transition"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
            <button
              type="button"
              onClick={() => setProgress((p) => Math.max(0, p - 10))}
              className="hover:text-[#3254FF] transition"
              title="Mundur 10 detik"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => setProgress((p) => Math.min(100, p + 10))}
              className="hover:text-[#3254FF] transition"
              title="Maju 10 detik"
            >
              <RotateCw className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => setIsMuted(!isMuted)}
              className="hover:text-[#3254FF] transition"
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
            <span className="hidden sm:inline text-xs sm:text-sm text-[#C1C2C4] font-medium">
              {currentEp ? `${media.title} • ${currentEp.title}` : media.title}
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-5">
            {media.type === 'series' && media.episodes && (
              <button
                type="button"
                onClick={() => setShowEpisodeDrawer(!showEpisodeDrawer)}
                title="Daftar Episode"
                className="hover:text-[#3254FF] transition"
              >
                <ListVideo className="w-5 h-5" />
              </button>
            )}
            <button
              type="button"
              onClick={() => setSubtitlesOn(!subtitlesOn)}
              title="Subtitle"
              className={`transition ${subtitlesOn ? 'text-[#3254FF]' : 'text-white'}`}
            >
              <Subtitles className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => {
                if (document.fullscreenElement) {
                  document.exitFullscreen().catch(() => {});
                } else {
                  document.documentElement.requestFullscreen?.().catch(() => {});
                }
              }}
              title="Layar Penuh"
              className="hover:text-[#3254FF] transition"
            >
              <Maximize2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Drawer Episode Cepat jika ikon ListVideo diklik */}
      {showEpisodeDrawer && media.episodes && (
        <div className="absolute right-4 bottom-20 z-30 w-72 rounded-xl bg-[#181A1C]/95 border border-white/15 p-3 shadow-2xl space-y-1.5">
          <div className="flex items-center justify-between px-2 pb-1 border-b border-white/10">
            <span className="text-xs font-bold">Pilih Episode</span>
            <button type="button" onClick={() => setShowEpisodeDrawer(false)}>
              <X className="w-4 h-4" />
            </button>
          </div>
          {media.episodes.map((ep) => (
            <button
              key={ep.number}
              type="button"
              onClick={() => {
                setCurrentEp(ep);
                setProgress(0);
                setShowEpisodeDrawer(false);
              }}
              className={`w-full text-left px-2.5 py-2 rounded-lg text-xs transition ${
                currentEp?.number === ep.number
                  ? 'bg-[#0F1E93] text-white font-semibold'
                  : 'hover:bg-[#1F2225] text-[#C1C2C4]'
              }`}
            >
              {ep.title} ({ep.duration})
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// ============================================================================
// HALAMAN 12.1 PROFIL SAYA
// ============================================================================
const ProfilePage = ({
  profile,
  onUpdateProfile,
  activePlan,
  myListItems,
  onOpenDetail,
  onNavigateSubscribe,
  onNavigateMyList,
}) => {
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [password, setPassword] = useState(profile.password);

  const handleSave = (e) => {
    e.preventDefault();
    onUpdateProfile({ ...profile, name, email, password });
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14 py-8 sm:py-12 space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Kolom Kiri: Form Profil Saya */}
        <div className="lg:col-span-6 space-y-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Profil Saya</h1>

          {/* Avatar + Ubah Foto */}
          <div className="flex items-center gap-5">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-white/15"
            />
            <div className="space-y-1.5">
              <button
                type="button"
                onClick={() =>
                  onUpdateProfile({
                    ...profile,
                    avatar:
                      profile.avatar.includes('1534528741775')
                        ? 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
                        : 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
                  })
                }
                className="px-4 py-2 rounded-full border border-[#3254FF] text-[#3254FF] hover:bg-[#3254FF] hover:text-white text-xs sm:text-sm font-semibold transition"
              >
                Ubah Foto
              </button>
              <p className="text-xs text-[#9D9EA1] flex items-center gap-1">
                <span>Maksimal 2MB</span>
              </p>
            </div>
          </div>

          <form onSubmit={handleSave} className="space-y-4">
            {/* Nama Pengguna */}
            <div className="relative rounded-xl bg-[#222831] border border-white/15 px-4 py-2.5">
              <label className="block text-[11px] text-[#9D9EA1]">Nama Pengguna</label>
              <div className="flex items-center justify-between gap-2 mt-0.5">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-transparent text-white text-sm font-medium w-full focus:outline-none"
                />
                <Pencil className="w-4 h-4 text-[#C1C2C4] shrink-0" />
              </div>
            </div>

            {/* Email */}
            <div className="relative rounded-xl bg-[#222831] border border-white/15 px-4 py-2.5">
              <label className="block text-[11px] text-[#9D9EA1]">Email</label>
              <div className="flex items-center justify-between gap-2 mt-0.5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent text-white text-sm font-medium w-full focus:outline-none"
                />
                <Pencil className="w-4 h-4 text-[#C1C2C4] shrink-0" />
              </div>
            </div>

            {/* Kata Sandi */}
            <div className="relative rounded-xl bg-[#222831] border border-white/15 px-4 py-2.5">
              <label className="block text-[11px] text-[#9D9EA1]">Kata Sandi</label>
              <div className="flex items-center justify-between gap-2 mt-0.5">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-transparent text-white text-sm font-medium w-full focus:outline-none"
                />
                <Pencil className="w-4 h-4 text-[#C1C2C4] shrink-0" />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="px-7 py-2.5 rounded-full bg-[#0F1E93] hover:bg-[#192DB7] text-white text-xs sm:text-sm font-semibold transition"
              >
                Simpan
              </button>
            </div>
          </form>
        </div>

        {/* Kolom Kanan: Kartu Status Langganan */}
        <div className="lg:col-span-6 lg:mt-14">
          {activePlan ? (
            <div className="rounded-2xl bg-gradient-to-r from-[#3A5BFF] to-[#15257E] p-6 sm:p-7 border border-white/15 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-full bg-[#1C274C] text-white text-xs font-bold">
                  Aktif
                </span>
                <Crown className="w-6 h-6 text-amber-300" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-white">
                  Akun Premium {activePlan.name} ✨
                </h2>
                <p className="text-xs sm:text-sm text-white/90 mt-1">
                  Nikmati seluruh tayangan eksklusif tanpa iklan ({activePlan.accounts}). Berlaku hingga 20 Desember 2026.
                </p>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={onNavigateSubscribe}
                  className="px-5 py-2 rounded-full bg-white text-[#0F1E93] font-bold text-xs sm:text-sm hover:bg-[#E7E8E9] transition"
                >
                  Ubah Paket
                </button>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl bg-[#222831] p-6 sm:p-7 border border-white/10 shadow-xl space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center shrink-0">
                  <Megaphone className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h2 className="text-base sm:text-xl font-bold text-white">
                    Saat ini anda belum berlangganan
                  </h2>
                  <p className="text-xs sm:text-sm text-[#C1C2C4] mt-1 leading-relaxed">
                    Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan Kamu!
                  </p>
                </div>
              </div>

              <div className="flex justify-end pt-1">
                <button
                  type="button"
                  onClick={onNavigateSubscribe}
                  className="px-6 py-2.5 rounded-full bg-[#2F3334] hover:bg-[#0F1E93] text-white font-semibold text-xs sm:text-sm transition"
                >
                  Mulai Berlangganan
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bagian Bawah: Daftar Saya */}
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-white">Daftar Saya</h2>
          <button
            type="button"
            onClick={onNavigateMyList}
            className="text-xs sm:text-sm text-[#C1C2C4] hover:text-white transition"
          >
            Lihat Semua
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {myListItems.slice(0, 6).map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenDetail(item)}
              className="relative aspect-[2/3] rounded-xl overflow-hidden bg-[#1F2225] cursor-pointer group border border-white/5 hover:border-[#3254FF]/60 transition"
            >
              <img
                src={item.poster}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
              {item.badge && (
                <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#0F1E93] text-white">
                  {item.badge}
                </span>
              )}
              {item.isTop10 && (
                <div className="absolute top-0 right-2 bg-[#B71F1D] text-white px-1.5 py-1 rounded-b-md text-center leading-tight">
                  <span className="block text-[8px] font-bold uppercase">Top</span>
                  <span className="block text-[10px] font-extrabold">10</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// HALAMAN 13.1 PILIH PAKET LANGGANAN
// ============================================================================
const SubscriptionPage = ({ onSelectPlan }) => {
  return (
    <div className="space-y-12 pb-12">
      {/* Bagian Atas: Kenapa Harus Berlangganan? */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 pt-10 sm:pt-14 text-center space-y-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-white">
          Kenapa Harus Berlangganan?
        </h1>
        <BenefitsGrid />
      </section>

      {/* Bagian Bawah: Pilih Paketmu (#222831 container) */}
      <section className="bg-[#222831] py-12 sm:py-16 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Pilih Paketmu</h2>
            <p className="text-xs sm:text-sm text-[#C1C2C4] mt-1.5">
              Tentukan paket sesuai kebutuhanmu!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left">
            {SUBSCRIPTION_PLANS.map((plan) => (
              <BluePackageCard
                key={plan.id}
                plan={plan}
                buttonText="Langganan"
                onSelect={onSelectPlan}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// ============================================================================
// HALAMAN 14.1 PEMBAYARAN & 15.1 PEMBAYARAN VA (COUNTDOWN & TATA CARA)
// ============================================================================
const PaymentPage = ({
  selectedPlan,
  step, // 'checkout' (14.1) | 'waiting_va' (15.1)
  onProceedToVA,
  onConfirmPaid,
  onChangePlan,
  onShowToast,
}) => {
  const plan = selectedPlan || SUBSCRIPTION_PLANS[0];
  const [paymentMethod, setPaymentMethod] = useState('bca_va'); // 'card' | 'bca_va'
  const [voucherInput, setVoucherInput] = useState('');
  const [discount, setDiscount] = useState(0);

  // Countdown Timer 00 Jam : 14 Menit : 58 Detik (Frame 15.1)
  const [secondsLeft, setSecondsLeft] = useState(14 * 60 + 58);

  useEffect(() => {
    if (step !== 'waiting_va') return;
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [step]);

  const hours = String(Math.floor(secondsLeft / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((secondsLeft % 3600) / 60)).padStart(2, '0');
  const seconds = String(secondsLeft % 60).padStart(2, '0');

  const adminFee = 3000;
  const totalPayment = Math.max(0, plan.price + adminFee - discount);

  const formatRupiah = (num) => 'Rp' + num.toLocaleString('id-ID');

  const handleApplyVoucher = () => {
    if (voucherInput.trim().toUpperCase() === 'CHILL10') {
      setDiscount(10000);
      onShowToast('Kode voucher CHILL10 berhasil! Potongan Rp10.000');
    } else if (voucherInput.trim()) {
      setDiscount(5000);
      onShowToast(`Voucher "${voucherInput.trim()}" diterapkan! Potongan Rp5.000`);
    } else {
      onShowToast('Masukkan kode voucher (coba: CHILL10)');
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14 py-8 sm:py-12 space-y-8">
      {/* Banner Countdown Timer Khusus Frame 15.1 */}
      {step === 'waiting_va' && (
        <div className="rounded-2xl bg-[#222831] border border-white/10 p-5 sm:p-6 text-center space-y-3">
          <p className="text-xs sm:text-sm text-[#C1C2C4] font-medium">
            Lakukan Pembayaran Sebelum
          </p>
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <div className="px-3.5 py-2 rounded-lg bg-[#2F3334] text-white text-xs sm:text-sm font-bold">
              {hours} <span className="font-normal text-[#C1C2C4]">Jam</span>
            </div>
            <span className="text-white font-bold">:</span>
            <div className="px-3.5 py-2 rounded-lg bg-[#2F3334] text-white text-xs sm:text-sm font-bold">
              {minutes} <span className="font-normal text-[#C1C2C4]">Menit</span>
            </div>
            <span className="text-white font-bold">:</span>
            <div className="px-3.5 py-2 rounded-lg bg-[#2F3334] text-white text-xs sm:text-sm font-bold">
              {seconds} <span className="font-normal text-[#C1C2C4]">Detik</span>
            </div>
          </div>
        </div>
      )}

      <h1 className="text-2xl sm:text-3xl font-bold text-white">Ringkasan Pembayaran</h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Kiri: Kartu Paket Biru */}
        <div className="lg:col-span-4 max-w-sm">
          <BluePackageCard
            plan={plan}
            buttonText="Langganan"
            onSelect={onChangePlan}
          />
        </div>

        {/* Kanan: Detail Metode Pembayaran & Ringkasan Transaksi */}
        <div className="lg:col-span-8 space-y-6">
          {/* Metode Pembayaran */}
          <div className="space-y-3">
            <h2 className="text-sm sm:text-base font-bold text-white">Metode Pembayaran</h2>

            {step === 'checkout' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Opsi 1: Kartu Debit/Kredit */}
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border text-left transition ${
                    paymentMethod === 'card'
                      ? 'border-[#3254FF] bg-[#222831]'
                      : 'border-white/25 bg-transparent hover:border-white/50'
                  }`}
                >
                  <span
                    className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                      paymentMethod === 'card' ? 'border-[#3254FF]' : 'border-white/50'
                    }`}
                  >
                    {paymentMethod === 'card' && (
                      <span className="w-2 h-2 rounded-full bg-[#3254FF]" />
                    )}
                  </span>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="px-1.5 py-0.5 rounded bg-white text-[#1A1F71] text-[10px] font-extrabold">
                      VISA
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-[#EB001B] text-white text-[10px] font-bold">
                      MC
                    </span>
                    <CreditCard className="w-4 h-4 text-[#C1C2C4]" />
                    <span className="text-xs sm:text-sm text-white font-medium">
                      Kartu Debit/Kredit
                    </span>
                  </div>
                </button>

                {/* Opsi 2: BCA Virtual Account */}
                <button
                  type="button"
                  onClick={() => setPaymentMethod('bca_va')}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border text-left transition ${
                    paymentMethod === 'bca_va'
                      ? 'border-[#3254FF] bg-[#222831]'
                      : 'border-white/25 bg-transparent hover:border-white/50'
                  }`}
                >
                  <span
                    className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                      paymentMethod === 'bca_va' ? 'border-[#3254FF]' : 'border-white/50'
                    }`}
                  >
                    {paymentMethod === 'bca_va' && (
                      <span className="w-2 h-2 rounded-full bg-[#3254FF]" />
                    )}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-[#005CAA] text-white text-[10px] font-extrabold tracking-wider">
                      BCA
                    </span>
                    <span className="text-xs sm:text-sm text-white font-medium">
                      BCA Virtual Account
                    </span>
                  </div>
                </button>
              </div>
            ) : (
              /* Frame 15.1: Metode Pembayaran Terpilih & Info Kode Pembayaran */
              <div className="space-y-4">
                <div className="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-white/25 bg-[#1F2225]">
                  <span className="w-4 h-4 rounded-full border border-[#3254FF] flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-[#3254FF]" />
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#005CAA] text-white text-[10px] font-extrabold">
                    BCA
                  </span>
                  <span className="text-xs sm:text-sm text-white font-medium">
                    {paymentMethod === 'card' ? 'Kartu Debit/Kredit' : 'BCA Virtual Account'}
                  </span>
                </div>

                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex items-center justify-between text-[#C1C2C4]">
                    <span>Tanggal Pembelian</span>
                    <span className="text-white font-medium">20 November 2026</span>
                  </div>
                  <div className="flex items-center justify-between text-[#C1C2C4]">
                    <span>Kode Pembayaran</span>
                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard?.writeText('3KDJ5KFOV').catch(() => {});
                        onShowToast('Kode pembayaran 3KDJ5KFOV berhasil disalin!');
                      }}
                      className="flex items-center gap-1.5 text-white font-bold hover:text-[#3254FF] transition"
                    >
                      <span>3KDJ5KFOV</span>
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Kode Voucher (Khusus Frame 14.1) */}
          {step === 'checkout' && (
            <div className="space-y-2">
              <label className="block text-sm sm:text-base font-bold text-white">
                Kode Voucher (Jika ada)
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={voucherInput}
                  onChange={(e) => setVoucherInput(e.target.value)}
                  placeholder="Masukkan kode voucher (contoh: CHILL10)"
                  className="flex-1 px-4 py-2.5 rounded-xl bg-transparent border border-white/25 text-white placeholder-[#9D9EA1] text-xs sm:text-sm focus:outline-none focus:border-[#3254FF]"
                />
                <button
                  type="button"
                  onClick={handleApplyVoucher}
                  className="px-5 py-2.5 rounded-full bg-[#2F3334] hover:bg-[#3D4142] text-white text-xs sm:text-sm font-semibold transition"
                >
                  Gunakan
                </button>
              </div>
            </div>
          )}

          {/* Ringkasan Transaksi */}
          <div className="space-y-2.5">
            <h3 className="text-sm sm:text-base font-bold text-white">Ringkasan Transaksi</h3>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex items-center justify-between text-[#C1C2C4]">
                <span>Paket Premium {plan.name}</span>
                <span className="text-white">{plan.priceFormatted}</span>
              </div>
              <div className="flex items-center justify-between text-[#C1C2C4]">
                <span>Biaya Admin</span>
                <span className="text-white">{formatRupiah(adminFee)}</span>
              </div>
              {discount > 0 && (
                <div className="flex items-center justify-between text-emerald-400">
                  <span>Diskon Voucher</span>
                  <span>-{formatRupiah(discount)}</span>
                </div>
              )}
              <div className="flex items-center justify-between font-bold text-sm sm:text-base pt-1 border-t border-white/10">
                <span className="text-white">Total Pembayaran</span>
                <span className="text-white">{formatRupiah(totalPayment)}</span>
              </div>
            </div>
          </div>

          {/* Tata Cara Pembayaran (Khusus Frame 15.1) */}
          {step === 'waiting_va' && (
            <div className="space-y-2 text-xs sm:text-sm">
              <h3 className="font-bold text-white">Tata Cara Pembayaran</h3>
              <ol className="list-decimal list-inside space-y-1 text-[#C1C2C4] leading-relaxed">
                <li>Buka aplikasi BCA Mobile Banking atau akses BCA Internet Banking.</li>
                <li>Login ke akun Anda.</li>
                <li>Pilih menu "Transfer" atau "Pembayaran".</li>
                <li>Pilih opsi "Virtual Account" atau "Virtual Account Number".</li>
                <li>
                  Masukkan nomor virtual account dan jumlah pembayaran, lalu konfirmasikan
                  pembayaran.
                </li>
              </ol>
            </div>
          )}

          {/* Tombol Bayar */}
          <div className="pt-1">
            <button
              type="button"
              onClick={step === 'checkout' ? onProceedToVA : onConfirmPaid}
              className="px-9 py-2.5 rounded-full bg-[#0F1E93] hover:bg-[#192DB7] text-white font-bold text-xs sm:text-sm shadow-lg transition"
            >
              Bayar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// KOMPONEN UTAMA APLIKASI (App) - ROUTING & STATE SELURUH FLOW CHILL 1.0
// ============================================================================
export default function App() {
  // Halaman aktif:
  // 'login' | 'register' | 'home' | 'series' | 'film' | 'mylist' | 'profile' | 'subscribe' | 'payment' | 'player'
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedGenre, setSelectedGenre] = useState('Semua');
  const [genreMenuOpen, setGenreMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [heroMuted, setHeroMuted] = useState(true);

  // User Profile & Subscription State
  const [userProfile, setUserProfile] = useState({
    name: 'William',
    email: 'william1980@gmail.com',
    password: '••••••••••••',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  });
  const [activePlan, setActivePlan] = useState(null); // null = belum berlangganan (12.1)
  const [checkoutPlan, setCheckoutPlan] = useState(SUBSCRIPTION_PLANS[0]);
  const [paymentStep, setPaymentStep] = useState('checkout'); // 'checkout' (14.1) | 'waiting_va' (15.1)

  // Watchlist ('Daftar Saya') State
  const [myListIds, setMyListIds] = useState([
    'all-of-us-are-dead',
    'suzume',
    'duty-after-school',
    'jurassic-world-dominion',
    'big-hero-6',
    'guardians-of-the-galaxy-3',
    'ted-lasso',
    'alice-in-borderland',
    'the-tomorrow-war',
    'sonic-the-hedgehog-2',
    'blue-lock',
    'a-man-called-otto',
  ]);

  // Modal Detail & Player State
  const [detailModalItem, setDetailModalItem] = useState(null);
  const [playerState, setPlayerState] = useState({ media: null, episode: null });

  // Toast Notification
  const [toast, setToast] = useState(null);
  const showToast = (message) => {
    setToast(message);
    setTimeout(() => {
      setToast((prev) => (prev === message ? null : prev));
    }, 3000);
  };

  const toggleMyList = (id) => {
    const found = MEDIA_ITEMS.find((m) => m.id === id);
    setMyListIds((prev) => {
      if (prev.includes(id)) {
        showToast(`"${found?.title}" dihapus dari Daftar Saya`);
        return prev.filter((item) => item !== id);
      } else {
        showToast(`"${found?.title}" ditambahkan ke Daftar Saya`);
        return [id, ...prev];
      }
    });
  };

  const handleStartPlay = (media, episode = null) => {
    setDetailModalItem(null);
    setPlayerState({ media, episode });
    setCurrentPage('player');
  };

  // Jika sedang berada di halaman Login (1.1) atau Register (2.1)
  if (currentPage === 'login' || currentPage === 'register') {
    return (
      <AuthPage
        mode={currentPage}
        onSwitchMode={(newMode) => setCurrentPage(newMode)}
        onSuccessAuth={(username) => {
          setUserProfile((prev) => ({ ...prev, name: username || 'William' }));
          setCurrentPage('home');
          showToast(`Selamat datang kembali, ${username || 'William'}!`);
        }}
      />
    );
  }

  // Jika sedang berada di halaman Video Player (10.1 / 10.6)
  if (currentPage === 'player' && playerState.media) {
    return (
      <VideoPlayerView
        media={playerState.media}
        episode={playerState.episode}
        isSubscribed={Boolean(activePlan)}
        onBack={() => setCurrentPage('home')}
        onUpgradePremium={() => {
          setCurrentPage('subscribe');
        }}
      />
    );
  }

  // Filter Katalog sesuai halaman & genre
  const filterByGenre = (list) =>
    selectedGenre === 'Semua'
      ? list
      : list.filter((item) => item.genres.includes(selectedGenre));

  const allSeries = MEDIA_ITEMS.filter((m) => m.type === 'series');
  const allFilms = MEDIA_ITEMS.filter((m) => m.type === 'film');
  const mySavedList = MEDIA_ITEMS.filter((m) => myListIds.includes(m.id));

  // Hero untuk Beranda (Duty After School), Series (Happiness), Film (Avatar: The Way of Water)
  const heroData =
    currentPage === 'series'
      ? MEDIA_ITEMS.find((m) => m.id === 'happiness')
      : currentPage === 'film'
      ? MEDIA_ITEMS.find((m) => m.id === 'avatar-way-of-water')
      : MEDIA_ITEMS[0];

  return (
    <div
      className="min-h-screen bg-[#181A1C] text-white flex flex-col"
      style={{ fontFamily: "'Plus Jakarta Sans', 'Lato', sans-serif" }}
    >
      {/* ====================================================================
          TOP NAVIGATION BAR (Sticky #181A1C)
      ==================================================================== */}
      <header className="sticky top-0 z-40 bg-[#181A1C] border-b border-white/5">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14 h-16 sm:h-20 flex items-center justify-between gap-4">
          {/* Kiri: Logo CHILL + Menu Navigasi */}
          <div className="flex items-center gap-5 sm:gap-10 lg:gap-12">
            <ChillLogo
              onClick={() => {
                setCurrentPage('home');
                setSelectedGenre('Semua');
              }}
            />

            <nav className="flex items-center gap-4 sm:gap-8 text-xs sm:text-base font-medium">
              {[
                { key: 'series', label: 'Series' },
                { key: 'film', label: 'Film' },
                { key: 'mylist', label: 'Daftar Saya' },
              ].map((nav) => {
                const isActive = currentPage === nav.key;
                return (
                  <button
                    key={nav.key}
                    type="button"
                    onClick={() => {
                      setCurrentPage(nav.key);
                      setSelectedGenre('Semua');
                    }}
                    className={`transition-colors ${
                      isActive ? 'text-white font-bold' : 'text-[#C1C2C4] hover:text-white'
                    }`}
                  >
                    {nav.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Kanan: Avatar + Dropdown Profil */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setProfileMenuOpen(!profileMenuOpen)}
              className="flex items-center gap-2 focus:outline-none"
            >
              <img
                src={userProfile.avatar}
                alt={userProfile.name}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover border border-white/20"
              />
              <ChevronDown
                className={`w-4 h-4 text-white transition-transform ${
                  profileMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {profileMenuOpen && (
              <>
                <div
                  className="fixed inset-0 z-30"
                  onClick={() => setProfileMenuOpen(false)}
                />
                <div className="absolute right-0 mt-2.5 w-44 rounded-xl bg-[#181A1C] border border-white/15 shadow-2xl py-1.5 z-40 text-xs sm:text-sm">
                  <button
                    type="button"
                    onClick={() => {
                      setProfileMenuOpen(false);
                      setCurrentPage('profile');
                    }}
                    className="w-full px-4 py-2.5 text-left text-[#3254FF] font-semibold hover:bg-[#1F2225] flex items-center gap-2.5"
                  >
                    <User className="w-4 h-4" />
                    <span>Profil Saya</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setProfileMenuOpen(false);
                      setCurrentPage('subscribe');
                    }}
                    className="w-full px-4 py-2.5 text-left text-white hover:bg-[#1F2225] flex items-center gap-2.5"
                  >
                    <Crown className="w-4 h-4 text-amber-400" />
                    <span>Ubah Premium</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setProfileMenuOpen(false);
                      setCurrentPage('login');
                    }}
                    className="w-full px-4 py-2.5 text-left text-white hover:bg-[#1F2225] flex items-center gap-2.5"
                  >
                    <LogOut className="w-4 h-4 text-red-400" />
                    <span>Keluar</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </header>

      {/* ====================================================================
          MAIN CONTENT ROUTER
      ==================================================================== */}
      <main className="flex-1">
        {/* HALAMAN 12.1: PROFIL SAYA */}
        {currentPage === 'profile' && (
          <ProfilePage
            profile={userProfile}
            onUpdateProfile={(updated) => {
              setUserProfile(updated);
              showToast('Perubahan profil berhasil disimpan!');
            }}
            activePlan={activePlan}
            myListItems={mySavedList}
            onOpenDetail={(item) => setDetailModalItem(item)}
            onNavigateSubscribe={() => setCurrentPage('subscribe')}
            onNavigateMyList={() => setCurrentPage('mylist')}
          />
        )}

        {/* HALAMAN 13.1: PILIH PAKET LANGGANAN */}
        {currentPage === 'subscribe' && (
          <SubscriptionPage
            onSelectPlan={(plan) => {
              setCheckoutPlan(plan);
              setPaymentStep('checkout');
              setCurrentPage('payment');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {/* HALAMAN 14.1 & 15.1: PEMBAYARAN & VIRTUAL ACCOUNT */}
        {currentPage === 'payment' && (
          <PaymentPage
            selectedPlan={checkoutPlan}
            step={paymentStep}
            onProceedToVA={() => {
              setPaymentStep('waiting_va');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onConfirmPaid={() => {
              setActivePlan(checkoutPlan);
              setCurrentPage('profile');
              showToast(`Pembayaran berhasil! Paket ${checkoutPlan.name} kini aktif.`);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onChangePlan={() => setCurrentPage('subscribe')}
            onShowToast={showToast}
          />
        )}

        {/* HALAMAN 5.1: SEMUA DAFTAR SAYA */}
        {currentPage === 'mylist' && (
          <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14 py-8 sm:py-12 space-y-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-white">Daftar Saya</h1>

            {mySavedList.length === 0 ? (
              <div className="rounded-2xl bg-[#1F2225] border border-white/10 p-12 text-center max-w-md mx-auto">
                <Film className="w-10 h-10 text-[#3254FF] mx-auto mb-3" />
                <p className="text-white font-semibold mb-1">Daftar Saya masih kosong</p>
                <p className="text-xs text-[#9D9EA1] mb-4">
                  Klik tombol + pada poster film atau series untuk menyimpannya di sini.
                </p>
                <button
                  type="button"
                  onClick={() => setCurrentPage('home')}
                  className="px-6 py-2 rounded-full bg-[#0F1E93] text-white text-xs font-semibold"
                >
                  Jelajahi Beranda
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
                {mySavedList.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setDetailModalItem(item)}
                    className="relative aspect-[2/3] rounded-xl overflow-hidden bg-[#1F2225] cursor-pointer group border border-white/5 hover:border-[#3254FF]/60 transition"
                  >
                    <img
                      src={item.poster}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                    {item.badge && (
                      <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-[#0F1E93] text-white">
                        {item.badge}
                      </span>
                    )}
                    {item.isTop10 && (
                      <div className="absolute top-0 right-2.5 bg-[#B71F1D] text-white px-2 py-1 rounded-b-md text-center leading-tight">
                        <span className="block text-[9px] font-bold uppercase">Top</span>
                        <span className="block text-xs font-extrabold">10</span>
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMyList(item.id);
                      }}
                      title="Hapus dari Daftar Saya"
                      className="absolute bottom-2.5 right-2.5 w-8 h-8 rounded-full bg-[#181A1C]/90 border border-white/30 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                    >
                      <Check className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* HALAMAN 3.1 BERANDA, 6.1 SERIES, 7.1 FILM */}
        {(currentPage === 'home' ||
          currentPage === 'series' ||
          currentPage === 'film') && (
          <>
            {/* HERO BANNER */}
            <section className="relative w-full h-[430px] sm:h-[520px] lg:h-[570px] overflow-hidden">
              <img
                src={heroData.backdrop}
                alt={heroData.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181A1C] via-[#181A1C]/40 to-black/25" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#181A1C]/90 via-[#181A1C]/40 to-transparent" />

              {/* Dropdown Overlay "Genre" di Pojok Kiri Atas Hero (Khusus Halaman Series 6.1 & Film 7.1) */}
              {(currentPage === 'series' || currentPage === 'film') && (
                <div className="absolute top-5 sm:top-8 left-4 sm:left-8 lg:left-14 z-30">
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setGenreMenuOpen(!genreMenuOpen)}
                      className="flex items-center gap-3 px-4 py-2 rounded-lg bg-[#222831]/90 hover:bg-[#2F3334] text-white text-xs sm:text-sm font-semibold border border-white/15 backdrop-blur-md transition"
                    >
                      <span>
                        {selectedGenre === 'Semua' ? 'Genre' : selectedGenre}
                      </span>
                      <ChevronDown className="w-4 h-4" />
                    </button>

                    {genreMenuOpen && (
                      <>
                        <div
                          className="fixed inset-0 z-20"
                          onClick={() => setGenreMenuOpen(false)}
                        />
                        <div className="absolute left-0 mt-2 w-72 sm:w-80 rounded-xl bg-[#222831] border border-white/15 shadow-2xl p-2 z-30 grid grid-cols-2 gap-1 text-xs">
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedGenre('Semua');
                              setGenreMenuOpen(false);
                            }}
                            className={`px-3 py-2 rounded-lg text-left transition ${
                              selectedGenre === 'Semua'
                                ? 'bg-[#0F1E93] text-white font-semibold'
                                : 'text-[#C1C2C4] hover:bg-[#2F3334] hover:text-white'
                            }`}
                          >
                            Semua Genre
                          </button>
                          {GENRES_LIST.map((g) => (
                            <button
                              key={g}
                              type="button"
                              onClick={() => {
                                setSelectedGenre(g);
                                setGenreMenuOpen(false);
                              }}
                              className={`px-3 py-2 rounded-lg text-left truncate transition ${
                                selectedGenre === g
                                  ? 'bg-[#0F1E93] text-white font-semibold'
                                  : 'text-[#C1C2C4] hover:bg-[#2F3334] hover:text-white'
                              }`}
                            >
                              {g}
                            </button>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* Konten Hero Bawah */}
              <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14 h-full flex flex-col justify-end pb-9 sm:pb-14">
                <div className="max-w-2xl space-y-3 sm:space-y-4">
                  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                    {heroData.title}
                  </h1>
                  <p className="text-xs sm:text-base text-[#E7E8E9] line-clamp-3 leading-relaxed">
                    {heroData.synopsis}
                  </p>
                </div>

                {/* Baris Tombol Mulai, Selengkapnya, 18+, dan Mute */}
                <div className="mt-5 sm:mt-7 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 sm:gap-3.5">
                    <button
                      type="button"
                      onClick={() => handleStartPlay(heroData)}
                      className="px-5 sm:px-7 py-2 sm:py-2.5 rounded-full bg-[#0F1E93] hover:bg-[#192DB7] text-white font-semibold text-xs sm:text-base transition"
                    >
                      Mulai
                    </button>

                    <button
                      type="button"
                      onClick={() => setDetailModalItem(heroData)}
                      className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#222831]/90 hover:bg-[#2F3334] text-white font-semibold text-xs sm:text-base border border-white/15 transition"
                    >
                      <Info className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Selengkapnya</span>
                    </button>

                    <span className="px-3 py-1.5 sm:py-2 rounded-full border border-white/45 text-[#C1C2C4] text-xs sm:text-sm font-medium">
                      {heroData.ageRating}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setHeroMuted(!heroMuted)}
                    aria-label="Mute atau Unmute"
                    className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-white/45 bg-[#181A1C]/40 hover:bg-white/15 text-white flex items-center justify-center transition"
                  >
                    {heroMuted ? (
                      <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" />
                    ) : (
                      <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />
                    )}
                  </button>
                </div>
              </div>
            </section>

            {/* BARIS KAROSEL SESUAI HALAMAN AKTIF */}
            <div className="pb-12">
              {currentPage === 'home' && (
                <>
                  <MediaRowCarousel
                    title="Melanjutkan Tonton Film"
                    items={filterByGenre(
                      MEDIA_ITEMS.filter((m) => m.isContinueWatching)
                    )}
                    variant="landscape"
                    myListIds={myListIds}
                    onToggleMyList={toggleMyList}
                    onOpenDetail={setDetailModalItem}
                    onStartPlay={handleStartPlay}
                  />
                  <MediaRowCarousel
                    title="Top Rating Film dan Series Hari Ini"
                    items={filterByGenre(MEDIA_ITEMS.slice(0, 8))}
                    variant="portrait"
                    myListIds={myListIds}
                    onToggleMyList={toggleMyList}
                    onOpenDetail={setDetailModalItem}
                    onStartPlay={handleStartPlay}
                  />
                  <MediaRowCarousel
                    title="Film Trending"
                    items={filterByGenre(
                      MEDIA_ITEMS.filter((m) => m.isTop10)
                    )}
                    variant="portrait"
                    myListIds={myListIds}
                    onToggleMyList={toggleMyList}
                    onOpenDetail={setDetailModalItem}
                    onStartPlay={handleStartPlay}
                  />
                  <MediaRowCarousel
                    title="Rilis Baru"
                    items={filterByGenre([...MEDIA_ITEMS].reverse().slice(0, 8))}
                    variant="portrait"
                    myListIds={myListIds}
                    onToggleMyList={toggleMyList}
                    onOpenDetail={setDetailModalItem}
                    onStartPlay={handleStartPlay}
                  />
                </>
              )}

              {currentPage === 'series' && (
                <>
                  <MediaRowCarousel
                    title="Melanjutkan Tonton Series"
                    items={filterByGenre(allSeries)}
                    variant="landscape"
                    myListIds={myListIds}
                    onToggleMyList={toggleMyList}
                    onOpenDetail={setDetailModalItem}
                    onStartPlay={handleStartPlay}
                  />
                  <MediaRowCarousel
                    title="Series Persembahan Chill"
                    items={filterByGenre(allSeries)}
                    variant="portrait"
                    myListIds={myListIds}
                    onToggleMyList={toggleMyList}
                    onOpenDetail={setDetailModalItem}
                    onStartPlay={handleStartPlay}
                  />
                  <MediaRowCarousel
                    title="Top Rating Series Hari Ini"
                    items={filterByGenre([...allSeries].reverse())}
                    variant="portrait"
                    myListIds={myListIds}
                    onToggleMyList={toggleMyList}
                    onOpenDetail={setDetailModalItem}
                    onStartPlay={handleStartPlay}
                  />
                  <MediaRowCarousel
                    title="Series Trending"
                    items={filterByGenre(allSeries.filter((s) => s.isTop10))}
                    variant="portrait"
                    myListIds={myListIds}
                    onToggleMyList={toggleMyList}
                    onOpenDetail={setDetailModalItem}
                    onStartPlay={handleStartPlay}
                  />
                  <MediaRowCarousel
                    title="Rilis Baru"
                    items={filterByGenre(allSeries)}
                    variant="portrait"
                    myListIds={myListIds}
                    onToggleMyList={toggleMyList}
                    onOpenDetail={setDetailModalItem}
                    onStartPlay={handleStartPlay}
                  />
                </>
              )}

              {currentPage === 'film' && (
                <>
                  <MediaRowCarousel
                    title="Melanjutkan Tonton Film"
                    items={filterByGenre(allFilms)}
                    variant="landscape"
                    myListIds={myListIds}
                    onToggleMyList={toggleMyList}
                    onOpenDetail={setDetailModalItem}
                    onStartPlay={handleStartPlay}
                  />
                  <MediaRowCarousel
                    title="Film Persembahan Chill"
                    items={filterByGenre(allFilms)}
                    variant="portrait"
                    myListIds={myListIds}
                    onToggleMyList={toggleMyList}
                    onOpenDetail={setDetailModalItem}
                    onStartPlay={handleStartPlay}
                  />
                  <MediaRowCarousel
                    title="Top Rating Film Hari Ini"
                    items={filterByGenre([...allFilms].reverse())}
                    variant="portrait"
                    myListIds={myListIds}
                    onToggleMyList={toggleMyList}
                    onOpenDetail={setDetailModalItem}
                    onStartPlay={handleStartPlay}
                  />
                  <MediaRowCarousel
                    title="Film Trending"
                    items={filterByGenre(allFilms.filter((f) => f.isTop10))}
                    variant="portrait"
                    myListIds={myListIds}
                    onToggleMyList={toggleMyList}
                    onOpenDetail={setDetailModalItem}
                    onStartPlay={handleStartPlay}
                  />
                  <MediaRowCarousel
                    title="Rilis Baru"
                    items={filterByGenre(allFilms)}
                    variant="portrait"
                    myListIds={myListIds}
                    onToggleMyList={toggleMyList}
                    onOpenDetail={setDetailModalItem}
                    onStartPlay={handleStartPlay}
                  />
                </>
              )}
            </div>
          </>
        )}
      </main>

      {/* ====================================================================
          SHARED FOOTER (CHILL + @2023 Chill All Rights Reserved + Genre + Bantuan)
      ==================================================================== */}
      <footer className="border-t border-white/15 bg-[#181A1C] py-12 sm:py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Kiri: Brand & Copyright */}
            <div className="lg:col-span-4 space-y-4">
              <ChillLogo
                size="lg"
                onClick={() => {
                  setCurrentPage('home');
                  setSelectedGenre('Semua');
                }}
              />
              <p className="text-xs sm:text-sm text-[#C1C2C4]">
                @2023 Chill All Rights Reserved.
              </p>
            </div>

            {/* Tengah: Genre 4 Kolom */}
            <div className="lg:col-span-6">
              <h3 className="text-white font-bold text-sm sm:text-base mb-4">Genre</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-2.5 text-xs sm:text-sm text-[#C1C2C4]">
                {GENRES_LIST.map((genre) => (
                  <button
                    key={genre}
                    type="button"
                    onClick={() => {
                      setCurrentPage('home');
                      setSelectedGenre(genre);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-left hover:text-white transition truncate"
                  >
                    {genre}
                  </button>
                ))}
              </div>
            </div>

            {/* Kanan: Bantuan */}
            <div className="lg:col-span-2">
              <h3 className="text-white font-bold text-sm sm:text-base mb-4">Bantuan</h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#C1C2C4]">
                {HELP_LINKS.map((item) => (
                  <li key={item}>
                    <button
                      type="button"
                      onClick={() => showToast(`Membuka halaman ${item}`)}
                      className="hover:text-white transition text-left"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* ====================================================================
          MODAL POP-UP DETAIL SERIES (8.1/8.2) & FILM (9.1)
      ==================================================================== */}
      {detailModalItem && (
        <DetailModal
          item={detailModalItem}
          isSaved={myListIds.includes(detailModalItem.id)}
          isSubscribed={Boolean(activePlan)}
          onToggleMyList={toggleMyList}
          onClose={() => setDetailModalItem(null)}
          onPlayMedia={handleStartPlay}
          onSelectRelated={(rel) => setDetailModalItem(rel)}
          relatedFilms={allFilms.filter((f) => f.id !== detailModalItem.id)}
        />
      )}

      {/* ====================================================================
          TOAST NOTIFIKASI
      ==================================================================== */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[#222831] border border-[#3254FF]/60 text-white text-xs sm:text-sm font-medium shadow-2xl">
          <CheckCircle2 className="w-4 h-4 text-[#3254FF] shrink-0" />
          <span>{toast}</span>
        </div>
      )}
    </div>
  );
}