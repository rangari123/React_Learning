import { useState } from "react";
import "./index.css"; // or App.css depending on where you added Tailwind
import Card from "./components/card";

import Bgchanger from "./bgchanger/bgchanger";
import Usingmap from "./bgchanger/usingmap";

import "./App.css";

function App() {
  // let infoobj = {
  //   name: "Avishkar",
  //   age: 23,
  //   greet: function () {
  //     console.log("Nice to meet you ");
  //   },
  // };
  return (
    <>
      {/* <h1 className=" mb-2.5 text-4xl font-bold text-pink-600 bg-green-400">
        Tailwind is working!
      </h1> */}
      {/* Card with only username */}
      {/* <Card username="Avishkar" infoname={infoobj.name} /> */}
      {/* Card with full details */}
      {/* <Card butn="Click me" infoname={infoobj.name} age={infoobj.age} /> */}
      {/* <Card greetfun={infoobj.greet} /> */}
      <Bgchanger />
      {/* <Usingmap /> */}
    </>
  );
}

export default App;
