export interface Book {
  title: string;
  author: string;
  coverImage: string;
  description: string[];
  quote: string | null;
  status: "previous" | "current" | "next";
}

export interface BookData {
  current: number;
}
