import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#37474F] text-white shadow-md px-6 py-4 flex justify-between items-center">
      <a href="/" className="text-[#FF7043] font-bold text-2xl tracking-wide">
        Forge Tomorrow
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8 text-lg font-medium">
        <a href="/" className="hover:underline">Home</a>
        <a href="/the-hearth" className="hover:underline">My Network</a>
        <a href="/the-pipeline" className="hover:underline">Jobs</a>
        <a href="/profile" className="hover:underline">Profile</a>
        <a href="/support" className="hover:underline">Support</a>
      </nav>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden focus:outline-none"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <svg
          className="w-6 h-6 text-[#FF7043]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {menuOpen ? (
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

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-[#37474F] flex flex-col md:hidden shadow-md">
          <a
            href="/"
            className="px-6 py-3 border-b border-gray-700 hover:bg-[#455A64]"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="/the-hearth"
            className="px-6 py-3 border-b border-gray-700 hover:bg-[#455A64]"
            onClick={() => setMenuOpen(false)}
          >
            My Network
          </a>
          <a
            href="/the-pipeline"
            className="px-6 py-3 border-b border-gray-700 hover:bg-[#455A64]"
            onClick={() => setMenuOpen(false)}
          >
            Jobs
          </a>
          <a
            href="/profile"
            className="px-6 py-3 border-b border-gray-700 hover:bg-[#455A64]"
            onClick={() => setMenuOpen(false)}
          >
            Profile
          </a>
          <a
            href="/support"
            className="px-6 py-3 hover:bg-[#455A64]"
            onClick={() => setMenuOpen(false)}
          >
            Support
          </a>
        </nav>
      )}
    </header>
  );
}
