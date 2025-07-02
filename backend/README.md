# Simple Todo List Backend

This is the backend API for the Simple Todo List application, built with **Node.js**, **Express**, and **MongoDB** (via Mongoose).

## Features

- User authentication (Sign Up & Sign In) using JWT
- Passwords securely hashed with bcrypt
- Add, view, and delete todo tasks per user (todos stored in MongoDB)
- CORS enabled for frontend-backend communication

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or above recommended)
- [npm](https://www.npmjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account or local MongoDB instance

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Gokulrx100/SimpleTodoList.git
    cd SimpleTodoList/backend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Configure MongoDB connection:
    - The connection string is set in `index.js`.  
      Update it if you use your own MongoDB credentials or database.

### Running the Server

Start the backend server:

```sh
node index.js
```

The server will run on [http://localhost:3000](http://localhost:3000).

## API Endpoints

- `POST /signup` — Register a new user  
  **Body:** `{ "username": "user", "password": "pass" }`

- `POST /signin` — Authenticate user and receive JWT  
  **Body:** `{ "username": "user", "password": "pass" }`

- `POST /todo` — Add a todo (requires JWT in headers)  
  **Headers:** `{ "token": "<JWT>" }`  
  **Body:** `{ "taskname": "Task" }`

- `GET /todos` — Get all todos for the authenticated user  
  **Headers:** `{ "token": "<JWT>" }`  
  **Response:** `{ "todo": [ { "_id": "...", "taskname": "Task" }, ... ] }`

- `DELETE /deltodo` — Delete a todo by ID (requires JWT in headers)  
  **Headers:** `{ "token": "<JWT>" }`  
  **Body:** `{ "id": "<todo_id>" }`

## Notes

- All todos are stored per user in MongoDB.
- Passwords are hashed using bcrypt before storage.
- JWT is required for all todo operations.
- For production, use environment variables for secrets and DB connection strings.

## License

MIT

---