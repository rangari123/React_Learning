import React from "react";
import { useParams } from "react-router-dom";

//http://localhost:5173/user/avishkar
// this is what we get using useParmas
function User() {
  const { userid } = useParams();
  return (
    <div className="text-white bg-gray-800 height-400 text-4xl text-center p-5  ">
      User:{userid}
    </div>
  );
}

export default User;
