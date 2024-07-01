import { useTranslation } from "react-i18next";
import "./App.css";
import Header from "./Components/Header/header";
import ImageCarousel from "./Components/ImageCarousel/imagecarousel";
import Footer from "./Components/Footer/footer";
import ToggleButtonLang from "./Components/ToogleButton/togglebuttonlang";

function App() {
  const [t, i18n] = useTranslation("global");

  function getCurrentAge() {
    const today = new Date();
    const birthDate = new Date("2009-02-06");
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age.toString();
  }

  return (
    <>
      <Header />
      <ToggleButtonLang />
      <div className="bodyContainer">
        <div className="textContainer">
          <h2>{t("information.greeting")}</h2>
          <h1 style={{ fontSize: "2.5rem" }} className="brandingText">
            {t("information.introduction")}
          </h1>
          <p>{t("information.about", { age: getCurrentAge() })}</p>
          <br></br>
          <a href="mailto:developer@ananyatimalsina.com.np">
            {t("information.button")}
          </a>
        </div>
        <ImageCarousel></ImageCarousel>
      </div>
      <Footer />
    </>
  );
}

export default App;
