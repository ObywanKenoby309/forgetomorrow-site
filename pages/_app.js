// pages/_app.js
import '../public/style.css';  // Adjust the path if your CSS is somewhere else
import Layout from '../components/Layout';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
