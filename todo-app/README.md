# Simple Todo List Frontend

This is the frontend for the Simple Todo List application, built with **React** and **Vite**.

## Features

- User Sign Up and Sign In (with validation and error feedback)
- Add, view, search, and delete todo tasks
- Dashboard to manage your todos
- Responsive UI with modular React components
- Communicates with a backend API for authentication and data

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or above recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Gokulrx100/SimpleTodoList.git
    cd SimpleTodoList/todo-app
    ```

2. Install dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

### Running the App

Start the development server:

```sh
npm run dev
# or
yarn dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) (default Vite port).

### Building for Production

```sh
npm run build
# or
yarn build
```

## Project Structure

- `src/` - React source code
  - `components/` - UI components (SignIn, SignUp, Dashboard, Search, TodoInput, TodoList, LogOut, etc.)
  - `App.jsx` - Main app component and routing
- `public/` - Static assets

## Environment Variables

If you need to configure API endpoints, create a `.env` file in the root and add your variables (see [Vite environment variables docs](https://vitejs.dev/guide/env-and-mode.html) for details).

## Usage Notes

- This frontend is designed to work with the [SimpleTodoList backend](../backend).
- Make sure the backend server is running and accessible at the expected API URL (default: `http://localhost:3000`).
- All authentication and todo operations require a valid JWT token, which is managed automatically after sign in.

## License

MIT