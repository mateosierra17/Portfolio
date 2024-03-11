import React from "react";

const Header = () => {
  return (
    <header>
      <div className="top-section">
          <h1>Mateo Sierra</h1>
          <h3>web developer, shopify & more</h3>
      </div>
      <nav className="main-navigation">
        <ul>
          <li>
            <a href="">ABOUT</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">CONTACT</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;