import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBitcoin, FaYoutube, FaGithubSquare, FaInstagram } from "react-icons/fa"; // Corrected import statement
import { GiHamburgerMenu } from "react-icons/gi"; // Corrected import statement

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <nav className={show ? "navbar navbar_show" : "navbar"}>
        <div className="logo">
          <img src="/logo.png" alt="logo" />
        </div>
        <div className="links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/donate">Donate</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">
                <FaBitcoin />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaYoutube />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaGithubSquare />
              </Link>
            </li>
          </ul>
        </div>
        <GiHamburgerMenu className="hamburger" onClick={() => setShow(!show)} />
      </nav>
    </>
  );
};

export default Navbar;
