import React from "react";
import { Todo } from "../model";
import SingleTodo from "./Task/SingleTodo";
import classNames from "classnames";

interface Prop {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Prop> = (props) => {
  return (
    <div className="flex justify-center w-[80%] ">
      <div className={classNames("bg-teal-600",taskContainers)}>
        <h1 className={classNames(taskContHeading)}>Active Tasks</h1>
        {props.todos.map((todo) => (
          <SingleTodo todo={todo}  key={todo.id} setTodos={props.setTodos} todos={props.todos}/>
        ))}
      </div>
      <div className={classNames("bg-lime-600 ",taskContainers)}>
        <h1 className={classNames(taskContHeading)}>Completed task</h1>
        {props.todos.map((todo) => (
          <SingleTodo todo={todo}  key={todo.id} setTodos={props.setTodos} todos={props.todos}/>
        ))}
        </div>
    </div>
  );
};

export default TodoList;

const taskContainers = "w-full m-1 mt-3 p-2 rounded-lg flex justify-center flex-col items-center";
const taskContHeading = "text-gray-50 text-4xl";