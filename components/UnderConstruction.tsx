'use client';

import Link from 'next/link';
import { Construction, Home } from 'lucide-react';
import Navbar from './Navbar22';


interface UnderConstructionProps {
  title: string;
}

export default function UnderConstruction({ title }: UnderConstructionProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex flex-col items-center justify-center bg-gray-50 px-4 text-center mt-20">
        <div className="bg-white p-12 rounded-3xl shadow-xl max-w-lg w-full border border-gray-100">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                <Construction size={48} className="text-primary" />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Segera Hadir: {title}</h1>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
            
            <p className="text-gray-500 mb-10 leading-relaxed">
                Kami sedang bekerja keras untuk mempersiapkan halaman ini. <br/>
                Konten <strong>{title}</strong> akan segera tersedia dengan informasi lengkap untuk Anda.
            </p>
            
            <Link 
                href="/" 
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-all hover:scale-105 shadow-lg shadow-primary/20"
            >
                <Home size={18} />
                Kembali ke Beranda
            </Link>
        </div>
      </main>

    </div>
  );
}
