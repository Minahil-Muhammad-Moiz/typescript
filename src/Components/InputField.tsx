const InputField = () => {
  return (
    <form className="flex justify-center items-center mx-auto relative md:w-[80%] w-[60%]">
        <input type="input" placeholder="Enter a task" className="w-full rounded-[50px] px-8 py-5 text-2xl border-none transition shadow-inner shadow-black focus:outline-none focus:shadow-[0_0_10px_1000px_rgba(0,0,0,0.3)]"/>
        <button className="absolute right-0 w-14 h-11 bg-red-400 rounded-full m-3 border-none text-white text-2xl shadow-[0_0_6px_black] hover:bg-red-500  active:scale-[0.8] transition-all">Add</button>
    </form>
  )
}

export default InputField