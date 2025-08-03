// pages/index.js
import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [email, setEmail] = useState('');

  // emailjs is a client-only lib; load dynamically or via script tag in _document.js if preferred
  const sendWaitlistEmail = async (e) => {
    e.preventDefault();
    if (!email) {
      alert('Please enter a valid email.');
      return;
    }

    try {
      // Using global emailjs from script included in _document.js or index.html
      // If emailjs is not global, you may need to import or load it dynamically
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

      <main style={contentContainerStyle} role="main" aria-label="About ForgeTomorrow">
        <h1 style={h1Style}>Forge Tomorrow</h1>
        <p style={pStyle}>
          We’re building the next evolution in professional networking—human-centered, AI-empowered, and built for the
          real world.
        </p>
        <p style={pStyle}>
          Our mission is to equip job seekers, freelancers, recruiters, mentors, and ethical employers with the tools and
          transparency they need to succeed in today’s fast-changing job market. No gatekeeping. No noise. Just support
          that shows up, AI with integrity, and a network where people come before algorithms.
        </p>

        <form id="waitlist-form" onSubmit={sendWaitlistEmail}>
          <input
            type="email"
            name="user_email"
            id="user_email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
          <button type="submit" className="btn-primary" style={buttonStyle}>
            Join the Waitlist
          </button>
        </form>
      </main>
    </>
  );
}

// Styles translated from your CSS
const contentContainerStyle = {
  position: 'relative',
  zIndex: 10,
  maxWidth: '700px',
  margin: '5rem auto 3rem',
  background: 'rgba(0,0,0,0.55)',
  padding: '2.5rem 2rem',
  borderRadius: '12px',
  textAlign: 'center',
  boxShadow: '0 8px 24px rgba(0,0,0,0.7)',
  wordWrap: 'break-word',
  maxWidth: '90vw',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  fontFamily: "'Inter', sans-serif",
  color: '#eee',
  backgroundImage: "url('/images/forge-bg-bw.png')",
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover',
};

const h1Style = {
  fontSize: '5rem',
  color: '#FF7043',
  fontWeight: 800,
  marginBottom: '1rem',
  letterSpacing: '0.06em',
  textShadow: '0 0 10px rgba(255,112,67,0.8)',
  whiteSpace: 'normal',
  wordWrap: 'break-word',
  overflowWrap: 'break-word',
  maxWidth: '100%',
  wordBreak: 'break-word',
};

const pStyle = {
  fontWeight: 400,
  fontSize: '1.25rem',
  color: '#ddd',
  lineHeight: 1.6,
  marginBottom: '1.5rem',
};

const inputStyle = {
  backgroundColor: '#fff',
  color: '#222',
  border: '1px solid #ccc',
  padding: '0.75rem 1rem',
  borderRadius: '8px',
  width: '100%',
  maxWidth: '400px',
  fontSize: '1.1rem',
  margin: '0 auto 1rem auto',
  display: 'block',
  boxShadow: 'none',
  outline: 'none',
};

const buttonStyle = {
  backgroundColor: '#FF7043',
  color: '#fff',
  fontWeight: 700,
  padding: '1rem 3rem',
  borderRadius: '8px',
  fontSize: '1.25rem',
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  boxShadow: '0 4px 10px rgba(255, 112, 67, 0.5)',
};

// You can add hover effects with CSS modules or styled-jsx as needed
