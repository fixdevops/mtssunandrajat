import Navbar from '@/components/Navbar22';

import Image from 'next/image';
import Link from 'next/link';

export default async function NewsDetailPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;

  // Mock data fetching based on ID
  const news = {
    id: params.id,

    title: 'DI HARI PAHLAWAN, SMAN 1 YOGYAKARTA LANTIK PENGURUS OSIS',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&q=80',
    date: '10 Nov, 2025',
    author: 'Admin',
    content: `
      <p class="mb-4"><strong>Yogyakarta, 10 November 2025</strong> - SMAN 1 Yogyakarta melantik pengurus OSIS periode 2025/2026 dalam sebuah upacara yang khidmat bertepatan dengan peringatan Hari Pahlawan. Acara ini dihadiri oleh seluruh warga sekolah, termasuk guru, karyawan, dan siswa.</p>
      
      <p class="mb-4">Kepala Sekolah SMAN 1 Yogyakarta, Bapak Ngadiya, S.Pd., M.M., dalam sambutannya menekankan pentingnya semangat kepahlawanan dalam berorganisasi. "OSIS adalah wadah untuk belajar memimpin dan melayani. Jadilah pahlawan bagi teman-teman kalian dengan memberikan contoh yang baik dan berkarya nyata," ujar beliau.</p>
      
      <p class="mb-4">Prosesi pelantikan diawali dengan pembacaan Surat Keputusan Kepala Sekolah tentang Susunan Pengurus OSIS Periode 2025/2026, dilanjutkan dengan pengucapan janji pengurus OSIS yang dipimpin langsung oleh Kepala Sekolah. Serah terima jabatan dari Ketua OSIS lama kepada Ketua OSIS baru ditandai dengan penyerahan panji OSIS.</p>
      
      <p class="mb-4">Ketua OSIS terpilih, dalam pidato perdananya, menyampaikan visi dan misinya untuk membawa OSIS SMAN 1 Yogyakarta semakin maju dan inovatif. "Kami siap bekerja keras dan berkolaborasi dengan seluruh elemen sekolah untuk mewujudkan program-program kerja yang bermanfaat," tegasnya.</p>
      
      <p>Acara ditutup dengan pemberian ucapan selamat dari Bapak Ibu Guru dan seluruh siswa kepada pengurus OSIS yang baru dilantik. Semangat baru kini menyelimuti SMAN 1 Yogyakarta, siap menyongsong masa depan dengan prestasi dan karya gemilang.</p>
    `
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <article className="pt-32 pb-16">
        <div className="container-custom max-w-4xl">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-primary">Beranda</Link>
            <i className="fas fa-chevron-right mx-2 text-xs"></i>
            <Link href="/news" className="hover:text-primary">Berita</Link>
            <i className="fas fa-chevron-right mx-2 text-xs"></i>
            <span className="text-gray-900 truncate">{news.title}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {news.title}
          </h1>

          <div className="flex items-center text-gray-500 mb-8 border-b border-gray-200 pb-6">
            <div className="flex items-center mr-6">
              <i className="fas fa-user-circle text-xl mr-2"></i>
              <span>{news.author}</span>
            </div>
            <div className="flex items-center mr-6">
              <i className="fas fa-calendar-alt text-xl mr-2"></i>
              <span>{news.date}</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-eye text-xl mr-2"></i>
              <span>1,234 views</span>
            </div>
          </div>

          <div className="relative h-96 w-full mb-10 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={news.image}
              alt={news.title}
              fill
              className="object-cover"
            />
          </div>

          <div 
            className="prose prose-lg max-w-none text-gray-800"
            dangerouslySetInnerHTML={{ __html: news.content }}
          />

          {/* Share Buttons */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h4 className="font-bold text-gray-900 mb-4">Bagikan Berita Ini:</h4>
            <div className="flex space-x-3">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
                <i className="fab fa-facebook-f mr-2"></i> Facebook
              </button>
              <button className="bg-sky-500 text-white px-4 py-2 rounded-full hover:bg-sky-600 transition-colors">
                <i className="fab fa-twitter mr-2"></i> Twitter
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors">
                <i className="fab fa-whatsapp mr-2"></i> WhatsApp
              </button>
            </div>
          </div>
        </div>
      </article>

    </main>
  );
}
