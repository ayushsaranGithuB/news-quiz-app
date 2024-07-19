import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head></Head>
      <div className={styles.homepage}>
        <h1>How well do you know the News?</h1>
        <div className={"card centered " + styles.card}>
          <h2>Take this QUIZ and find out.</h2>
          <p>Click the button below to get started.</p>
          <Link href={"/quiz"}>
            <button className={styles.startButton}>Start Quiz</button>
          </Link>
        </div>
      </div>
    </>
  );
}
