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
    <footer id="contact" className="relative bg-[#062c1f] text-white/80 overflow-hidden">
      {/* Dekorasi Background - Efek Cahaya */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Bagian 1: Branding */}
          <div className="lg:col-span-5 space-y-7">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative w-16 h-16 transition-transform duration-500 group-hover:scale-110">
                <Image 
                  src="/logomts.png" 
                  alt="Logo MTs Sunan Drajat" 
                  fill 
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col items-start -space-y-1">
                <span className="text-2xl font-black tracking-tight text-white">
                  MTs SUNAN DRAJAT
                </span>
                <span className="text-emerald-400 text-[10px] font-bold uppercase tracking-[0.3em]">
                  Bojonegoro • Jawa Timur
                </span>
              </div>
            </Link>
            
            <p className="text-[15px] leading-relaxed text-gray-300/90 max-w-sm">
              Mewujudkan generasi unggul yang memadukan kedalaman spiritual, keluhuran akhlak, dan kemajuan intelektual berbasis nilai-nilai Pesantren.
            </p>

            <div className="flex gap-4">
              <SocialIcon href="#" icon={<Facebook size={20} />} label="Facebook" />
              <SocialIcon href="#" icon={<Instagram size={20} />} label="Instagram" />
              <SocialIcon href="#" icon={<Youtube size={20} />} label="YouTube" />
            </div>
          </div>

          {/* Bagian 2: Quick Links */}
          <div className="lg:col-span-3 lg:pl-10">
            <h4 className="text-white font-bold mb-8 text-[13px] uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="w-8 h-[1px] bg-emerald-500"></span>
              Menu Utama
            </h4>
            <ul className="space-y-4">
              <FooterLink href="/profil" label="Profil Madrasah" />
              <FooterLink href="/akademik" label="Program Unggulan" />
              <FooterLink href="/kegiatan" label="Informasi PPDB" />
              <FooterLink href="/berita" label="Berita & Artikel" />
            </ul>
          </div>

          {/* Bagian 3: Hubungi Kami */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-bold mb-8 text-[13px] uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="w-8 h-[1px] bg-emerald-500"></span>
              Kontak
            </h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <MapPin size={20} />
                </div>
                <div className="text-sm">
                  <p className="text-white font-semibold mb-1">Alamat Kampus</p>
                  <p className="text-gray-400 leading-relaxed">Geger, Kedungadem, Bojonegoro, Jawa Timur 62195</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <Phone size={20} />
                </div>
                <div className="text-sm">
                  <p className="text-white font-semibold mb-1">Telepon / WA</p>
                  <p className="text-gray-400">0812-3456-7890</p>
                </div>
              </div>

              {/* Newsletter Simple */}
              <div className="pt-2">
                <div className="relative overflow-hidden rounded-2xl p-[1px] bg-gradient-to-r from-emerald-500/50 to-transparent">
                  <div className="bg-[#083626] rounded-[15px] p-1 flex">
                    <input 
                      type="email" 
                      placeholder="Email anda..."
                      className="bg-transparent w-full px-4 py-2 text-sm outline-none placeholder:text-emerald-700"
                    />
                    <button className="bg-emerald-500 hover:bg-emerald-400 text-white p-2 rounded-xl transition-colors">
                      <Send size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Garis Pemisah & Copyright */}
        <div className="mt-20 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-gray-500 font-medium tracking-wide">
              © {currentYear} <span className="text-emerald-500">MTs Sunan Drajat</span>. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6 text-[11px] font-bold uppercase tracking-widest text-gray-500">
              <Link href="#" className="hover:text-emerald-400 transition-colors">Kebijakan Privasi</Link>
              <Link href="#" className="hover:text-emerald-400 transition-colors">Syarat & Ketentuan</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

{/* Helper Components */}
function SocialIcon({ href, icon, label }: { href: string; icon: React.ReactNode; label?: string }) {
  return (
    <Link 
      href={href} 
      aria-label={label}
      className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-emerald-600 hover:-translate-y-1 transition-all duration-300 border border-white/10"
    >
      {icon}
    </Link>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link href={href} className="text-[14px] text-gray-400 hover:text-emerald-400 flex items-center group transition-all duration-300">
        <span className="w-0 group-hover:w-4 h-[1px] bg-emerald-500 transition-all duration-300 opacity-0 group-hover:opacity-100 mr-0 group-hover:mr-2"></span>
        {label}
      </Link>
    </li>
  );
}