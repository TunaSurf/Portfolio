import React, { Component } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import Layout from '../layouts/page.js'

class About extends Component {
  constructor(props) {
    super(props);
    this.state={
      mounted: false,
      parallaxDisabled: false
    }
  }

  componentDidMount() {
    this.setState({ mounted: true });
  }

  render() {
    return (
      <ParallaxProvider>
        <Layout pageTitle='About'>
          <header className="head">
            <div className="parallax-container">
              <img className="portrait-base" src="./static/portrait/portrait-base.jpg" alt="Chase portrait" />
              <Parallax
                offsetYMax={70}
                offsetYMin={-100}
                slowerScrollRate={true}
                disabled={this.state.parallaxDisabled}
              >
                <h1 className={this.state.mounted ? "mounted" : null}><span>Chase</span></h1>
              </Parallax>
              <img className="portrait-top" src="./static/portrait/portrait-top.png" />
              <Parallax
                offsetYMax={70}
                offsetYMin={-100}
                slowerScrollRate={true}
                disabled={this.state.parallaxDisabled}
              >
                <h1 className={this.state.mounted ? "mounted" : null}><span>Burgess</span></h1>
              </Parallax>
            </div>
          </header>
          <section>
            <article className={this.state.mounted ? "mounted" : null}>
              <header><h2>About</h2></header>
              <main>
                <p>I am a passionate web developer, designer, and project manager based out of Virginia Beach, VA.</p>
                <p>Along with my technical background in engineering, I have a passion for crafting beautifully simple user-oriented experiences. Although I am practiced in all aspects of development, I most enjoy the problem solving and techniques involved with javascript and React development.</p>
                <p>In my free time I'm most likely:</p>
                <ul className="activities">
                  <li>🏄🏼‍ Surfing (or wishing the waves were better)</li>
                  <li>🍕 Perfecting the art of cooking a frozen pizza</li>
                  <li>🎮 Immersing myself in the world of Destiny</li>
                </ul>
              </main>
            </article>
            <article className={this.state.mounted ? "mounted links" : "links"}>
              <header><h2>Find Me On</h2></header>
              <main>
                <ul>
                  <li><a href="https://github.com/TunaSurf">Github</a></li>
                  <li><span>•</span></li>
                  <li><a href="https://codepen.io/TunaSurf/">Codepen</a></li>
                  <li><span>•</span></li>
                  <li><a href="https://www.linkedin.com/in/chase-burgess-7a94ab8a/">LinkedIn</a></li>
                </ul>
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
              transform: translate3D(0,-60px,0);
              transition: transform 1200ms 300ms ease, opacity 900ms 350ms linear;
            }
            h1, h1 span {
              font-family: "Roboto Mono", mono;
              font-size: 96px;
              font-weight: 500;
              line-height: 1.7;
              letter-spacing: 8px;
              color: #F1F1FE;
              text-transform: uppercase;
            }
            h1.mounted {
              opacity: 1;
              transform: translate3D(0,0,0);
            }
            section {
              background-color: #F4F4F8;
              padding: 100px 20px;
              display: grid;
              grid-gap: 80px; 
            }
            article {
              display: flex;
              justify-content: center;
              transform: translate3D(0,-30px,0);
              opacity: 0;
              transition: transform 300ms 200ms ease-out, opacity 290ms 210ms linear;
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
            p, li {
              color: rgba(30,30,32,0.8);
            }
            li {
              margin-bottom: .5em;
            }
            p {
              margin-bottom: 1em;
            }
            main {
              flex-grow: 1;
              max-width: 700px;
            }
            .activities {
              list-style: none;
              margin-left: 0;
              padding-left: 1.6em;
              text-indent: -1.6em;
            }
            .links {
              align-items: center;
            }
            .links ul {
              display: grid;
              grid-auto-flow: column;
              grid-gap: 5px;
              justify-content: center;
            }
            .links li {
              display: inline;
            }
            a, span {
              color: rgba(30,30,32,0.7);
            }
            a {
              position: relative;
              padding: 0 5px;
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
              h1, h1 span {
                font-size: 80px;
              }
            }
            @media screen and (max-width: 950px) {
              .head {
                height: 400px;
              }
              h1, h1 span {
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
              article header, article main {
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
                bottom: -.4rem;
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
                transform: translate3D(0,-20px,0);
              }
              h1 span {
                padding: 0 16px;
                background: #20b2aa;
                color: #1E1E20;
                letter-spacing: 6px;
              }
            }
            @media screen and (max-width: 600px) {
              .portrait-base, .portrait-top {
                right: -100px;
              }
            }
            @media screen and (max-width: 500px) {
              .portrait-base, .portrait-top {
                right: -125px;
              }
              section {
                padding: 80px 15px;
              }
            }
            @media screen and (max-width: 450px) {
              h1, h1 span {
                font-size: 48px;
                letter-spacing: 4px;
              }
            }
          `}</style>
        </Layout>
      </ParallaxProvider>
    )
  }
}

export default About;