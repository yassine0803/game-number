import styles from "./game.module.css";
import { useSelector } from "react-redux";
import Quiz from "../quiz/Quiz";
import Confetti from "react-confetti";
import Wizzard from "../wizzard/wizzard";

const Game = () => {
  const { isWin } = useSelector((state) => state.score);

  return (
    <div className={styles.game}>
      {isWin && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}
      <Wizzard />
      <Quiz />
    </div>
  );
};

export default Game;
