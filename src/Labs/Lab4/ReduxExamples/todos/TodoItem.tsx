import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

type Todo = {
  id: string;
  title: string;
};
export default function TodoItem({ todo }: { todo: Todo }) {
  const dispatch = useDispatch();

  return (
    <li
      key={todo.id}
      className="list-group-item d-flex  justify-content-between align-items-center"
    >
      <span>{todo.title}</span>
      <div className="d-flex flex-row-reverse">
        <button
          onClick={() => dispatch(deleteTodo(todo.id))}
          id="wd-delete-todo-click"
          className="btn btn-danger ms-2"
        >
          {" "}
          Delete{" "}
        </button>
        <button
          onClick={() => dispatch(setTodo(todo))}
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
