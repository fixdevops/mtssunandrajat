import Navbar from '@/components/Navbar22';
import Image from 'next/image';

export default function ProfilPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />


      {/* Content Section */}
      <section className="py-16">
        <div className="container-custom max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            
            {/* 1. Tentang Kami & Statistik Singkat */}
            <div className="p-8 md:p-12 border-b border-gray-100">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Tentang Kami</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    <strong>MTSS Sunan Drajat</strong> adalah Madrasah Tsanawiyah swasta yang berlokasi di Geger, Kedungadem. Berdiri sejak 21 Maret 2011, kami berkomitmen untuk menyelenggarakan pendidikan tingkat menengah yang berkualitas di bawah naungan Kementerian Agama.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Dengan semangat mencerdaskan bangsa, madrasah kami terus berkembang untuk menciptakan lingkungan belajar yang kondusif bagi siswa-siswi di wilayah Bojonegoro dan sekitarnya.
                  </p>
                  
                  {/* Badge Akreditasi */}
                  <div className="mt-8 flex items-center gap-4 bg-yellow-50 p-4 rounded-xl border border-yellow-100">
                    <div className="text-3xl font-bold text-yellow-600">B</div>
                    <div>
                      <p className="text-sm font-bold text-gray-800 uppercase">Terakreditasi B</p>
                      <p className="text-xs text-gray-500">SK: 175/BAP-S/M/SK/X/2015</p>
                    </div>
                  </div>
                </div>

                <div className="md:w-1/2">
                  <div className="relative w-full aspect-square md:aspect-video rounded-xl overflow-hidden shadow-lg border-8 border-gray-50">
                    <Image
                      src="/logomts.png"
                      alt="Logo MTSS Sunan Drajat"
                      fill
                      className="object-contain p-8 bg-white"
                    />
                  </div>
                </div>
              </div>
            </div>

            
            {/* 3. Tabel Informasi Lengkap */}
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Informasi Lengkap Madrasah</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                <div className="space-y-4">
                  <h4 className="font-bold text-primary border-b pb-2 mb-4 uppercase text-xs tracking-widest">Data Administrasi</h4>
                  <IdentityItem label="NPSN" value="20582619" />
                  <IdentityItem label="Status" value="Swasta" />
                  <IdentityItem label="Naungan" value="Kementerian Agama" />
                  <IdentityItem label="Tgl Berdiri" value="21 Maret 2011" />
                  <IdentityItem label="Tgl Operasional" value="6 Juni 2017" />
                  <IdentityItem label="SK Operasional" value="MTsS/22.0096/2017" />
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-primary border-b pb-2 mb-4 uppercase text-xs tracking-widest">Lokasi & Kontak</h4>
                  <IdentityItem label="Alamat" value="Jl. Sunan Drajat No.9 Geger" />
                  <IdentityItem label="Desa" value="Geger" />
                  <IdentityItem label="Kecamatan" value="Kedungadem" />
                  <IdentityItem label="Kabupaten" value="Bojonegoro" />
                  <IdentityItem label="Kepala Sekolah" value="Ahmad Rifa'i" />
                  <IdentityItem label="Email" value="-" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

function IdentityItem({ label, value }) {
  return (
    <div className="flex flex-col sm:flex-row border-b border-gray-50 py-2 gap-1 sm:gap-4">
      <span className="w-full sm:w-1/3 text-gray-500 text-sm">{label}</span>
      <span className="w-full sm:w-2/3 text-gray-800 font-medium text-sm">: {value || '-'}</span>
    </div>
  );
}