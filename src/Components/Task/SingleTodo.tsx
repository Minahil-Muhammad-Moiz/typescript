import React from "react";
import { Todo } from "../../model";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";

type Prop = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Prop) => {
  return (
    <form className={todoCard}>
        
      <span className={todoCardText}>task</span>
      <div className="flex ">
        <span className={icon}><AiFillEdit /></span>
        <span className={icon}><AiFillDelete/></span>
        <span className={icon}><MdDone/></span>
      </div>
    </form>
  );
};

export default SingleTodo;

const todoCard ="flex w-full md:w-[40%] items-center justify-evenly p-5 mt-4 md:m-2 rounded-lg bg-cover bg-[url('./Components/Task/bgimg.jpg')] border" ;
const todoCardText = "flex-1 p-2 border-none text-left text-2xl";
const icon = "ml-2 text-2xl cursor-pointer";
