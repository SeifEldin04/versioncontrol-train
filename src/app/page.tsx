export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 text-gray-800">
      <h1 className="text-5xl font-extrabold mb-6 animate-fade-in">
        👋 Welcome Home!
      </h1>
      <p className="text-lg text-gray-600 max-w-md text-center mb-8">
        This is your home page — simple, elegant, and clean. Feel free to
        explore and make it your own.
      </p>
      <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:bg-blue-700 transition duration-300">
        Get Started
      </button>
    </div>
  );
}
