// pages/about.js
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>ForgeTomorrow - About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section style={sectionStyle}>
        <h1 style={headingStyle}>About ForgeTomorrow</h1>
        <p style={paragraphStyle}>
          ForgeTomorrow started because we were tired of the gatekeeping and poor support from other famous sites. We listened closely to the struggles faced by professionals at every level — from those just starting their job search and struggling to afford networking tools, to senior C-suite executives wanting to stay connected and informed in the fast-evolving professional landscape.
        </p>
        <p style={paragraphStyle}>
          Just because you can’t pay for top-tier services doesn’t mean you shouldn’t receive assistance. We’ve seen too many talented people lost to the struggle — I personally read about a user who committed suicide because he simply gave up. Others wander without help or direction. That shouldn’t be how it is.
        </p>
        <p style={paragraphStyle}>
          As people and professionals in the market, everyone from IT, HR, employers, and coaches can do better to help the seeker — and we should. This is that opportunity.
        </p>
        <p style={paragraphStyle}>
          Many current platforms have fallen short of meeting the needs of individuals seeking meaningful support and connection, focusing too much on popularity and paid access rather than real help.
        </p>
        <p style={paragraphStyle}>
          ForgeTomorrow is built to fill that gap — to be a place where everyone can find real tools, real help, and real connection, no matter their budget or status.
        </p>
      </section>
    </>
  );
}

// Inline styles for simplicity — you can move these to a CSS module if preferred
const sectionStyle = {
  padding: '4rem 2rem',
  maxWidth: '900px',
  margin: 'auto',
  minHeight: 'calc(100vh - 100px)', // optional: ensure it fills viewport minus header/footer
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

const paragraphStyle = {
  maxWidth: '700px',
  margin: '0 auto 1.5rem auto',
  lineHeight: 1.5,
  fontSize: '1.1rem',
};
