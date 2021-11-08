import React from "react";
import { Link } from "react-router-dom";

const NotMatch = () => {
  return (
    <div>
      <img
        className="w-full"
        src="https://i.ibb.co/99BSJjC/404-Error-Page-not-Found-with-people-connecting-a-plug-rafiki-1.png"
        alt=""
      />
      <div className="text-center pb-5">
        <Link to="/home">
          <button className="btn text-white">Go To home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotMatch;
