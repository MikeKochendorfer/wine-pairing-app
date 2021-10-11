import Head from "next/head";
import styles from "../styles/Home.module.css";
import SearchForPairing from "../components/SearchForPairing";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wine Pairings</title>
      </Head>

      <main className={styles.main}>
        <SearchForPairing />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://spoonacular.com/food-api"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pairings provided by the Spoonacular API
        </a>
      </footer>
    </div>
  );
}
