import React from "react";
import Link from "next/link";
const MissionCTA = () => {
  return (
      <Link href={"/our-mission"} className="mission-link-banner">
      <div className="about-mission-cta-wrapper">
        <div className="relative">
          <div className="mission-cta">
            <div className="mission-cta-title">
            <h3>Preserving water resource to make it accessible to all</h3>


            </div>
           
          </div>
        </div>

        <div className="cta-left-mask">
        
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="154"
            height="147"
            fill="none"
          >
            <path
           
              fill="#ffffff"
              fill-rule="evenodd"
              d="M110.768 42.457C110.768 20.153 130.109 0 153.967 0H0v146.011c0-22.304 19.341-40.386 43.2-40.386h40.983c14.682 0 26.585-11.127 26.585-24.853z"
              clip-rule="evenodd"
            />
          </svg>
        </div>

        <div className="cta-fake-btn-right">
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="300"
            height="71"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
            className="scaled-down-svg2"
              fill="#fff"
              fill-rule="evenodd"
              d="M0 181h662.976L565.604 24.944A53 53 0 0 0 520.592 0L126.868.35a53 53 0 0 0-46.874 28.354z"
              clip-rule="evenodd"
            />
             <text x="25%" y="60%" fill="black" font-size="16" font-family="Nunito" > ⬢ Our Mission
             </text>
          </svg>
          </div>
        </div>
      </Link>
   
  );
};

export default MissionCTA;
