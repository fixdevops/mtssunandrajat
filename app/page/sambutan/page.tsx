import Navbar from '@/components/Navbar22';

import Image from 'next/image';

export default function SambutanPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Page Header */}
      <section className="relative h-64 bg-gradient-to-r from-primary to-primary-dark flex items-center justify-center mt-20">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sambutan Kepala Madrasah</h1>
          <p className="text-lg text-emerald-100 font-medium tracking-wide">MTs Sunan Drajat</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Kepala Madrasah Info */}
            <div className="flex flex-col md:flex-row gap-12 mb-8 items-start">
              <div className="md:w-1/3 flex flex-col items-center">
                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border-4 border-white transform hover:rotate-1 transition-transform duration-300">
                  <div className="absolute inset-0 bg-primary/10"></div>
                  <Image
                    src="/logomts.png" // Placeholder, sebaiknya diganti foto asli
                    alt="Kepala Madrasah"
                    fill
                    className="object-contain p-8 bg-gray-50"
                  />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="font-bold text-2xl text-gray-900">Ustad.Taufiq</h3>
                  <p className="text-primary font-medium uppercase tracking-wider text-sm mt-1">Kepala Madrasah</p>
                  <div className="h-1 w-12 bg-primary mx-auto mt-4 rounded-full"></div>
                </div>
              </div>

              <div className="md:w-2/3">
                <div className="prose prose-lg text-gray-700 leading-relaxed">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Membangun Generasi Islami yang Unggul</h2>
                  
                  <p className="italic text-gray-500 mb-6">
                    Bismillahirrohmanirrahim.<br/>
                    Assalamu'alaikum Warahmatullahi Wabarakatuh.
                  </p>
                  
                  <p className="mb-4">
                    Puji syukur ke hadirat Allah SWT atas segala limpahan rahmat dan karunia-Nya. Shalawat serta salam semoga senantiasa tercurah kepada junjungan kita Nabi Muhammad SAW.
                  </p>

                  <p className="mb-4">
                    Selamat datang di website resmi <strong>MTs Sunan Drajat, Geger, Kedungadem, Bojonegoro</strong>. Website ini kami hadirkan sebagai wujud komitmen kami dalam keterbukaan informasi dan sebagai sarana komunikasi efektif antara madrasah, wali murid, alumni, dan masyarakat luas.
                  </p>

                  <p className="mb-4">
                    MTs Sunan Drajat bertekad untuk menjadi lembaga pendidikan yang tidak hanya mengedepankan prestasi akademik, tetapi juga pembentukan karakter (akhlakul karimah) yang berlandaskan nilai-nilai Islam Ahlussunnah wal Jamaah. Kami percaya bahwa pendidikan adalah sinergi antara ilmu pengetahuan, teknologi, dan iman.
                  </p>

                  <p className="mb-4">
                    Di tengah tantangan zaman yang semakin kompleks, kami terus berinovasi dalam pembelajaran, menyediakan fasilitas yang memadai, dan menciptakan lingkungan belajar yang kondusif agar para siswa dapat mengembangkan potensi terbaik mereka.
                  </p>

                  <p className="mb-4">
                    Kami mengajak seluruh elemen masyarakat untuk bersinergi memajukan pendidikan di MTs Sunan Drajat. Kritik, saran, dan dukungan Anda sangat kami butuhkan demi kemajuan madrasah yang kita cintai ini.
                  </p>

                  <p className="mb-6">
                    Semoga Allah SWT senantiasa meridhoi langkah kita dalam mencerdaskan kehidupan bangsa.
                  </p>

                  <p className="italic text-gray-500 font-medium">
                    Wassalamu'alaikum Warahmatullahi Wabarakatuh.
                  </p>
                  
                  <div className="mt-10 p-6 bg-primary/5 rounded-xl border-l-4 border-primary">
                    <p className="font-semibold text-gray-800">Sambutan Kepala Madrasah</p>
                    <p className="font-bold text-xl text-primary mt-1">Ustad.Taufiq</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
