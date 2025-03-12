const books = [
    { isbn: "12345", title: "Node.js Guide", author: "John Doe", reviews: ["Great book!"] },
    { isbn: "67890", title: "JavaScript Basics", author: "Jane Smith", reviews: ["Very useful"] }
];

exports.getAllBooks = (req, res) => res.json(books);

exports.getBookByISBN = (req, res) => {
  const book = books.find(b => b.isbn === req.params.isbn);
  return book ? res.json(book) : res.status(404).json({ message: "Book not found" });
};

exports.getBooksByAuthor = (req, res) => {
  const result = books.filter(b => b.author.toLowerCase() === req.params.author.toLowerCase());
  res.json(result.length ? result : { message: "No books found" });
};

exports.getBooksByTitle = (req, res) => {
  const result = books.filter(b => b.title.toLowerCase().includes(req.params.title.toLowerCase()));
  res.json(result.length ? result : { message: "No books found" });
};

exports.getBookreview = (req, res) => {
  const book = books.find(b => b.isbn === req.params.isbn);
  book ? res.json({ reviews: book.reviews }) : res.status(404).json({ error: "Book not found" });
};

// ✅ Task 10: Get All Books (Using Async Callback Function)
exports.getAllBooksAsync = async (req, res) => {
  setTimeout(() => {
    res.json(books);
  }, 1000); // Simulating an async callback with a delay
};

// ✅ Task 11: Get Book by ISBN (Using Promises)
exports.getBookByISBNPromise = (req, res) => {
  new Promise((resolve, reject) => {
    const book = books.find((b) => b.isbn === req.params.isbn);
    book ? resolve(book) : reject("Book not found");
  })
    .then((book) => res.json(book))
    .catch((err) => res.status(404).json({ message: err }));
};

// ✅ Task 12: Get Books by Author (Using Async/Await)
exports.getBooksByAuthorAsync = async (req, res) => {
  try {
    const result = books.filter((b) => b.author.toLowerCase() === req.params.author.toLowerCase());
    if (result.length === 0) throw "No books found";
    res.json(result);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

// ✅ Task 13: Get Books by Title (Using Promises)
exports.getBooksByTitlePromise = (req, res) => {
  new Promise((resolve, reject) => {
    const result = books.filter((b) => b.title.toLowerCase().includes(req.params.title.toLowerCase()));
    result.length ? resolve(result) : reject("No books found");
  })
    .then((result) => res.json(result))
    .catch((err) => res.status(404).json({ message: err }));
};