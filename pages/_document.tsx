// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Meta tags */}
          <meta name="description" content="Resources and Updates is your go-to community for job/internship opportunities in Computer Science and Engineering (CSE)." />
          <meta name="keywords" content="CSE, Computer Science, Engineering, Job Opportunities, Internship Opportunities, Tech Jobs, Networking, Educational Resources" />
          <meta name="author" content="Resources and Updates" />
          <meta property="og:title" content="Resources and Updates - Your CSE Career Hub" />
          <meta property="og:description" content="Resources and Updates is your go-to community for job/internship opportunities in Computer Science and Engineering (CSE)." />
          <meta property="og:image" content="/logo.jpg" />
          <meta property="og:url" content="https://www.resourcesandcarriers.online" />
          <title>Resources and Updates - Your CSE Career Hub</title>
          
          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" />
          
          {/* Add other global meta tags or links here */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
