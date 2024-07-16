import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head></Head>
      <main>
        <div className="card centered">
          <h1>How well do you know the news?</h1>
          <p>Test your knowledge of the news with this quiz.</p>
          <p>Click the button below to get started.</p>
          <div className="quiz-navigation">
            <Link href={"/quiz"}>
              <button>Start Quiz</button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
