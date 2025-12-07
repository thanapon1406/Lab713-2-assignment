import express, { Request, Response } from "express";
const app = express();
const port = 3000;
app.use(express.json());
interface Event {
  id: number;
  category: string;
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
  petsAllowed: boolean;
  organizer: string;
}

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
const books = [
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

app.get("/books", (req: Request, res: Response) => {
  if (req.query.title) {
    const title = req.query.title;
    const regex = new RegExp(`^${title}`, "i");
    const filteredBooks = books.filter((book) => regex.test(book.title));
    res.json(filteredBooks);
  } else {
    res.json(books);
  }
});

app.get("/books/:id", (req: Request, res: Response) => {
  if (req.query.title) {
    const title = req.query.title;
    const regex = new RegExp(`^${title}`, "i");
    const filteredBooks = books.filter((book) => regex.test(book.title));
    res.json(filteredBooks);
  } else if (req.params.id) {
    const id = req.params.id;
    const filteredBooks = books.find((book) => book.id === Number(id));
    res.json(filteredBooks);
  } else {
    res.json(books);
  }
});

app.post("/books", (req: Request, res: Response) => {
  const newBook = req.body;
  newBook.id = books.length + 1;
  books.push(newBook);
  res.json(newBook);
});

app.put("/books/:id", (req: Request, res: Response) => {
  const updatedBook = req.body;
  const id = Number(req.params.id);
  const bookIndex = books.findIndex((book) => book.id === id);
  if (bookIndex !== -1) {
    books[bookIndex] = { id, ...updatedBook };
    res.json(books[bookIndex]);
  } else {
    res.status(404).send("Book not found");
  }
});

// End Books

// Events

const events: Event[] = [
  {
    id: 1,
    category: "Music",
    title: "Concert",
    description: "A live concert",
    location: "London",
    date: "2021-07-01",
    time: "19:00",
    petsAllowed: false,
    organizer: "Live Nation",
  },
  {
    id: 2,
    category: "Music",
    title: "Concert",
    description: "City Pop Live",
    location: "Tokyo",
    date: "2021-08-01",
    time: "19:00",
    petsAllowed: false,
    organizer: "Live Nation",
  },
  {
    id: 3,
    category: "Pet",
    title: "Pet Event",
    description: "A Pet Day",
    location: "Bangkok",
    date: "2021-09-01",
    time: "19:00",
    petsAllowed: true,
    organizer: "Live Nation",
  },
  {
    id: 4,
    category: "Music",
    title: "Concert",
    description: "Rock Music Live",
    location: "Manchester",
    date: "2021-10-01",
    time: "19:00",
    petsAllowed: false,
    organizer: "Live Nation",
  },
  {
    id: 5,
    category: "Music",
    title: "Concert",
    description: "Jazz Live",
    location: "Chicago",
    date: "2021-11-01",
    time: "19:00",
    petsAllowed: false,
    organizer: "Live Nation",
  },
];

app.get("/events", (req, res) => {
  if (req.query.category) {
    const category = req.query.category;
    const filteredEvents = events.filter(
      (event) => event.category === category
    );
    res.json(filteredEvents);
  } else {
    res.json(events);
  }
});

app.get("/events/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const event = events.find((event) => event.id === id);
  if (event) {
    res.json(event);
  } else {
    res.status(404).send("Event not found");
  }
});

app.post("/events", (req, res) => {
  const newEvent: Event = req.body;
  newEvent.id = events.length + 1;
  events.push(newEvent);
  res.json(newEvent);
});

// End Events
