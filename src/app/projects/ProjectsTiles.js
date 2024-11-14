'use client';
import React from 'react';
import { Launch, ToolKit, Enterprise } from '@carbon/icons-react';
import {
  ClickableTile,
  Tag,
  Row,
  Column
} from "@carbon/react";

const ProjectsTiles = ({ data }) => {
  return (
    <div className="projectTileContainer">
      {data.map((repo, index) => (
        <ClickableTile id={repo.name} className="projectTile" key={index} href={repo.homepageUrl} target="_blank" rel="noopener noreferrer" renderIcon={Launch}>
          <h6 className="projectTile__title">{repo.title}</h6>
          <p3 className="projectTile__description">{repo.description}</p3>
          <Row className="project__row">
            <Column className='icon__column' lg={1}><Enterprise className="enterprise_icon"/></Column>
            <Column className='tag__column'><Tag className="projectTile__industry" type="cyan" key={index}>{repo.industry}</Tag></Column>
          </Row>
          <Row className="project__row">
          <Column className='icon__column' lg={1}><ToolKit className="toolkit_icon"/></Column>
          <Column className='tag__column'>{ Object.hasOwn(repo, "technology") ? 
            repo.technology.map((tech, index) => (
              <Tag className="projectTile__techs" type="blue" key={index}>
                {tech}
              </Tag>
            )) : <></>}</Column>
          </Row>
        </ClickableTile>
      ))}
    </div>
  );
};

export default ProjectsTiles;

 
