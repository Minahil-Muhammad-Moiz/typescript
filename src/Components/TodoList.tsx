import React from "react";
import { Todo } from "../model";
import SingleTodo from "./Task/SingleTodo";

interface Prop {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Prop> = (props) => {
  return (
    <div className="flex justify-evenly flex-wrap w-[60%] md:w-[80%] ">
      {props.todos.map((todo) => (
        <SingleTodo todo={todo}  key={todo.id} setTodos={props.setTodos} todos={props.todos}/>
      ))}
    </div>
  );
};

export default TodoList;
