import React from "react";
import "./App.css";
import Form from "./components/Form";


function App() {
  return (
    <>
      <div className="flex flex-col items-center min-h-screen">
        <div className="fixed top-0 -z-10 left-0 w-screen h-screen">
          <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        </div>

        <h1
          data-aos="fade-right"
          className="text-white font-bold text-4xl mt-[2%]"
        >
          👋 Welcome Todo
        </h1>

        <Form />
      </div>
    </>
  );
}

export default App;
