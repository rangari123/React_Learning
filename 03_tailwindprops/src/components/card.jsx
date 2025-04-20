import React from "react";

function Card({
  username = "defaultval",
  butn = "Default Click",
  //   infoname = "Default Name",
  //   age = NaN,
  infoname,
  age,
  greetfun,
}) {
  //console.log(infoname, age);
  //   console.log(info.name);
  return (
    <>
      <div className="max-w-xs p-6  mt-2 rounded-md shadow-md bg-black">
        <img
          src="https://images.pexels.com/photos/31656429/pexels-photo-31656429.jpeg?w=200&h=200&fit=crop&dpr=2"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <p className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {username}
          </p>
          <button className="text-xl font-semibold tracking-wide">
            {butn}
          </button>
        </div>
        {/* ✅ Show name if present */}
        {infoname && !age && (
          <p className="text-yellow-300">Hi my name is {infoname}</p>
        )}
        {/* not name and age is given  */}
        {!infoname && !age && (
          <p className="text-yellow-300">
            {" "}
            {greetfun()}provide your name and age
          </p>
        )}

        {/* ✅ Show full info if both props present */}
        {infoname && age && (
          <p className="text-yellow-300">
            Hi my name is {infoname} and my age is {age}
          </p>
        )}
      </div>
    </>
  );
}

export default Card;
