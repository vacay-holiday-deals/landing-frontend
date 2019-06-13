import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="header--logo">
        <img alt="logo" src="images/logo.png" />
      </div>
      <div className="header--button">
        <a href="https://vacay.co.ke/" className="btn stylebutton">
          More offers
        </a>
      </div>
    </div>
  );
}

export default Header;
