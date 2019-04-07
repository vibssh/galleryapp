import React from "react";
import Logo from "../Logo/Logo";

import "./Header.scss";

const Header = props => {
  return (
    <header>
      <div className="container">
        <div className="col-2">
          <Logo />
        </div>
      </div>
    </header>
  );
};

export default Header;
