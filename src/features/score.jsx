import styles from "./styles/score.module.scss";

export const Score = ({ score }) => {
  return <div className={styles.container}>{score}</div>;
};
