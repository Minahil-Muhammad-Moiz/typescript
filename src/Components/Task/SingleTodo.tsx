import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../../model";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";

type Prop = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Prop) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(()=>{
    inputRef.current?.focus()}, [editMode])

  const deleteTask = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleEdit = (e:React.FormEvent , id: number)=>{
    e.preventDefault();
    setTodos(
      todos.map((todo)=>(
        todo.id === id ? {...todo, todo:editTodo}: todo
      ))
    );
    setEditMode(!editMode)

  }

  return (
    <form className={todoCard} onSubmit={(e)=>{
      handleEdit(e, todo.id)
    }}>
      {editMode ? (
        <input  value={editTodo} onChange={(e)=>{setEditTodo(e.target.value)}} className="focus:outline-none flex-1 text-2xl border-none rounded-md p-2 w-[80%]" ref={inputRef}/>
      ) : todo.isDone ? (
        <s className={todoCardText}>{todo.todo}</s>
      ) : (
        <span className={todoCardText}>{todo.todo}</span>
      )}
      <div className="flex ">
        <span
          className={icon}
          onClick={() => {
            if (!editMode && !todo.isDone) {
              setEditMode(!editMode);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span
          className={icon}
          onClick={() => {
            deleteTask(todo.id);
          }}
        >
          <AiFillDelete />
        </span>
        <span
          className={icon}
          onClick={() => {
            handleDone(todo.id);
          }}
        >
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;

const todoCard =
  "flex w-full h-18 items-center justify-between p-5 mt-3  rounded-lg bg-cover bg-[url('./Components/Task/bgimg.jpg')] ";
const todoCardText = "flex-1 p-2 border-none text-left text-2xl overflow-hidden";
const icon = "ml-2 text-2xl cursor-pointer ";
