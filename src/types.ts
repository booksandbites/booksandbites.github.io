export interface Book {
  title: string;
  author: string;
  coverImage: string;
  description: string[] | null;
  quote: string | null;
  status: "long ago" | "Last finished book" | "Current book" | "next" | "later";
  theme: "The Relationships that Shape Us"
}

export interface BookData {
  current: number;
}
