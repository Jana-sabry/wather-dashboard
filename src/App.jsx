
function App() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6">
      <div className="bg-slate-800 rounded-2xl p-10 shadow-2xl text-center max-w-md w-full border border-slate-700">
        <h1 className="text-4xl font-bold text-cyan-400 mb-4">
          SkyPulse ☁️
        </h1>

        <p className="text-slate-300 text-lg mb-6">
          Your Weather Dashboard
        </p>

        <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105">
          Test Tailwind
        </button>

        <p className="text-green-400 text-sm mt-6 font-medium">
          ✓ Tailwind CSS is working!
        </p>
      </div>
    </div>
  );
}

export default App;
