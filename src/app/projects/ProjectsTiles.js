'use client';

import React from 'react';
import { Launch } from '@carbon/icons-react';
import {
  ClickableTile,
  Tag,
} from "@carbon/react";

const ProjectsTiles = ({ data }) => {
  return (
    <>
      {data.map((repo) => (
        <ClickableTile id={repo.name} className="projectTile" href={repo.homepageUrl} target="_blank" rel="noopener noreferrer" renderIcon={Launch}>
          <h6 className="projectTile__title">{repo.title}</h6>
          <p3 className="projectTile__description">{repo.description}</p3>
          {repo.repositoryTopics.nodes.map((nodes) => (
                    <Tag className="projectTile__topics">
                        {nodes.topic.name}
                    </Tag>
                ))}

        </ClickableTile>
      ))}
    </>
  );
};

export default ProjectsTiles;