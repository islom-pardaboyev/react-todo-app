import React, {useState} from "react";

const Todosstatus = () => {
  const [todos, setTodos] = useState([]);
  return (
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
  );
};

export default Todosstatus;
