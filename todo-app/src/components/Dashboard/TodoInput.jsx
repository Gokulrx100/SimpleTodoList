function TodoInput({ input, setInput, addTodo }) {
  return (
    <div id="input-section">
      <input
        type="text"
        placeholder="enter a task"
        id="taskname"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo} id="addBtn">
        add
      </button>
    </div>
  );
}

export default TodoInput;
