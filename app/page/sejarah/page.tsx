'use client';

import Navbar from '@/components/Navbar22';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SejarahPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Page Header */}
      <section className="relative h-64 bg-gradient-to-r from-primary to-primary-dark flex items-center justify-center mt-20">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sejarah Madrasah</h1>
          <p className="text-lg text-emerald-100 font-medium tracking-wide">Jejak Langkah MTSS Sunan Drajat Geger</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container-custom max-w-5xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100"
          >
            {/* Image Section */}
            <div className="relative h-64 md:h-[450px] w-full mb-10 rounded-xl overflow-hidden shadow-lg group bg-gray-100">
              <Image
                src="/123456789i.png"
                alt="Gedung MTSS Sunan Drajat"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 text-white">
                <p className="text-lg font-medium">Gedung Utama MTSS Sunan Drajat</p>
              </div>
            </div>

            {/* Prose Content */}
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                  2011
                </div>
                <h3 className="text-2xl font-bold text-primary m-0 font-heading">Awal Perjuangan</h3>
              </div>
              
              <p>
                Perjalanan <strong>MTSS Sunan Drajat</strong> dimulai pada tanggal <strong>21 Maret 2011</strong>. Didirikan di Desa Geger, Kecamatan Kedungadem, madrasah ini lahir dari aspirasi masyarakat yang menginginkan adanya lembaga pendidikan menengah yang kuat secara spritual namun tetap relevan dengan kemajuan zaman.
              </p>
              
              <p>
                Dengan No. SK Pendirian <em>Kd.13.12/1/PP.00.4/622/SK/2011</em>, sekolah ini mulai meletakkan batu pertama pembangunan karakter generasi muda di wilayah Bojonegoro, khususnya di bawah naungan Kementerian Agama.
              </p>
              
              <h3 className="text-2xl font-bold text-primary mb-4 mt-12 font-heading">Perkembangan Resmi</h3>
              <p>
                Seiring meningkatnya kepercayaan masyarakat, MTSS Sunan Drajat secara resmi mendapatkan izin operasional pada <strong>6 Juni 2017</strong>. Momentum ini menjadi titik balik bagi madrasah untuk terus berbenah, baik dari segi infrastruktur maupun kualitas tenaga pendidik. 
              </p>

              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="my-10 border-l-4 border-yellow-500 bg-yellow-50 p-8 rounded-r-xl"
              >
                <p className="italic font-medium text-gray-800 text-lg m-0">
                  &quot;Berdiri di atas tanah Geger, kami membawa misi besar untuk mencetak kader bangsa yang cerdas berwawasan IPTEK namun tetap kokoh dalam IMTAK berlandaskan Akhlakul Karimah.&quot;
                </p>
              </motion.div>

              <h3 className="text-2xl font-bold text-primary mb-4 mt-8 font-heading">Menuju Masa Depan</h3>
              <p>
                Kini, di bawah kepemimpinan <strong>Bapak Ahmad Rifa'i</strong>, MTSS Sunan Drajat terus melakukan inovasi digital dan penguatan kurikulum. Akreditasi B yang diraih pada tahun 2015 menjadi bukti nyata bahwa standar pendidikan kami telah memenuhi kriteria nasional.
              </p>
              <p>
                Kami terus berkomitmen menjaga nilai-nilai <strong>Ahlussunnah wal Jamaah</strong> sebagai pondasi utama bagi setiap siswa dalam menghadapi tantangan global di masa depan.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}