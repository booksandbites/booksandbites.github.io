import styles from "./BookOverview.module.css";
import type { Book } from "../types";
import { For, Show } from "solid-js";

interface BookOverviewProps {
  book: Book;
}

const BookOverview = (props: BookOverviewProps) => {
  return (
    <div class={styles["book-section"]}>
      <h2 class={styles["section-title"]}>{props.book.status}</h2>
      <div class={styles["container"]}>
        <div class={styles["image-wrapper"]}>
          <img
            src={props.book.coverImage}
            alt={`${props.book.title} book cover`}
            class={styles["img"]}
          />
          <Show when={props.book.quote != null}>
            <blockquote class={styles["quote"]}>
              "{props.book.quote}"
            </blockquote>
          </Show>
        </div>
        <div class={styles["content"]}>
          <div class={styles["header-info"]}>
            <h3 class={styles["book-title"]}>{props.book.title}</h3>
            <p class={styles["author"]}>by {props.book.author}</p>
            <div class={styles["divider"]}></div>
          </div>

          <div class={styles["description-container"]}>
            <Show
              when={props.book.description}
              fallback={
                <p class={styles["description"]}>under construction!</p>
              }
            >
              {(desc) => (
                <For each={desc()}>
                  {(paragraph) => (
                    <p class={styles["description"]}>{paragraph}</p>
                  )}
                </For>
              )}
            </Show>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookOverview;
