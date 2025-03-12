const books = [
    { isbn: "12345", title: "Book One", author: "Author A", reviews: [] },
    { isbn: "67890", title: "Book Two", author: "Author B", reviews: [] },
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
  