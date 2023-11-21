import styles from "./styles/pages.module.scss";

export const Pages = ({ page }) => {
  return <div className={styles.container}>{`${page + 1}/10`}</div>;
};
