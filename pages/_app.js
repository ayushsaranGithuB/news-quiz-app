import "@/styles/globals.css";
import Head from "next/head";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Header from "@/components/Header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>News Quiz - How well do you know the news?</title>
        <meta
          name="description"
          content="Test your knowledge of the news with this quiz."
        />
      </Head>
      <UserProvider>
        <Header />

        <Component {...pageProps} />
      </UserProvider>
    </>
  );
}
