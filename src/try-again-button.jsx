import styles from "./try-again.module.scss";

export const TryAgainButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.container}>
      Try Again
    </button>
  );
};
