# Portfolio

This is my portfolio website built with React and Next JS

[ChaseBurgess.com](chaseburgess.com)

## Summary

A few months back I got interested in Next JS because of its simple to set up Server Side Rendering capabilities thinking it could be a good platform to use if I decided to refactor [Should I Shred](https://github.com/TunaSurf/ShouldIShred). While looking through the docs I found that, along with complex applications, Next JS had a simple build/export command for rendering static HTML files. For my portfolio in its current state, a framework like Next JS was absolutely overkill, but it was a good experince building out a website with it as well as Zeit's Style-JSX. 

## To-Do's

As I continue to grow as a developer, picking up new libraries, learning new tricks, and staying up to date with the latest advancements in the frameworks I already know and love; I am always looking back to projects I have completed and see the many things I could have done differently (better).

###### 1. css-in-js
Since building out this portfolio, I have come to appreciate what css-in-js brings to the table in terms of grouping relavant logic by file. I find it easier to track down bugs and make updates when every bit of logic telling the browser how to display the navbar is in the `navbar.js` file, for example. With this new found appreciation for css-in-js, I have also done a fair share of research and trial, to determine that for my use cases [Styled Components](https://github.com/styled-components/styled-components) stands above the rest. The ability to style on a component by component basis as opposed to essentially bringing in a stylesheet within jsx tags, takes css-in-js to the next level for me, and I intend on using it whenever possible moving forward, including my next refactor of this site.

###### 2. Static Site Generation
At the time of building out this version of my portfolio, I knew very little of the benefits static site generation could bring. What I did know at the time, was how impressive Next JS's server side rendering capabilities could be and how useful SSR is when indexing single page applications for search engines. My initial plans were to launch this portfolio site using the full power of Next JS's SSR back-end, it wasn't until I was nearing the end of the project that I came upon services such as Netlify (the current host for my portfolio) that could build and deploy static files automatically. This blew my mind as I had previously been using Digital Ocean droplets and doing all of the behind the scenes server work myself (great practice and essential for some projects, but time consuming and overkill for a simple site like this). This new interest in static site generation using React sent me on a path of finding the best tools for the job, and while Next JS was great and certainly got the job done, it felt more complex than it needed to be, which makes sense because at its heart it is a framework built for SSR. With a small amount of research as to what is available in the realms of static site generation using React, in came Gatsby. 

For this current iteration of my portfolio, I am using a json file to keep track of all the projects I want to list on the site. This has worked so far, but it hasn't felt like the most elegant solution, and it makes edits / additions a bit more cumbersome than they need to be. Gatsby's reliance on GraphQL and ability to transform markdown files with the addition of a couple plugins is what sets it apart for me and is why I will be using the framework in the next refactor of this site. I'm still not totally sold on the plugins mentality that Gatsby relies on so heavily, but to be honest, custom plugin creation is one aspect of Gatsby I have not delved too deeply into yet and I'm open to having my mind changed. 

I've also experimented with the combination of Gatsby and headless CMS's like Contentful - I am very excited for this pair, and expect to use it quite a bit more going forward.

## Bugs / Improvements to be Made

1. Text within the project description cannot be selected. This has to do with the probably overly complex method I used to get the description exand/collapse to work, and there is a layer on top of the description that needs to be clicked through. I will fix this with my next refactor of the site, and will most likely use [React Spring](https://github.com/react-spring/react-spring) both for this issue as well as animation across the board. 
2. When navigating forwards or backwards within the site to a page that has been scrolled, the animation of the header could be improved. I did not learn until recently about modifying the `_app.js` file in Next JS to include components that should not be remounted when moving between pages. Through the use of this method or Gatsby's layout component, I intend to keep the header from remounting on page changes and instead provide smooth page transitions to the component. 