import React, { Component } from "react";

class Mainpage extends Component {
  state = {};
  render() {
    return (
      <div id="home" className="page-header main-header" data-parallax="false">
        <div className="circles circle1"></div>
        <div className="circles circle2"></div>
        <div className="circles circle3"></div>
        <div className="circles circle4"></div>

        <div className="circles circle6"></div>
        <div className="circles circle7"></div>
        <center>
          <img className="hero-img" src="/assets/img/hero.png" alt="img" />
        </center>
        <div className="container">
          <div className="row">
            <div className="col-md-8 ml-auto mr-auto">
              <div className="brand text-center">
                <h1 className="main_header_title">GDSC JIIT</h1>
                <h3 className="main_header_subtitle text-center">
                  Google Developer Student Clubs | JIIT Noida
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mainpage;
