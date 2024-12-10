import React, { useState } from "react";

function App() {
  const [colorsNum, setColorsNum] = useState(0);

  function handleCLick() {
    setColorsNum((value) => (value + 1) % 3);
  }
  return (
    <div>
      <div className="container mx-auto flex gap-10 justify-center bg-slate-400 p-10 items-center">
        <div className="border  flex flex-col gap-2 w-48 h-60 p-3">
          <div
            className={`${
              colorsNum == 0 ? "bg-red-500" : "bg-transparent"
            } w-full h-full rounded-lg flex items-center justify-center`}
          >
            red
          </div>
          <div
            className={`${
              colorsNum == 1 ? "bg-yellow-500" : "bg-transparent"
            } w-full h-full rounded-lg flex items-center justify-center`}
          >
            yellow
          </div>
          <div
            className={`${
              colorsNum == 2 ? "bg-green-500" : "bg-transparent"
            } w-full h-full rounded-lg flex items-center justify-center`}
          >
            green
          </div>
        </div>
        <button
          onClick={handleCLick}
          className="w-[100px] h-[40px] bg-slate-500 text-white hover:bg-slate-600 rounded-md"
        >
          Button
        </button>
      </div>
    </div>
  );
}

export default App;
