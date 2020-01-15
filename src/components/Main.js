import PropTypes from "prop-types";
import React from "react";
import pic01 from "../images/pic01.jpg";
import pic02 from "../images/pic02.jpg";
import pic03 from "../images/pic03.jpg";

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle();
        }}
      ></div>
    );

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: "flex" } : { display: "none" }}
      >
        <article
          id="code"
          className={`${this.props.article === "code" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Code</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>

          <p>
            STOP WORKING ON TUTORIALS ON YOUR OWN! START COLLABORATING WITH
            OTHER DEVELOPERS AND DESIGNERS TO MAKE WIREFRAMES COME TO LIFE.
          </p>
          <p>
            YOU WILL LEARN MORE BY ASKING QUESTIONS FROM REAL PEOPLE AND
            MASTERING WHAT YOU DO KNOW BY SHARING WITH OTHERS IN A TEAM SETTING.
          </p>
          <p>
            BEING A DEVELOPER IS MORE THAN BEING A CODER, TOO. HOW YOU DEAL WITH
            WORKING OUT BUGS, PROBLEM-SOLVING FOR CLIENT NEEDS WHILE KEEPING
            YOUR COOL IS IMPORTANT. BEING SOMEWHAT OF A SOCIAL BUTTERFLY DOESN'T
            HURT EITHER. NO ONE WANTS TO WORK WITH A 'KNOW-IT-ALL' JERK.
          </p>
          <p>
            DISCOVER AT HONEYMKR HOW TO BE THE ULTIMATE TECH COLLABORATOR AND
            FULL STACK DEVELOPER.
          </p>
          <h3>Check out our engineers:</h3>

          {close}
        </article>

        <article
          id="design"
          className={`${this.props.article === "design" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Design</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            SKETCHING SOLUTIONS ON YOUR OWN HAS ITS LIMITATIONS LIKE HAVING
            GREAT IDEAS BUT NEVER REALLY GOING ANYWHERE WITH THEM.
          </p>
          <p>
            Designers are really a lot like scientists who study the behaviour
            of people. They spend time examining the needs of people and how
            best to construct solutions within technical limitations.
          </p>
          <p>
            WHY NOT PUT YOUR TALENTS INTO PRACTICE ON REAL-WORLD PROJECTS -
            CONDUCTING CUSTOMER RESEARCH, WORKING WITH PEOPLE TO TEST AND REFINE
            THE USER EXPERIENCE, AND INTERFACE WITH DEVELOPERS TO MAKE THE BEST
            POSSIBLE WEBSITE OR MOBILE APP?
          </p>
          <p>
            APPLY FOR A SPOT ON OUR TEAM TO TAKE YOUR TRAINING TO THE NEXT LEVEL
            WHILE DEVELOPING THE SHOP THAT HIRING MANAGERS ARE LOOKING FOR.
          </p>
          <h3>Check out our Designers:</h3>

          {close}
        </article>

        <article
          id="leadership"
          className={`${this.props.article === "leadership" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Leadership</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            VISION AND STORYTELLING ARE YOUR STRENGTHS. YOU LIKE TO LEAD THE
            CONVERSATION AND ENJOY CULTIVATING ENGAGEMENT WITH THE COMMUNITY
            ONLINE AND IN-PERSON.
          </p>
          <p>
            EACH ONE OF HONEYMKR'S INTERNAL PROJECTS THAT FOLKS WORK ON HERE
            NEED A LEADER TO KEEP THINGS ON THE RIGHT TRACK.
          </p>
          <p>
            ARE YOU WILLING TO STICK YOUR NECK OUT FOR OTHERS AND PUSH A TEAM TO
            PEAK PERFORMANCE? STARTUPS AND BUSINESSES ARE HUNGRY FOR PEOPLE LIKE
            THIS.
          </p>
          <p>
            APPLY NOW, LET'S TALK ABOUT YOU PRACTICING LEADERSHIP AT HONEYMKR!
          </p>
          <h3>Check out our leaders:</h3>

          {close}
        </article>

        <article
          id="apply"
          className={`${this.props.article === "apply" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Apply</h2>
          <form method="post" action="#">
            \
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://fb.me/honeymkr" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/honeymkr"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    );
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired
};

export default Main;
