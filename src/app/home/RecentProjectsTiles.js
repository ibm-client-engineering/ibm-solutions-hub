'use client';

import React from 'react';
import { Launch, RecentlyViewed, ToolKit } from '@carbon/icons-react';
import {
  ClickableTile,
  Tag,
  Column,
  Row,
} from "@carbon/react";

const alignment = ['left', 'center', 'right'];

const RecentProjectsTiles = ({ data }) => {
  return (
    <>
      {data.map((repo, index) => (
        <Column lg={4} md={2} sm={1} key={index} className='project-col' style={{justifyContent: alignment[index], alignItems: alignment[index]}}>
          <ClickableTile id={repo.name} className="projectTile-home" key={index} href={repo.homepageUrl} target="_blank" rel="noopener noreferrer" renderIcon={Launch}>
          <RecentlyViewed size={32} />
          <h6 className="projectTile__title">{repo.title}</h6>
          <p3 className="projectTile__industry">{repo.industry}</p3>
          <p3 className="projectTile__description">{repo.description}</p3>
          <Row className="project__row">
          <ToolKit className="toolkit_icon"/>
          { Object.hasOwn(repo, "technology") ? 
          repo.technology.map((tech, index) => (
            <Tag className="projectTile__techs" type="blue" key={index}>
              {tech}
            </Tag>
          )) : <></>}
          </Row>

        </ClickableTile> </Column>
      ))}
    </>
  );
};

export default RecentProjectsTiles;