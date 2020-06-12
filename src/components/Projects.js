import React from 'react';
import Fade from 'react-reveal/Fade';

// LOGOS
// Logo credit goes to their respective creators
import pythonLogo from '../img/Python-logo.png';
import javascriptLogo from '../img/JavaScript-logo.png';
import javaLogo from '../img/Java-logo.svg';// "Icon made by Freepik from www.flaticon.com"
import htmlLogo from '../img/HTML5-logo.png';
import discordLogo from '../img/Discord-logo.svg';
import Octocat from '../img/octocat.png';

// Background images
import NewsUnchainedImage from '../img/NewsUnchainedImage.png';
import discordpyBackground from '../img/DiscordpyImage.png';
import wavAnalyzerImage from '../img/WavAnalyzerImage.png';
import javaNNImage from '../img/JavaNeuralNetworkSimulationImage.png';


function Project(props) {
  return(
    <Fade left={props.side === 'left'} right={props.side === 'right'}>
      <div className="project"
      style={{
        backgroundImage: 'url('+props.backgroundImage+')',
      }}>
        <div className="blur">
          <div>{props.logos.map((logo) => <img className="project-icon" src={logo} alt={String(logo)}></img>)}</div>
          <h1>{props.title}</h1>
          <div className="project-desc">
            <p>{props.description}</p>
          </div>
          <div className="github-link-box">
            <a className="github-link" href={props.link} target="_blank" rel="noopener noreferrer">
              <img src={Octocat} alt="github"/>
            </a>
          </div>
        </div>
      </div>  
    </Fade>
  );
}


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
            logos={[pythonLogo]}
            link="https://github.com/ndbaker1/WAV-analyzer"
            backgroundImage={wavAnalyzerImage}
            />
          <Project
            side="right"
            title={"HackUTD VI: News Unchained"}
            description="A Chrome extension created for HackUTDVI which censors subjective/bias text on a webpage"
            logos={[javascriptLogo]}
            link="https://github.com/ndbaker1/NewsUnchained"
            backgroundImage={NewsUnchainedImage}/>
          <Project
           side="left"
            title="Discord Local Media Bot"
            description="A Discord Bot setup which can stream audio from local files into a voice channel"
            logos={[discordLogo, pythonLogo]}
            link="https://github.com/ndbaker1/discord-bot"
            backgroundImage={discordpyBackground}/>
          <Project
            side="right"
            title="Neural Network Simulations"
            description="Neural Network examples coded from scratch in order to build a better understanding of their structures and algorithms"
            logos={[javaLogo, pythonLogo]}
            link="https://github.com/ndbaker1/NeuralNets"
            backgroundImage={javaNNImage}/>
        </div>
      </div>
    );
  }
}

export default Projects;