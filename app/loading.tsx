export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="text-center">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-gray-200 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
        <h2 className="text-xl font-bold text-gray-900 animate-pulse">Memuat...</h2>
        <p className="text-sm text-gray-500 mt-2">MTs Sunan Drajat</p>
      </div>
    </div>
  );
}
