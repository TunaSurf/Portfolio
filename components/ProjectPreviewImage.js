import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';
import css from 'styled-jsx/css'

class ProjectPreviewImage extends Component {

  render() {  
    //Not a fan that I had to essentially use the same styled-jsx markup 
    //twice to avoid an error in compiling the jsx when using a const.
    //Would much prefer to keep the code DRY

    if (this.props.mobile) {
      return (
        <div className="parallax-container">
          <img src={`${this.props.image}/preview.png`} alt={`${this.props.name} preview`} className="base-img" />
          <style jsx>{`
            * {
              pointer-events: none;
            }
            .parallax-container {
              height: 100%;
              width: 400px;
              position: absolute;
              top: 0;
              right: 5%;
              overflow: hidden;
              display: flex;
              align-items: center;
            }
            img {
              user-select: none;
            }
            .base-img {
              position: absolute;
              top: 0;
              left: 0;
            }
            .base-img {
              width: 100%;
              height: 100%;
            }
            @media screen and (max-width: 750px) {
              .parallax-container {
                right: 0;
              }
            }
            @media screen and (max-width: 600px) {
              .parallax-container {
                width: 300px;
              }
            }
            @media screen and (max-width: 500px) {
              .parallax-container {
                right: -50px;
              }
            }
          `}</style>
        </div>
      )
    } else {
      return (
        <div className="parallax-container">
          <img src={`${this.props.image}/base.png`} alt={`${this.props.name} preview`} className="base-img" />
          <Parallax
            offsetYMax={10}
            offsetYMin={-10}
            disabled={this.props.mobile}
          >
            <img src={`${this.props.image}/top.png`} className="top-img" />
          </Parallax>
          <style jsx>{`
            * {
              pointer-events: none;
            }
            .parallax-container {
              height: 100%;
              width: 400px;
              position: absolute;
              top: 0;
              right: 5%;
              overflow: hidden;
              display: flex;
              align-items: center;
            }
            img {
              user-select: none;
            }
            .base-img {
              position: absolute;
              top: 0;
              left: 0;
            }
            .top-img {
              position: relative;
              top: 0;
              left: 0;
            }
            .base-img, .top-img {
              width: 100%;
              height: 100%;
            }
            @media screen and (max-width: 750px) {
              .parallax-container {
                right: 0;
              }
            }
            @media screen and (max-width: 600px) {
              .parallax-container {
                width: 300px;
              }
            }
            @media screen and (max-width: 500px) {
              .parallax-container {
                right: -50px;
              }
            }
          `}</style>
        </div>
      )
    }
  }
};

export default ProjectPreviewImage;