import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components';
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import myPicture from '../images/meee.jpg'
import cmsPic from '../images/cmsdemo.png'
import heroPic from '../images/herodemo.png'
import vmPic from '../images/vmdemo.png'
import restaurantPic from '../images/restaurantjsdemo.png'
import hackathonPic from '../images/ezCheck.png'

class Main extends React.Component {

  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      >

      </div>
    )
    const HoverText = styled.a`
    color: #000;
    :hover {
      color: #ed1212;
      cursor: pointer;
    }
  `
    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          {/* <span className="image main"> */}
          <center>
            <img src={myPicture} alt="profile photo" style={{ width: "300px", alignContent: "center" }} />
          </center>
          {/* </span> */}
          <p style={{ textAlign: "center", fontSize: "18px" }}>
            <br />  Greetings! I'm Shirley, a software engineer from Kearny, NJ. <br />
          I'm drawn to web development through a love of problem-solving, innovating, and creative solutions! <hr />
           After deep self-reflection of working in customer service, I decided to pursue further studies and enroll
            in a coding bootcamp at the Software Guild led by LAGCC TechHire OpenCode program.
       When I'm not in front of a computer, I enjoy drawing, traveling and yoga!

          </p>
          <br />
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}>

          <h2 className="major">Work</h2>
          <span className="image main" >
            <HoverText href="https://sharp-wiles-a65094.netlify.app/">
              <img src={hackathonPic} alt="" />
            </HoverText>
          </span>

          <p>
            A front-end web app where it asks the user for their age and insurance that will generate results. This was a group project that was submitted for the
            2020 ELC virtual hackathon. We were 1 out of 11 finalists which was out of 92 submissions. <br />
            <b>Technologies used:</b> React.js
          </p>


          <span className="image main">
            <a href="https://github.com/shirlz201/TSG-projects/tree/master/bloggg">
              <img src={cmsPic} alt="" />
            </a>
          </span>
          <p>
            A full-stack web app that has login authentication, user and content management
                following CRUD methologies and reads content from database. <br />
            <b>Technologies used:</b> Java, Thymeleaf, MySQL, Spring MVC, Spring Security, HTML, CSS
          </p>
          <span className="image main">
            <a href="https://github.com/MatiasTong/Superhero">
              <img src={heroPic} alt="" />
            </a>
          </span>
          <p>
            A full-stack Spring Boot web app for logging hero and villain sightings following
            CRUD methologies and storing information. <br />
            <b>Technologies used:</b> Java, Thymeleaf, MySQL, Spring MVC, HTML, CSS, JUnit Testing </p>
          <span className="image main">
            <a href="https://github.com/shirlz201/TSG-projects/tree/master/VendingMachineM3">
              <img src={vmPic} alt="" />
            </a>
          </span>
          <p>A dynamic user-interface consuming a REST API. <br /> <b>Technologies used:</b>
                Javascript, AJAX, jQuery, REST APIs, HTML, CSS, Bootstrap</p>
          <span className="image main">
            <a href="https://github.com/shirlz201/shirlz201.github.io">
              <img src={restaurantPic} alt="" />
            </a>
          </span>
          <p>A responsive restaurant website with form validation implemented. <br />
            <b>Technologies used:</b> HTML, CSS, JavaScript and Bootstrap</p>
          {close}
        </article>

        <article
          id="techstack"
          className={`${this.props.article === 'techstack' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Tech Stack</h2>

          <center style={{ backgroundImage: `url(${pic03})` }}>
            <img src="https://img.icons8.com/color/100/000000/java-coffee-cup-logo.png" />
            <img src="https://img.icons8.com/color/100/000000/html-5.png" />
            <img src="https://img.icons8.com/color/100/000000/css3.png" />
            <img src="https://img.icons8.com/color/100/000000/javascript-logo-1.png" />
            <img src="https://img.icons8.com/color/100/000000/bootstrap.png" />
            <img src="https://img.icons8.com/ultraviolet/100/000000/react.png" />
            <img src="https://img.icons8.com/color/100/000000/nodejs.png" />

            <img src="https://img.icons8.com/color/100/000000/mongodb.png" />
            <img src="https://img.icons8.com/wired/100/000000/api-settings.png" />
            <img src="https://img.icons8.com/color/100/000000/spring-logo.png" />
            <img src="https://img.icons8.com/ios-filled/100/000000/mysql-logo.png" />
            <img src="https://img.icons8.com/ios-filled/100/000000/jquery.png" />
            <img src="https://img.icons8.com/color/100/000000/adobe-xd.png" />
            <img src="https://img.icons8.com/color/100/000000/visual-studio-code-2019.png" />         </center>

          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
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

          <ul style={{ textAlign: "center" }}>
            <a href="https://github.com/shirlz201" >
              <img src="https://img.icons8.com/nolan/100/github.png" />
            </a>
            <a href="https://www.linkedin.com/in/shirleylaymesosa/">
              <img src="https://img.icons8.com/nolan/100/linkedin.png" />
            </a>
            <a href="mailto:slaymesosa@gmail.com">
              <img src="https://img.icons8.com/nolan/100/gmail.png" />
            </a>
            <a href="https://twitter.com/shirlz201">
              <img src="https://img.icons8.com/nolan/100/twitter-circled.png" />
            </a>

            <a href="https://drive.google.com/file/d/1FW08fh-RDj63SIcNg1uToupTK-1VYUQG/view?usp=sharing">
              <img src="https://img.icons8.com/nolan/100/submit-resume.png" />
            </a>
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
