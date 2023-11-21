import { Header } from "@/header";

import styles from "./styles/results.module.scss";
import { TryAgainButton } from "@/try-again-button";

export const Result = ({
  score,
  page,
  count = "100 seconds",
  onTryAgainClick,
}) => {
  return (
    <div className={styles.container}>
      <Header score={score} page={page} displayPage={false} />

      <h2>Your score is: {score}</h2>
      <h2>Time: {count}</h2>

      <div className={styles.continue}>
        <TryAgainButton onClick={onTryAgainClick} />
      </div>
    </div>
  );
};
