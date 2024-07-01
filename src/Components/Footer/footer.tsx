import { IoLogoGithub, IoLogoYoutube } from "react-icons/io";

import "./footer.css";

export default function Footer() {
  return (
    <div className="footerContainer">
      <a target="_blank" href="https://github.com/ananyatimalsina">
        <IoLogoGithub />
      </a>
      <a
        target="_blank"
        href="https://www.youtube.com/channel/UCwEbrM0YFUlP9ah1iFXYpSw"
      >
        <IoLogoYoutube />
      </a>
    </div>
  );
}
