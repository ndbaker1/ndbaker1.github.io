import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './navbar.css'

class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {  scrollPos: 0  }
  }
  componentDidMount() {
    window.onscroll = () => {
      this.setState({ scrollPos: window.pageYOffset });
    };
  }
  componentWillUnmount() {
    window.onscroll = null;
  }
  render() {
    return (
      <div>
        <header className="navbar">
          <a className="name" href="./">Nicholas Baker</a>
          <div className="right-nav">
            <AnchorLink href="#projects">Projects</AnchorLink>
            <AnchorLink href="#contact">Contact</AnchorLink>
          </div>
        </header>
        <AnchorLink className={"top-link "+(this.state.scrollPos > 100 ? "off-screen" : "")} href="#about"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 6"><path d="M12 6H0l6-6z"/></svg></AnchorLink>
      </div>
    )
  }
}

export default Navbar;