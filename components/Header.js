// components/Header.js
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#37474F] text-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <a className="text-[#FF7043] font-bold text-xl tracking-wide">Forge Tomorrow</a>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-lg font-medium">
          <Link href="/"><a className="hover:underline">Home</a></Link>
          <Link href="/the-hearth"><a className="hover:underline">My Network</a></Link>
          <Link href="/jobs"><a className="hover:underline">Jobs</a></Link>
          <Link href="/profile"><a className="hover:underline">Profile</a></Link>
          <Link href="/support"><a className="hover:underline">Support</a></Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-[#37474F] px-6 pb-4 space-y-3 text-lg font-medium">
          <Link href="/"><a className="block hover:underline">Home</a></Link>
          <Link href="/the-hearth"><a className="block hover:underline">My Network</a></Link>
          <Link href="/jobs"><a className="block hover:underline">Jobs</a></Link>
          <Link href="/profile"><a className="block hover:underline">Profile</a></Link>
          <Link href="/support"><a className="block hover:underline">Support</a></Link>
        </nav>
      )}
    </header>
  );
}
