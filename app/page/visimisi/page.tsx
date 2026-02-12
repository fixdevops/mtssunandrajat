import Navbar from '@/components/Navbar22';


export default function VisiMisiPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Page Header */}
      <section className="relative h-64 bg-gradient-to-r from-primary to-primary-dark flex items-center justify-center mt-20">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Visi & Misi</h1>
          <p className="text-lg">MTs Sunan Drajat</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Visi */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-eye text-white text-xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Visi</h2>
              </div>
              
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-6 border-l-4 border-primary">
                <p className="text-lg text-gray-800 leading-relaxed font-medium">
                  Terwujudnya sekolah yang unggul, berkarakter, berwawasan lingkungan, dan berlandaskan nilai-nilai luhur budaya bangsa.
                </p>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <p className="text-gray-700">Unggul dalam prestasi akademik dan non-akademik</p>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <p className="text-gray-700">Berkarakter kuat dan berakhlak mulia</p>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <p className="text-gray-700">Berwawasan lingkungan dan berkelanjutan</p>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <p className="text-gray-700">Menjunjung tinggi nilai budaya bangsa</p>
                </div>
              </div>
            </div>

            {/* Misi */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-bullseye text-white text-xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Misi</h2>
              </div>

              <ol className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold mr-3">
                    1
                  </span>
                  <p className="text-gray-700 pt-1">
                    Menyelenggarakan pembelajaran yang berkualitas dan inovatif untuk mengembangkan potensi siswa secara optimal.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold mr-3">
                    2
                  </span>
                  <p className="text-gray-700 pt-1">
                    Membentuk karakter siswa yang berakhlak mulia, disiplin, dan bertanggung jawab.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold mr-3">
                    3
                  </span>
                  <p className="text-gray-700 pt-1">
                    Mengembangkan budaya sekolah yang peduli dan berbudaya lingkungan.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold mr-3">
                    4
                  </span>
                  <p className="text-gray-700 pt-1">
                    Meningkatkan prestasi akademik dan non-akademik di tingkat nasional dan internasional.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold mr-3">
                    5
                  </span>
                  <p className="text-gray-700 pt-1">
                    Melestarikan dan mengembangkan nilai-nilai luhur budaya bangsa dalam kehidupan sekolah.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold mr-3">
                    6
                  </span>
                  <p className="text-gray-700 pt-1">
                    Mengembangkan kerjasama dengan berbagai pihak untuk meningkatkan kualitas pendidikan.
                  </p>
                </li>
              </ol>
            </div>
          </div>

          {/* Motto */}
          <div className="mt-8 bg-gradient-to-r from-primary to-primary-dark rounded-lg shadow-xl p-12 text-center text-white">
            <i className="fas fa-quote-left text-4xl mb-4 opacity-50"></i>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Unggul, Islami, Berkarakter</h3>
            <p className="text-xl opacity-90">Mewujudkan Generasi Qur&apos;ani</p>

            <i className="fas fa-quote-right text-4xl mt-4 opacity-50"></i>
          </div>
        </div>
      </section>

    </main>
  );
}
