import styles from "./BookOverview.module.css";
import type { Book } from "../types";
import { Show } from "solid-js";

interface BookOverviewProps {
  book: Book;
}

const BookOverview = (props: BookOverviewProps) => {
  return (
    <div class={styles["book-section"]}>
      <h2 class={styles["section-title"]}>
        {props.book.status === "previous"
          ? "Previous Book"
          : props.book.status === "current"
            ? "Current Book"
            : props.book.status === "next"
              ? "Next Book"
              : "Previous Book"}
      </h2>
      <div class={styles["container"]}>
        <div class={styles["image-wrapper"]}>
          <img
            src={props.book.coverImage}
            alt={`${props.book.title} book cover`}
            class={styles["img"]}
          />
        </div>
        <div class={styles["content"]}>
          <h3 class={styles["book-title"]}>{props.book.title}</h3>
          <p class={styles["author"]}>by {props.book.author}</p>
          <div class={styles["divider"]}></div>
          {props.book.description.map((paragraph) => (
            <p class={styles["description"]}>{paragraph}</p>
          ))}
          <Show when={props.book.quote != null}>
            <blockquote class={styles["quote"]}>
              "{props.book.quote}"
            </blockquote>
          </Show>
        </div>
      </div>
    </div>
  );
};

export default BookOverview;
