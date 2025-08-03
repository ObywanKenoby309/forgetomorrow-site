// components/LandingHeader.js
import Link from 'next/link';

export default function LandingHeader() {
  return (
    <header className="bg-[#37474F] text-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-[#FF7043] font-bold text-xl tracking-wide cursor-pointer">
          Forge Tomorrow
        </Link>

        <nav className="space-x-4 hidden md:flex">
          <button
            className="bg-transparent border border-[#FF7043] text-[#FF7043] px-4 py-2 rounded-xl font-semibold hover:bg-[#FF7043] hover:text-white transition-colors"
            onClick={() => alert('Login functionality coming soon!')}
          >
            Login
          </button>
          <button
            className="bg-[#FF7043] px-4 py-2 rounded-xl font-semibold hover:bg-[#F4511E] transition-colors"
            onClick={() => alert('Sign Up functionality coming soon!')}
          >
            Sign Up
          </button>
        </nav>

        {/* Mobile nav can be added here if needed */}
      </div>
    </header>
  );
}
