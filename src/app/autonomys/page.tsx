import { useEffect } from "react";
import Head from "next/head";

export default function RedirectPage() {
  useEffect(() => {
    window.location.href = "https://kublockchain.notion.site/Autonomys-Hackers-Guide-1acdd445c69b803aa3afe7a0e8becd4b";
  }, []);

  return (
    <>
      <Head>
        <title>Check this out!</title>
        <meta property="og:title" content="Guide to Autonomys" />
        <meta property="og:description" content="Welcome to the Autonomys Midwest Block-a-Thon Hackers’ Guide!" />
        <meta property="og:image" content="/sponsors/autonomys.png" />
        <meta property="og:url" content="https://hack.kublockchain.com/autonomys" />
      </Head>
      <p>Redirecting you to something awesome...</p>
    </>
  );
}
