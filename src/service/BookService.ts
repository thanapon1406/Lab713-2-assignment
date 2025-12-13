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

export const filterBooksByTitle = (title: string) => {
  const regex = new RegExp(`^${title}`, "i");
  const filteredBooks = books.filter((book) => regex.test(book.title));
  return filteredBooks;
};

export const findBookById = (id: number) => {
  return books.find((book) => book.id === id);
};

export const addBook = (newBook: any) => {
  newBook.id = books.length + 1;
  books.push(newBook);
  return newBook;
};

export const updateBook = (id: number, updatedBook: any) => {
  const bookIndex = books.findIndex((book) => book.id === id);
  if (bookIndex !== -1) {
    books[bookIndex] = { id, ...updatedBook };
    return books[bookIndex];
  }
  return null;
};

export const getAllBooks = (): Book[] => {
  return books;
};
