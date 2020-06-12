import React from 'react';
import Fade from 'react-reveal/Fade';

// icons for buttons
import Octocat from '../img/octocat.png';
import resumeIcon from '../img/resume-icon.png';
// assets
import Resume from '../assets/Nicholas Baker Resume.pdf';

class About extends React.Component {
  render() {
    return (
      <div id="about">
        <div className="split about-left">
          <Fade left delay={500}>
            {/* profile picture - temporary cat picture*/}
            <img src="http://placekitten.com/800/800" alt="self" className="self-image" />
          </Fade>
        </div>
        <div className="about-divider"></div>
        <div className="split about-right">
          <Fade right delay={500}>
            <div className="self-info-box">
              <h2>About Me</h2>
              <p>
                <i>Pursuing a Computer Science Degree at the University of Texas at Dallas</i><br/><br/>
                Whether it's by working on a current project or finding inspiration for my next,
                I'm a programmer who's always exploring all sorts of topics and discovering interesting ways to apply them!
              </p>
              <h2>Primary Skills / Interests</h2>
              <p>
                
                Full-Stack & Desktop Development<br/>
                Machine Learning & Signal Processing<br/>
                with tools like <code>C++, Python, JavaScript, HTML, CSS, ReactJS, Java</code> and more!
              </p>
              <div className="info-link-box">
                <a className="info-link" href="https://github.com/ndbaker1" target="_blank" rel="noopener noreferrer"><img src={Octocat} alt="github" width="64px"/></a>
                <a className="info-link" href={Resume} target="_blank" rel="noopener noreferrer"><img src={resumeIcon} alt="resume" width="64px"/></a>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    )
  }
}

export default About;