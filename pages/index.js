import React, { Component } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Layout from '../layouts/page.js';
import ProjectList from '../components/ProjectList.js';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false,
      isMobile: true
    }
  }

  componentDidMount() {
    this.setState({ mounted: true });
    this.mobileCheck();
  }

  mobileCheck = () => {
    var check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    this.setState((prevState, props) => {
      if (prevState.isMobile != check) {
        return { isMobile: check };
      }
    });
  };

  render() {
    return(
      <ParallaxProvider>
        <Layout pageTitle="Developer">
          <div className="background"></div>
          <header style={this.state.isMobile ? null : {backgroundAttachment: 'fixed'}}>
            <h1 className={this.state.mounted ? "mounted" : null}>Web<br/>Dev<br/>elo<br/>per</h1>
            <h2 className={this.state.mounted ? "name mounted" : "name"}>Chase Burgess</h2>
            <div className="arrow-container">
              <div>
                <svg viewBox="0 0 22 11" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.4142">
                  <path d="M19.1376.0002h2l-10.569 10.568L-.0004.0002h2l8.569 8.568 8.569-8.568z" fill="#F4F4F8" />
                </svg>
                <svg viewBox="0 0 22 11" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.4142">
                  <path d="M19.1376.0002h2l-10.569 10.568L-.0004.0002h2l8.569 8.568 8.569-8.568z" fill="#F4F4F8" />
                </svg>
              </div>
            </div>
          </header>
          
          <section>
            <div>
              <h2>Projects</h2>
            </div>
            <p>
              Hey! My name is Chase and I am a software engineer and web developer.
              Check out a few of the projects I've completed below and visit me on <a href="https://github.com/TunaSurf">Github</a>
            </p>
          </section>
          <ProjectList mobile={this.state.isMobile} />
          <style jsx>{`
            header {
              position: relative;
              height: 90vh;
              width: 100%;
              background-image: url('/static/feathers-500.jpg');
              background-size: cover;
              background-position: center;
              padding: 0 40px;
              box-sizing: border-box;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
            h1 {
              font-family: "Roboto Mono", mono;
              font-size: 96px;
              font-weight: 500;
              line-height: 0.9;
              letter-spacing: 12px;
              text-transform: uppercase;
              margin-bottom: 10px;
              color: #20b2aa;
              mix-blend-mode: hard-light;
              opacity: 0;
              filter: blur(8px);
              transition: opacity 500ms 300ms linear, filter 500ms 300ms linear;
            }
            h1.mounted {
              opacity: 1;
              filter: blur(0);
            }
            .name {
              font-family: "Roboto Mono", mono;
              font-size: 22px;
              font-weight: 400;
              line-height: 0.8;
              letter-spacing: 2px;
              color: #F4F4F8;
              text-transform: uppercase;
              opacity: 0;
              transform: translate3D(0,20px,0);
              transition: opacity 600ms 500ms, transform 650ms 450ms ease;
            }
            .name.mounted {
              opacity: 1;
              transform: translate3D(0,0,0);
            }
            .arrow-container {
              position: absolute;
              width: 100%;
              bottom: 20px;
              left: 0;
              display: flex;
              justify-content: center;
            }
            .arrow-container div {
              position: relative;
              width: 25px;
            }
            .arrow-container svg {
              position: relative;
              opacity: 0;
              animation: 2000ms arrow ease infinite;
            }
            .arrow-container svg:first-child {
              top: 14px;
              animation-delay: 110ms;
            }
            @keyframes arrow {
              0% {
                opacity: 0;
                transform: translate3D(0,-16px,0);
              }
              40% {
                opacity: 1;
              }
              70% {
                opacity: 1;
              }
              90% {
                opacity: 0;
                transform: translate3D(0,0,0);
              }
            }
            section {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              padding: 100px 40px;
              background-color: #1e1e20;
              box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.2); 
            }
            section h2, section p, section a {
              color: #F4F4F8;
            }
            section h2 {
              position: relative;
              display: inline-block;
              font-size: 1.5rem;
              margin-right: 30px;
            }
            section h2:after {
              content: "";
              position: absolute;
              right: 0;
              bottom: 2px;
              width: 40px;
              height: 1px;
              background: #20b2aa;
            }
            section div, section p {
              max-width: 500px;
            }
            section p {
              font-weight: 300;
              font-style: italic;
            }
            a {
              position: relative;
              font-weight: 300;
              z-index: 1;
            }
            a:after {
              content: "";
              position: absolute;
              left: 0;
              bottom: 0;
              width: 100%;
              height: 1px;
              background: #20b2aa;
              opacity: 0.6;
              z-index: -1;
              transition: 200ms 50ms ease;
            }
            a:hover:after {
              bottom: 40%;
              transform-origin: bottom;
              transform: scaleY(8);
            }
            @media screen and (max-width: 1000px) {
              header {
                padding: 0 20px;
              }
              section {
                padding: 100px 20px;
              }
            }
            @media screen and (max-width: 800px) {
              section div, section p {
                width: 100%;
              }
              section div {
                margin-bottom: 1rem;
              }
              section h2:after {
                left: 0;
                bottom: -.4rem;
              }
            }
            @media screen and (max-width: 550px) {
              section h2 {
                font-size: 1rem;
                font-weight: 500;
              }
            }
            @media screen and (max-width: 500px) {
              section {
                padding: 100px 15px;
              }
            }
            // Background-image sizes for header
            @media only screen and (min-height: 501px) {
              header {
                background-image: url("/static/feathers-720.jpg"); 
              } 
            }
            @media only screen and (min-height: 721px) {
              header {
                background-image: url("/static/feathers-900.jpg"); 
              } 
            }
            @media only screen and (min-height: 901px) {
              header {
                background-image: url("/static/feathers-1080.jpg"); 
              } 
            }
            @media only screen and (min-height: 1081px) {
              header {
                background-image: url("/static/feathers-4k.jpg"); 
              } 
            }
            @media only screen and (-webkit-min-device-pixel-ratio: 2) and (min-height: 320px), only screen and (min--moz-device-pixel-ratio: 2) and (min-height: 320px), only screen and (-o-min-device-pixel-ratio: 2 / 1) and (min-height: 320px), only screen and (min-device-pixel-ratio: 2) and (min-height: 320px), only screen and (-o-min-device-pixel-ratio: 2/1) and (min-height: 320px), only screen and (min-resolution: 192dpi) and (min-height: 320px), only screen and (min-resolution: 2dppx) and (min-height: 320px) {
              header {
                background-image: url("/static/feathers-900.jpg"); 
              } 
            }
            @media only screen and (-webkit-min-device-pixel-ratio: 2) and (min-height: 501px), only screen and (min--moz-device-pixel-ratio: 2) and (min-height: 501px), only screen and (-o-min-device-pixel-ratio: 2 / 1) and (min-height: 501px), only screen and (min-device-pixel-ratio: 2) and (min-height: 501px), only screen and (-o-min-device-pixel-ratio: 2/1) and (min-height: 501px), only screen and (min-resolution: 192dpi) and (min-height: 501px), only screen and (min-resolution: 2dppx) and (min-height: 501px) {
              header {
                background-image: url("/static/feathers-1080.jpg"); 
              } 
            }
            @media only screen and (-webkit-min-device-pixel-ratio: 2) and (min-height: 721px), only screen and (min--moz-device-pixel-ratio: 2) and (min-height: 721px), only screen and (-o-min-device-pixel-ratio: 2 / 1) and (min-height: 721px), only screen and (min-device-pixel-ratio: 2) and (min-height: 721px), only screen and (-o-min-device-pixel-ratio: 2/1) and (min-height: 721px), only screen and (min-resolution: 192dpi) and (min-height: 721px), only screen and (min-resolution: 2dppx) and (min-height: 721px) {
              header {
                background-image: url("/static/feathers-4k.jpg"); 
              } 
            }
          `}</style>
        </Layout>
      </ParallaxProvider>
    )
  }
}

export default Index;