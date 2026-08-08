import BookCarousel from "../components/BookCarousel";
import { books } from "../data/books";

function BooksPage() {
  return (
    <>
      <BookCarousel books={books} />
      <h1>Lesson Plans: </h1>
      <p>
        blah
      </p>
    </>);
};

export default BooksPage;
