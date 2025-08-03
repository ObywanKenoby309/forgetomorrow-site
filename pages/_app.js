// pages/_app.js
import { useRouter } from 'next/router';
import { JobPipelineProvider } from '../context/JobPipelineContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LandingHeader from '../components/LandingHeader';
import LandingFooter from '../components/LandingFooter';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Pages that use Landing Header/Footer
  const landingPages = ['/', '/login', '/signup'];

  // Pages where footer is hidden
  const noFooterPages = ['/feed', '/pipeline'];

  const useLandingHeaderFooter = landingPages.includes(router.pathname);

  return (
    <JobPipelineProvider>
      {useLandingHeaderFooter ? <LandingHeader /> : <Header />}
      <main className="pt-20 min-h-screen bg-[#ECEFF1] text-[#212121]">
        <Component {...pageProps} />
      </main>
      {!noFooterPages.includes(router.pathname) &&
        (useLandingHeaderFooter ? <LandingFooter /> : <Footer />)}
    </JobPipelineProvider>
  );
}
