// pages/features.js
import Head from 'next/head';

export default function Features() {
  return (
    <>
      <Head>
        <title>ForgeTomorrow - Features</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section style={sectionStyle}>
        <h1 style={headingStyle}>Features</h1>
        <h2 style={subheadingStyle}>Empowering Everyone</h2>
        <ul style={listStyle}>
          <li><strong>Human-centered networking:</strong> Prioritizing real connections over algorithms.</li>
          <li><strong>AI-powered job search:</strong> Tailored recommendations and assistance with integrity.</li>
          <li><strong>Real job boards:</strong> Verified listings without spam or bots.</li>
          <li><strong>Flexible membership plans:</strong> Options for seekers, freelancers, recruiters, and small businesses.</li>
          <li><strong>Dedicated human support:</strong> Real tech support that shows up when you need it.</li>
          <li><strong>Secure messaging:</strong> Connect instantly with your network through private chats.</li>
          <li><strong>Transparency and fairness:</strong> No gatekeeping or hidden costs.</li>
          <li><strong>Mobile-friendly design:</strong> Access ForgeTomorrow anywhere, anytime.</li>
        </ul>
      </section>
    </>
  );
}

const sectionStyle = {
  padding: '4rem 2rem',
  maxWidth: '900px',
  margin: 'auto',
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  background: 'linear-gradient(to bottom, #1a1a1a, #000)',
  color: '#f5f5f5',
  lineHeight: 1.6,
  display: 'flex',
  flexDirection: 'column',
};

const headingStyle = {
  color: '#ff9900',
  marginBottom: '1rem',
  textAlign: 'center',
};

const subheadingStyle = {
  color: '#ff9900',
  marginBottom: '1rem',
  textAlign: 'center',
};

const listStyle = {
  maxWidth: '700px',
  margin: '0 auto 2rem auto',
  listStyle: 'none',
  paddingLeft: '1rem',
};

const listItemBefore = {
  content: '"•"',
  color: '#ff4500',
  fontWeight: 'bold',
  display: 'inline-block',
  width: '1em',
  marginLeft: '-1em',
};
