import Navbar from '@/components/Navbar22';

import Link from 'next/link';
import Image from 'next/image';

const newsData = [
  {
    id: 1,
    title: 'Penerimaan Peserta Didik Baru (PPDB) Tahun Ajaran 2025/2026 Segera Dibuka',
    excerpt: 'MTs Sunan Drajat bersiap menyambut calon santri baru. Persiapkan diri Anda untuk bergabung dengan keluarga besar madrasah kami...',
    image: '/logomts.png', 
    date: '12 Feb 2026',
    category: 'Pengumuman',
  },
  {
    id: 2,
    title: 'Prestasi Membanggakan Santri MTs Sunan Drajat di Tingkat Kabupaten',
    excerpt: 'Selamat kepada para santri yang telah meraih juara dalam kompetisi sains dan seni tingkat Kabupaten Bojonegoro. Prestasi ini membuktikan kualitas pendidikan di madrasah kita.',
    image: '/logomts.png',
    date: '10 Feb 2026', 
    category: 'Prestasi',
  },
  {
    id: 3,
    title: 'Kegiatan Jumat Bersih dan Sehat MTs Sunan Drajat',
    excerpt: 'Seluruh warga madrasah mengikuti kegiatan senam pagi dan kerja bakti untuk menjaga kebersihan lingkungan sekolah. Hidup sehat dimulai dari lingkungan yang bersih.',
    image: '/logomts.png',
    date: '07 Feb 2026',
    category: 'Kegiatan',
  },
  {
    id: 4,
    title: 'Peringatan Maulid Nabi Muhammad SAW 1447 H',
    excerpt: 'MTs Sunan Drajat menggelar pengajian akbar dalam rangka memperingati Maulid Nabi Muhammad SAW. Mari teladani akhlak Rasulullah dalam kehidupan sehari-hari.',
    image: '/logomts.png',
    date: '15 Jan 2026',
    category: 'Keagamaan',
  },
  {
    id: 5,
    title: 'Pelatihan Guru dalam Peningkatan Kompetensi Mengajar',
    excerpt: 'Para guru MTs Sunan Drajat mengikuti workshop pengembangan metode pembelajaran inovatif untuk meningkatkan kualitas pendidikan bagi para santri.',
    image: '/logomts.png',
    date: '10 Jan 2026',
    category: 'Diklat',
  },
  {
    id: 6,
    title: 'Kunjungan Edukasi ke Museum Geologi',
    excerpt: 'Siswa kelas 8 MTs Sunan Drajat melaksanakan kegiatan outing class ke Museum Geologi untuk memperdalam pemahaman mata pelajaran IPA dan IPS.',
    image: '/logomts.png',
    date: '05 Jan 2026',
    category: 'Kunjungan',
  },
];

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Page Header */}
      <section className="relative h-64 bg-gradient-to-r from-primary to-primary-dark flex items-center justify-center mt-20">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Berita Terbaru</h1>
          <p className="text-lg">Informasi Terkini Seputar MTs Sunan Drajat</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.map((news) => (
              <article key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-56">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-contain p-4 bg-gray-50 hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {news.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <i className="fas fa-calendar-alt mr-2"></i>
                    <span>{news.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-primary transition-colors">
                    <Link href={`/news/detail/${news.id}`}>
                      {news.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {news.excerpt}
                  </p>
                  <Link
                    href={`/news/detail/${news.id}`}
                    className="inline-flex items-center font-medium text-primary hover:text-primary-dark"
                  >
                    Baca Selengkapnya <i className="fas fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="flex space-x-2">
              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors">
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                1
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors">
                2
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors">
                3
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors">
                <i className="fas fa-chevron-right"></i>
              </button>
            </nav>
          </div>
        </div>
      </section>

    </main>
  );
}
