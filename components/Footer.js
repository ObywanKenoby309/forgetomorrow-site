// components/Footer.js

export default function Footer() {
  return (
    <footer className="bg-[#222] text-gray-300 text-center py-6 mt-12">
      <p>
        &copy; {new Date().getFullYear()} ForgeTomorrow. All rights reserved.
      </p>
      <p>
        <a href="mailto:forgetomorrowteam@gmail.com" className="text-[#FF7043] underline">
          Contact Us
        </a>
      </p>
    </footer>
  );
}

