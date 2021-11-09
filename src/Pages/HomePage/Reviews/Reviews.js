import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Rating from "react-rating";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./Reviews.css";

import SwiperCore, { Navigation, Pagination } from "swiper/core";
SwiperCore.use([Pagination, Navigation]);

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://fast-taiga-01124.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="container mx-auto pb-24">
      <Swiper
        slidesPerView={"auto"}
        loop={true}
        slidesPerGroup={3}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        spaceBetween={20}
        className="mySwiper"
        breakpoints={{
          360: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
        }}
      >
        {reviews.map((data) => (
          <SwiperSlide>
            <div className="h-full shadow-lg p-4 cursor-pointor rounded-2xl">
              <div className="flex items-center justify-evenly">
                <img width="70" src={data.image} alt=""></img>
                <div>
                  <h1 className="text-xl text-ebony font-bold">{data.name}</h1>
                  <h1 className="text-base text-ebony font-bold">
                    {data.role}
                  </h1>
                </div>
              </div>
              <p className="py-5" style={{ color: "#707070" }}>
                {data.description}
              </p>
              <Rating
                className="text-yellow-500"
                initialRating={data.star}
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                readonly
              ></Rating>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;
