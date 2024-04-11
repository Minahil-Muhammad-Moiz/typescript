import React, { useRef } from "react";

interface Prop {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (eve: React.FormEvent) => void;
}

const InputField: React.FC<Prop> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className={formClass}
      onSubmit={(e) => {
        props.handleAdd(e);
        inputRef.current?.blur()
      }}
    >
      <input
        ref={inputRef}
        type="input"
        placeholder="Enter a task"
        className={inputClass}
        value={props.todo}
        onChange={(eve) => props.setTodo(eve.target.value)}
      />
      <button className={addBtn} type="submit">
        Add
      </button>
    </form>
  );
};

export default InputField;
const formClass =
  "flex justify-center items-center  relative md:w-[80%] w-[60%]";
const inputClass =
  "w-full rounded-[50px] px-8 py-5 text-2xl border-none transition-all shadow-inner shadow-black focus:outline-none focus:shadow-[0_0_10px_1000px_rgba(0,0,0,0.3)]";
const addBtn =
  "absolute right-0 w-14 h-11 bg-red-400 rounded-full m-3 border-none text-white text-2xl shadow-[0_0_6px_black] hover:bg-red-500  active:scale-[0.8] transition-all";
