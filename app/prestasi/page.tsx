import Navbar from '@/components/Navbar22';

import Image from 'next/image';
import Link from 'next/link';

const achievements = [
  {
    id: 1,
    title: 'Juara 1 Lomba Pidato Bahasa Arab Tingkat Kabupaten',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
    date: '10 Feb, 2026',
    level: 'Skala Kabupaten',
    participants: 'Ahmad Fauzan (Kelas 9A)',
    location: 'Kemenag Bojonegoro',
  },
  {
    id: 2,
    title: 'Juara 2 Olimpiade Sains Nasional (OSN) Matematika',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
    date: '15 Jan, 2026',
    level: 'Skala Kabupaten',
    participants: 'Siti Aminah (Kelas 8B)',
    location: 'Dinas Pendidikan Bojonegoro',
  },
  {
    id: 3,
    title: 'Juara 1 Musabaqah Tilawatil Quran (MTQ) Pelajar',
    image: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?w=800&q=80',
    date: '12 Dec, 2025',
    level: 'Skala Kecamatan',
    participants: 'Muhammad Rizky (Kelas 7C)',
    location: 'Kedungadem',
  },
  {
    id: 4,
    title: 'Juara 3 Lomba Futsal Antar SMP/MTs',
    image: 'https://images.unsplash.com/photo-1579952363873-6387a2af512f?w=800&q=80',
    date: '20 Nov, 2025',
    level: 'Skala Kabupaten',
    participants: 'Tim Futsal MTs Sunan Drajat',
    location: 'GOR Bojonegoro',
  },
  {
    id: 5,
    title: 'Juara Harapan 1 Lomba Kebersihan Lingkungan Sekolah',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    date: '10 Nov, 2025',
    level: 'Skala Kabupaten',
    participants: 'Seluruh Warga Sekolah',
    location: 'Bojonegoro',
  },
  {
    id: 6,
    title: 'Juara 2 Lomba Hadrah Al-Banjari',
    image: 'https://images.unsplash.com/photo-1519681393784-d8e5b5a4570e?w=800&q=80',
    date: '22 Oct, 2025',
    level: 'Skala Karesidenan',
    participants: 'Grup Hadrah As-Syifa',
    location: 'Tuban',
  }
];

export default function PrestasiPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Page Header */}
      <section className="relative h-64 bg-gradient-to-r from-primary to-primary-dark flex items-center justify-center mt-20">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Prestasi Siswa</h1>
          <p className="text-lg">Kebanggaan MTs Sunan Drajat</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Filters */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <button className="px-6 py-2 rounded-full bg-primary text-white font-medium shadow-md">Semua</button>
            <button className="px-6 py-2 rounded-full bg-white text-gray-700 font-medium shadow-sm hover:bg-gray-100 transition-colors">Nasional</button>
            <button className="px-6 py-2 rounded-full bg-white text-gray-700 font-medium shadow-sm hover:bg-gray-100 transition-colors">Provinsi</button>
            <button className="px-6 py-2 rounded-full bg-white text-gray-700 font-medium shadow-sm hover:bg-gray-100 transition-colors">Kota</button>
            <button className="px-6 py-2 rounded-full bg-white text-gray-700 font-medium shadow-sm hover:bg-gray-100 transition-colors">Internasional</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={achievement.image}
                    alt={achievement.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    {achievement.level}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2 flex items-center">
                    <i className="fas fa-calendar-alt mr-2 text-primary"></i>
                    {achievement.date}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    <Link href={`/prestasi/detail/${achievement.id}`}>
                      {achievement.title}
                    </Link>
                  </h3>
                  <div className="border-t border-gray-100 pt-4 mt-4">
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Peserta:</strong>
                    </p>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {achievement.participants}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn btn-outline border-primary text-primary hover:bg-primary hover:text-white">
              Muat Lebih Banyak
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}
