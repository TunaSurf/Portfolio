import React, { Component } from 'react';
import ProjectPreviewImage from './ProjectPreviewImage';

//Could probably split this up into 2 more components within - Preview and Details

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailsHeight: 0,
      mounted: false
    }
  }

  componentDidMount() {
    //get rendered height of project details
    this.setState({ detailsHeight: this.details.offsetHeight });
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  setProjectActive = (e) => {
    e.target.parentNode.classList.toggle('active');
  }

  closeProject = (e) => {
    //li is four parents up from the button, so use closest instead of parentNode
    e.target.closest('li').classList.remove('active');
  }

  //function to get new height of project details on page resize
  handleResize = () => {
    window.requestAnimationFrame(() => {
      this.setState({ detailsHeight: this.details.offsetHeight });
    });
  }

  render() {
    const projectColor = this.props.color;
    let detailsHeight = this.state.detailsHeight;
    
    return (
      <li>
        <div className="project-preview" onClick={this.setProjectActive} >
          <ProjectPreviewImage 
            name={this.props.name}
            image={this.props.image}
            mobile={this.props.mobile}
          />
          <div className="darken"></div>
          <header>
            <h2>{this.props.name}</h2>
            <svg className="arrow" viewBox="0 0 22 11" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.4142">
              <path d="M19.1376.0002h2l-10.569 10.568L-.0004.0002h2l8.569 8.568 8.569-8.568z" fill="#F4F4F8" />
            </svg>
          </header>
        </div>
        <section className="project-details-container">
          <div className="project-details" ref={element => this.details = element}>
            <div className="details-left">
              <h3>{this.props.name}</h3>
              <ul>
                {this.props.tools.map((tool, i) => (
                  <li key={i}><i className={`devicon-${tool}-plain`} title={tool}></i></li>
                ))}
              </ul>
              <ul>
                {this.props.link && (<li><a href={this.props.link}>View Site</a></li>
                )}
                {this.props.link && (<li><span>•</span></li>)}
                <li><a href={this.props.source}>View Source Code</a></li>
              </ul>
            </div>
            <div className="details-right">
              {this.props.description.split('\\n').map((line,i) => <p key={i}>{line}</p>)}
            </div>
            <div className="close-container" onClick={this.closeProject}><button>x</button></div>
          </div>
        </section>
        <style jsx>{`
          li {
            position: relative;
            z-index: 1;
          }
          .project-preview {
            height: 400px;
            position: relative;
            background-color: ${projectColor};
            cursor: pointer;
            transition: filter 200ms 50ms ease;
          }
          .project-preview > * {
            pointer-events: none;
          }
          .darken {
            position: absolute;
            width: 100%;
            height: 100%;
            background: #1E1E20;
            opacity: 0.15;
            transition: opacity 150ms 30ms linear;
          }
          .project-preview:hover .darken {
            opacity: 0.1;
          }
          .active .darken, .active .project-preview:hover .darken {
            opacity: 0;
          }
          header {
            position: absolute;
            top: 30%;
            left: 40px;
            display: flex;
            align-items: center;
          }
          h2 {
            color: #F4F4F8;
            font-size: 3rem;
            margin-right: 15px;
            text-shadow: 0 1px 3px rgba(30,30,32,0.25);
          }
          .arrow {
            transform: rotate(-90deg);
            height: 1.5rem;
            width: 1.5rem;
            min-width: 1.5rem;
            opacity: 0.75;
            transition: 200ms ease;
            filter: drop-shadow(0 1px 2px rgba(30,30,32,0.25));
          }
          .active .arrow {
            transform: rotate(0);
          }
          .project-details-container {
            height: 0;
            background-color: #F4F4F8;
            width: 100%;
            box-shadow: inset 0 12px 12px -12px rgba(0,0,0,0.3), inset 0 5px 5px -5px rgba(0,0,0,0.25), inset 0 -12px 12px -12px rgba(0,0,0,0.3), inset 0 -5px 5px -5px rgba(0,0,0,0.25);
            overflow: hidden;
            transform: translate3d(0,0,0);
            transition: height 200ms cubic-bezier(.17,.67,.16,.99);
          }
          .active .project-details-container {
            height: ${detailsHeight}px;
          }
          .project-details {
            width: 100%;
            padding: 100px 40px;
            box-sizing: border-box;
            display: grid;
            grid-template-columns: 250px 1fr;
            grid-column-gap: 40px;
            transform: translateY(-30px);
            opacity: 0;
            transition: opacity 199ms linear, transform 1ms 199ms linear;
          }
          .active .project-details {
            transform: translateY(0);
            opacity: 1;
            transition: transform 200ms ease-out, opacity 190ms 10ms linear;
          }
          .details-left {
            display: grid;
            align-content: start;
          }
          h3 {
            font-weight: 500;
          }
          ul {
            display: grid;
            grid-auto-flow: column;
            grid-gap: 5px;
            justify-content: start;
          }
          i {
            font-size: .8rem;
            color: rgba(30,30,32,0.8);
          }
          ul:last-child {
            margin-top: .5em;
          }
          a, span {
            color: rgba(30,30,32,0.7);
          }
          a {
            position: relative;
            font-weight: 300;
            padding: 0 5px;
            z-index: 1;
          }
          a:after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 1px;
            background: ${projectColor};
            opacity: 0.6;
            z-index: -1;
            transition: 200ms 50ms ease;
          }
          a:hover:after {
            bottom: 40%;
            transform-origin: bottom;
            transform: scaleY(8);
          }
          .details-right {
            max-width: 700px;
          }
          p {
            color: rgba(30,30,32,0.8);
            margin-bottom: 1em;
          }
          p:last-child {
            margin-bottom: 0;
          }
          .close-container {
            grid-column-end: -1;
            grid-row-start: span -1;
            justify-self: end;
            margin-top: 24px;
            padding-right: 20px;
          }
          button {
            border: none;
            border-radius: 50%;
            background: rgba(60,60,65,0.7);
            color: #F1F1F8;
            width: 30px;
            height: 30px;
            font-family: "Roboto Mono", mono;
            font-size: 16px;
            padding: 0 0 5px 0;
            margin: 0;
            text-align: center;
            -webkit-appearance: button;
            cursor: pointer;
            box-shadow: 0 3px 4px -1px rgba(0, 0, 0, 0.25), 0 3px 7px rgba(0, 0, 0, 0.2);
            transition: background 200ms 30ms linear;
          }
          button:hover {
            background: rgba(60,60,65,0.9);
          }
          button:focus {
            outline: none;
          }
          @media screen and (max-width: 1000px) {
            header {
              left: 20px;
            }
            h2 {
              font-size: 2.5rem;
            }
            .project-details {
              padding: 100px 20px;
            }
          }
          @media screen and (max-width: 900px) {
            .project-details {
              grid-template-columns: auto;
            }
          }
          @media screen and (max-width: 750px) {
            h2 {
              font-size: 2rem;
              margin-right: 10px;
            }
            .parallax-container {
              right: 0;
            }
            .arrow {
              width: 1.2rem;
              min-width: 1.2rem;
            }
          }
          @media screen and (max-width: 600px) {
            .project-preview {
              height: 300px;
            }
            h2 {
              font-size: 1.5rem;
            }
            .parallax-container {
              width: 300px;
            }
            .arrow {
              width: 1rem;
              min-width: 1rem;
            }
            .project-details {
              padding: 80px 20px;
            }
          }
          @media screen and (max-width: 500px) {
            header {
              left: 15px;
            }
            .parallax-container {
              right: -50px;
            }
            .project-details {
              padding: 80px 15px;
            }
          }
        `}</style>
      </li>
    )
  }
};

export default Project;