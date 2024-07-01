import { useTranslation } from "react-i18next";
import "./infocard.css";

interface InfoCardProps {
  component: string;
  buttonLink: string;
}

export default function InfoCard({ component, buttonLink }: InfoCardProps) {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="infoCardContainer">
      <h3>{t("imageSlider." + component + ".title")}</h3>
      <p>{t("imageSlider." + component + ".body")}</p>
      <a href={buttonLink}>{t("imageSlider." + component + ".button")}</a>
    </div>
  );
}
