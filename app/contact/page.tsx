import Navbar from '@/components/Navbar22';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontak Kami - SMA Negeri 1 Yogyakarta',
  description: 'Hubungi SMA Negeri 1 Yogyakarta untuk informasi lebih lanjut.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Page Header */}
      <section className="relative h-64 bg-gradient-to-r from-primary to-primary-dark flex items-center justify-center mt-20">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hubungi Kami</h1>
          <p className="text-lg">Kami Siap Melayani Anda</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Informasi Kontak</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Silakan hubungi kami melalui alamat, telepon, atau email di bawah ini. Kami juga menerima masukan dan saran melalui formulir yang tersedia.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-primary text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Alamat</h4>
                    <p className="text-gray-600">Jl. HOS Cokroaminoto No. 10, Pakuncen, Wirobrajan, Yogyakarta 55253</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-phone text-primary text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Telepon</h4>
                    <p className="text-gray-600">(0274) 512268</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-envelope text-primary text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">sman1yogya@yahoo.com</p>
                    <p className="text-gray-600">info@sman1yogya.sch.id</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-clock text-primary text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Jam Operasional</h4>
                    <p className="text-gray-600">Senin - Kamis: 07.00 - 15.30 WIB</p>
                    <p className="text-gray-600">Jumat: 07.00 - 14.30 WIB</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 rounded-lg overflow-hidden shadow-md h-64 border border-gray-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.973462334862!2d110.3541623147775!3d-7.792455994384351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a57863584852f%3A0x10f69da46927a4d2!2sSMA%20Negeri%201%20Yogyakarta!5e0!3m2!1sid!2sid!4v1678249652156!5m2!1sid!2sid" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                    <input 
                      type="text" 
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="Nama Anda"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="email@contoh.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subjek</label>
                  <input 
                    type="text" 
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="Judul Pesan"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                  <textarea 
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                  ></textarea>
                </div>

                <button type="submit" className="w-full btn btn-primary py-4 text-lg shadow-lg">
                  Kirim Pesan Sekarang
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
