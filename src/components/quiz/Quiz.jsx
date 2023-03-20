import { useDispatch, useSelector } from "react-redux";
import { toHigh, toLow, win, reset } from "../../reducers/scoreSlice";
import { useState, useRef } from "react";
import styles from "./quiz.module.css";

const Quiz = () => {
  const { isWin } = useSelector((state) => state.score);
  const inputElement = useRef();
  const dispatch = useDispatch();
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);

  const handleGuess = (event) => {
    let guess = parseInt(inputElement.current.value);
    event.preventDefault();
    if (guess === number) {
      dispatch(win());
    } else if (guess < number) {
      dispatch(toLow());
    } else {
      dispatch(toHigh());
    }
    inputElement.current.blur();
  };

  const replay = () => {
    setNumber(Math.floor(Math.random() * 100) + 1);
    dispatch(reset());
  };
  return (
    <>
      {!isWin && (
        <form onSubmit={handleGuess} className={styles.form}>
          <input
            className={styles.input}
            onFocus={() => dispatch(reset())}
            ref={inputElement}
            type="number"
            min="0"
            max="100"
          />
          <button className={styles.button} type="submit">
            Guess
          </button>
        </form>
      )}
      {isWin && (
        <button className={styles.button} onClick={replay}>
          Replay
        </button>
      )}
    </>
  );
};

export default Quiz;
