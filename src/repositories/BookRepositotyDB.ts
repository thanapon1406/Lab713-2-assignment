import type Book from "../models/Book";
import * as db from "../db";

export const filterBooksByTitle = async (title: string): Promise<Book[]> => {
  //   const regex = new RegExp(`^${title}`, "i");
  //   const filteredBooks = books.filter((book) => regex.test(book.title));
  //   return filteredBooks;
  const result = await db.query("SELECT * FROM books WHERE title ILIKE $1", [
    `${title}%`,
  ]);
  return result.rows as Book[];
};

export const findBookById = async (id: number): Promise<Book | undefined> => {
  //   return books.find((book) => book.id === id);
  const result = await db.query("SELECT * FROM books WHERE id = $1", [id]);
  const books = result.rows as Book[];
  return books.length > 0 ? books[0] : undefined;
};

export const addBook = async (newBook: any): Promise<Book> => {
  //   newBook.id = books.length + 1;
  //   books.push(newBook);
  //   return newBook;
  const { title, author_name, description, group } = newBook;
  const result = await db.query(
    'INSERT INTO books (title, author_name, description, "group") VALUES ($1, $2, $3, $4) RETURNING id',
    [title, author_name, description, group]
  );
  newBook.id = result.rows[0].id;
  return newBook;
};

export const updateBook = async (
  id: number,
  updatedBook: any
): Promise<Book | null> => {
  //   const bookIndex = books.findIndex((book) => book.id === id);
  //   if (bookIndex !== -1) {
  //     books[bookIndex] = { id, ...updatedBook };
  //     return books[bookIndex];
  //   }
  //   return null;
  const { title, author_name, description, group } = updatedBook;
  const result = await db.query(
    'UPDATE books SET title = $1, author_name = $2, description = $3, "group" = $4 WHERE id = $5 RETURNING *',
    [title, author_name, description, group, id]
  );
  const books = result.rows as Book[];
  return books.length > 0 ? books[0] : null;
};

export const getAllBooks = async (): Promise<Book[]> => {
  const result = await db.query("SELECT * FROM books");
  return result.rows as Book[];
};
