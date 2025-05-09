const Loading = () => {
  return (
    <div className="fixed bg-white inset-0  flex items-center justify-center">
      <div className="loader w-16 h-16 border-4 rounded-full animate-spin">
        <img src="/static/T-logo.png" alt="logo" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Loading;
