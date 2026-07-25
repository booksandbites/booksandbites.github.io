import styles from "./BookOverview.module.css";
import LAndGCover from "../assets/covers/Love and Gelato Cover.jpg";

const BookOverview = () => {
  return (
    <div class={styles["container"]}>
      <h1>Current Book:</h1>
      {/*<img src={LAndGCover} class={styles["img"]} />*/}
    </div>
  );
};

export default BookOverview;
