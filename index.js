const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

// Sample book data
const books = [
    { isbn: "12345", title: "Node.js Guide", author: "John Doe", reviews: ["Great book!"] },
    { isbn: "67890", title: "JavaScript Basics", author: "Jane Smith", reviews: ["Very useful"] }
];

// Task 1: Get all books
app.get("/books", (req, res) => {
    res.json(books);
});

// Task 2: Get book by ISBN
app.get("/books/:isbn", (req, res) => {
    const book = books.find(b => b.isbn === req.params.isbn);
    book ? res.json(book) : res.status(404).json({ error: "Book not found" });
});

// Task 3: Get books by Author
app.get("/books/author/:author", (req, res) => {
    const authorBooks = books.filter(b => b.author.toLowerCase() === req.params.author.toLowerCase());
    authorBooks.length ? res.json(authorBooks) : res.status(404).json({ error: "No books found" });
});

// Task 4: Get books by Title
app.get("/books/title/:title", (req, res) => {
    const titleBooks = books.filter(b => b.title.toLowerCase().includes(req.params.title.toLowerCase()));
    titleBooks.length ? res.json(titleBooks) : res.status(404).json({ error: "No books found" });
});

// Task 5: Get book review
app.get("/books/:isbn/reviews", (req, res) => {
    const book = books.find(b => b.isbn === req.params.isbn);
    book ? res.json({ reviews: book.reviews }) : res.status(404).json({ error: "Book not found" });
});

// Task 6 & 7: User Registration & Login (Mock users)
const users = {};

app.post("/register", (req, res) => {
    const { username, password } = req.body;
    if (users[username]) {
        return res.status(400).json({ error: "User already exists" });
    }
    users[username] = { password };
    res.json({ message: "User registered successfully" });
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (users[username] && users[username].password === password) {
        return res.json({ message: "Login successful" });
    }
    res.status(401).json({ error: "Invalid credentials" });
});

// Task 8 & 9: Add, Modify & Delete Book Review
app.post("/books/:isbn/review", (req, res) => {
    const { review } = req.body;
    const book = books.find(b => b.isbn === req.params.isbn);
    if (book) {
        book.reviews.push(review);
        res.json({ message: "Review added", book });
    } else {
        res.status(404).json({ error: "Book not found" });
    }
});

app.delete("/books/:isbn/review", (req, res) => {
    const book = books.find(b => b.isbn === req.params.isbn);
    if (book) {
        book.reviews.pop();
        res.json({ message: "Last review deleted", book });
    } else {
        res.status(404).json({ error: "Book not found" });
    }
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
