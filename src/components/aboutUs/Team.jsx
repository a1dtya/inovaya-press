import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FiHexagon } from "react-icons/fi";
import { LuIceCreamCone } from "react-icons/lu";

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [visibleMembers, setVisibleMembers] = useState(9);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/team.json")
      .then((response) => response.json())
      .then((data) => {
        setTeamMembers(data.teamMembers);
        setFilteredMembers(data.teamMembers);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching team data:", error);
        setLoading(false);
      });
  }, []);

  const filterMembers = (filter) => {
    setSelectedFilter(filter);
    if (filter === "all") {
      setFilteredMembers(teamMembers);
    } else {
      setFilteredMembers(
        teamMembers.filter((member) =>
          member.position.toLowerCase().includes(filter)
        )
      );
    }
  };

  const loadMoreMembers = () => {
    setVisibleMembers((prev) => prev + 9);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="about-team-wrapper">
      {/* Filter Section */}
      <div className="about-team-filter">
        <div className="about-team-filter-list">
          {[
            { label: "All Members", value: "all" },
            { label: "Director", value: "director" },
            { label: "Chief Executive Officer", value: "ceo" },
            { label: "Manager", value: "manager" },
            { label: "Head of Department", value: "hod" },
            { label: "Executive Manager", value: "executive" },
            { label: "Executive Assistant", value: "assistant" },
          ].map(({ label, value }) => (
            <button
              key={value}
              className={`about-team-filter-btn ${
                selectedFilter === value ? "about-team-selected" : ""
              }`}
              onClick={() => filterMembers(value)}
            >
              {selectedFilter === value && <FiHexagon className="about-team-mr-5" />}{" "}
              {label}
            </button>
          ))}
        </div>
        <button className="btn-primary mt-5">Join Us</button>
      </div>

      {/* Team Members Section */}
      <div className="about-team-members">
        <div className="about-team-members-grid">
          {filteredMembers.slice(0, visibleMembers).map((member, index) => (
            <div
              key={index}
            
              className={`about-team-member-card ${index >= visibleMembers ? 'hidden' : ''}`}
              style={{ backgroundImage: `url(${member.image})` }}
            >
              <div className="about-team-overlay">
                <div className="about-team-info">
                  <h3>{member.name}</h3>
                  <p>{member.position}</p>
                  <div className="about-team-social-links">
                    <Link href={member.linkedin} passHref>
                      <span className="about-team-social-link">
                        <FaLinkedin />
                      </span>
                    </Link>
                    <Link href={`mailto:${member.email}`} passHref>
                      <span className="about-team-social-link">
                        <MdOutlineEmail />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="about-team-hover-icons">
                <LuIceCreamCone className="about-team-ice-cream-icon" />
                <Image

                    fill={true}
                  src="data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' width='70' height='65' fill='none' preserveAspectRatio='none'><path fill='%23fff' fill-rule='evenodd' d='M49.645 46.763C60.34 46.763 70 54.928 70 65V24C70 10.745 59.255 0 46 0H0c10.693 0 19.362 8.165 19.362 18.237V35.54c0 6.198 5.334 11.223 11.915 11.223z' clip-rule='evenodd'/></svg>"
                  alt="Corner SVG"
                  className="about-team-corner-svg"
                />
              </div>
              <div className="about-team-hover-icons2">
              <LuIceCreamCone style={{width:"50px", height:'40px'}} />

              </div>
            </div>
          ))}
        </div>

        {filteredMembers.length > visibleMembers && (
          <div className="about-team-load-more-container">
           
           <div className="about-team-load-more-container-btn">
           <button className=" btn-primary " onClick={loadMoreMembers}>
            
              Show More
            </button>


            


           </div>
          
            <div className="about-team-visible-count">
              {visibleMembers} of {filteredMembers.length}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Team;
