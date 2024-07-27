import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import InputButton from "./InputButton";
import AOS from "aos";
import "aos/dist/aos.css";

const Form = () => {
  AOS.init();
  const [todos, setTodos] = useState([]);
  // form submit
  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const data = {
      id: Date.now(),
      name: evt.target.todoValue.value.trim(),
      completed: false,
    };
    if (!data.name) {
      toast.error("Please enter a todo");
    } else if (todos.some((todo) => todo.name === data.name)) {
      toast.error("Todo already exists");
    } else {
      setTodos([...todos, data]);
      evt.target.reset();
      toast.success("Todo added successfully!");
    }
  };

  // delete function
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    toast.success("Todo Deleted!");
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      autoComplete="off"
      className="py-5 px-5 overflow-y-auto rounded-2xl bg-white text-black mt-20 w-[500px] h-[500px]"
    >
      <Toaster position="top-right" reverseOrder={false} />
      <InputButton />
      <div className="flex items-center justify-between mt-4">
        <p
          onClick={() => setTodos(todos)}
          className="bg-green-500 text-white py-2 rounded-lg px-4"
        >
          All {todos.length}
        </p>
        <p className="bg-green-500 text-white py-2 rounded-lg px-4">
          Completed {todos.filter((todo) => todo.completed).length}
        </p>
        <p className="bg-green-500 text-white py-2 rounded-lg px-4">
          Uncompleted {todos.filter((todo) => !todo.completed).length}
        </p>
      </div>

      <div className="flex flex-col gap-3 mt-4">
        {todos.length === 0 ? (
          <p className="text-center text-neutral-500">No todos</p>
        ) : (
          todos.map((todo, index) => (
            <div data-aos="fade-right"
              key={todo.id}
              className="flex text-white px-3 rounded-lg py-3 bg-teal-500 items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <p className="font-bold text-neutral-500">{index + 1}</p>
                <h1 className="font-bold">{todo.name}</h1>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <p className="bg-green-600 rounded-lg px-2 py-1 cursor-pointer">
                  Update
                </p>
                <p
                  className="bg-red-600 rounded-lg px-2 py-1 cursor-pointer"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </form>
  );
};

export default Form;
