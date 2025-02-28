import React from "react";
import Image from "next/image";

const images = [
  "/images/allies2.png",
  "/images/allies3.png",
  "/images/allies4.jpg",
  "/images/allies5.jpg",
  "/images/allies6.png",
  "/images/allies7.png",
  "/images/allies8.png",
  "/images/allies9.png",
  "/images/allies10.png",
  "/images/allies11.png",
  "/images/allies12.png",
  "/images/allies1.jpg",
  "/images/allies13.png",
  "/images/allies14.png",
  "/images/allies15.jpg",
  "/images/allies16.jpg",
  "/images/allies17.png",
  "/images/allies4.jpg",
  "/images/allies5.jpg",
  "/images/allies6.png",
  "/images/allies7.png",
  "/images/allies8.png",
  "/images/allies9.png",
  "/images/allies10.png",
  "/images/allies11.png",
];

const Allies = () => {
  return (
    <>
      <div className="about-allies-wrapper">
        <div>
          <div className="about-allies-title">
            <div className="inovaya-title-heading center-heading">
              <h2>
                The &nbsp;<strong>solid allies</strong> &nbsp;of our
                adventure
              </h2>
            </div>
          </div>

          <div className="about-allies-content-wrapper">
            <div className="about-allies-content">
              {images.map((src, index) => (
                <div key={index} className="about-allies-grid-box">
                  <Image
                    width={100}
                    height={100}
                    src={src}
                    alt={`Allies ${index + 1}`}
                    className="about-allies-image"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Allies;
