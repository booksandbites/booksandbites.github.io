export interface Book {
  title: string;
  author: string;
  coverImage: string;
  description: string[];
  quote: string | null;
  status: "long ago" | "previous" | "current" | "next" | "later";
  theme: "The Relationships that Shape Us"
}

export interface BookData {
  current: number;
}
