import React from "react";

const InputButton = () => {
  return (
    <div className="flex items-center gap-3">
      <input
        className="w-[72%] px-3 py-2 border-2 outline-none border-black rounded-lg"
        placeholder="Add your todo"
        name="todoValue"
        type="text"
      />
      <button class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br w-[27%] h-full font-medium rounded-lg text-sm px-5 py-3 text-center ">
        Add
      </button>
    </div>
  );
};

export default InputButton;
