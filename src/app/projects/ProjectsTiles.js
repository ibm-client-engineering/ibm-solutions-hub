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
      {data.map((item, index) => (
        <ClickableTile className="projectTile" key={index} href={item.homepageUrl} target="_blank" rel="noopener noreferrer" renderIcon={Launch}>
            <h6 className="projectTile__title">{item.name}</h6>
            <p3 className="projectTile__description">{item.description}</p3>
            {item.repositoryTopics.map((topic, index) => (
                <Tag className="projectTile__topics" key={index}>
                    {topic}
                </Tag>
            ))}
        </ClickableTile>
      ))}
    </>
  );
};

export default ProjectsTiles;
