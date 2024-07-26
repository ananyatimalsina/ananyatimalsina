import { useEffect, useState } from "react";
import "./flipcard.css";

interface FlipCardProps {
  img: string;
  img_mobile: string;
  title: string;
  body: string;
  buttonLink: string;
}

export default function FlipCard({
  img,
  img_mobile,
  title,
  body,
  buttonLink,
}: FlipCardProps) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fipContainer">
      <div className="card">
        <div className="content">
          <div className="front">
            <img src={windowWidth > 650 ? img : img_mobile} alt="" />
          </div>
          <div className="back">
            <div className="infoCardContainer">
              <h3>{title}</h3>
              <p>{body}</p>
              <a target="_blank" href={buttonLink}>
                More info
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
