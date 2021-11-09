import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import SwiperCore, { Navigation, Pagination } from "swiper/core";
SwiperCore.use([Pagination, Navigation]);

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
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
          1380: {
            slidesPerView: 4,
          },
        }}
      >
        {reviews.map((data) => (
          <SwiperSlide>
            <div>
              <div className="flex">
                <img width="70" src={data.image} alt=""></img>
                <div>
                  <h1 className="text-xl text-ebony font-bold">{data.name}</h1>
                  <h1 className="text-xl text-ebony font-bold"></h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;
