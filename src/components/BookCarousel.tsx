import { createSignal, For } from "solid-js";
import BookOverview from "./BookOverview";
import type { Book } from "../types";
import styles from "./BookCarousel.module.css";
import btnStyles from "../views/Home.module.css";
import { bookData } from "../data/books";

interface BookCarouselProps {
  books: Book[];
}

const BookCarousel = (props: BookCarouselProps) => {
  const [currentIndex, setCurrentIndex] = createSignal(bookData.current);

  const nextBook = () => {
    setCurrentIndex((prev) => (prev + 1) % props.books.length);
  };

  const prevBook = () => {
    setCurrentIndex((prev) => (prev - 1 + props.books.length) % props.books.length);
  };

  return (
    <div class={styles["carousel"]}>
      <BookOverview book={props.books[currentIndex()]} />

      {props.books.length > 1 && (
        <div class={styles["controls"]}>
          <button
            onClick={prevBook}
            class={btnStyles["btn"]}
            aria-label="Previous book"
          >
            ← Previous
          </button>

          <div class={styles["indicators"]}>
            <For each={props.books}>
              {(_, index) => (
                <button
                  class={styles["indicator"]}
                  classList={{ [styles["active"]]: index() === currentIndex() }}
                  onClick={() => setCurrentIndex(index())}
                  aria-label={`Go to book ${index() + 1}`}
                />
              )}
            </For>
          </div>

          <button
            onClick={nextBook}
            class={btnStyles["btn"]}
            aria-label="Next book"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
};

export default BookCarousel;
