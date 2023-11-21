import styles from "./styles/answers.module.scss";

export const Answers = ({ answers, onAnswerClick, color }) => {
  const chars = ["A", "B", "C"];

  return (
    <div className={styles.container}>
      {answers.map((answer, index) => {
        return (
          <Answer
            color={color}
            onAnswerClick={onAnswerClick}
            key={answer.color}
            char={chars[index]}
            answer={answer}
          />
        );
      })}
    </div>
  );
};

const Answer = ({ char, answer, onAnswerClick, color }) => {
  return (
    <button
      onClick={() => onAnswerClick(color, answer)}
      className={styles.answer}
    >
      <span className={styles.char}>{char}</span>
      <span className={styles.text}>{answer}</span>
    </button>
  );
};
