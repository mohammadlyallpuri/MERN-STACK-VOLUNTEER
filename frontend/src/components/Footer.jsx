import React from "react";
import { Link } from "react-router-dom";
import { FaTwitterSquare, FaInstagramSquare, FaYoutubeSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src="/logo.png" alt="logo" />
      </div>
      <div>
        <h4>Support</h4>
        <ul>
          <li>New York USA</li>
          <li>crypto@gmail.com</li>
          <li>92 234234234</li>
        </ul>
      </div>
      <div>
        <h4>Quick Links</h4>
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
      </div>
      <div>
        <h4>Follow Us</h4>
        <ul>
          <li>
            <Link to="/">
              <FaTwitterSquare />
              <span>Twitter</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaInstagramSquare />
              <span>Instagram</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaYoutubeSquare />
              <span>Youtube</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaLinkedin />
              <span>LinkedIn</span>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
