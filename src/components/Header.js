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
          A HYBRID SCHOOL-AGENCY FOR PEOPLE TO TEACH THEMSELVES HOW TO CODE,
          DESIGN AND MASTER SOCIAL MEDIA MANAGEMENT. WE OFFER 6 MONTH TRAINING,
          TWICE A YEAR TO DEVELOP REAL-WORLD EXPERIENCE, PORTFOLIO WORK, AND
          CHARACTER DEVELOPMENT TOWARDS LANDING YOUR NEXT OPPORTUNITY AT A
          STARTUP OR BUSINESS.
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
