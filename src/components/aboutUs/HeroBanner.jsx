import React from "react";
import Image from "next/image";
import ImageLogo from "../../assets/images/logo-inovaya-horizontal.png";
import Link from "next/link";
const HeroBanner = () => {
  return (
    <div className="about-heroBanner-wrapper ">
      {/* Gradient Overlay */}
      <div className="about-heroBanner-overlay"></div>

      {/* Centered Masked SVG */}
      <div className="about-heroBanner-mask-center-wrapper">
        <div className="about-heroBanner-mask-center ">
          <div className="about-heroBanner-mask-center-image image-wrapper ">
            <Image
              width={200}
              height={100}
              alt="image"
              src={ImageLogo}
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="about-heroBanner-content-wrapper ">
        <div className="container">
          <div className="about-heroBanner-content">
            <h2 className="about-heroBanner-title">
              InovaYa, a{" "}
              <strong className="font-italic">committed impact</strong> company
            </h2>
            <div className=" about-heroBanner-btns ">
              <div>
                <Link className="btn-primary" href="/en/blogs/">
                  Our news
                </Link>
              </div>

              <div>
                <Link className="btn-reverse" href="/join/">
                  Join us ❤️
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // </div>
  );
};

export default HeroBanner;
