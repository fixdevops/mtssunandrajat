'use client';

import React from 'react';
import { 
  Tent, 
  Music, 
  HeartPulse, 
  Palette, 
  ArrowRight 
} from 'lucide-react';

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

export default function ExtracurricularSection() {
  return (
    <section id="ekstrakurikuler" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Ekstrakurikuler</h2>
          <p className="text-gray-500 mt-4 text-sm md:text-base">
            Wadahi bakat dan minat santri melalui berbagai pilihan kegiatan pengembangan diri yang variatif dan edukatif.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {extracurriculars.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-3xl border border-gray-100 bg-white hover:bg-gray-50 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col h-full"
              >
                {/* Icon Circle */}
                <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                  <IconComponent size={28} />
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h4 className="text-lg font-bold text-gray-900 leading-tight mb-3">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>
                
                {/* Simple Link */}
                <div className="pt-4 mt-auto border-t border-gray-50 group-hover:border-blue-100 transition-colors">
                  <span className="text-xs font-bold text-blue-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Lihat Detail <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}