import React from "react";

import logo from "./logo.svg";
import "./Logo.scss";

const Logo = props => {
  return <img src={logo} alt="Gallery" title="Gallery" className="logo" />;
};

export default Logo;
