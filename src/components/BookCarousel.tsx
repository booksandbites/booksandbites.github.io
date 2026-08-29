import { createSignal, For } from "solid-js";
import BookOverview from "./BookOverview";
import type { Book } from "../types";
import styles from "./BookCarousel.module.css";
import { bookData } from "../data/books";

interface BookCarouselProps {
  books: Book[];
}

const BookCarousel = (props: BookCarouselProps) => {
  const [currentIndex, setCurrentIndex] = createSignal(bookData.current);

  const nextBook = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, props.books.length - 1));
  };

  const prevBook = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div class={styles["carousel"]}>
      <BookOverview book={props.books[currentIndex()]} />

      {props.books.length > 1 && (
        <div class={styles["controls"]}>
          <button
            onClick={prevBook}
            class={styles["btn"]}
            aria-label="Previous book"
          >
            ←
          </button>

          <div class={styles["indicators"]}>
            <For each={props.books}>
              {(_, index) => (
                <button
                  classList={{
                    [styles["indicator"]]: true,
                    [styles["active"]]: index() === currentIndex(),
                  }}
                  onClick={() => setCurrentIndex(index())}
                  aria-label={`Go to book ${index() + 1}`}
                />
              )}
            </For>
          </div>

          <button
            onClick={nextBook}
            class={styles["btn"]}
            aria-label="Next book"
          >
            →
          </button>
        </div>
      )}
    </div>
  );
};

export default BookCarousel;
