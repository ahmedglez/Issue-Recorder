import React from "react";
import "./style.css";

function Header() {
  return (
    <div className="header">
      <h1 className="title">
        JS Issue Record
        <a className="sub-title">
          by{" "}
          <a className="link" href="https://github.com/ahmedglez">
            ahmedglez
          </a>
        </a>
      </h1>
    </div>
  );
}

export { Header };
