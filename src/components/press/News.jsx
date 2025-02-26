import React from "react";
import Link from "next/link";
import { MdPhoto } from "react-icons/md";
import { GrFormNextLink } from "react-icons/gr";


const News = () => {
  return (
    <div className="press-news-wrapper">
      <div className="press-news">
        <div className="inovaya-title-heading">
          <h2>Our <strong>latest</strong> News </h2>
        </div>
        <div className="press-news-content">
          <div className="press-news-content-box-wrapper ">
           
      


              <div className="news-box-wrapper">

              <div className="press-news-box">
            
            <div className="press-news-right-bottom-mask"></div>
            <div className="press-news-right-bottom-icon">
            <GrFormNextLink/>
            </div>


            </div>
            <div className="press-news-box-content">
              <p> Apr 14, 2024 </p>
              <Link href={"www.youtube.com"}>
                <h3>Launch of our new website: an enhanced user experience</h3>
              </Link>
            </div>

                
              </div>
            
          
              <div className="news-box-wrapper">

              <div className="press-news-box">
            
            <div className="press-news-right-bottom-mask"></div>
            <div className="press-news-right-bottom-icon">
            <GrFormNextLink/>
            </div>


            </div>
            <div className="press-news-box-content">
              <p>Jul 24, 2024 </p>
              <Link href={"www.youtube.com"}>
                <h3>A look back at our summer seminar: a time for sharing and creativity!</h3>
              </Link>
            </div>

                
              </div>



              
              <div className="news-box-wrapper">

              <div className="press-news-box">
            
            <div className="press-news-right-bottom-mask"></div>
            <div className="press-news-right-bottom-icon">
            <GrFormNextLink/>
            </div>


            </div>
            <div className="press-news-box-content">
              <p>Oct 14, 2024 </p>
              <Link href={"www.youtube.com"}>
                <h3>Launch of Odalie, our subsidiary with the SAUR Group</h3>
              </Link>
            </div>

                
              </div>
          
          
          
          </div>





        </div>
      </div>
    </div>
  );
};

export default News;
