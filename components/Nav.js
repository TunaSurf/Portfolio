import React, { Component } from 'react';
import Link from 'next/link';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false,
      path: "",
      scrolled: false
    }
    this.header = React.createRef();
  }

  componentDidMount() {
    let path = window.location.pathname;
    this.setState({ path });
    this.distanceFromTop();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    window.requestAnimationFrame(() => {
      this.distanceFromTop();
    });
  }

  distanceFromTop = () => {
    let scrollAmount = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    let scrolled = scrollAmount >= 50 ? true : false;
    this.setState((prevState, props) => {
      if (prevState.scrolled != scrolled) {
        this.header.current.classList.toggle("scrolled");
        return { scrolled };
      }
    });
  }

  render() {
    return (
      <header ref={this.header}>
        <div className="container">
          <Link href="/">
            <a className="header-left">
              <svg className="logo" version="1" xmlns="http://www.w3.org/2000/svg" width="634.6667" height="784" viewBox="0 0 476 588">
                <path d="M125.7 1c-10 2.6-23.2 11.6-35.8 24.7C48.5 68.8 12.8 157.2 2.4 243c-2.5 20.4-2.6 63.8-.1 80.3C9 368.1 22.5 389.1 47 393.1c17.4 2.8 41.3-5.4 68.3-23.5 36.1-24.1 68.1-55.4 119.1-116.6 41.4-49.7 56.6-67 75.6-86.1 20.5-20.6 24.2-22.2 32-14 18.7 19.6-.1 64.4-56.5 135.2-11.3 14.3-15.2 20.7-14.2 23.3.6 1.4 1.4 1.6 3.9 1.1 7.5-1.6 28.7-14.9 55.1-34.8 20.5-15.4 31-22 49.2-30.8 16.4-8 24.2-10.3 33.4-9.7 8.1.4 12 2.8 15.2 9.5 5.7 11.8 2.2 37.4-9.6 70.8-8.2 22.9-12.5 32.6-23.3 51.5-21.8 38.2-51.1 73.5-101.7 122.4-33.8 32.7-43.9 41.1-56.1 46.8-7.8 3.7-8.8 3.4-12.4-3.8-2.2-4.4-2.5-6-2.4-16.9.1-17.6 4.2-37.8 29.3-143.5 15-63.1 18.6-80.5 25.5-120.5 7.7-44.8 7.3-41.5 4.4-41.5-3.6 0-11.1 5.2-19.1 13.3-9.2 9.2-13.4 15.6-14.2 21.6-2 14.2-7.9 46.6-11 59.7-6.8 29.2-12.8 51.3-43.4 160.4-7.2 25.6-14.8 53.7-16.8 62.5-3.4 14.5-3.7 17.4-3.8 30.5 0 16.3 1.3 22.9 5.3 26 5.6 4.5 15.7 1.2 33.9-11.1 52.6-35.3 113-92.2 161.3-152 37.7-46.6 83.7-129.2 96.5-173.6 8.1-27.8 6.8-47.9-3.5-53.8-2.8-1.6-5.2-2-11.5-1.9-25.9.3-70.4 21-110.1 51.4-5.5 4.2-10.6 8-11.2 8.4-.6.4 4.9-8.1 12.4-18.8 31.8-46 43.6-68.6 48.8-94 2-9.4 2.1-24.5.2-28.9-4.5-11-17.2-12.3-34.2-3.6-29.8 15.3-64.7 50-142.9 142.4-6 7.2-23.1 25.2-38 40.1-43.2 43.3-56.1 52.2-78.3 54-16.6 1.3-31.2-4.3-43.8-17-17.1-17.2-22.5-38.6-21-83.6 2.2-68.8 18.7-132.3 42.5-164 8-10.7 16.8-15.5 24.6-13.6 3.8 1 10.3 7.3 13 12.7 6.3 12.4 9.3 32.7 7.5 51.5-1.1 12.5-2.3 18.5-6.5 33.5-2.5 8.9-2.6 12.9-.1 12.9 1.9 0 20.7-15.3 34.7-28.2 13.8-12.8 15.4-15.2 18.4-28.8 2.3-10.3 3.1-42.5 1.5-57.2-3.4-30.6-13.5-52.9-27.2-59.9C141 .4 131.6-.4 125.7 1z" fill="#F4F4F8" />
              </svg>
              <p>Chase Burgess</p>
            </a>
          </Link>
          <nav>
            <Link href="/">
              <a className={this.state.path == "/" ? "active" : ""}>Projects</a>
            </Link>
            <Link href="/about">
              <a className={this.state.path == "/about" ? "active" : ""}>About</a>
            </Link>
          </nav>
        </div>
        
        <div className="header-background"></div>
        <style jsx>{`
          header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 10;
            pointer-events: none;
          }
          .container {
            position: relative;
            top: 0;
            left: 0;
            width: 100%;
            height: 100px;
            padding: 0 40px;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            align-items: center;
            pointer-events: none;
            transition: 300ms ease;
          }
          header.scrolled .container {
            transform: translate3D(0,-25px,0);
            transition: 300ms ease;
          }
          a {
            pointer-events: auto;
          }
          .header-left {
            display: flex;
            align-items: center;
          }
          .logo {
            width: 30px;
            height: auto;
            margin-right: 10px;
            transition: 300ms ease;
          }
          header.scrolled .logo {
            transform: scale(.8,.8);
            transition: 300ms ease;
          }
          p {
            color: #F4F4F8;
            min-width: 120px; //needed for safari, otherwise name will wrap for some reason
          }
          nav a {
            position: relative;
            padding: 0 5px;
            color: #F4F4F8;
            z-index: 1;
          }
          nav a:first-child {
            margin-right: 20px;
          }
          nav a:after {
            content: "";
            position: absolute;
            left: 0;
            bottom: calc(50% - 1px);
            width: 100%;
            height: 1px;
            background: #20b2aa;
            z-index: -1;
            transform: scaleX(0);
            transform-origin: left;
          }
          nav a.active:after {
            transform: scaleX(1);
          }
          nav a:hover:after {
            transform: scaleX(1);
            transition: 200ms 50ms ease;
          }
          .header-background {
            position: absolute;
            width: 100%;
            height: 50px;
            top: -50px;
            left: 0;
            background-color: #1e1e20;
            box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 3px 10px rgba(0, 0, 0, 0.25);
            opacity: 0;
            z-index: -1;
            pointer-events: auto;
            transition: 300ms ease;
          }
          header.scrolled .header-background {
            transform: translateY(50px);
            opacity: 1;
            transition: 300ms ease;
          }
          @media screen and (max-width: 1000px) {
            .container {
              padding: 0 20px;
            }
          }
          @media screen and (max-width: 550px) {
            .header-left p {
              display: none;
            }
          }
        `}</style>
      </header>
    )
  }
}

export default Nav;