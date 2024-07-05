import snsbeauty from "../../assets/snsbeauty.png";
import FlipCard from "../FlipCard/flipcard";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "./imageslider.css";

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

export default function ImageCarousel() {
  return (
    <Carousel
      dynamicHeight={true}
      showThumbs={false}
      showStatus={false}
      showIndicators={true}
      renderArrowPrev={renderPrevArrow}
      renderArrowNext={renderNextArrow}
    >
      <FlipCard
        img={snsbeauty}
        component={"AsepriteTool"}
        buttonLink={"https://github.com/ananyatimalsina/AsepriteTool"}
      />
      <div>
        <img src={snsbeauty} />
      </div>
      <div>
        <img src={snsbeauty} />
      </div>
    </Carousel>
  );
}
