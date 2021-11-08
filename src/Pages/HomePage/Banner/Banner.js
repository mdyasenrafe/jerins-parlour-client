import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="container mx-auto py-14 px-6">
      <div className="flex items-center lg:flex-nowrap banner">
        <div className="pr-6">
          <h1 className="banner-title font-bold text-5xl">
            BEAUTY SALON <br /> FOR EVERY WOMEN
          </h1>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui tempore
            quaerat corrupti quisquam sit dolores fugit, sapiente optio at
            maiores.
          </p>
          <button className="btn mt-4 text-white p-3">
            Get an Appointment
          </button>
        </div>
        <div className="banner-img">
          <img
            className="w-3/4"
            src="https://i.ibb.co/2yPRFcg/engin-akyurt-g-m8-EDc4-X6-Q-unsplash-1.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
