function Footer() {
  return (
    <footer>
      <div className="container">
        <div>
          <h3>Looking for a web developer?</h3>
          <a href="mailto:cbb5104@gmail.com">
            <h1>Contact Me</h1>
          </a>
        </div>

        <ul>
          <li>
            <a
              href="https://github.com/TunaSurf"
              title="Github"
              className="github"
            >
              <i className="fab fa-github fa-lg" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              href="https://codepen.io/TunaSurf/"
              title="Codepen"
              className="codepen"
            >
              <i className="fab fa-codepen fa-lg" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/chase-burgess-7a94ab8a/"
              title="LinkedIn"
              className="linkedin"
            >
              <i className="fab fa-linkedin fa-lg" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
        <p>{new Date().getFullYear()} | Chase Burgess</p>
      </div>
      <style jsx>{`
        footer {
          position: relative;
          width: 100%;
          background-color: #1e1e20;
          z-index: 100;
        }
        .container {
          position: relative;
          margin: 0 auto;
          max-width: 1000px;
          padding: 150px 40px;
          box-sizing: border-box;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
        }
        h1,
        a {
          color: #f4f4f8;
          transition: color 200ms 50ms ease;
        }
        h3,
        p {
          color: #a0a0a5;
        }
        h1 {
          font-size: 2.8em;
          font-weight: 300;
          line-height: 1em;
        }
        h1:hover {
          color: #20b2aa;
        }
        p {
          position: absolute;
          bottom: 10px;
          left: 0;
          width: 100%;
          font-size: 0.8rem;
          font-weight: 300;
          text-align: center;
        }
        ul {
          display: grid;
          grid-auto-flow: column;
          justify-content: center;
          grid-gap: 20px;
        }
        .github:hover {
          color: #999;
        }
        .codepen:hover {
          color: #0ebeff;
        }
        .linkedin:hover {
          color: #0077b5;
        }
        @media screen and (max-width: 1000px) {
          .container {
            padding: 150px 20px;
          }
        }
        @media screen and (max-width: 700px) {
          h1 {
            font-size: 2rem;
          }
        }
        @media screen and (max-width: 600px) {
          .container {
            padding: 100px 20px 40px 20px;
          }
          ul {
            width: 100%;
            margin-top: 80px;
          }
          i {
            font-size: 1rem;
            opacity: 0.8;
          }
          p {
            font-size: 0.625rem;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
