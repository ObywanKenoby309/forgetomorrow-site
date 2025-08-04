// components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-[#37474F] text-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-[#FF7043] font-bold text-xl tracking-wide cursor-pointer">Forge Tomorrow</a>
        </Link>

        <nav className="space-x-6 text-lg font-medium hidden md:flex">
          <Link href="/"><a className="hover:underline">Home</a></Link>
          <Link href="/hearth"><a className="hover:underline">The Hearth</a></Link>
          <Link href="/contacts"><a className="hover:underline">Contacts</a></Link>
          <Link href="/jobs"><a className="hover:underline">Jobs</a></Link>
          <Link href="/profile"><a className="hover:underline">Profile</a></Link>
          <Link href="/support"><a className="hover:underline">Support</a></Link>
        </nav>

        {/* Optional: mobile hamburger menu button can be added here */}
      </div>
    </header>
  );
}
