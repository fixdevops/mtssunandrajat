import Navbar from '@/components/Navbar22';

import Image from 'next/image';

const teachers = [
  { name: 'Nama Kepala Madrasah', position: 'Kepala Madrasah' },
  { name: 'Nama Waka Kurikulum', position: 'Waka Kurikulum' },
  { name: 'Nama Waka Kesiswaan', position: 'Waka Kesiswaan' },
  { name: 'Nama Guru 1', position: 'Guru PAI' },
  { name: 'Nama Guru 2', position: 'Guru Bahasa Indonesia' },
  { name: 'Nama Guru 3', position: 'Guru Matematika' },
  { name: 'Nama Guru 4', position: 'Guru Bahasa Inggris' },
  { name: 'Nama Guru 5', position: 'Guru IPA' },
  { name: 'Nama Guru 6', position: 'Guru IPS' },
  { name: 'Nama Guru 7', position: 'Guru Bahasa Arab' },
  { name: 'Nama Guru 8', position: 'Guru PJOK' },
  { name: 'Nama Guru 9', position: 'Guru SBK' },
  { name: 'Nama Guru 10', position: 'Guru BK' },
  { name: 'Nama Guru 11', position: 'Guru TIK' },
];

export default function GuruPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Page Header */}
      <section className="relative h-64 bg-gradient-to-r from-primary to-primary-dark flex items-center justify-center mt-20">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tenaga Pendidik</h1>
          <p className="text-lg">Guru MTs Sunan Drajat</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Filter/Search */}
          <div className="mb-10 bg-white p-6 rounded-lg shadow-md flex md:justify-between items-center flex-col md:flex-row gap-4">
            <h3 className="font-bold text-gray-700 text-lg">Daftar Guru</h3>
            <div className="relative w-full md:w-64">
              <input 
                type="text" 
                placeholder="Cari Nama Guru..." 
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              />
              <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teachers.map((teacher, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border-t-4 border-primary group">
                <div className="p-6 text-center">
                  <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden relative">
                     <Image
                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(teacher.name)}&background=1e40af&color=fff&size=200`}
                        alt={teacher.name}
                        fill
                        className="object-cover"
                      />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">{teacher.name}</h4>
                  <p className="text-sm text-secondary font-medium">{teacher.position}</p>
                </div>
                <div className="bg-gray-50 px-6 py-3 border-t border-gray-100 flex justify-center">
                  <button className="text-xs text-gray-500 hover:text-primary font-medium flex items-center">
                    <i className="fas fa-id-card mr-2"></i> Lihat Profil
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
