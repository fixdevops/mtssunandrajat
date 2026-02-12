'use client';

import Link from 'next/link';
import { 
  Facebook, Instagram, Youtube, MapPin, 
  Phone, Mail, Send, ChevronRight, Heart 
} from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative bg-[#021a12] text-white/80 overflow-hidden border-t border-emerald-900/50">
      {/* --- LAYER DEKORASI (Disamakan dengan gradasi halaman lain) --- */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/10 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* 1. SEKSI BRANDING (Setara dengan Hero Page) */}
          <div className="lg:col-span-5 space-y-8">
            <Link href="/" className="inline-flex items-center gap-5 group">
              <div className="relative w-16 h-16 p-2 bg-white rounded-2xl shadow-xl transition-transform duration-500 group-hover:rotate-3">
                <Image 
                  src="/logomts.png" 
                  alt="Logo MTs Sunan Drajat" 
                  fill 
                  className="object-contain p-2"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-white leading-none uppercase font-heading">
                  MTs Sunan <span className="text-emerald-500">Drajat</span>
                </span>
                <span className="text-yellow-400 text-[10px] font-bold uppercase tracking-[0.4em] mt-2">
                  Bojonegoro • Jawa Timur
                </span>
              </div>
            </Link>
            
            <p className="text-[15px] leading-relaxed text-gray-400 max-w-sm font-medium">
              Mewujudkan lembaga pendidikan Islam yang unggul, kompetitif, dan berkarakter akhlakul karimah di era digital.
            </p>

            {/* Sosial Media (Bentuk kotak rounded-xl setara dengan kartu alumni) */}
            <div className="flex gap-4">
              <SocialIcon href="#" icon={<Facebook size={18} />} label="Facebook" />
              <SocialIcon href="#" icon={<Instagram size={18} />} label="Instagram" />
              <SocialIcon href="#" icon={<Youtube size={18} />} label="Youtube" />
            </div>
          </div>

          {/* 2. SEKSI LINK (Navigasi Bersih) */}
          <div className="lg:col-span-3 lg:pl-10">
            <h4 className="text-white font-bold mb-8 text-[12px] uppercase tracking-[0.3em] flex items-center gap-3">
              <span className="w-6 h-1 bg-yellow-400 rounded-full"></span>
              Eksplorasi
            </h4>
            <ul className="space-y-4">
              <FooterLink href="/profil" label="Profil Madrasah" />
              <FooterLink href="/akademik" label="Program Unggulan" />
              <FooterLink href="/alumni" label="Halaman Alumni" />
              <FooterLink href="/berita" label="Warta Madrasah" />
              <FooterLink href="/kontak" label="Hubungi Kami" />
            </ul>
          </div>

          {/* 3. SEKSI KONTAK & NEWSLETTER */}
          <div className="lg:col-span-4 space-y-8">
            <h4 className="text-white font-bold mb-8 text-[12px] uppercase tracking-[0.3em] flex items-center gap-3">
              <span className="w-6 h-1 bg-yellow-400 rounded-full"></span>
              Kontak Instansi
            </h4>
            
            <div className="space-y-6">
              <ContactItem 
                icon={<MapPin size={18} />} 
                title="Alamat" 
                desc="Geger, Kedungadem, Bojonegoro, Jawa Timur 62195" 
              />
              <ContactItem 
                icon={<Phone size={18} />} 
                title="Telepon/WA" 
                desc="0852-3655-6057" 
              />
            </div>

            {/* Newsletter (Input Box yang lebih modern) */}
            <div className="mt-8">
              <div className="relative flex items-center">
                <input 
                  type="email" 
                  placeholder="Email anda..."
                  className="w-full bg-emerald-950/50 border border-white/10 rounded-2xl px-5 py-4 text-sm outline-none focus:border-yellow-400/50 transition-all placeholder:text-emerald-800"
                />
                <button className="absolute right-2 bg-yellow-400 text-primary p-2.5 rounded-xl hover:bg-white transition-all duration-300 shadow-lg">
                  <Send size={16} strokeWidth={3} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* --- FOOTER BOTTOM --- */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] text-gray-500 font-bold uppercase tracking-widest text-center md:text-left">
            © {currentYear} <span className="text-white">MTs Sunan Drajat</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-[11px] font-bold text-gray-500 uppercase tracking-widest">
            <span>Made with</span>
            <Heart size={12} className="text-red-500 fill-red-500 animate-pulse" />
            <span>for Education</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

{/* --- KOMPONEN PENDUKUNG --- */}

function SocialIcon({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link 
      href={href} 
      aria-label={label}
      className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary hover:border-yellow-400/50 transition-all duration-300 group shadow-lg"
    >
      <div className="group-hover:scale-110 transition-transform">{icon}</div>
    </Link>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link href={href} className="text-[14px] text-gray-400 hover:text-yellow-400 flex items-center group transition-all duration-300 font-medium">
        <ChevronRight size={14} className="mr-0 w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 group-hover:mr-2 transition-all duration-300 text-yellow-400" />
        <span className="group-hover:translate-x-1 transition-transform">{label}</span>
      </Link>
    </li>
  );
}

function ContactItem({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex gap-4 group">
      <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 flex items-center justify-center shrink-0 text-emerald-400 group-hover:bg-yellow-400 group-hover:text-primary transition-all duration-300 shadow-inner">
        {icon}
      </div>
      <div className="text-sm">
        <p className="text-[10px] uppercase tracking-[0.2em] text-emerald-600 font-black mb-1">{title}</p>
        <p className="text-gray-300 leading-relaxed font-semibold">{desc}</p>
      </div>
    </div>
  );
}