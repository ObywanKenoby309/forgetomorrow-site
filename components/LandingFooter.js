// components/LandingFooter.js
export default function LandingFooter() {
  return (
    <footer className="bg-[#37474F] text-white text-center py-6 mt-12">
      <div className="max-w-7xl mx-auto px-6">
        <p className="mb-2">&copy; {new Date().getFullYear()} Forge Tomorrow. All rights reserved.</p>
        <nav className="space-x-4">
          <a
            href="/about"
            className="hover:underline text-[#FF7043]"
          >
            About
          </a>
          <a
            href="/support"
            className="hover:underline text-[#FF7043]"
          >
            Support
          </a>
          <a
            href="/privacy"
            className="hover:underline text-[#FF7043]"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="hover:underline text-[#FF7043]"
          >
            Terms of Service
          </a>
        </nav>
      </div>
    </footer>
  );
}

