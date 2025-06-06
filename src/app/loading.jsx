// app/loading.js
export default function Loading() {
  return (
    <div className="fixed bg-white inset-0 flex items-center justify-center z-50">
      <div className="loader w-16 h-16 border-4 rounded-full animate-spin">
        <img src="/static/T-logo.png" alt="logo" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
