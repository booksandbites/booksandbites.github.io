import { A } from "@solidjs/router";
import styles from "./Home.module.css";
import np_logo from "../assets/np_logo.png";
import { bookData, books } from "../data/books";
import BookOverview from "../components/BookOverview";

function App() {
  return (
    <>
      <div class={styles["title-container"]}>
        <h1 class={styles["title-text"]}>Read to Eat, Eat to Read</h1>
        <img
          class={styles["title-img"]}
          src={np_logo}
          alt="Books & Bites seal"
        />
      </div>
      <p>
        We are a non-profit that reads global literature. While reading through
        cultural stories, we work with local businesses and apply to literacy
        grants that help finance our mission. The “Books” half of our non-profit
        is promoting reading and literacy, so we work to create reading
        materials schools and libraries can use to educate our community. The
        “Bites” aspect of our program involves buying food from grocery stores
        to donate to shelters in our area, which are usually based on the book
        we are reading (ex: Book set it Italy &rarr; Italian food).
      </p>
      <div class={styles["btn-container"]} style={{}}>
        <A href="/lessons" class={styles["btn"]}>
          Browse Lessons
        </A>
        <A href="/about" class={styles["btn"]}>
          Our Mission
        </A>
      </div>
      <div>
        <h1 class={styles["title-text"]}>Current theme: </h1>
      <BookOverview book={books[bookData.current]} />
      </div>
    </>
  );
}

export default App;
