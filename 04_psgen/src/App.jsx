import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(7);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // copy to clipboard using -- useRef hook --  case we need  getting refernce from  input and button

  const passwordRef = useRef(null); // intitally we do not have any refrence

  // crate a password generator function using usecallback --
  // re-render jitna ho sake memory me rakho jab jarurat ho use karlo funcion call karke

  const passwordGenerator = useCallback(() => {
    let pass = ""; // present on the input box

    let str = "ABCDEFGHIJKLMONOPQRSTUVWXYSabcdefghijklmnopqrstuvwxyz";
    // state number
    if (numberAllowed) {
      str += "0123456789";
    }
    // state char
    if (charAllowed) {
      str += "!@#$%^&*-_+=[]{}~`";
    }

    // now we are crating the pasword usng random function
    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  // copying using -->useRef
  const copypasswordtoclipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // ------------------------------useEffect hook---------------------
  // agar length ,  ya .. mein change ho toh dubara se fun run karo passwordGenerator wala

  // run karne yaha se
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  // ----->----> react code   ------>---->
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password generator</h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          value={password}
          ref={passwordRef}
        />
        <button
          onClick={copypasswordtoclipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          Copy
        </button>
      </div>

      <div className="flex text-sm gap-x-2">
        {/* range */}
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={7}
            max={100}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length: {length}</label>
        </div>

        {/* checkbox Number*/}

        <div className="flex items-center gap-x-1">
          <input
            defaultChecked={numberAllowed}
            type="checkbox"
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        {/* checkbox Character*/}

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="characterInput"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
