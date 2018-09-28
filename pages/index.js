import React, { Component } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import Layout from '../layouts/page.js';
import ProjectList from '../components/ProjectList.js';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false
    }
  }

  componentDidMount() {
    this.setState({ mounted: true });
  }

  render() {
    return(
      <ParallaxProvider>
        <Layout pageTitle="Developer">
          <div className="background"></div>
          <header>
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
              <h2>Progress Inbound</h2>
            </div>
            <p>
              As a developer + designer based in Virginia Beach, I work to create
              user-focused experiences through the use of cutting edge technologies.
            </p>
          </section>
          <ProjectList />
          <style jsx>{`
            header {
              position: relative;
              height: 90vh;
              width: 100%;
              background-image: url('./static/feathers-4k.jpg');
              background-size: cover;
              background-position: center;
              background-attachment: fixed;
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
              top: 10px;
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
            section h2, section p {
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
          `}</style>
        </Layout>
      </ParallaxProvider>
    )
  }
}

export default Index;