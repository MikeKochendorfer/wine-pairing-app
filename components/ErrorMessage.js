import styles from "../styles/Error.module.css";

export default function ErrorMessage({ message }) {
  return (
    <div className={styles.error}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/error-icon.svg" alt="error" />
      <p className={styles.text}>{message}</p>
    </div>
  );
}
