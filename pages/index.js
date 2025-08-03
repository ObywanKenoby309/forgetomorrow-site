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
