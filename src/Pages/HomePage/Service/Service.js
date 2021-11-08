import React from "react";

const Service = (props) => {
  const { name, image, description, price } = props.data;

  return (
    <div className="shadow-lg rounded-2xl p-5 text-center">
      <div className="py-6">
        <img className="mx-auto" src={image} alt="" />
      </div>
      <h1 className="text-2xl title my-3 font-bold text-ebony">{name}</h1>
      <h1 className="text-3xl text-violet-red">${price}</h1>
      <p className="mb-4">{description}</p>
      <button className="btn text-white">Palce Order</button>
    </div>
  );
};

export default Service;
