'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Trophy, Calendar, MapPin, Users, ArrowRight } from 'lucide-react';

const achievements = [
  {
    id: 1,
    title: 'Juara 1 Lomba Pidato Bahasa Arab Tingkat Kabupaten',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
    date: '10 Feb 2026',
    level: 'Kabupaten',
    participants: 'Ahmad Fauzan',
    location: 'Kemenag Bojonegoro',
  },
  {
    id: 2,
    title: 'Juara 2 Olimpiade Sains Nasional (OSN) Matematika',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
    date: '15 Jan 2026',
    level: 'Kabupaten',
    participants: 'Siti Aminah',
    location: 'Dinas Pendidikan Bojonegoro',
  },
  {
    id: 3,
    title: 'Juara 1 Musabaqah Tilawatil Quran (MTQ) Pelajar',
    image: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?w=800&q=80',
    date: '12 Dec 2025',
    level: 'Kecamatan',
    participants: 'Muhammad Rizky',
    location: 'Kedungadem',
  },
];

export default function AchievementSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header yang lebih elegan */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              Prestasi Siswa
            </h2>
            <p className="mt-3 text-lg text-gray-500">
              Apresiasi atas dedikasi dan pencapaian luar biasa santri MTs Sunan Drajat di berbagai tingkatan.
            </p>
          </div>
          <Link 
            href="/prestasi" 
            className="group inline-flex items-center gap-2 font-bold text-blue-700 hover:text-blue-800 transition-colors"
          >
            Lihat Semua Prestasi
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid Card 3 Kolom */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.slice(0, 3).map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col shadow-sm"
            >
              {/* Gambar dengan Badge Level */}
              <div className="relative h-56 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/95 backdrop-blur shadow-sm text-blue-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-blue-100">
                    {item.level}
                  </span>
                </div>
              </div>

              {/* Konten Card */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                  <Calendar size={14} />
                  <span>{item.date}</span>
                </div>

                <Link href={`/prestasi/detail/${item.id}`}>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight mb-4 hover:text-blue-700 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                </Link>

                <div className="mt-auto space-y-3 pt-4 border-t border-gray-50">
                  <div className="flex items-start gap-3">
                    <Users size={16} className="text-blue-600 mt-1 shrink-0" />
                    <span className="text-sm text-gray-600 line-clamp-1">{item.participants}</span>
                  </div>
                  {item.location && (
                    <div className="flex items-start gap-3">
                      <MapPin size={16} className="text-red-500 mt-1 shrink-0" />
                      <span className="text-sm text-gray-500 line-clamp-1">{item.location}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}