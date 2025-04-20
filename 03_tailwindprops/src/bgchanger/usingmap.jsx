import { useState } from "react";

import React from "react";

function Usingmap() {
  const [color, setColor] = useState("#646cffaa");

  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "violet",
    "pink",
    "black",
  ];
  return (
    <>
      <div
        className="container w-full h-screen text-center py-8"
        style={{ backgroundColor: color }}
        // we are using above style" backgroundColor: color " as refernce to onclick  method
        //so whenever btn is clcik this button setcolor will cahge the color
        // will change
      >
        Changing background Color using map mathod
        <div className="fixed flex flex-wrap justify-center bottom-19 inset-x-0 px-2">
          test
          {/* color bar */}
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-gold px-3 rounded-3xl">
            {/*  using map to get the color  */}
            {colors.map((col) => {
              return (
                <button
                  key={col}
                  onClick={() => setColor(col)}
                  className="outline-none px-4 py-1 rounded-full text-white shadow-lg capitalize"
                  style={{ backgroundColor: col }}
                >
                  {col}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Usingmap;
