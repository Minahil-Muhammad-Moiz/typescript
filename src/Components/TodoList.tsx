import React from "react";
import { Todo } from "../model";

interface Prop {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Prop> = (props) => {
  return (
    <div className="flex justify-evenly flex-wrap w-[60%] md:w-[80%] ">
      {props.todos.map((todo) => <li>{todo.todo}</li>)}
    </div>
  );
};

export default TodoList;
