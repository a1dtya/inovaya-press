import React from "react";
import Link from "next/link";
import { MdPhoto } from "react-icons/md";
import { IoPlayOutline } from "react-icons/io5";
import { RiHexagonLine } from "react-icons/ri";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { PiPlant } from "react-icons/pi";
import { LuLeaf } from "react-icons/lu";
import { FaRoute } from "react-icons/fa";



const Certificates = () => {
  return (
    <div className="about-certificats-wrapper">
      <div>
        <div className="inovaya-title-heading center-heading certificate-heading">
        <h2 className="certificate-title ">
          Our <strong>commitments</strong> for quality and environmental
          performance
        </h2>
        </div>
        <div className="about-certificats-content grid grid-cols-1  gap-y-12 gap-x-4 lg:grid-cols-3">

            {/* box-1 */}
          <div className="about-certificats-content-box-wrapper">
            <div className="left-card-mask">
              <svg
                className="small-svg-mask"
                xmlns="http://www.w3.org/2000/svg"
                width="154"
                height="147"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  className="scaled-down-svg"
                  fill="#fff"
                  fill-rule="evenodd"
                  d="M110.768 42.457C110.768 20.153 130.109 0 153.967 0H0v146.011c0-22.304 19.341-40.386 43.2-40.386h40.983c14.682 0 26.585-11.127 26.585-24.853z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>

            <div className="right-card-mask">
              <svg
                className="small-svg-mask"
                xmlns="http://www.w3.org/2000/svg"
                width="154"
                height="147"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  className="scaled-down-svg"
                  fill="#fff"
                  fill-rule="evenodd"
                  d="M110.768 42.457C110.768 20.153 130.109 0 153.967 0H0v146.011c0-22.304 19.341-40.386 43.2-40.386h40.983c14.682 0 26.585-11.127 26.585-24.853z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>

            <div className="right-card-icon ">
              <FaArrowRight size={22} color="black" />
            </div>



            <div className="left-card-icon ">
              <FaRoute size={25} color="black" />
            </div>

            

            <Image
                width={120}
                height={120}
                src={'/images/certificate1.png'}
                alt={`Certificate 1`}
                className="mx-auto object-contain "
                style={{ margin: "auto" }}
              />


          </div>


        {/* box-2 */}
        <div className="about-certificats-content-box-wrapper">
            <div className="left-card-mask">
              <svg
                className="small-svg-mask"
                xmlns="http://www.w3.org/2000/svg"
                width="154"
                height="147"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  className="scaled-down-svg"
                  fill="#fff"
                  fill-rule="evenodd"
                  d="M110.768 42.457C110.768 20.153 130.109 0 153.967 0H0v146.011c0-22.304 19.341-40.386 43.2-40.386h40.983c14.682 0 26.585-11.127 26.585-24.853z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>

            <div className="left-card-icon ">
              <LuLeaf size={25} color="black" />
            </div>

            <div className="right-card-mask">
              <svg
                className="small-svg-mask"
                xmlns="http://www.w3.org/2000/svg"
                width="154"
                height="147"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  className="scaled-down-svg"
                  fill="#fff"
                  fill-rule="evenodd"
                  d="M110.768 42.457C110.768 20.153 130.109 0 153.967 0H0v146.011c0-22.304 19.341-40.386 43.2-40.386h40.983c14.682 0 26.585-11.127 26.585-24.853z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>

            <div className="right-card-icon ">
              <FaArrowRight size={22} color="black" />
            </div>

            <Image
                width={120}
                height={120}
                src={'/images/certificate2.png'}
                alt={`Certificate 2`}
                className="mx-auto object-contain "
                style={{ margin: "auto" }}
              />


          </div>







        {/* box 3 */}

        <div className="about-certificats-content-box-wrapper">
            <div className="left-card-mask">
              <svg
                className="small-svg-mask"
                xmlns="http://www.w3.org/2000/svg"
                width="154"
                height="147"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  className="scaled-down-svg"
                  fill="#fff"
                  fill-rule="evenodd"
                  d="M110.768 42.457C110.768 20.153 130.109 0 153.967 0H0v146.011c0-22.304 19.341-40.386 43.2-40.386h40.983c14.682 0 26.585-11.127 26.585-24.853z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>

            <div className="left-card-icon ">
              <PiPlant size={30} color="black" />
            </div>
            <div className="right-card-mask">
              <svg
                className="small-svg-mask"
                xmlns="http://www.w3.org/2000/svg"
                width="154"
                height="147"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  className="scaled-down-svg"
                  fill="#fff"
                  fill-rule="evenodd"
                  d="M110.768 42.457C110.768 20.153 130.109 0 153.967 0H0v146.011c0-22.304 19.341-40.386 43.2-40.386h40.983c14.682 0 26.585-11.127 26.585-24.853z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>

            <div className="right-card-icon ">
              <FaArrowRight size={22} color="black" />
            </div>

            <Image
                width={120}
                height={120}
                src={'/images/certificate3.png'}
                alt={`Certificate 3`}
                className="mx-auto object-contain "
                style={{ margin: "auto" }}
              />
          </div>



 






        </div>
      </div>
    </div>
  );
};

export default Certificates;
