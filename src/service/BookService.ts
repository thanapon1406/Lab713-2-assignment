import Book from "../models/Book";
import * as repo from "../repositories/BookRepositotyDB";

export const filterBooksByTitle = async (title: string): Promise<Book[]> => {
  return repo.filterBooksByTitle(title);
};

export const findBookById = async (id: number): Promise<Book | undefined> => {
  return repo.findBookById(id);
};

export const addBook = async (newBook: any): Promise<Book> => {
  return repo.addBook(newBook);
};

export const updateBook = async (
  id: number,
  updatedBook: any
): Promise<Book | null> => {
  return repo.updateBook(id, updatedBook);
};

export const getAllBooks = async (): Promise<Book[]> => {
  return repo.getAllBooks();
};
