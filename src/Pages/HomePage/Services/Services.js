import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import { css } from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#f63e7b");

  const override = css`
    display: block;
    margin: 20px auto;
  `;

  useEffect(() => {
    fetch("https://fast-taiga-01124.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setServices(data);
      });
    console.log(services);
  }, []);
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
