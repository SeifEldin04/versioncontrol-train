import Link from "next/link";



export default function Navbar() {
  return (
    <nav className="w-full bg-white/70 backdrop-blur-md shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Title */}
        <h1 className="text-2xl font-bold text-blue-700">MyWebsite</h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer transition">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer transition">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer transition">
            Services
          </li>
     
         
          <li className="hover:text-blue-600 cursor-pointer transition">
            <Link href={"contact"}>Contact</Link>
          </li>
         
         
        </ul>

        {/* Button */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700 transition">
          Sign In
        </button>
      </div>
    </nav>
  );
}
