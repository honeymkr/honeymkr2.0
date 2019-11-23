import React from "react";
import PropTypes from "prop-types";
import Logo from "./Logo";

const Header = props => (
  <header id="header" style={props.timeout ? { display: "none" } : {}}>
    <div className="logo">
      <Logo />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Honeymkr</h1>
        <p>
          A new kind of agency which exists for people to teach themselves how
          to code, design and provide leadership around a handfull of unique web
          based projects curated on an ongoing basis. We offer three 4 month
          long internships per year for talented &amp; hungry individuals like
          yourself to develop real world experience and portfolio work towards
          landing your next opportunity at a startup or business of your dreams.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle("code");
            }}
          >
            Code
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle("design");
            }}
          >
            Design
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle("leadership");
            }}
          >
            Leadership
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle("apply");
            }}
          >
            Apply
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool
};

export default Header;
