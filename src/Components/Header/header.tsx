import "./header.css";
import ToggleButtonLang from "../ToogleButton/togglebuttonlang";

export default function Header() {
  return (
    <div className="headerContainer">
      <div className="logoContainer">
        <svg
          id="Logo"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 51.7 85.88"
        >
          <g>
            <path
              d="M26.03,84.38c6.46.14,11.14-4.78,14.11-7.91,6.36-6.7,8.3-14.15,9.1-17.41,1.18-4.77,1.05-8.5.79-15.96.2-5.65-3.71-9.7-7.25-11.21-1.19-.56-2.38-.91-11.21-1.32-6.8-.26-14.85-.76-19.52.53-4.98,1.48-7.66,2.54-9.89,9.36-.52,1.81-1.47,5.98.7,15.92,1.11,5.08,1.66,7.62,3.13,10.85,1.43,3.15,5.12,11.29,13.58,15.3,1.84.87,3.77,1.79,6.46,1.85Z"
              style={{
                fill: "#fff",
                stroke: "#000",
                strokeMiterlimit: 10,
                strokeWidth: 3,
              }}
            />
            <path
              className="logoMask"
              d="M28.16,84.38c-.21-2.36-.25-7.35,1.09-9.42-1.61-.65-4.46-.5-6.11-.05,1.21,1.96,1.21,7.24,1.14,9.47h3.88Z"
            />
            <path
              className="logoMask"
              d="M44.82,46.86c-2.06-3.01-21.29-4.37-13.53.68,4.04-2.39,9.22-.76,13.53-.68Z"
            />
            <path
              className="logoMask"
              d="M43.06,51.12c-2.52,3.76-10.2,4.24-11.82-.4,3.28-3.23,8.93-3.45,11.82.4Z"
            />
            <path
              className="logoMask"
              d="M7.57,46.86c2.06-3.01,21.29-4.37,13.53.68-4.04-2.39-9.22-.76-13.53-.68Z"
            />
            <path
              className="logoMask"
              d="M9.34,51.12c2.52,3.76,10.2,4.24,11.82-.4-3.28-3.23-8.93-3.45-11.82.4Z"
            />
            <path
              className="logoMask"
              d="M26.2,68.16c3.89,2.14,10.33.09,13.07-2.72-8.81,3.48-14.09-4.25-13.07,2.72Z"
            />
            <path
              className="logoMask"
              d="M26.17,68.16c-3.89,2.14-10.33.09-13.07-2.72,8.81,3.48,14.09-4.25,13.07,2.72Z"
            />
          </g>
          <path
            className="logoCrown"
            d="M9.38,30.26h33.13c-.32-8.73,5.58-11.08,2.92-23.54-9.85,18.02-13.17,12.7-19.5-2.62-5.79,15.47-10.19,20.64-19.27,2.62-3.6,10.52,2.99,15.44,2.72,23.54Z"
          />
        </svg>
        <h1
          className="brandingText"
          style={{ fontSize: "4rem", alignSelf: "center" }}
        >
          Ananya Timalsina
        </h1>
      </div>
      <ToggleButtonLang />
    </div>
  );
}
