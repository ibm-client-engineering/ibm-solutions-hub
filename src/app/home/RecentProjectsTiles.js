'use client';

import React from 'react';
import { Launch, RecentlyViewed, ToolKit, Enterprise, Portfolio } from '@carbon/icons-react';
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
          <p3 className="projectTile__description">{repo.description}</p3>
          <Row className="project__row">
            <Column className='icon__column' lg={1}><Enterprise className="enterprise_icon"/></Column>
            <Column className='tag__column'><Tag className="projectTile__industry" type="cyan" key={index}>{repo.industry}</Tag></Column>
          </Row>
          <Row className="project__row">
            <Column className='icon__column' lg={1}><Portfolio className="enterprise_icon"/></Column>
            <Column className='tag__column'><Tag className="projectTile__pillar" type="purple" key={index}>{repo.pillar}</Tag></Column>
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

        </ClickableTile> </Column>
      ))}
    </>
  );
};

export default RecentProjectsTiles;