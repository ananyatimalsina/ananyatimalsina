import snsbeauty from "../../assets/snsbeauty.png";
import snsbeauty_mobile from "../../assets/snsbeauty_mobile.png";

import litebook from "../../assets/litebook.png";
import litebook_mobile from "../../assets/litebook_mobile.png";

import openrec from "../../assets/openrec.png";
import openrec_mobile from "../../assets/openrec_mobile.png";

import FlipCard from "../FlipCard/flipcard";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "./imageslider.css";
import useIsTouchdevice from "../useIsTouchdevice";

export default function ImageCarousel() {
  const isTouchdevice = useIsTouchdevice();

  function renderPrevArrow(onClickHandler: () => void, hasPrev: boolean) {
    if (isTouchdevice) {
      return null;
    }
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
    if (isTouchdevice) {
      return null;
    }
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
      renderArrowPrev={renderPrevArrow}
      renderArrowNext={renderNextArrow}
    >
      <FlipCard
        img={snsbeauty}
        img_mobile={snsbeauty_mobile}
        component={"SnSBeauty"}
        buttonLink={"https://github.com/ananyatimalsina/SnSBeauty"}
      />
      <FlipCard
        img={litebook}
        img_mobile={litebook_mobile}
        component={"litebook"}
        buttonLink={"https://github.com/ananyatimalsina/litebook"}
      />
      <FlipCard
        img={openrec}
        img_mobile={openrec_mobile}
        component={"openrec"}
        buttonLink={"https://github.com/ananyatimalsina/openrec"}
      />
      <FlipCard
        img={snsbeauty}
        img_mobile={snsbeauty_mobile}
        component={"AsepriteTool"}
        buttonLink={"https://github.com/ananyatimalsina/AsepriteTool"}
      />
    </Carousel>
  );
}
