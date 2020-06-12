import React from 'react';
import Fade from 'react-reveal/Fade';

import Octocat from '../img/octocat.png'

function Project(props) {
  return(
    <Fade left={props.side === 'left'} right={props.side === 'right'}>
      <div className="project"
      style={{
        backgroundImage: 'url('+props.backgroundImage+')',
      }}>
        <div className="blur">
          <div>{props.icons.map((icon) => <img className="project-icon" src={icon} alt={String(icon)}></img>)}</div>
          <h1>{props.title}</h1>
          <div className="project-desc">
            <p>{props.description}</p>
          </div>
          <div className="github-link-box">
            <a className="github-link" href={props.link} target="_blank" rel="noopener noreferrer"><img src={Octocat} alt="github" width="64px"/></a>
          </div>
        </div>
      </div>  
    </Fade>
    
  );
}

// ICONS
// icon credit goes to their respective domains and creators
let pythonLogo = 'http://icons.iconarchive.com/icons/papirus-team/papirus-apps/128/python-icon.png';
let javascriptLogo = 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png';
let javaLogo = 'https://image.flaticon.com/icons/svg/226/226777.svg';// "Icon made by Freepik from www.flaticon.com"
let htmlLogo = 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png';
let discordLogo = 'https://discord.com/assets/f8389ca1a741a115313bede9ac02e2c0.svg';

let NewsUnchainedImage = 'https://user-images.githubusercontent.com/48701178/83984359-60f23d80-a8fa-11ea-889a-022f43b7a8a3.png';
let discordpyBackground = 'https://discordpy.readthedocs.io/en/latest/_images/snake.png';
let wavAnalyzerImage = 'https://user-images.githubusercontent.com/48701178/73523177-e2c3de80-43cf-11ea-828b-7dfa3168991e.png';
let javaNNImage = 'https://user-images.githubusercontent.com/48701178/83982798-128b7180-a8ef-11ea-9a0f-3babf5b56e39.png';

class Projects extends React.Component {
  render() {
    return (
      <div id="projects">
        <Fade bottom>
          <div className="section-header">
            Projects
            <p className="separator-bar"></p>
          </div>
        </Fade>
        <div className="projects-container">
          <Project
            side="left"
            title="WAV Analyzer/Visualizer"
            description="An Application that visualizes frequencies from audio files using Fourier Transforms"
            icons={[pythonLogo]}
            link="https://github.com/ndbaker1/WAV-analyzer"
            backgroundImage={wavAnalyzerImage}
            />
          <Project
            side="right"
            title={"HackUTD VI: News Unchained"}
            description="A Chrome extension created for HackUTDVI which censors subjective/bias text on a webpage"
            icons={[javascriptLogo]}
            link="https://github.com/ndbaker1/NewsUnchained"
            backgroundImage={NewsUnchainedImage}/>
          <Project
           side="left"
            title="Discord Local Media Bot"
            description="A Discord Bot setup which can stream audio from local files into a voice channel"
            icons={[discordLogo, pythonLogo]}
            link="https://github.com/ndbaker1/discord-bot"
            backgroundImage={discordpyBackground}/>
          <Project
            side="right"
            title="Neural Network Simulations"
            description="Neural Network examples coded from scratch in order to build a better understanding of their structures and algorithms"
            icons={[javaLogo, pythonLogo]}
            link="https://github.com/ndbaker1/NeuralNets"
            backgroundImage={javaNNImage}/>
        </div>
      </div>
    );
  }
}

export default Projects;