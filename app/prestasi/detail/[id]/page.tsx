import Navbar from '@/components/Navbar22';

import Image from 'next/image';
import Link from 'next/link';

export default async function PrestasiDetailPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;

  // Mock data
  const achievement = {
    id: params.id,

    title: 'Juara 1 Lomba Cerdas Cermat Pancasila dan UUD NRI 1945',
    image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=1200&q=80',
    date: '31 Oct, 2025',
    level: 'Skala Nasional',
    participants: [
        'Muhammad Imtihan Syamsul/XII FL9',
        'Langit Ar Abrar Rafa Kurniawan/XE2',
        'Wijaya Prana/XE2'
    ],
    location: 'Penyelenggara UNY',
    description: `
      <p class="mb-4">Tim Cerdas Cermat SMA Negeri 1 Yogyakarta kembali menorehkan tinta emas di kancah nasional. Dalam ajang Lomba Cerdas Cermat Pancasila dan UUD NRI 1945 yang diselenggarakan oleh Universitas Negeri Yogyakarta, tim yang terdiri dari tiga siswa berbakat ini berhasil menyisihkan puluhan tim lainnya dari seluruh Indonesia.</p>
      
      <p class="mb-4">Perjuangan mereka tidaklah mudah. Mulai dari babak penyisihan yang ketat hingga babak final yang menegangkan, mereka menunjukkan penguasaan materi yang luar biasa serta kerjasama tim yang solid. Ketangkasan dalam menjawab setiap pertanyaan dewan juri menjadi kunci kemenangan mereka.</p>
      
      <p class="mb-4">Prestasi ini membuktikan bahwa siswa SMA Negeri 1 Yogyakarta tidak hanya unggul dalam bidang sains dan teknologi, tetapi juga memiliki wawasan kebangsaan yang luas dan mendalam. Semoga prestasi ini dapat memotivasi siswa-siswa lainnya untuk terus berprestasi dan mengharumkan nama sekolah.</p>
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
            <Link href="/prestasi" className="hover:text-primary">Prestasi</Link>
            <i className="fas fa-chevron-right mx-2 text-xs"></i>
            <span className="text-gray-900 truncate">{achievement.title}</span>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-96 w-full">
              <Image
                src={achievement.image}
                alt={achievement.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-6 left-6 flex space-x-2">
                <span className="bg-secondary text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                  {achievement.level}
                </span>
                <span className="bg-primary text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                    <i className="fas fa-trophy mr-2"></i> Juara 1
                </span>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b border-gray-100 pb-6">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-0 leading-tight md:w-3/4">
                    {achievement.title}
                  </h1>
                  <div className="text-gray-500 text-sm flex items-center md:flex-col md:items-end">
                    <span className="block mb-1"><i className="fas fa-calendar-alt mr-2 text-primary"></i> Tanggal</span>
                    <span className="font-semibold text-gray-900">{achievement.date}</span>
                  </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                <div className="md:col-span-2 prose prose-lg text-gray-700" dangerouslySetInnerHTML={{ __html: achievement.description }}></div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 h-fit">
                    <h4 className="font-bold text-gray-900 mb-4 text-lg">Detail Prestasi</h4>
                    
                    <div className="mb-4">
                        <p className="text-sm text-gray-500 mb-1">Lokasi/Penyelenggara</p>
                        <p className="font-medium text-gray-900"><i className="fas fa-map-marker-alt text-primary mr-2"></i> {achievement.location}</p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500 mb-1">Peserta/Pemenang</p>
                        <ul className="space-y-2 mt-2">
                            {achievement.participants.map((person, idx) => (
                                <li key={idx} className="flex items-center text-gray-900 font-medium">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 text-xs">
                                        <i className="fas fa-user"></i>
                                    </div>
                                    {person}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </article>

    </main>
  );
}
