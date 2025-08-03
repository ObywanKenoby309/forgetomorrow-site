// components/LandingHeader.js
import { useState } from 'react';
import Link from 'next/link';

export default function LandingHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-[#37474F] text-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" passHref>
          <a className="text-[#FF7043] font-bold text-xl tracking-wide cursor-pointer">
            Forge Tomorrow
          </a>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-4">
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

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#FF7043]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <svg
            className="h-6 w-6 text-[#FF7043]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-[#37474F] px-6 pb-4 space-y-2">
          <button
            className="block w-full text-left bg-transparent border border-[#FF7043] text-[#FF7043] px-4 py-2 rounded-xl font-semibold hover:bg-[#FF7043] hover:text-white transition-colors"
            onClick={() => alert('Login functionality coming soon!')}
          >
            Login
          </button>
          <button
            className="block w-full bg-[#FF7043] px-4 py-2 rounded-xl font-semibold hover:bg-[#F4511E] transition-colors"
            onClick={() => alert('Sign Up functionality coming soon!')}
          >
            Sign Up
          </button>
        </nav>
      )}
    </header>
  );
}