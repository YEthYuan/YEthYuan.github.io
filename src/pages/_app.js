import Theme from '../styles/theme';
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ye Yuan (Ethan) - Software Development Engineer</title>
        <meta name="description" content="Ye Yuan is an aspiring Backend/Fullstack Software Development Engineer who is mainly interested in Software Engineering, Scalable System, Research & Development, Machine Learning, and Computer Security. Ye Yuan was graduated from University of California Santa Barbara (UCSB), and Huazhong University of Science and Technology (HUST). He has been employed by Lenovo, and GaTech." />
        <meta name="google-site-verification" content="YfRqgo2_r9MMEz19CPbJg4tVBSL-Cu9BERH1uOt7-1M" />
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 