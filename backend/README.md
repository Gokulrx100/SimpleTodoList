# Simple Todo List Backend

This is the backend API for the Simple Todo List application, built with **Node.js** and **Express**.

## Features

- User authentication (Sign Up & Sign In) using JWT
- Add, view, and delete todo tasks per user
- CORS enabled for frontend-backend communication
- In-memory storage (no database required for demo)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or above recommended)
- [npm](https://www.npmjs.com/)

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
  **Body:** `{ "taskname": "Task" }`

- `GET /todos` — Get all todos for the authenticated user

- `DELETE /deltodo` — Delete a todo (requires JWT in headers)  
  **Body:** `{ "taskname": "Task" }`

## Notes

- This backend uses in-memory storage; data will be lost when the server restarts.
- For production, consider adding a database and environment variable support.

## License

MIT

---