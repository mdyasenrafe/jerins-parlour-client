import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import { css } from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader";
import { Link } from "react-router-dom";
import UseServices from "../../../Hooks/UseServices";

const Services = () => {
  const { color, services, loading } = UseServices();
  const override = css`
    display: block;
    margin: 20px auto;
  `;

  return (
    <section className="container mx-auto py-24">
      <div className="text-center font-bold">
        <h1 className="text-4xl mb-6">
          <span className="text-ebony">Our Awesome</span>
          <span className="text-violet-red"> Services</span>
        </h1>
      </div>
      <div>
        <FadeLoader color={color} loading={loading} css={override} size={150} />
      </div>
      <div
        className=" grid
            sm:grid-cols-2
            md:grid-cols-2
            lg:grid-cols-3
            gap-7
            spac-y-4
          "
      >
        {services.map((data) => (
          <Service key={data._id} data={data}></Service>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to="/services">
          <button className="btn text-white">See More</button>
        </Link>
      </div>
    </section>
  );
};

export default Services;
