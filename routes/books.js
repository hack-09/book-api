const express = require("express");
const { getAllBooks, 
    getBookByISBN, 
    getBooksByAuthor, 
    getBooksByTitle, 
    getBookreview, 
    getAllBooksAsync,
    getBookByISBNPromise,
    getBooksByAuthorAsync,
    getBooksByTitlePromise, } = require("../controllers/bookController");

const router = express.Router();

router.get("/", getAllBooks);
router.get("/:isbn", getBookByISBN);
router.get("/author/:author", getBooksByAuthor);
router.get("/title/:title", getBooksByTitle);
router.get("/books/:isbn/reviews", getBookreview);

// Task 10: Get All Books (Async Callback)
router.get("/async", getAllBooksAsync);

// Task 11: Get Book by ISBN (Using Promises)
router.get("/promise/:isbn", getBookByISBNPromise);

// Task 12: Get Books by Author (Using Async/Await)
router.get("/author-async/:author", getBooksByAuthorAsync);

// Task 13: Get Books by Title (Using Promises)
router.get("/title-promise/:title", getBooksByTitlePromise);

module.exports = router;
