import React from "react";
import { Link } from "react-router-dom";

function navbar() {
  return (
    <>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link to={"/"} className="nav-link active" aria-current="page" >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/form">
            Submit your country
          </a>
        </li>

      </ul>
    </>
  );
}

export default navbar;
