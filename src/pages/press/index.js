import React from "react";
import HeroBanner from "@/components/press/HeroBanner";
import MediaLibrary from "@/components/press/MediaLibrary";
import ContactCTA from "@/components/press/ContactCTA";
import News from "@/components/press/News";


const index = () => {
  return (
    <div className="press-page-wrapper">
      <section className="press-hero-banner-section-wrapper  ">
        <div className="container">
          <HeroBanner />
        </div>
      </section>

      <section className="press-media-library-section-wrapper">
        <div className="container">
            <MediaLibrary/>
        </div>
      </section>


    <section className="press-contact-cta-section-wrapper">
        <div className="container">
            <ContactCTA/>
        </div>
        
    </section>



    <section className="press-news-section-wrapper">
        <div className="container">
            <News/>
        </div>
      </section>



    </div>
  );
};

export default index;
