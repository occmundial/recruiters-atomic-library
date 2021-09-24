import React from 'react';
import Document, {
  Head, Main, NextScript, Html,
} from 'next/document';
import { SheetsRegistry, JssProvider } from 'react-jss';

export default class JssDocument extends Document {
  static async getInitialProps(ctx) {
    const registry = new SheetsRegistry();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () => originalRenderPage({
      enhanceApp: App => props => (
        <JssProvider registry={registry}>
          <App {...props} />
        </JssProvider>
      ),
    });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style id="server-side-styles">{registry.toString()}</style>
        </>
      ),
    };
  }

  render() {
    const gtmCode = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-K8JJMNR');`;
    return (
      <Html lang="es">
        <Head>
          <script async defer dangerouslySetInnerHTML={{ __html: gtmCode }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
