import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link rel="shortcut icon" type="image/png" href="/favicon.png" />

          <link rel="stylesheet" href="css/bootstrap.min.css" />

          <script src="js/bootstrap.min.js"></script>

          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800"
            rel="stylesheet"
          />
        </Head>
        <body data-bs-spy="scroll" data-bs-target="#navbar-app">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
