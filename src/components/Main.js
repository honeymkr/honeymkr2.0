import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="code"
          className={`${this.props.article === 'code' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Code</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
        
            <p>
              Code is everywhere around us. We live in a world of information that silently connects us all to 
              resources to help us make choices and problem solve. In ancient times, we relied on symbols and 
              cryptic algorythyms which lent meaning, passing along important matters from generation to generation.
            </p>
            <p>
              With the advent of modern computers, information technology has become massively faster and effective. Where it took days, months or years
              to transmit data between human beings in the past, humans now benefit from quantum exchanges handled by servers which act as 
              automated mirrors between millions of sources.
            </p>
            <p>
              Programmers are like modern magicians who engineer our hidden outposts of data in order to make a difference with countless lives.
              Software engineers have a supremely important role to play in our future. They are the ones who make great visions real.
              They are on the forefront of developing interfaces that humans beings can only imagine today.
            </p>
            <h3>Check out our engineers:</h3>

          {close}
        </article>

        <article
          id="design"
          className={`${this.props.article === 'design' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Design</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            The best designers are artists. Design is all about making things easy to 
            understand and use while being powerfully expressive - design imitates nature! Consider how the first airplanes
            took deep inspiration from how birds fly. 
          </p>
          <p>
            Designers are really a lot like scientists who study the behaviour of people. They spend 
            time examining the needs of people and how best to construct solutions within technical 
            limitations.
          </p>
          <p>
            Designers are anthropological agents and adventurers all in one - developing experiences which shape our lives.
            They are responsible for keeping things fresh to the eye, for keeping products cool to use. They are the advocates 
            in the problem solving process so that people benefit completely from new solutions.

          </p>
          <h3>Check out our Designers:</h3>

          {close}
        </article>

        <article
          id="leadership"
          className={`${this.props.article === 'leadership' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Leadership</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            A team and a vision are doomed to be stationary effects without leadership. Imagine for a minute a football team on tv
            playing a game with coaches or guidance - surely its obvious how valuable leadership is to success.
          </p>
          <p>
            Strategy, insight, communication skills fit for a president of any country 
            are the qualities of social media managers, product managers and 
            agile coaches who wake up everyday vibrantly in action to motivate their people.
          </p>
          <p>
            Being the glue between teammates is one of the fundamental talents that leaders bring to the table.
            They put others ahead of their own needs and know when to jump first in order to inspire the best out of others.
            Indeed, the greatest leaders are visionaries in their own right! We know many contemporaries well - Steve Jobs, Elon Musk, and Mark Zuckerberg are a few of our most famous.
             </p>
             <h3>Check out our leaders:</h3>

          {close}
        </article>

        <article
          id="apply"
          className={`${this.props.article === 'apply' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Apply</h2>
          <form method="post" action="#">\
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
              <a href="https://instagram.com/honeymkr" className="icon fa-instagram">
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
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
