
````markdown
# 📝 Task Manager API & Frontend

A simple full-stack task manager built with **Node.js, Express, MongoDB**, and a **vanilla HTML/CSS/JS frontend**. This project demonstrates basic CRUD operations and REST API integration.

---

## 🚀 Features

- ✅ Add new tasks
- 📋 View all tasks
- ❌ Delete tasks
- 📦 Backend API using Express & MongoDB
- 🧼 Clean, minimal frontend (no frameworks)

---

## 🛠️ Tech Stack

**Backend:**
- Node.js
- Express
- MongoDB
- Mongoose

**Frontend:**
- HTML, CSS, JavaScript (Vanilla)

---

## 🧪 How to Run

### 🖥 Backend Setup

1. Clone the repo and navigate into the backend folder:
   ```bash
   git clone https://github.com/your-username/task-manager.git
   cd task-manager-backend
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file:

   ```env
   PORT=3000
   MONGO_URI=mongodb://127.0.0.1:27017/taskdb
   ```

4. Start the server:

   ```bash
   node server.js
   ```

---

### 🌐 Frontend Setup

1. Navigate into the frontend folder:

   ```bash
   cd ../task-manager-frontend
   ```

2. Open `index.html` in your browser:

   ```
   file:///path/to/your/index.html
   ```

> Make sure the backend is running at `http://localhost:3000` before using the frontend.

---

## 📂 Folder Structure

```
task-manager/
├── task-manager-backend/
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── server.js
├── task-manager-frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
```

---

## 📬 API Endpoints

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | `/api/tasks`     | Get all tasks     |
| POST   | `/api/tasks`     | Create a new task |
| PUT    | `/api/tasks/:id` | Update a task     |
| DELETE | `/api/tasks/:id` | Delete a task     |

---

## 📸 Screenshots

![screenshot](https://via.placeholder.com/600x300?text=Frontend+Preview)
*Basic frontend UI*

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

Made with 💻 by [Your Name](https://github.com/your-username)

```

---

Would you like me to generate a GitHub repo with this structure for you, or help with deploying it online (e.g. Render for backend, GitHub Pages for frontend)?
```
