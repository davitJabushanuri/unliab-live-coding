import { Pages } from "./features/pages/pages";
import { Score } from "./features/score";

import styles from "./header.module.scss";

export const Header = ({ score, page, displayPage = true }) => {
  return (
    <header className={styles.container}>
      <Score score={score} />
      <h1>Color Quiz</h1>
      {displayPage ? (
        <Pages page={page} />
      ) : (
        <div className={styles.placeholder}></div>
      )}
    </header>
  );
};
