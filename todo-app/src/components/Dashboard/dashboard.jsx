import axios from "axios";
import { useEffect, useState } from "react";
import "./dashboard.css";
import Search from "./Search";
import LogOut from "./LogOut";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function Dashboard() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [todosRef, setRefTodo] = useState([]);

  function fetchtodo() {
    axios
      .get("http://localhost:3000/todos", {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setTodos(response.data.todo);
        console.log(response.data.message);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }

  function addTodo() {
    axios
      .post(
        "http://localhost:3000/todo",
        {
          taskname: input,
        },
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        setInput("");
        fetchtodo();
      })
      .catch((err) => {
        if (err.response?.data?.errors) {
          alert(err.response.data.errors.join("\n"));
        } else {
          alert(err.response?.data?.message || "An error occurred");
        }
      });
  }

  function deltodo(id) {
    axios
      .delete("http://localhost:3000/deltodo", {
        headers: {
          token: localStorage.getItem("token"),
        },
        data: { id: id },
      })
      .then((response) => {
        fetchtodo();
        if (search.trim() !== "") {
          setRefTodo(
            todos
              .filter((todo) =>
                todo.taskname.toLowerCase().includes(search.toLowerCase())
              )
              .filter((todo) => todo._id !== id)
          );
        }
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }

  useEffect(() => {
    if (search.trim() === "") {
      setRefTodo(todos);
    } else {
      setRefTodo(
        todos.filter((todo) =>
          todo.taskname.toLowerCase().includes(search.toLocaleLowerCase())
        )
      );
    }
  }, [todos, search]);

  useEffect(() => {
    fetchtodo();
  }, []);

  return (
    <>
      <Search
        search={search}
        setRefTodo={setRefTodo}
        setSearch={setSearch}
        todos={todos}
      />
      <div id="todo-container">
        <h2 id="heading">TODO List</h2>
        <TodoInput input={input} setInput={setInput} addTodo={addTodo} />
        <TodoList
          search={search}
          todos={todos}
          deltodo={deltodo}
          todosRef={todosRef}
        />
      </div>
      <LogOut />
    </>
  );
}

export default Dashboard;
