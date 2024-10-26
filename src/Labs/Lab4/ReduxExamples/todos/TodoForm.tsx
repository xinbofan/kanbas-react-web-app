export default function TodoForm({
  todo,
  setTodo,
  addTodo,
  updateTodo,
}: {
  todo: { id: string; title: string };
  setTodo: (todo: { id: string; title: string }) => void;
  addTodo: (todo: { id: string; title: string }) => void;
  updateTodo: (todo: { id: string; title: string }) => void;
}) {
  return (
    <li className="list-group-item d-flex  justify-content-between align-items-center">
      <input
        defaultValue={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <div className="d-flex flex-row-reverse">
        <button
          onClick={() => addTodo(todo)}
          id="wd-add-todo-click"
          className="btn btn-success ms-2"
        >
          {" "}
          Add{" "}
        </button>
        <button
          onClick={() => updateTodo(todo)}
          id="wd-update-todo-click"
          className="btn btn-warning"
        >
          {" "}
          Update{" "}
        </button>
      </div>
    </li>
  );
}
