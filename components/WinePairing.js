import styles from "../styles/WinePairing.module.css";
import { formatDescription } from "../lib/formatDescription";
import ErrorMessage from "./ErrorMessage";

export default function WinePairing({ winePairing }) {
  
  if (winePairing?.status) {
    return <ErrorMessage message = {winePairing.message}/>
  }
  if (winePairing?.pairedWines?.length === 0) {
    console.log(winePairing)
    return <ErrorMessage message="Could not find a pairing. Try checking your spelling or being more specific." />
  }
  
  return (
    <>
      {winePairing?.pairedWines && (
        <div className={styles.resultGrid}>
          <ul className={styles.wines}>
            {winePairing.pairedWines.map((wine) => (
              <li key={wine}>{wine}</li>
            ))}
          </ul>
          <div className={styles.seperator}></div>
          <p className={styles.description}>
            {formatDescription(winePairing.pairingText)}
          </p>
        </div>
      )}
    </>
  );
}
