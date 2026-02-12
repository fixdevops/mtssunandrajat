'use client';

import Image from 'next/image';
import Link from 'next/link';

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
    excerpt: 'Selamat kepada para santri yang telah meraih juara dalam kompetisi sains dan seni tingkat Kabupaten Bojonegoro...',
    image: '/logomts.png',
    date: '10 Feb 2026', 
    category: 'Prestasi',
  },
  {
    id: 3,
    title: 'Kegiatan Jumat Bersih dan Sehat MTs Sunan Drajat',
    excerpt: 'Seluruh warga madrasah mengikuti kegiatan senam pagi dan kerja bakti untuk menjaga kebersihan lingkungan sekolah...',
    image: '/logomts.png',
    date: '07 Feb 2026',
    category: 'Kegiatan',
  },
];

export default function NewsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header: Simpel & To the Point */}
        <div className="flex justify-between items-end mb-10 border-b-2 border-gray-100 pb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-tight">Berita Terbaru</h2>
            <p className="text-gray-500 text-sm mt-1">Informasi terkini seputar kegiatan madrasah</p>
          </div>
          <Link href="/news" className="text-blue-600 hover:underline text-sm font-semibold">
            Lihat Semua →
          </Link>
        </div>

        {/* Grid: Layout bersih tanpa efek bayangan berlebihan */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsData.map((news) => (
            <article key={news.id} className="flex flex-col">
              {/* Foto dengan aspek rasio yang pas */}
              <div className="relative aspect-[4/3] w-full mb-4 overflow-hidden rounded-lg">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-contain p-4 bg-gray-50 hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-2 left-2 bg-blue-700 text-white text-[10px] px-2 py-1 rounded">
                  {news.category}
                </span>
              </div>

              {/* Konten */}
              <div className="flex flex-col flex-grow">
                <span className="text-gray-400 text-xs mb-2">{news.date}</span>
                <Link href={`/news/detail/${news.id}`}>
                  <h3 className="text-lg font-bold text-gray-900 leading-snug hover:text-blue-700 transition-colors line-clamp-2">
                    {news.title}
                  </h3>
                </Link>
                <p className="text-gray-600 text-sm mt-3 line-clamp-2">
                  {news.excerpt}
                </p>
                <Link 
                  href={`/news/detail/${news.id}`}
                  className="mt-4 text-sm font-bold text-gray-800 hover:text-blue-700 inline-flex items-center"
                >
                  Selengkapnya
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}