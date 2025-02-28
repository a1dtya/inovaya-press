import React from "react";
import { MdGroups } from "react-icons/md";
import { FaWater } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="about-project-wrapper ">


      {/* 1st block */}
      <div className="about-project-info">
        <div className="about-projects-icon ">
          <MdGroups />
        </div>
        <div className="about-projects-info ">
          <h2> 13 Projects</h2>
          <p >to improve access to drinking water worldwide</p>
        </div>
      </div>
      {/* 2nd block */}
      <div className="about-project-info">
        <div className="about-projects-icon ">
          
        <FaWater />
        </div>
        <div className="about-projects-info ">
          <h2>29 projects</h2>
          <p>for more sustainable water management</p>
        </div>
      </div>
    
    </div>
  );
};

export default Projects;
 