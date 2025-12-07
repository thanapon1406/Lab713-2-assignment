import express, { Request, Response } from "express";
const app = express();
const port = 3000;

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

const books = [
  {
    title: "Book A",
    authorName: "Author A",
    description: "Description A",
    group: "Group A",
  },
  {
    title: "Book B",
    authorName: "Author B",
    description: "Description B",
    group: "Group B",
  },
  {
    title: "Book C",
    authorName: "Author C",
    description: "Description C",
    group: "Group C",
  },
  {
    title: "Book D",
    authorName: "Author D",
    description: "Description D",
    group: "Group D",
  },
];
app.get("/books", (_, res: Response) => {
  res.json(books);
});
