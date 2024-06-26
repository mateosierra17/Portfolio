import React from "react";
import { Icon } from "./Icons";
const Socials = () => {
  return (
    <div className="socials">
      <a
        target="_blank"
        href="https://www.linkedin.com/in/mateo-sierra-dev/">
        <Icon iconName="linkedin" />
      </a>
      <a target="_blank" href="https://github.com/mateosierra17">
        <Icon iconName="github" />
      </a>
      <a target="_blank" href="https://t.me/MateoSierraB">
        <Icon iconName="telegram" />
      </a>
      <a target="_blank" href="https://wa.me/573014889182">
        <Icon iconName="whatsapp" />
      </a>
    </div>
  );
};

export default Socials;
