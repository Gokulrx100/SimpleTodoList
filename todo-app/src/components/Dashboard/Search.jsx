function Search({ search, setSearch, setRefTodo, todos }) {
  const searchTodo = () => {
    if (search.trim() === "") {
      setRefTodo(todos);
    } else {
      setRefTodo(
        todos.filter((todo) =>
          todo.taskname.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  };

  return (
    <div id="search-section">
      <input
        type="text"
        id="search-bar"
        placeholder="search Todo"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button id="search-button" onClick={searchTodo}>
        Search
      </button>
    </div>
  );
}
export default Search;
