import React from "react";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";


const HeroBanner = () => {
  return (
    
    <div className="press-hero-banner-wrapper">

        <div className="relative ">
        <div className="hero-banner-breadcrumbs">
        <p className="flex items-center">
            <Link href={"/"}>
                Home
            </Link>
            <MdKeyboardArrowRight className="press-icons" />
            Press
        </p>
      </div>
      <div className="hero-banner-information">
        <h1>Our <strong> press room </strong></h1>
        <p>
         Find our latest press articles and news, as
          well as our media library at your disposal.
        </p>
      </div>

        </div>
    
    </div>
  );
};

export default HeroBanner;
