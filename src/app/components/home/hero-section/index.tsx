"use client";

import { getImgPath } from "@/utils/image";
import Image from "next/image";

const Index = () => {
  // ✔ Download PDF File
  const handleDownloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/Danish Khan Resume.pdf";       
    link.download = "Danish Khan Resume.pdf"; 
    link.click();
  };

  return (
    <section className="relative hero-section overflow-hidden">
      <div className="container">
        <div className="lg:flex grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-4 items-center">
          <div className="flex flex-col gap-4 md:gap-7 max-w-2xl hero-content">
            <div>
              <div className="hero-container flex items-center gap-8">
                <h1>I'm Danish</h1>
                <div className="wave">
                  <Image
                    src={getImgPath("/images/home/banner/wave-icon.svg")}
                    alt="wave-icon"
                    width={62}
                    height={62}
                  />
                </div>
              </div>
              <h1>UI/UX Designer</h1>
            </div>

            <p className="text-secondary font-normal max-w-md xl:max-w-xl">
              UI/UX Designer and Front-End Developer with 5+ years of experience creating user-centered digital experiences. Skilled in Figma, React, Angular, HTML, CSS, JavaScript, and Power BI. Focused on accessible, responsive design and data-driven dashboards that deliver intuitive user experiences.
            </p>

            <button
              onClick={handleDownloadPDF}
              className="btn-primary relative overflow-hidden cursor-pointer w-fit py-2 sm:py-3 md:py-5 px-4 sm:px-5 md:px-7 border border-primary rounded-full group"
            >
              <span className="relative z-10 text-xl font-medium text-black group-hover:text-white transition-colors duration-300">
                Download PDF Resume
              </span>
            </button>
          </div>

          <Image
            src={getImgPath("/images/home/banner/banner-img.jpg")}
            alt="banner-img"
            width={635}
            height={900}
            className="block lg:hidden"
          />
        </div>
      </div>

      <div
        className="absolute right-0 top-0 hidden h-auto w-1/2 lg:block 2xl:h-171.5 2xl:w-187.5"
        style={{ top: "56px" }}
      >
        <Image
          src={getImgPath("/images/home/banner/banner-img.jpg")}
          alt="banner-img"
          width={635}
          height={900}
          className="absolute right-0 top-0 z-1"
        />
      </div>
    </section>
  );
};

export default Index;
