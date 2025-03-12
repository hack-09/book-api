# Bookstore API (Node.js)

## 📌 Description
A REST API for managing books and user authentication.

## 🚀 Installation
1. Clone the repository:
   ```
   git clone https://github.com/hack-09/bookstore-api.git
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Run the server:
   ```
   node server.js
   ```

## 📌 API Endpoints
| Method | Endpoint              | Description              |
|--------|-----------------------|--------------------------|
| GET    | `/books`              | Get all books           |
| GET    | `/books/:isbn`        | Get book by ISBN        |
| GET    | `/books/author/:name` | Get books by author     |
| GET    | `/books/title/:title` | Get books by title      |
| POST   | `/users/register`     | Register a new user     |
| POST   | `/users/login`        | Login user & get token  |

## 📷 Screenshots
All task screenshots are in the `/screenshots/` folder.
```

---

### **8️⃣ `.gitignore`**
Prevent uploading unnecessary files.
```
node_modules/
.env
```

