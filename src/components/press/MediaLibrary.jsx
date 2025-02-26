import React from "react";
import Link from "next/link";
import { MdPhoto } from "react-icons/md";
import { IoPlayOutline } from "react-icons/io5";
import { RiHexagonLine } from "react-icons/ri";



const MediaLibrary = () => {
  return (
    <div className="press-media-library-wrapper">
      <div>
        <div className="inovaya-title-heading-small center-heading">
          <h2>Media Library</h2>
        </div>
        <div className="press-media-library-content grid grid-cols-1  gap-y-12 gap-x-4 lg:grid-cols-3">

            {/* box-1 */}
          <div className="press-media-library-content-box-wrapper">
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
              <MdPhoto size={35} color="black" />
            </div>

            <div className="press-media-box-title">
              <h3>Photo library</h3>
            </div>
            <div className="press-media-box-content">
              <Link href={"www.youtube.com"}>
                <p>Upload HD photos for your content.</p>
              </Link>
            </div>
          </div>


        {/* box-2 */}
        <div className="press-media-library-content-box-wrapper">
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
              <IoPlayOutline size={35} color="black" />
            </div>

            <div className="press-media-box-title">
              <h3>Photo library</h3>
            </div>
            <div className="press-media-box-content">
              <Link href={"www.youtube.com"}>
                <p>Upload HD photos for your content.</p>
              </Link>
            </div>
          </div>







        {/* box 3 */}

        <div className="press-media-library-content-box-wrapper">
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
              <RiHexagonLine size={35} color="black" />
            </div>

            <div className="press-media-box-title">
              <h3>Photo library</h3>
            </div>
            <div className="press-media-box-content">
              <Link href={"www.youtube.com"}>
                <p>Upload HD photos for your content.</p>
              </Link>
            </div>
          </div>



 






        </div>
      </div>
    </div>
  );
};

export default MediaLibrary;
