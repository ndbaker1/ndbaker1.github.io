import React from 'react';
import Fade from 'react-reveal/Fade';
import './about.css';

// images for buttons
import Octocat from '../../img/octocat.png';
import resumeIcon from '../../img/resume-icon.png';

// assets
import Resume from '../../assets/Nicholas Baker Resume.pdf';

class About extends React.Component {
  render() {
    return (
      <div id="about">
        <Fade down delay={500}>
          <div className="self-info-box">
            <h2>About Me</h2>
            <p>
              <i>Pursuing a Computer Science Degree at the University of Texas at Dallas</i>
            </p>
            <h2>Skills / Interests</h2>
            <p>
              Full-Stack & Desktop Development<br/>
              Machine Learning & Automation<br/>
              Cloud Development<br/>
            </p>
            <div className="info-link-box">
              <a className="info-link" href="https://github.com/ndbaker1" target="_blank" rel="noopener noreferrer"><img src={Octocat} alt="github"/></a>
              <a className="info-link" href={Resume} target="_blank" rel="noopener noreferrer"><img src={resumeIcon} alt="resume"/></a>
            </div>
          </div>
        </Fade>
      </div>
    )
  }
}

export default About;