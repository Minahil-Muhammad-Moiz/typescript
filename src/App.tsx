import { useState } from "react";
import InputField from "./Components/InputField";

const App: React.FC =()=> {
  const[todo, setTodo]= useState<string>("")

  return (
    <div className="w-screen h-screen flex flex-col text-center bg-red-400">
      <span className="uppercase text-white text-4xl z-10 my-8 md:my-10">Taskyfies</span>
      <InputField todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
