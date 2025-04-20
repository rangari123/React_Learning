import { useState } from "react";

import React from "react";

function Bgchanger() {
  const [color, setColor] = useState("#646cffaa");
  return (
    <>
      <div
        className="container w-full h-screen text-center py-8"
        style={{ backgroundColor: color }}
        // we are using above style" backgroundColor: color " as refernce to onclick  method
        //so whenever btn is clcik this button setcolor will cahge the color
        // will change
      >
        Changing background Color
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          {/* cloror bar */}
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 rounded-3xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shawdow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>

            <button
              onClick={() => setColor("#61dafbaa")}
              className="outline-none px-4 py-1 rounded-full text-white shawdow-lg"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>

            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shawdow-lg"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>

            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-4 py-1 rounded-full text-white shawdow-lg"
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>

            <button
              onClick={() => setColor("orange")}
              className="outline-none px-4 py-1 rounded-full text-white shawdow-lg"
              style={{ backgroundColor: "orange" }}
            >
              Orange
            </button>

            <button
              onClick={() => setColor("violet")}
              className="outline-none px-4 py-1 rounded-full text-white shawdow-lg"
              style={{ backgroundColor: "violet" }}
            >
              Violet
            </button>

            <button
              onClick={() => setColor("pink")}
              className="outline-none px-4 py-1 rounded-full text-white shawdow-lg"
              style={{ backgroundColor: "pink" }}
            >
              Pink
            </button>

            <button
              onClick={() => setColor("black")}
              className="outline-none px-4 py-1 rounded-full text-white shawdow-lg"
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bgchanger;
