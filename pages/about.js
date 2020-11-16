import React, { Component } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Layout from "../layouts/page.js";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false,
      isMobile: true,
    };
  }

  componentDidMount() {
    this.setState({ mounted: true });
    this.mobileCheck();
  }

  mobileCheck = () => {
    var check = false;
    (function (a) {
      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
          a
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          a.substr(0, 4)
        )
      )
        check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    this.setState((prevState, props) => {
      if (prevState.isMobile != check) {
        return { isMobile: check };
      }
    });
  };

  render() {
    return (
      <ParallaxProvider>
        <Layout pageTitle="About">
          <header className="head">
            <div className="parallax-container">
              <img
                className="portrait-base"
                src="/static/portrait/portrait-base.jpg"
                alt="Chase portrait"
              />
              <Parallax y={[-100, 70]} disabled={this.state.isMobile}>
                <h1 className={this.state.mounted ? "mounted" : null}>
                  <span>Chase</span>
                </h1>
              </Parallax>
              <img
                className="portrait-top"
                src="/static/portrait/portrait-top.png"
              />
              <Parallax y={[-100, 70]} disabled={this.state.isMobile}>
                <h1 className={this.state.mounted ? "mounted" : null}>
                  <span>Burgess</span>
                </h1>
              </Parallax>
            </div>
          </header>
          <section>
            <article className={this.state.mounted ? "mounted" : null}>
              <header>
                <h2>About</h2>
              </header>
              <main>
                <p>
                  I am a software engineer with a background in project
                  management, based out of Virginia Beach, VA. I love the way art
                  and engineering are intertwined when creating software for the
                  web, and have a particular captivation with React. Impactful
                  results are important to me, and I believe the best path there
                  is through clean code and efficiently managed resources.
                </p>
                <p>
                  When I'm not working on one of my projects I'm most likely:
                </p>
                <ul className="activities">
                  <li>🏄🏼 Surfing (or wishing the waves were better)</li>
                  <li>🍕 Perfecting the art of cooking a frozen pizza</li>
                  <li>🎮 Immersing myself in the world of Destiny</li>
                </ul>
                <p>
                  Stay up to date with what I'm working on by following me on{" "}
                  <a href="https://github.com/TunaSurf">Github</a> and{" "}
                  <a href="https://www.linkedin.com/in/chase-burgess-7a94ab8a/">
                    LinkedIn
                  </a>
                </p>
              </main>
            </article>
          </section>
          <style jsx>{`
            .head {
              height: 600px;
            }
            .parallax-container {
              position: relative;
              height: 100%;
              margin: 0 auto;
              overflow: hidden;
              display: flex;
              justify-content: center;
              align-items: center;
              align-content: center;
              z-index: 1;
            }
            img {
              width: 100%;
              user-select: none;
            }
            .portrait-base {
              position: absolute;
              width: 600px;
              bottom: 0;
              left: 0;
              margin-left: 50%;
              transform: translateX(-60%);
            }
            .portrait-top {
              position: relative;
              bottom: 0;
              height: 600px;
              width: auto;
              margin: 0 -200px;
              z-index: 1;
            }
            h1 {
              position: relative;
              opacity: 0;
              transform: translate3D(0, -60px, 0);
              transition: transform 1200ms 300ms ease,
                opacity 900ms 350ms linear;
            }
            h1,
            h1 span {
              font-family: "Roboto Mono", mono;
              font-size: 96px;
              font-weight: 500;
              line-height: 1.7;
              letter-spacing: 8px;
              color: #f1f1fe;
              text-transform: uppercase;
            }
            h1.mounted {
              opacity: 1;
              transform: translate3D(0, 0, 0);
            }
            section {
              background-color: #f4f4f8;
              padding: 100px 20px;
              display: grid;
              grid-gap: 80px;
            }
            article {
              display: flex;
              justify-content: center;
              transform: translate3D(0, -30px, 0);
              opacity: 0;
              transition: transform 300ms 200ms ease-out,
                opacity 290ms 210ms linear;
            }
            article.mounted {
              transform: translateY(0);
              opacity: 1;
            }
            h2 {
              position: relative;
              display: inline-block;
              width: 150px;
              margin-right: 30px;
              font-weight: 500;
              text-align: right;
            }
            h2:after {
              content: "";
              position: absolute;
              right: 0;
              bottom: 0;
              width: 40px;
              height: 1px;
              background: #20b2aa;
            }
            p,
            li {
              color: rgba(30, 30, 32, 0.8);
            }
            li {
              line-height: 2.1em;
            }
            p,
            ul {
              margin-bottom: 1em;
            }
            main {
              flex-grow: 1;
              max-width: 700px;
            }
            .activities {
              list-style: none;
              margin-left: 0;
              padding-left: 10px;
            }
            a,
            span {
              color: rgba(30, 30, 32, 0.7);
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
            @media screen and (max-width: 1100px) {
              h1,
              h1 span {
                font-size: 80px;
              }
            }
            @media screen and (max-width: 950px) {
              .head {
                height: 400px;
              }
              h1,
              h1 span {
                font-size: 64px;
              }
              .portrait-base {
                width: 400px;
                bottom: 0;
                left: 0;
                margin-left: 50%;
                transform: translateX(-60%);
              }
              .portrait-top {
                height: 400px;
                margin: 0 -130px;
              }
            }
            @media screen and (max-width: 800px) {
              article {
                flex-wrap: wrap;
              }
              article header,
              article main {
                width: 100%;
              }
              article header {
                margin-bottom: 1rem;
              }
              h2 {
                width: auto;
                text-align: left;
              }
              section h2:after {
                left: 0;
                bottom: -0.4rem;
              }
              .links ul {
                margin-top: 30px;
              }
            }
            @media screen and (max-width: 720px) {
              .parallax-container {
                flex-wrap: wrap;
              }
              .portrait-base {
                width: 400px;
                left: auto;
                right: 0;
                margin: 0;
                transform: translateX(0);
              }
              .portrait-top {
                position: absolute;
                right: 0;
                margin: 0;
              }
              h1 {
                width: 100vw;
                transform: translate3D(0, -20px, 0);
              }
              h1 span {
                padding: 0 16px;
                background: #20b2aa;
                color: #1e1e20;
                letter-spacing: 6px;
              }
            }
            @media screen and (max-width: 600px) {
              .portrait-base,
              .portrait-top {
                right: -100px;
              }
            }
            @media screen and (max-width: 500px) {
              .portrait-base,
              .portrait-top {
                right: -125px;
              }
              section {
                padding: 80px 15px;
                grid-gap: 60px;
              }
            }
            @media screen and (max-width: 450px) {
              h1,
              h1 span {
                font-size: 48px;
                letter-spacing: 4px;
              }
            }
          `}</style>
        </Layout>
      </ParallaxProvider>
    );
  }
}

export default About;
