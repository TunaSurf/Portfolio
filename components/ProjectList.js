import React from 'react';
import Project from './Project';
import projectsData from '../models/projects.json';
import { interpolateColors } from '../utilities'

function ProjectList(props) {
  const colors = interpolateColors("#40AFAA", "#85877c", projectsData.length);

  return (
    <ul>
      {projectsData.map((project, i) => (
        <Project
          key={i}
          name={project.name}
          tools={project.tools}
          description={project.description}
          link={project.link}
          source={project.source}
          image={project.image}
          color={colors[i]}
          mobile={props.mobile}
        />
      ))}
    </ul>
  )
}

export default ProjectList;
