const books = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 310,
    isFiction: true,
  },
  {
    title: "1984",
    author: "George Orwell",
    pages: 328,
    isFiction: true,
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    pages: 498,
    isFiction: false,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: 481,
    isFiction: true,
  },
  {
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    pages: 756,
    isFiction: false,
  },
];

const allFiction = books.every((book) => book.isFiction);
console.log(allFiction);
const someFiction = books.some((book) => book.isFiction);
console.log(someFiction);

const allLongBooks = books.every((book) => book.pages > 300);
console.log(allLongBooks);
