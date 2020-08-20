import type { AppProps } from 'next/app';
import Head from 'next/head'

// Global Styles
import 'normalize.css';
import '../styles.css';

function App ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#202020" />
        <meta name="description" content="Echoes from retrofuturism" />
        <title>ViLAWAVE</title>
      </Head>
      <Component {...pageProps} />
      <div role="footer" className="footer">
        <p>© 2020 ViLAWAVE</p>
      </div>
    </>
  );
}

export default App;
