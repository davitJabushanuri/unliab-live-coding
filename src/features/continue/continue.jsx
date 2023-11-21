import styles from "../../try-again.module.scss";

export const Continue = ({ onClick }) => {
  return (
    <button className={styles.container} onClick={onClick}>
      Continue
    </button>
  );
};
