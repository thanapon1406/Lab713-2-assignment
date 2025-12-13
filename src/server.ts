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

app.get("/books", (req: Request, res: Response) => {
  if (req.query.title) {
    const title = req.query.title;
    const filteredBooks = filterBooksByTitle(String(title));
    res.json(filteredBooks);
  } else {
    res.json(getAllBooks());
  }
});

app.get("/books/:id", (req: Request, res: Response) => {
  if (req.query.title) {
    const title = req.query.title;
    const filteredBooks = filterBooksByTitle(String(title));
    res.json(filteredBooks);
  } else if (req.params.id) {
    const id = req.params.id;
    const filteredBooks = findBookById(Number(id));
    res.json(filteredBooks);
  } else {
    res.json(getAllBooks());
  }
});

app.post("/books", (req: Request, res: Response) => {
  const newBook = req.body;
  addBook(newBook);
  res.json(newBook);
});

app.put("/books/:id", (req: Request, res: Response) => {
  const updatedBook = req.body;
  const id = Number(req.params.id);
  const updated = updateBook(id, updatedBook);
  if (updated) {
    res.json(updated);
  } else {
    res.status(404).send("Book not found");
  }
});

// End Books

// Events

app.get("/events", (req, res) => {
  if (req.query.category) {
    const category = req.query.category;
    const filteredEvents = getEventByCategory(String(category));
    res.json(filteredEvents);
  } else {
    res.json(getAllEvents());
  }
});

app.get("/events/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const event = getEventById(id);
  if (event) {
    res.json(event);
  } else {
    res.status(404).send("Event not found");
  }
});

app.post("/events", (req, res) => {
  const newEvent: Event = req.body;
  addEvent(newEvent);
  res.json(newEvent);
});

// End Events
