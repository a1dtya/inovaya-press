import React, { useState } from "react";
import Image from "next/image";
import { TfiClose } from "react-icons/tfi";

const words = [
  {
    text: "Creativity",
    description:
      "Encourage innovation and thinking beyond boundaries to achieve excellence.",
    img: "/images/creativity.png",
  },
  {
    text: "Honesty",
    description:
      "Promote transparency in every action we take to preserve the integrity of our team and our working environment.",
    img: "/images/honesty.png",
  },
  {
    text: "Respect",
    description:
      "Treat everyone with dignity and foster a culture of mutual respect.",
    img: "/images/respect.png",
  },
  {
    text: "Humanity",
    description:
      "Value compassion and empathy in all interactions to create a positive impact.",
    img: "/images/humanity.png",
  },
  {
    text: "Team Spirit",
    description:
      "Work together with trust and collaboration to achieve shared goals.",
    img: "/images/teamspirit.png",
  },
];

const AdvantageMarquee = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedWord, setSelectedWord] = useState(null);

  return (
    <div className="about-advantage-wrapper">
      <div className="relative">
        <div className=" wrapper-scrolling-bar whitespace-nowrap overflow-hidden">
          <div
            className="flex w-max"
            style={{
              animationPlayState: isPaused ? "paused" : "running",
              animation: "scroll 18s linear infinite",
            }}
          >
            {[...words, ...words].map((word, index) => (
              <span
                key={index}
                className={`change-text-banner px-6 py-4 cursor-pointer transition-all ${
                  hoveredIndex === index ? "font-bold italic" : ""
                }`}
                onMouseEnter={() => {
                  setIsPaused(true);
                  setHoveredIndex(index);
                }}
                onMouseLeave={() => {
                  setIsPaused(false);
                  setHoveredIndex(null);
                }}
                onClick={() => setSelectedWord(word)}
              >
                {word.text}
              </span>
            ))}
          </div>
        </div>

       
        {selectedWord && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setSelectedWord(null)}
          ></div>
        )}




        
        {selectedWord && (
          <div className={`advantage-pop-up-modal-wrapper  ${selectedWord ? "open" : ""}`}>
            <div className="advantage-pop-up-modal">
             
              {/* Close Button */}
              <div className="advantage-pop-up-modal-close-btn-wrapper">
                <button
                className="relative"
                  onClick={() => setSelectedWord(null)}
                >

                  {/* Hexagon SVG Background */}
                  <svg
                    width="64"
                    height="68"
                    viewBox="0 0 54 58"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.83519 12.6681L20.1797 4.07869C23.8753 1.86581 28.4734 1.80341 32.2277 3.91519L47.8832 12.7214C51.6617 14.8468 54 18.845 54 23.1803V38.173C54 42.4131 51.7624 46.3384 48.1139 48.4987L32.4657 57.7641C28.5923 60.0576 23.7612 59.9904 19.9531 57.5901L5.60131 48.5441C2.11485 46.3465 0 42.5136 0 38.3924V22.9635C0 18.7445 2.21554 14.8355 5.83519 12.6681Z"
                      fill="#A3FFA7"
                    />
                  </svg>

                  {/* Close Icon Overlay */}
                  <TfiClose className="advantage-pop-up-modal-close-btn-icon" />
                </button>
              </div>
              
              
              
              <div className="advantage-pop-up-modal-content">

              <div className="advantage-pop-up-modal-title">
                <h4 className="about-modal-text ">
                  {selectedWord.text}
                </h4>
              </div>

              
              <div className="about-modal-img">
                <Image
                  src={selectedWord.img}
                  width={300}
                  height={302}
                  alt={selectedWord.text}
                />
                <p>
                  "{selectedWord.description}."
                </p>
              </div>


              
              </div>

            
         



            </div>
          </div>
        )}




{/* end modal */}







        <style jsx>{`
          .clip-hexagon {
            clip-path: polygon(
              25% 0%,
              75% 0%,
              100% 50%,
              75% 100%,
              25% 100%,
              0% 50%
            );
          }
        `}</style>
      </div>
    </div>
  );
};

export default AdvantageMarquee;
