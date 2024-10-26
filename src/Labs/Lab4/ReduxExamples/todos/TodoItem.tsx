export default function TodoItem({
  todo,
  deleteTodo,
  setTodo,
}: {
  todo: { id: string; title: string };
  deleteTodo: (id: string) => void;
  setTodo: (todo: { id: string; title: string }) => void;
}) {
  return (
    <li
      key={todo.id}
      className="list-group-item d-flex  justify-content-between align-items-center"
    >
      <span>{todo.title}</span>
      <div className="d-flex flex-row-reverse">
        <button
          onClick={() => deleteTodo(todo.id)}
          id="wd-delete-todo-click"
          className="btn btn-danger ms-2"
        >
          {" "}
          Delete{" "}
        </button>
        <button
          onClick={() => setTodo(todo)}
          id="wd-set-todo-click"
          className="btn btn-primary"
        >
          {" "}
          Edit{" "}
        </button>
      </div>
    </li>
  );
}
