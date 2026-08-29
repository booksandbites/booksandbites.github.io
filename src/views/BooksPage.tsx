import BookCarousel from "../components/BookCarousel";
import RelationshipsTeaser from "../../secrets/Teasers/Lesson Plan Relationships That Shape Us.png";
import { books } from "../data/books";
import generalCss from "./General.module.css";

function BooksPage() {
  return (
    <>
      <h1 class={generalCss.title}>Books</h1>
      <p>
        We are committed to promoting literacy both within our initiative and
        our local community. We strongly believe in the fact that literacy and
        education increase opportunities and allow people to be informed in
        society. We aim to increase literacy rates among young readers primarily
        through in person lessons and initiatives to make reading not just
        interesting, but rewarding!
      </p>
      <BookCarousel books={books} />
      <h1>Lesson Plans: </h1>
      <div
        class="img-container"
        style="
        display: flex;
        flex-direction: column;
        align-items: center;
        "
      >
        <img style=" max-width: min(75%, 768px);" src={RelationshipsTeaser} />
        <p>log in for access to the full lesson plan</p>
      </div>
    </>
  );
}

export default BooksPage;
