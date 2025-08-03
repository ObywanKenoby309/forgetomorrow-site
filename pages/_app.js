// pages/_app.js
import { JobPipelineProvider } from '../context/JobPipelineContext';
import '../styles/globals.css'; // Assuming you have a global CSS file

export default function App({ Component, pageProps }) {
  return (
    <JobPipelineProvider>
      <Component {...pageProps} />
    </JobPipelineProvider>
  );
}
