import React from "react";
import { Parallax, withController } from "react-scroll-parallax";

function ProjectPreviewImage(props) {
  return props.mobile ? (
    <MobilePreview {...props} />
  ) : (
    <ParallaxPreviewControlled {...props} />
  );
}

function MobilePreview(props) {
  return (
    <div className="parallax-container">
      <img
        src={`${props.image}/preview.png`}
        alt={`${props.name} preview`}
        className="base-img"
      />
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
  );
}

function ParallaxPreview(props) {
  const handleLoad = () => {
    // updates cached values after image dimensions have loaded
    props.parallaxController.update();
  };

  return (
    <div className="parallax-container">
      <img
        src={`${props.image}/base.png`}
        alt={`${props.name} preview`}
        className="base-img"
      />
      <Parallax y={[10, -10]}>
        <img
          src={`${props.image}/top.png`}
          className="top-img"
          onLoad={handleLoad}
        />
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
        .base-img,
        .top-img {
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
  );
}

const ParallaxPreviewControlled = withController(ParallaxPreview);

export default ProjectPreviewImage;
