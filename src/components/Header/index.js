import React from "react";
import "./style.css";

function Header() {
  return (
    <div className="header">
      <h1 className="title">
        JS Issue Record
        <p className="sub-title">
          by{" "}
          <a className="link" href="https://github.com/ahmedglez">
            ahmedglez
          </a>
        </p>
      </h1>
    </div>
  );
}

export { Header };
