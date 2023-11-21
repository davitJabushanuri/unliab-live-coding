import { useEffect, useState } from "react";

import { Question } from "./question";
import { Result } from "./features/results/results";

const URL = `https://random-colors-lovat.vercel.app/`;

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [colors, setColors] = useState([]);
  const [score, setScore] = useState(200);
  const [page, setPage] = useState(0);

  const [count, setCount] = useState(0);

  const onAnswerClick = (color, answer) => {
    if (color !== answer) {
      setScore((prev) => prev - 20);
    }

    setPage((prev) => prev + 1);
  };

  const fetchColors = async () => {
    try {
      setLoading(true);
      const response = await fetch(URL);
      const colors = await response.json();
      setColors(colors);
      setLoading(false);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchColors();
  }, []);

  if (loading) return <div>loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div>
      {colors.length > 0 &&
        (page >= 10 ? (
          <Result
            page={page}
            score={score}
            count={count}
            onTryAgainClick={() => {
              fetchColors();
              setPage(0);
              setScore(200);
            }}
          />
        ) : (
          <Question
            onAnswerClick={onAnswerClick}
            color={colors[page]}
            page={page}
            score={score}
            onContinue={() => setPage((prev) => prev + 1)}
            setCount={setCount}
          />
        ))}
    </div>
  );
}

export default App;
