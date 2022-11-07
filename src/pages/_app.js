import Theme from '../styles/theme';
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ye Yuan (SDE) Portfolio</title>
        <meta name="google-site-verification" content="YfRqgo2_r9MMEz19CPbJg4tVBSL-Cu9BERH1uOt7-1M" />
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 