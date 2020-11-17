import Head from "next/head";

function Meta(props) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicon-16x16.png"
        />
        <link
          rel="mask-icon"
          href="/static/safari-pinned-tab.svg"
          color="#20b2aa"
        />
        <meta name="msapplication-TileColor" content="#20b2aa" />
        <meta name="theme-color" content="#20b2aa" />
        <title>Chase Burgess | {props.pageTitle}</title>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500|Roboto+Mono:400,500"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.0.10/css/all.css"
          integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg"
          crossOrigin="anonymous"
        />
      </Head>
      <style jsx global>{`
        html {
          font-family: "Montserrat", sans-serif;
          background: #1e1e20;
        }
        html,
        body {
          width: 100%;
          margin: 0px;
          padding: 0px;
          overflow-x: hidden;
        }
        div,
        section,
        article,
        header,
        ul,
        li,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        a {
          margin: 0;
          padding: 0;
          font-size: 100%;
          font-weight: 400;
          line-height: 1.6em;
          color: rgba(30, 30, 32, 0.9);
          -webkit-tap-highlight-color: transparent;
        }
        ul,
        li {
          list-style: none;
        }
        a {
          cursor: pointer;
          text-decoration: none;
        }
        @media screen and (max-width: 500px) {
          li,
          p,
          a {
            line-height: 1.4em;
          }
        }
      `}</style>
    </div>
  );
}

export default Meta;
