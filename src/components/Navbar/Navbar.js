import React, { Component } from "react";
const log = console.log;

export default class Navbar extends Component {
  render() {
    const logo = "JF";
    const links = ["HOME", "ABOUT", "PORTFOLIO", "BLOG", "CONTACT"];

    return(
      <div className="Navbar">
        <div className="container">
          <nav className="navbar navbar-expand-sm">
            <a className="navbar-brand" href="#">{ logo } </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon">
                <div className="line1 icon"></div>
                <div className="line2 icon"></div>
                <div className="line3 icon"></div>
              </span>
            </button>
            <div className="collapse navbar-collapse justify-content-end">
              <ul className="navbar-nav">
                { 
                  links.map((link, index) => {
                  return <li key={ index.toString() }>{ link }</li>;})
                }          
              </ul>
            </div>
          </nav>        
        </div>
      </div>
    );
  }
}