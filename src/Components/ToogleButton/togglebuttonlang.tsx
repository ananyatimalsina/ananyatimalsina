import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import "./togglebuttonlang.css";

export default function ToggleButtonLang() {
  const [t, i18n] = useTranslation();

  const buttonEN = useRef<HTMLButtonElement>(null);
  const buttonDE = useRef<HTMLButtonElement>(null);

  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    if (language === "en") {
      buttonEN.current?.classList.add("click");
      buttonDE.current?.classList.remove("click");
    } else if (language === "de") {
      buttonEN.current?.classList.remove("click");
      buttonDE.current?.classList.add("click");
    }
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <div className="toggleButtonLangContainer">
      <button
        ref={buttonEN}
        className="brandingText"
        onClick={() => {
          setLanguage("en");
        }}
      >
        EN
      </button>
      <button
        ref={buttonDE}
        className="brandingText"
        onClick={() => {
          setLanguage("de");
        }}
      >
        DE
      </button>
    </div>
  );
}
