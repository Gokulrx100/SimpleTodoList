import axios from "axios";
import { useEffect, useState } from "react";
import "./dashboard.css"

function Dashboard() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

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
      }).catch(err=>{
        alert(err.response.data.message);
      })
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
      }).catch(err=>{
        alert(err.response.data.message);
      })
  }

  function deltodo(taskname) {
    axios
      .delete("http://localhost:3000/deltodo", {
        headers: {
          token: localStorage.getItem("token"),
        },
        data: { taskname: taskname },
      })
      .then((response) => {
        fetchtodo();
      }).catch(err=>{
        alert(err.response.data.message);
      })
  }

  useEffect(() => {
    fetchtodo();
  }, []);

  return (
    <div id="todo-container">
      <h2 id="heading">TODO List</h2>
      <div id="input-section">
        <input
          type="text"
          placeholder="enter a task"
          id="taskname"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo} id="addBtn">add</button>
      </div>
      <div id="tasklist">
        {todos.map((todo, idx) => (
          <div key={idx} class="task-row">
            {todo} <button onClick={() => deltodo(todo)} id="delBtn">delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
