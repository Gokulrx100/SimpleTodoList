# Simple Todo List Frontend

This is the frontend for the Simple Todo List application, built with **React** and **Vite**.

## Features

- User Sign Up and Sign In
- Add, view, and delete todo tasks
- Dashboard to manage your todos
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
  - `components/` - UI components (SignIn, SignUp, Dashboard, etc.)
  - `App.jsx` - Main app component and routing
- `public/` - Static assets

## Environment Variables

If you need to configure API endpoints, create a `.env` file in the root and add your variables (see Vite docs for details).

## License

MIT

---

**Note:** This frontend is designed to work with the [SimpleTodoList backend](../backend)