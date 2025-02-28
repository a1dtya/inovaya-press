"use client";

import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import Swiper from "swiper";
import "swiper/css";

const History = () => {
  const [data, setData] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    fetch("/data/history.json")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  useEffect(() => {
    if (data && !swiperRef.current) {
      swiperRef.current = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        on: {
          slideChange: (swiper) => {
            setActiveSlide(swiper.activeIndex);
          },
        },
      });
    }
  }, [data]);

  const goToPrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  if (!data) return <p>Loading...</p>;

  return (
    <>
      <div className="about-history-wrapper">
        <div className="inovaya-title-heading center-heading">
          <h2>Our History</h2>
        </div>

        <div className="about-history-nav-btns-wrapper">
          {/* Navigation Buttons */}
          <button onClick={goToPrevSlide} className="about-history-nav-btns ">
            ←
          </button>

          {/*timeline-wrapper */}
          <div className=" flex-1 mx-4 relative px-[100px]">
            {/* timeline-line */}
            <div className="about-history-timeline-line ">
              <div
                  //timeline-line-dots
                className="about-history-timeline-line-dots"
                style={{
                  width: `${(activeSlide / (data.slides.length - 1)) * 100}%`,
                  transition: "width 0.3s ease",
                }}
              ></div>
              {data.slides.map((_, index) => (
                <div
                  key={index}
                  //   about-history-timeline-active-slide
                  className={`about-history-timeline-active-slide w-4 h-4 rounded-full absolute top-[-16px] transform -translate-x-1/2 ${
                    index === activeSlide ? " " : " "
                  }`}
                  style={{
                    left: `${(index / (data.slides.length - 1)) * 100}% `,
                    top: "-8px",
                  }}
                >
                  {/* about-history-timeline-hexagon */}
                  <svg viewBox="0 0 100 100" className=" about-history-timeline-hexagon">
                    <polygon
                      points="50,0 100,25 100,75 50,100 0,75 0,25"
                      fill={index === activeSlide ? "#000" : "#51aed1"}
                    />
                  </svg>
                </div>
              ))}
            </div>
          </div>

          <button onClick={goToNextSlide} className="about-history-nav-btns ">
            →
          </button>
        </div>

        {/* Slides */}
        <div className="swiper mySwiper mt-8">
          <div className="swiper-wrapper p-6">
            {data.slides.map((slide, index) => (
              <div
                key={index}
                className="swiper-slide about-history-info shadow"
              >
                <h2>
                  {slide.h2}
                </h2>
                <h3>{slide.h3}</h3>
                <p >{slide.p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(History), { ssr: false });
