const express = require("express");
const bodyParser = require("body-parser");
const bookRoutes = require("./routes/books");
const userRoutes = require("./routes/users");

const app = express();
app.use(bodyParser.json());

app.use("/books", bookRoutes);
app.use("/users", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
