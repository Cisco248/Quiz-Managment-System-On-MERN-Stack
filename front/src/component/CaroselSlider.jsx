import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    img: "./public/insung-yoon-kyQaQ25_NsA-unsplash.jpg",
    name: "John Snow",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    img: "./public/luis-alberto-nKUlPRDqaBE-unsplash.jpg",
    name: "Barrack Obama",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    img: "./public/sally-k-Oc-gVHId6lo-unsplash.jpg",
    name: "Katerin",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    img: "./public/sally-k-Oc-gVHId6lo-unsplash.jpg",
    name: "Katerin",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    img: "./public/sally-k-Oc-gVHId6lo-unsplash.jpg",
    name: "Katerin",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    img: "./public/sally-k-Oc-gVHId6lo-unsplash.jpg",
    name: "Katerin",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    img: "./public/sally-k-Oc-gVHId6lo-unsplash.jpg",
    name: "Katerin",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

export default function CaroselSlider() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 2,
  };

  return (
    <div className="w-3/4 m-auto pb-5">
      <h1 className="m-5 py-2 text-indigo-400 font-bold text-3xl text-start">
        Users
      </h1>
      <div className="p-5 bg-gray-100">
        <Slider {...settings}>
          {data.map((dt, index) => (
            <div
              key={index}
              className="bg-white h-[450px] text-black rounded-xl"
            >
              <div className="h-[235px] rounded-t-xl bg-indigo-400 flex justify-center items-center">
                <img
                  src={dt.img}
                  alt={dt.name}
                  className="h-44 w-44 rounded-full"
                />
              </div>
              <div className="border-2 shadow-lg border-indigo-400 bg-slate-100 flex flex-col justify-center items-center gap-4 py-10 rounded-b-xl">
                <div>
                  <h2 className="text-black text-xl font-semibold">
                    {dt.name}
                  </h2>
                </div>
                <div className="h-[40px] w-[200px]">
                  <p className="px-1 text-center text-black truncate">
                    {dt.details}
                  </p>
                </div>
                <button className="bg-indigo-400 text-white text-lg px-6 rounded-xl">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
