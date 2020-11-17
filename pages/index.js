import React, { useEffect, useRef, useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Link from 'next/link';

import Layout from "../layouts/page.js";
import ProjectList from "../components/ProjectList.js";
import { useDeviceDetect } from "../utilities/index.js";

function Index() {
  const [mounted, setMounted] = useState(false);
  const isMobile = useDeviceDetect();

  useEffect(() => {
    setMounted(true);
  }, [])

  return (
    <ParallaxProvider>
      <Layout pageTitle="Developer">
        <div className="background"></div>
        <header
          style={isMobile ? null : { backgroundAttachment: "fixed" }}
        >
          <h1 className={mounted ? "mounted" : null}>
            Web
            <br />
            Dev
            <br />
            elo
            <br />
            per
          </h1>
          <h2 className={mounted ? "name mounted" : "name"}>
            Chase Burgess
          </h2>
          <div className="arrow-container">
            <Link href="#projects">
            <div>
              <svg
                viewBox="0 0 22 11"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="1.4142"
              >
                <path
                  d="M19.1376.0002h2l-10.569 10.568L-.0004.0002h2l8.569 8.568 8.569-8.568z"
                  fill="#F4F4F8"
                />
              </svg>
              <svg
                viewBox="0 0 22 11"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="1.4142"
              >
                <path
                  d="M19.1376.0002h2l-10.569 10.568L-.0004.0002h2l8.569 8.568 8.569-8.568z"
                  fill="#F4F4F8"
                />
              </svg>
            </div>
            </Link>
          </div>
        </header>

        <section id="projects">
          <div>
            <h2>Projects</h2>
          </div>
          <p>
            Hey! My name is Chase and I am a software engineer and web
            developer. Check out a few of the projects I've completed below and
            visit me on <a href="https://github.com/TunaSurf">Github</a>
          </p>
        </section>
        <ProjectList mobile={isMobile} />
        <style jsx>{`
          header {
            position: relative;
            height: 90vh;
            width: 100%;
            background-image: url("/static/feathers-500.jpg");
            background-size: cover;
            background-position: center;
            padding: 0 40px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            user-select: none;
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
            color: #f4f4f8;
            text-transform: uppercase;
            opacity: 0;
            transform: translate3D(0, 20px, 0);
            transition: opacity 600ms 500ms, transform 650ms 450ms ease;
          }
          .name.mounted {
            opacity: 1;
            transform: translate3D(0, 0, 0);
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
            cursor: pointer;
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
              transform: translate3D(0, -16px, 0);
            }
            40% {
              opacity: 1;
            }
            70% {
              opacity: 1;
            }
            90% {
              opacity: 0;
              transform: translate3D(0, 0, 0);
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
          section h2,
          section p,
          section a {
            color: #f4f4f8;
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
          section div,
          section p {
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
            section div,
            section p {
              width: 100%;
            }
            section div {
              margin-bottom: 1rem;
            }
            section h2:after {
              left: 0;
              bottom: -0.4rem;
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
          @media only screen and (-webkit-min-device-pixel-ratio: 2) and (min-height: 320px),
            only screen and (min--moz-device-pixel-ratio: 2) and (min-height: 320px),
            only screen and (-o-min-device-pixel-ratio: 2 / 1) and (min-height: 320px),
            only screen and (min-device-pixel-ratio: 2) and (min-height: 320px),
            only screen and (-o-min-device-pixel-ratio: 2/1) and (min-height: 320px),
            only screen and (min-resolution: 192dpi) and (min-height: 320px),
            only screen and (min-resolution: 2dppx) and (min-height: 320px) {
            header {
              background-image: url("/static/feathers-900.jpg");
            }
          }
          @media only screen and (-webkit-min-device-pixel-ratio: 2) and (min-height: 501px),
            only screen and (min--moz-device-pixel-ratio: 2) and (min-height: 501px),
            only screen and (-o-min-device-pixel-ratio: 2 / 1) and (min-height: 501px),
            only screen and (min-device-pixel-ratio: 2) and (min-height: 501px),
            only screen and (-o-min-device-pixel-ratio: 2/1) and (min-height: 501px),
            only screen and (min-resolution: 192dpi) and (min-height: 501px),
            only screen and (min-resolution: 2dppx) and (min-height: 501px) {
            header {
              background-image: url("/static/feathers-1080.jpg");
            }
          }
          @media only screen and (-webkit-min-device-pixel-ratio: 2) and (min-height: 721px),
            only screen and (min--moz-device-pixel-ratio: 2) and (min-height: 721px),
            only screen and (-o-min-device-pixel-ratio: 2 / 1) and (min-height: 721px),
            only screen and (min-device-pixel-ratio: 2) and (min-height: 721px),
            only screen and (-o-min-device-pixel-ratio: 2/1) and (min-height: 721px),
            only screen and (min-resolution: 192dpi) and (min-height: 721px),
            only screen and (min-resolution: 2dppx) and (min-height: 721px) {
            header {
              background-image: url("/static/feathers-4k.jpg");
            }
          }
        `}</style>
      </Layout>
    </ParallaxProvider>
  );
}

export default Index;
