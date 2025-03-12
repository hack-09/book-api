const express = require("express");
const { getAllBooks, getBookByISBN, getBooksByAuthor, getBooksByTitle } = require("../controllers/bookController");

const router = express.Router();

router.get("/", getAllBooks);
router.get("/:isbn", getBookByISBN);
router.get("/author/:author", getBooksByAuthor);
router.get("/title/:title", getBooksByTitle);

module.exports = router;
