function TodoList({ todos, search, todosRef, deltodo }) {
  const list = search.trim() ? todosRef : todos;
  return (
    <div id="tasklist">
      {list.map((todo) => (
        <div key={todo._id} class="task-row">
          {todo.taskname}
          <button onClick={() => deltodo(todo._id)} id="delBtn">
            delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
