import React from "react";
import Image from "next/image";

const Csr = () => {
  return (
    <div className="about-csr-wrapper">
      {/* left Section -  Image */}
      <div className="about-csr-right-image">
        <div className="about-csr-image-wrapper">
          <Image
            width={504}
            height={369}
            src="/images/csr.jpg"
            alt="csr"
            className="about-csr-image"
          />
          {/* The SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="113"
            height="116"
            fill="none"
            className="about-csr-icon"
          >
            <path
              fill="#ffffff"
              fill-rule="evenodd"
              d="M0 0c17.51 0 31.705 16.01 31.705 33.73v30.44c0 10.905 8.735 19.745 19.51 19.745h30.08C98.805 83.915 113 98.28 113 116V0zm87.943 2.575 18.219 10.904A12 12 0 0 1 112 23.776v19.682a12 12 0 0 1-5.604 10.153L88.17 65.094a12 12 0 0 1-12.508.174L55.888 53.566A12 12 0 0 1 50 43.239V23.993a12 12 0 0 1 6.12-10.46L75.9 2.412a12 12 0 0 1 12.043.163"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/* right Section - Info */}
      <div className="about-csr-left-info">
        <div className="inovaya-title-heading">
          <h2>
            Our CSR policy <strong> CSR</strong>
          </h2>
        </div>

        <p>
          Aware of our key role as a responsible player, {" "}
          <strong>
            we are committed to reducing our water footprint and that of our
            customers, and to facilitating access to drinking water for all,
          </strong>
          worldwide. While promoting sobriety and efficiency, our team is doing
          its utmost to become a benchmark in sustainable and optimized water
          treatment for small and medium-sized volumes.
        </p>
        <p>
          Furthermore, as an ESUS,{" "}
          <strong>
            InovaYa places social and environmental impact at the heart of its
            activity.{" "}
          </strong>{" "}
          Inclusion and diversity are also an integral part of our HR approach
          and our DNA. They encourage us to constantly question ourselves and to
          innovate through our different talents.{" "}
        </p>
      </div>
    </div>
  );
};

export default Csr;
