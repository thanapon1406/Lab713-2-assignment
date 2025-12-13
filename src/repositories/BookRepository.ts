import Book from "../models/Book";

export const books: Book[] = [
  {
    id: 1,
    title: "Book A",
    authorName: "Author A",
    description: "Description A",
    group: "Group A",
  },
  {
    id: 2,
    title: "Book B",
    authorName: "Author B",
    description: "Description B",
    group: "Group B",
  },
  {
    id: 3,
    title: "C Book C",
    authorName: "Author C",
    description: "Description C",
    group: "Group C",
  },
  {
    id: 4,
    title: "Book D",
    authorName: "Author D",
    description: "Description D",
    group: "Group D",
  },
];

export const filterBooksByTitle = async (title: string): Promise<Book[]> => {
  const regex = new RegExp(`^${title}`, "i");
  const filteredBooks = books.filter((book) => regex.test(book.title));
  return filteredBooks;
};

export const findBookById = async (id: number): Promise<Book | undefined> => {
  return books.find((book) => book.id === id);
};

export const addBook = async (newBook: any): Promise<Book> => {
  newBook.id = books.length + 1;
  books.push(newBook);
  return newBook;
};

export const updateBook = async (
  id: number,
  updatedBook: any
): Promise<Book | null> => {
  const bookIndex = books.findIndex((book) => book.id === id);
  if (bookIndex !== -1) {
    books[bookIndex] = { id, ...updatedBook };
    return books[bookIndex];
  }
  return null;
};

export const getAllBooks = async (): Promise<Book[]> => {
  return books;
};
