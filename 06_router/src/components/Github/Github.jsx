import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

import { useLoaderData } from "react-router-dom";

// use fecth api useEffect

function Github() {
  // const [data, setData] = useState({});

  // useEffect(() => {
  //   fetch("https://api.github.com/users/rangari123")
  //     .then((response) => response.json())
  //     .then((data) => setData(data));
  // }, []);
  const data = useLoaderData();
  return (
    <div
      className="bg-gray-800 m-4 text-center  flex flex-col items-center 
     text-4xl text-white p-4 gap-1 h-40px rounded-xl "
    >
      <p className="text-lg">Github Followers: {data.followers}</p>

      <img
        className="rounded-full "
        src={data.avatar_url}
        alt="Git picture"
        width={300}
      />
      <p className="text-lg m-1 w-100 text-center">Bio:{data.bio}</p>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const reponse = await fetch("https://api.github.com/users/rangari123");
  return reponse.json();
};
