import React from "react";

const Header = () => {
  const imgStyle = {
    height: "40px",
  };
  return (
    <div>
      <nav className="pr-5 d-flex justify-content-center bg-light border-rounded">
        <a className="nav-link" href="/home">
          Home
        </a>
        <a className="nav-link" href="/generatedPlayer">
          Generated Player
        </a>
        <a className="nav-link" href="/contact">
          Contact us
        </a>
      </nav>
    </div>
  );
};

export default Header;
