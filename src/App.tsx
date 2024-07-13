import "./App.css";
import Header from "./Components/Header/header";
import ImageCarousel from "./Components/ImageSlider/imageslider";
import Footer from "./Components/Footer/footer";

function App() {
  const currentAge = getCurrentAge();

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
      <div className="bodyContainer">
        <div className="textContainer">
          <h2>Hello 👋</h2>
          <h1 style={{ fontSize: "2.5rem" }} className="brandingText">
            I'm Ananya Timalsina,
          </h1>
          <p>
            {determineArticle(currentAge)} {currentAge}-year-old web/app
            developer based in Germany.
          </p>
          <br></br>
          <a href="mailto:developer@ananyatimalsina.com.np">Contact me</a>
        </div>
        <ImageCarousel></ImageCarousel>
      </div>
      <Footer />
    </>
  );
}

export default App;
