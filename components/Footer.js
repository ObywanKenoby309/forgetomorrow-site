// components/Footer.js
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#263238] text-white text-center py-6 mt-12">
      <div className="max-w-7xl mx-auto px-6">
        <p className="mb-2">&copy; {new Date().getFullYear()} Forge Tomorrow. All rights reserved.</p>
        <nav className="space-x-6">
          <Link href="/about">
            <a className="hover:underline text-[#FF7043]">About</a>
          </Link>
          <Link href="/support">
            <a className="hover:underline text-[#FF7043]">Support</a>
          </Link>
          <Link href="/privacy">
            <a className="hover:underline text-[#FF7043]">Privacy Policy</a>
          </Link>
          <Link href="/terms">
            <a className="hover:underline text-[#FF7043]">Terms of Service</a>
          </Link>
        </nav>
      </div>
    </footer>
  );
}
