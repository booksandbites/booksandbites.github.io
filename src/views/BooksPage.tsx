import BookCarousel from "../components/BookCarousel";
import { books } from "../data/books";

function BooksPage() {
  return (<><BookCarousel books={books} /></>);
};

export default BooksPage;
