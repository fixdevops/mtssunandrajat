import Navbar from '@/components/Navbar22';

import Image from 'next/image';

const staff = [
  { name: 'Nama Kepala TU', position: 'Kepala Tata Usaha' },
  { name: 'Nama Staf 1', position: 'Staf Tata Usaha' },
  { name: 'Nama Staf 2', position: 'Staf Keuangan' },
  { name: 'Nama Staf 3', position: 'Staf Perpustakaan' },
  { name: 'Nama Staf 4', position: 'Staf Laboratorium' },
  { name: 'Nama Staf 5', position: 'Petugas Kebersihan' },
  { name: 'Nama Staf 6', position: 'Petugas Keamanan' },
];

export default function KaryawanPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Page Header */}
      <section className="relative h-64 bg-gradient-to-r from-secondary to-secondary-dark flex items-center justify-center mt-20">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tenaga Kependidikan</h1>
          <p className="text-lg">Staf & Karyawan MTs Sunan Drajat</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Filter/Search */}
          <div className="mb-10 bg-white p-6 rounded-lg shadow-md flex md:justify-between items-center flex-col md:flex-row gap-4">
            <h3 className="font-bold text-gray-700 text-lg">Daftar Karyawan</h3>
            <div className="relative w-full md:w-64">
              <input 
                type="text" 
                placeholder="Cari Nama Karyawan..." 
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
              />
              <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {staff.map((employee, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border-t-4 border-secondary group">
                <div className="p-6 text-center">
                  <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden relative">
                     <Image
                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(employee.name)}&background=059669&color=fff&size=200`}
                        alt={employee.name}
                        fill
                        className="object-cover"
                      />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1 group-hover:text-secondary transition-colors">{employee.name}</h4>
                  <p className="text-sm text-gray-500 font-medium">{employee.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
