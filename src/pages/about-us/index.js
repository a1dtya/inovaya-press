import React from "react";
import Allies from "@/components/aboutUs/Allies";
import AdvantageMarquee from "@/components/aboutUs/AdvantageMarquee";
import MissionCTA from "@/components/aboutUs/MissonCTA";
import DnaCTA from "@/components/aboutUs/DnaCTA";
import HeroBannerAbout from "@/components/aboutUs/HeroBanner";
import Projects from "@/components/aboutUs/Projects";
import Commitment from "@/components/aboutUs/Commitments";
import Csr from "@/components/aboutUs/Csr";
import Certificates from "@/components/aboutUs/Certificates";
import Team from "@/components/aboutUs/Team";
import History from "@/components/aboutUs/History";

const index = () => {
  return (
    <div className="about-us-page-wrapper">
      <section className="about-heroBanner-section-wrapper">
        <HeroBannerAbout />
      </section>

      <section className="advantage-marquee-section-wrapper">
        <AdvantageMarquee />
      </section>

      <section className="about-mission-cta-section-wrapper">
        <div className="container">
          <MissionCTA />
        </div>
      </section>

      <section className="about-projects-section-wrapper">
        <div className="container">
          <Projects />
        </div>

        <section className="about-commitments-section-wrapper">
          <div className="container">
            <Commitment />
          </div>
        </section>
      </section>

      <section className="about-mission-cta-section-wrapper">
        <div className="container">
          <DnaCTA />
        </div>
      </section>

      <section className="about-commitments-section-wrapper">
        <div className="container">
          <Csr />
        </div>
      </section>

      <section className="about-certificate-section-wrapper">
        <div className="container">
          <Certificates />
        </div>
      </section>

    <section className="about-history-section-wrapper">
            <History/>
    </section>


      <section className="about-team-section-wrapper">
        <div className="container">
          <Team />
        </div>
      </section>

      <section className="about-allies-section-wrapper">
        <div className="container">
          <Allies />
        </div>
      </section>
    </div>
  );
};

export default index;
