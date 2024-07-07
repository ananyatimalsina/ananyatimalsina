import { useEffect, useState } from "react";
import "./flipcard.css";
import { useTranslation } from "react-i18next";

interface FlipCardProps {
  img: string;
  img_mobile: string;
  component: string;
  buttonLink: string;
}

export default function FlipCard({
  img,
  img_mobile,
  component,
  buttonLink,
}: FlipCardProps) {
  const [t, i18n] = useTranslation("global");
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
              <h3>{t("imageSlider." + component + ".title")}</h3>
              <p>{t("imageSlider." + component + ".body")}</p>
              <a target="_blank" href={buttonLink}>
                {t("imageSlider.button")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
