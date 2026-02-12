'use client';

import Navbar from '@/components/Navbar22';
import { motion } from 'framer-motion';

const alumni = [
  {
    id: 1,
    name: 'M Fikri Asyam Jauhary',
    role: 'Software Engineer',
    image: 'https://i.pinimg.com/736x/f5/47/d8/f547d800625af9056d62efe8969aeea0.jpg',
    quote: 'Apabila kamu sudah memutuskan untuk menekuni suatu bidang. Jadilah yang konsisten. Itu adalah kunci keberhasilan yang sebenarnya.',
    author: '-Bj Habibie'
  },
  {
    id: 2,
    name: 'Ahmad',
    role: 'Perbankan Syariah',
    image: 'https://i.pinimg.com/736x/f5/47/d8/f547d800625af9056d62efe8969aeea0.jpg',
    quote: 'Tujuan pendidikan itu untuk mempertajam kecerdasaan, memperkukuh kemauan serta memperhalus perasaan.',
    author: '-Tan Malaka'
  },
  {
    id: 3,
    name: 'Muhammad',
    role: 'Desainer Grafis',
    image: 'https://i.pinimg.com/736x/f5/47/d8/f547d800625af9056d62efe8969aeea0.jpg',
    quote: 'Bimbingan guru-guru di sini sangat suportif terhadap pengembangan minat dan bakat siswa.',
    author: 'Angkatan 2015'
  },
];

export default function AlumniPage() {
  return (
    <main className="min-h-screen bg-[#FBFBFC]">
      <Navbar />
      
      {/* --- HERO SECTION DENGAN GRADASI --- */}
      <section className="relative h-[380px] flex items-center justify-center mt-16 overflow-hidden">
        {/* Background Image */}
        <img 
          src="https://i.pinimg.com/736x/8b/6e/82/8b6e828469e3a6c5674c3e809f6e3c0b.jpg"
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradasi yang lebih halus: Dari Biru Tua ke Biru Sedang */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-primary/60 backdrop-blur-[1px]"></div>
        
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight font-heading uppercase"
          >
            Alumni <span className="text-yellow-400">Kami</span>
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "60px" }}
            className="h-1 bg-yellow-400 mx-auto mb-6 rounded-full"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-emerald-50/90 text-sm md:text-base max-w-lg mx-auto font-medium"
          >
            Mengikat silaturahmi, berbagi inspirasi, dan menebar manfaat untuk umat.
          </motion.p>
        </div>
      </section>

      {/* --- GRID ALUMNI --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {alumni.map((item) => (
            <motion.div 
              key={item.id} 
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col justify-between hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-xl overflow-hidden shadow-inner bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-[15px]">{item.name}</h4>
                    <p className="text-primary text-[10px] font-bold uppercase tracking-widest">{item.role}</p>
                  </div>
                </div>

                <div className="relative px-2">
                  <p className="text-gray-600 text-sm leading-relaxed italic">
                    "{item.quote}"
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-8 border-t border-gray-50 flex justify-between items-center">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                  {item.author}
                </span>
                <div className="h-1.5 w-8 bg-yellow-400/20 rounded-full overflow-hidden">
                   <div className="h-full w-1/2 bg-yellow-400"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- CALL TO ACTION SIMPEL & RAPI --- */}
        <div className="mt-28">
          <div className="bg-white rounded-3xl p-10 text-center border border-primary/10 shadow-sm relative overflow-hidden group hover:border-primary/30 transition-all">
            {/* Dekorasi Background */}
            <div className="absolute top-0 left-0 w-2 bg-yellow-400 h-full"></div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Ayo Terhubung!</h3>
            <p className="text-gray-500 text-sm mb-8 max-w-md mx-auto leading-relaxed">
              Jadilah bagian dari jaringan alumni resmi MTs Sunan Drajat untuk berbagi pengalaman dan inspirasi.
            </p>
            <button className="bg-primary text-white px-10 py-3.5 rounded-xl font-bold text-xs uppercase tracking-[0.15em] hover:bg-primary/90 hover:shadow-lg transition-all active:scale-95">
              Daftar Database Alumni
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}