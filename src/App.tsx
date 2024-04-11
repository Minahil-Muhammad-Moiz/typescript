import React, { useState } from "react";
import InputField from "./Components/InputField";
import { Todo } from "./model";
import TodoList from "./Components/TodoList";

const App: React.FC =()=> {
  const[todo, setTodo]= useState<string>("")
  const[todos, setTodos] = useState<Todo[]>([])

  const handleAdd= (eve:React.FormEvent)=>{
    eve.preventDefault();
    if(todo){
      setTodos([...todos, {id:Date.now(), todo,  isDone:false} ])
      setTodo('')
    }
  }

  return (
    <div className="w-screen h-screen flex flex-col text-center bg-red-400 items-center ">
      <span className="uppercase text-white text-4xl z-10 my-8 md:my-10">Taskyfies</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;