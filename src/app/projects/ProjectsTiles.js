'use client';

import React from 'react';
import { Launch } from '@carbon/icons-react';
import {
  ClickableTile,
  Tag,
} from "@carbon/react";

const ProjectsTiles = ({ data }) => {
  return (
    <div className="projectTileContainer">
      {data.map((repo, index) => (
        <ClickableTile id={repo.name} className="projectTile" key={index} href={repo.homepageUrl} target="_blank" rel="noopener noreferrer" renderIcon={Launch}>
          <h6 className="projectTile__title">{repo.title}</h6>
          <p3 className="projectTile__description">{repo.description}</p3>
          { Object.hasOwn(repo, "technology") ? 
          repo.technology.map((tech, index) => (
            <Tag className="projectTile__techs" type="blue" key={index}>
              {tech}
            </Tag>
          )) : <></>}
          <br></br>
          {repo.repositoryTopics.nodes.map((nodes, index) => (
            <Tag className="projectTile__topics" key={index}>
              {nodes.topic.name}
            </Tag>
          ))}
        </ClickableTile>
      ))}
    </div>
  );
};

export default ProjectsTiles;

 
