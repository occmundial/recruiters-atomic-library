import '../styles/globals.css';
import '../styles/occ-atomic/colors.css';
import '../styles/occ-atomic/grid.css';
import '../styles/occ-atomic/iconSizes.css';
import '../styles/occ-atomic/shadows.css';
import '../styles/occ-atomic/spacing.css';
import React, { useEffect, Fragment, useState } from 'react';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  useEffect(() => {
    if (isMounted) {
      const jssStyles = document.getElementById('server-side-styles');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
    }
  }, [isMounted]);
  return (
    <Fragment>
      <Head>
        <title>Recruiters-Atomic-Library</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta charSet="utf-8" />
      </Head>
      {!isMounted && <Component {...pageProps}/>}
      {isMounted && <Component {...pageProps}/>}
    </Fragment>
  )
}

export default MyApp
