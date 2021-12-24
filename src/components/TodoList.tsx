import React from "react";

import SingleTodo from "./SingleTodo";
import { Todo } from "../components/models";

interface props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<props> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {todos &&
        todos?.map((todo) => (
          <SingleTodo
            todos={todos}
            todo={todo}
            key={todo?.id}
            setTodos={setTodos}
          />
        ))}
    </div>
  );
};

export default TodoList;
