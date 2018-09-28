import React, { Component } from 'react';
import Project from './Project';
import projectsData from '../models/projects.json';

class ProjectList extends Component {
  constructor(props){
    super(props);
    this.state = {
      projects: projectsData
    }
  }

  render() {
    return (
      <ul>
        {this.state.projects.map((project, i) => (
          <Project
            key={i}
            name={project.name}
            tools={project.tools}
            description={project.description}
            link={project.link}
            source={project.source}
            image={project.image}
            color={project.color}
          />
        ))}
      </ul>
      
    )
  }
}

export default ProjectList;
