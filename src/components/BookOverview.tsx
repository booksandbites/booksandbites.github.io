import styles from "./BookOverview.module.css";
import LAndGCover from "../assets/covers/Love and Gelato Cover.jpg";

const BookOverview = () => {
  return (
    <>
      <h1>Current Book:</h1>
      <div class={styles["container"]}>
        <img src={LAndGCover} class={styles["img"]} />
        <p class={styles["p"]}>
          aeriljkgherajf rjk gbrjfbewijf beajkd fdb ibaerifbewafnaekjfbaekj
          berag jkb
        </p>
      </div>
    </>
  );
};

export default BookOverview;
