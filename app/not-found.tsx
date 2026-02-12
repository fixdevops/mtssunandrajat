import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <div className="relative w-64 h-64 mx-auto mb-8">
            {/* Visual 404 illustration using pure CSS/divs or simple text */}
            <h1 className="text-[150px] font-bold text-gray-200 leading-none select-none">404</h1>
            <div className="absolute inset-0 flex items-center justify-center">
                <i className="fas fa-exclamation-triangle text-6xl text-primary animate-bounce"></i>
            </div>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Halaman Tidak Ditemukan</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Maaf, halaman yang Anda cari sedang dalam pengembangan, atau tidak tersedia untuk saat ini.
        </p>
        <Link href="/" className="btn btn-primary shadow-lg">
          <i className="fas fa-home mr-2"></i> Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
