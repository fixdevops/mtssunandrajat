import Navbar from '@/components/Navbar22';
import { 
  Tent, 
  Music, 
  HeartPulse, 
  Palette, 
  ArrowRight 
} from 'lucide-react';
import Link from 'next/link';

const extracurriculars = [
  { 
    name: 'Pramuka Sudra', 
    description: 'Membentuk karakter kedisiplinan, kemandirian, dan jiwa kepemimpinan santri melalui kegiatan kepanduan.',
    icon: Tent, 
    color: 'text-amber-600', 
    bg: 'bg-amber-50' 
  },
  { 
    name: 'Drum Band', 
    description: 'Mengasah musikalitas dan kekompakan tim dalam harmoni nada yang enerjik dan disiplin tinggi.',
    icon: Music, 
    color: 'text-blue-600', 
    bg: 'bg-blue-50' 
  },
  { 
    name: 'Palang Merah Indonesia', 
    description: 'Pelatihan kesiapsiagaan bencana dan pertolongan pertama untuk menumbuhkan jiwa kemanusiaan.',
    icon: HeartPulse, 
    color: 'text-red-600', 
    bg: 'bg-red-50' 
  },
  { 
    name: 'Desain Grafis', 
    description: 'Eksplorasi kreativitas digital dalam pembuatan media visual modern menggunakan software desain terkini.',
    icon: Palette, 
    color: 'text-purple-600', 
    bg: 'bg-purple-50' 
  },
];

export default function ExtracurricularPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Page Header */}
      <section className="relative h-64 bg-gradient-to-r from-primary to-primary-dark flex items-center justify-center mt-20">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ekstrakurikuler</h1>
          <p className="text-lg">Wadahi bakat dan minat santri melalui berbagai pilihan kegiatan pengembangan diri yang variatif dan edukatif.</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900"></h2>
            <p className="text-gray-500 mt-4 text-sm md:text-base">
              
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {extracurriculars.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="group p-8 rounded-3xl border border-gray-100 bg-white hover:bg-gray-50 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col h-full items-center text-center"
                >
                  {/* Icon Circle */}
                  <div className={`w-20 h-20 ${item.bg} ${item.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-md`}>
                    <IconComponent size={36} />
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h4 className="text-xl font-bold text-gray-900 leading-tight mb-3">
                      {item.name}
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Simple Link */}
                  <div className="mt-auto">
                    <button className="btn btn-outline border-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 rounded-full px-6 py-2 transition-all text-sm font-semibold">
                      Daftar Sekarang
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          
        </div>
      </section>

    </main>
  );
}
