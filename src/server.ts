import express, { Request, Response } from "express";
import Event from "./models/Event";
import {
  addEvent,
  getAllEvents,
  getEventByCategory,
  getEventById,
} from "./service/EventService";
import {
  addBook,
  filterBooksByTitle,
  findBookById,
  getAllBooks,
  updateBook,
} from "./service/BookService";
import Book from "./models/Book";

const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

app.get("/test1", (req, res) => {
  res.send("Hello World! 3");
  let returnObj = {
    name: "test",
    age: 20,
    address: "Thai",
  };
  res.send(returnObj);
});

app.get("/test", (req: Request, res: Response) => {
  const id = req.query.id;
  const output = `id: ${id}`;
  res.send(output);
});

// Books
app.get("/books", async (req: Request, res: Response) => {
  if (req.query.title) {
    const title = req.query.title;
    const filteredBooks = await filterBooksByTitle(String(title));
    res.json(filteredBooks);
  } else {
    const books = await getAllBooks();
    res.json(books);
  }
});

app.get("/books/:id", async (req: Request, res: Response) => {
  if (req.query.title) {
    const title = req.query.title;
    const filteredBooks = await filterBooksByTitle(String(title));
    res.json(filteredBooks);
  } else if (req.params.id) {
    const id = req.params.id;
    const filteredBooks = await findBookById(Number(id));
    res.json(filteredBooks);
  } else {
    const books = await getAllBooks();
    res.json(books);
  }
});

app.post("/books", async (req: Request, res: Response) => {
  const newBook: Book = req.body;
  await addBook(newBook);
  res.json(newBook);
});

app.put("/books/:id", async (req: Request, res: Response) => {
  const updatedBook = req.body;
  const id = Number(req.params.id);
  const updated = await updateBook(id, updatedBook);
  if (updated) {
    res.json(updated);
  } else {
    res.status(404).send("Book not found");
  }
});
// End Books

// Events
app.get("/events", async (req, res) => {
  if (req.query.category) {
    const category = req.query.category as string;
    const filteredEvents = await getEventByCategory(category);
    res.json(filteredEvents);
  } else {
    res.json(await getAllEvents());
  }
});

app.get("/events/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const event = await getEventById(id);
  if (event) {
    res.json(event);
  } else {
    res.status(404).send("Event not found");
  }
});

app.post("/events", async (req, res) => {
  const newEvent: Event = req.body;
  res.json(await addEvent(newEvent));
});
// End Events
