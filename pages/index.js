import { useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';

export default function Home() {
  const [email, setEmail] = useState('');

  const sendWaitlistEmail = async (e) => {
    e.preventDefault();
    if (!email) {
      alert('Please enter a valid email.');
      return;
    }

    try {
      await window.emailjs.send('service_quxmizv', 'forgetomorrow', { user_email: email });
      alert(`Success! You're added.\n"We don't like ghosts. We will always respond and provide transparency."`);
      setEmail('');
    } catch (error) {
      alert('Oops! Something went wrong. Please try again later.');
      console.error('EmailJS error:', error);
    }
  };

  return (
    <>
      <Head>
        <title>ForgeTomorrow - About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Load EmailJS script globally here */}
      <Script
        src="https://cdn.emailjs.com/sdk/3.2/email.min.js"
        strategy="beforeInteractive"
        onLoad={() => {
          window.emailjs.init('YyYidv88o9X7iKfYJ');
        }}
      />

      <main
        className="
          relative z-10 max-w-4xl mx-auto my-20 bg-black bg-opacity-60
          p-8 rounded-xl text-center shadow-lg
          text-gray-200
          bg-[url('/images/forge-bg-bw.png')] bg-center bg-no-repeat bg-fixed bg-cover
          px-4
        "
        role="main"
        aria-label="About ForgeTomorrow"
      >
        <h1
          className="
            text-5xl font-extrabold mb-6 tracking-wide
            text-[#FF7043] drop-shadow-[0_0_10px_rgba(255,112,67,0.8)]
            break-words
            sm:text-6xl
          "
        >
          Forge Tomorrow
        </h1>

        <p className="mb-6 text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
          We’re building the next evolution in professional networking—human-centered, AI-empowered, and built for the real world.
        </p>
        <p className="mb-8 text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Our mission is to equip job seekers, freelancers, recruiters, mentors, and ethical employers with the tools and transparency they need to succeed in today’s fast-changing job market. No gatekeeping. No noise. Just support that shows up, AI with integrity, and a network where people come before algorithms.
        </p>

        <form
          id="waitlist-form"
          onSubmit={sendWaitlistEmail}
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
        >
          <input
            type="email"
            name="user_email"
            id="user_email"
            placeholder="Enter your email"
            required
            autoComplete="email"
            aria-label="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
              px-4 py-3 rounded-lg border border-gray-300 text-gray-900
              focus:outline-none focus:ring-2 focus:ring-[#FF7043] focus:border-transparent
              flex-grow
            "
          />
          <button
            type="submit"
            className="
              bg-[#FF7043] hover:bg-[#F4511E] text-white font-bold
              px-8 py-3 rounded-lg shadow-lg transition-colors duration-300
              flex-shrink-0
            "
          >
            Join the Waitlist
          </button>
        </form>
      </main>
    </>
  );
}
