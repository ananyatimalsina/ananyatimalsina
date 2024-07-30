import dressbase from "../../assets/dressbase.webp";
import dressbase_mobile from "../../assets/dressbase_mobile.webp";

import snsbeauty from "../../assets/snsbeauty.webp";
import snsbeauty_mobile from "../../assets/snsbeauty_mobile.webp";

import litebook from "../../assets/litebook.webp";
import litebook_mobile from "../../assets/litebook_mobile.webp";

import asepritetool from "../../assets/asepritetool.webp";
import asepritetool_mobile from "../../assets/asepritetool_mobile.webp";

import FlipCard from "../FlipCard/flipcard";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "./imageslider.css";
import usePreloadImages from "../usePreloadImages";
import useIsTouchdevice from "../useIsTouchdevice";

export default function ImageCarousel() {
  const preloadImages = useIsTouchdevice()
    ? [dressbase_mobile, snsbeauty_mobile, litebook_mobile, asepritetool_mobile]
    : [dressbase, snsbeauty, litebook, asepritetool];

  usePreloadImages(preloadImages);

  function renderPrevArrow(onClickHandler: () => void, hasPrev: boolean) {
    return (
      <button
        disabled={hasPrev ? false : true}
        className="carousel-button"
        onClick={onClickHandler}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="24"
          fill="none"
          viewBox="0 0 42 24"
        >
          <path d="M.94 13.06a1.5 1.5 0 0 1 0-2.12l9.545-9.547a1.5 1.5 0 1 1 2.122 2.122L4.12 12l8.486 8.485a1.5 1.5 0 1 1-2.122 2.122L.94 13.06ZM42 13.5H2v-3h40v3Z" />
        </svg>
      </button>
    );
  }

  function renderNextArrow(onClickHandler: () => void, hasNext: boolean) {
    return (
      <button
        disabled={hasNext ? false : true}
        className="carousel-button"
        onClick={onClickHandler}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="24"
          fill="none"
          viewBox="0 0 42 24"
        >
          <path d="M41.06 13.06a1.5 1.5 0 0 0 0-2.12l-9.545-9.547a1.5 1.5 0 1 0-2.122 2.122L37.88 12l-8.486 8.485a1.5 1.5 0 1 0 2.122 2.122l9.546-9.546ZM0 13.5h40v-3H0v3Z" />
        </svg>
      </button>
    );
  }

  return (
    <Carousel
      dynamicHeight={true}
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      swipeable={false}
      infiniteLoop={true}
      renderArrowPrev={renderPrevArrow}
      renderArrowNext={renderNextArrow}
    >
      <FlipCard
        img={dressbase}
        img_mobile={dressbase_mobile}
        title={"Dressbase"}
        body={
          "Dressbase is a fictional SaaS company specializing in AI-powered virtual dressing rooms. Developed for a school project in collaboration with Niklas Wenz, Jonathan Zdebel, Paul Schaut, and Luca Augsten."
        }
        buttonLink={"https://github.com/ananyatimalsina/dressbase"}
      />
      <FlipCard
        img={snsbeauty}
        img_mobile={snsbeauty_mobile}
        title={"SnSBeauty"}
        body={
          "SnSBeauty is an appointment management web app designed for S&S Eyebrows. Built with React on the frontend and Django on the backend, the website is fully responsive and features Twilio for phone number verification."
        }
        buttonLink={"https://github.com/ananyatimalsina/SnSBeauty"}
      />
      <FlipCard
        img={litebook}
        img_mobile={litebook_mobile}
        title={"LiteBook"}
        body={
          "LiteBook is a straightforward app that allows users to sell books online to Momox and Rebuy. Created with Flutter, it uses Hive for data storage and dio for handling web requests."
        }
        buttonLink={"https://github.com/ananyatimalsina/litebook"}
      />
      <FlipCard
        img={asepritetool}
        img_mobile={asepritetool_mobile}
        title={"AsepriteTool"}
        body={
          "AsepriteTool simplifies the process of compiling and updating Aseprite, a popular pixel art tool for creating 2D artwork and animations. As my first and most popular public project, it has garnered over 60 stars on GitHub and approximately 60,000 views on its YouTube video."
        }
        buttonLink={"https://github.com/ananyatimalsina/AsepriteTool"}
      />
    </Carousel>
  );
}
