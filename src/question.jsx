import { useEffect } from "react";
import styles from "./app.module.scss";
import { Answers } from "./features/answers/answers";
import { Color } from "./features/color/color";
import { Continue } from "./features/continue/continue";
import { Header } from "./header";

export const Question = ({
  score,
  page,
  color,
  onContinue,
  onAnswerClick,
  setCount,
}) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className={styles.container}>
      <div key={Math.random()}>
        <Header score={score} page={page} />

        <div className={styles.color}>
          <h2>color&quot;:</h2>
          <Color color={color.color} />
        </div>

        <div className={styles.answers}>
          <Answers
            onAnswerClick={onAnswerClick}
            answers={color.answers}
            color={color.color}
          />
        </div>

        <div className={styles.continue}>
          <Continue onClick={onContinue} />
        </div>
      </div>
    </div>
  );
};
