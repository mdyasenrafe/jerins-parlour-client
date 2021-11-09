import React from "react";
import { Link } from "react-router-dom";

const Service = (props) => {
  const { name, image, description, price, _id } = props.data;
  console.log(props.data);
  return (
    <div className="shadow-lg rounded-2xl p-5 text-center mt-5">
      <div className="py-6">
        <img className="mx-auto" src={image} alt="" />
      </div>
      <h1 className="text-2xl title my-3 font-bold text-ebony">{name}</h1>
      <h1 className="text-3xl text-violet-red">${price}</h1>
      <p className="mb-4">{description}</p>
      <Link to={`/${_id}/palace-order`}>
        <button className="btn text-white">Palce Order</button>
      </Link>
    </div>
  );
};

export default Service;
