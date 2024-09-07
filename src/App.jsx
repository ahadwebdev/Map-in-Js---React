import "./App.css";
import React from "react";
import { userdata } from "./data/userdata";

function App() {
  return (
    <div className="flex flex-wrap gap-5 items-center w-full justify-center">
      {userdata.map((user) => (
        <div className="bg-slate-300 px-10 py-10 w-[30%]">
          <h1 className="font-bold text-3xl text-center">{user.title}</h1>
          <p className="text-xl text-center">{user.paragraph}</p>
          <div className="flex justify-center">
            <button className="bg-red-600 px-3 py-2 rounded-lg mt-3">
              {user.button}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
