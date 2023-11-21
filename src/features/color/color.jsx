import styles from "./styles/color.module.scss";

export const Color = ({ color }) => {
  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: `${color}`,
      }}
    ></div>
  );
};
