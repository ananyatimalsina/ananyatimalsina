import { useTranslation } from "react-i18next";
import "./App.css";
import Header from "./Components/Header/header";
import ImageCarousel from "./Components/ImageCarousel/imagecarousel";
import Footer from "./Components/Footer/footer";
import ToggleButtonLang from "./Components/ToogleButton/togglebuttonlang";

// TODO: Fix layouting for mobile & in general
// TODO: Figure out image sizes
// TODO: Implement Image Carousel

function App() {
  const [t, i18n] = useTranslation("global");
  var currentAge = getCurrentAge();

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

  function determineArticle(currentAge: string) {
    if (currentAge === "11" || currentAge === "18" || currentAge[0] === "8") {
      return "an";
    } else {
      return "a";
    }
  }

  return (
    <>
      <Header />
      <ToggleButtonLang />
      <div className="bodyContainer">
        <div className="textContainer">
          <h2>{t("information.greeting")}</h2>
          <h1 style={{ fontSize: "2.5rem" }} className="brandingText">
            {t("information.introduction", { name: "Ananya Timalsina" })}
          </h1>
          <p>
            {t("information.about", {
              age: currentAge,
              article: determineArticle(currentAge),
            })}
          </p>
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
