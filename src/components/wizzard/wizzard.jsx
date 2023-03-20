import { useSelector } from "react-redux";
import styles from "./wizzard.module.css";
const Wizzard = () => {
  const score = useSelector((state) => state.score);

  return (
    <div className={styles.container}>
      <div className={styles.message}>{score.message}</div>
      <img src={score.Image} className={styles.image} alt="wizzard" />
    </div>
  );
};

export default Wizzard;
