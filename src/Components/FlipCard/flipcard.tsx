import "./flipcard.css";
import { useTranslation } from "react-i18next";

interface FlipCardProps {
  img: string;
  component: string;
  buttonLink: string;
}

export default function FlipCard({
  img,
  component,
  buttonLink,
}: FlipCardProps) {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="fipContainer">
      <div className="card">
        <div className="content">
          <div className="front">
            <img src={img} alt="" />
          </div>
          <div className="back">
            <div className="infoCardContainer">
              <h3>{t("imageSlider." + component + ".title")}</h3>
              <p>{t("imageSlider." + component + ".body")}</p>
              <a target="_blank" href={buttonLink}>
                {t("imageSlider." + component + ".button")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
