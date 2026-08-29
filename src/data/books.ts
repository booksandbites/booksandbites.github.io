import type { Book, BookData } from "../types";
import LoveAndGelatoCover from "../assets/covers/Love and Gelato Cover.jpg";
import PachinkoCover from "../assets/covers/Pachinko Cover.jpg";

export const books: Book[] = [
  {
    title: "Love & Gelato",
    author: "Jenna Evans Welch",
    coverImage: LoveAndGelatoCover,
    description: [
      "A summer in Italy turns into a road trip across Tuscany filled with romance, mystery, and adventure. Lina is spending the summer in Tuscany, but she isn't in the mood for Italy's famous sunshine and fairy-tale landscape. She's only there because it was her mother's dying wish that she get to know her father. But what kind of father isn't around for sixteen years?",
      "When Lina is given a journal that her mom kept when she lived in Italy, she suddenly uncovers a magical world of secret romances, art, and hidden bakeries. A world that inspires Lina, along with the ever-so-charming Ren, to follow in her mother's footsteps and unearth a secret that has been kept for far too long.",
    ],
    quote:
      "You know, people come to Italy for all sorts of reasons, but when they stay, it's for the same two things: Love and gelato.",
    // null,
    status: "Last finished book",
    theme: "The Relationships that Shape Us",
  },
  {
    title: "Pachinko",
    author: "Min Jin Lee",
    coverImage: PachinkoCover,
    description: null,
    quote: null,
    status: "Current book",
    theme: "The Relationships that Shape Us",
  },
];

export const bookData: BookData = {
  current: 0,
};
