'use client';

import React from 'react';
import { Launch, RecentlyViewed } from '@carbon/icons-react';
import {
  ClickableTile,
  Tag,
  Column,
} from "@carbon/react";

const RecentProjectsTiles = ({ data }) => {
  return (
    <>
      {data.map((repo, index) => (
        <Column lg={4} md={2} sm={1} key={index}><ClickableTile id={repo.name} className="projectTile" key={index} href={repo.homepageUrl} target="_blank" rel="noopener noreferrer" renderIcon={Launch} style={{ height: '400px' }}>
          <RecentlyViewed size={32} />
          <h6 className="projectTile__title">{repo.title}</h6>
          <p3 className="projectTile__description">{repo.description}</p3>
          {repo.repositoryTopics.nodes.map((nodes, index) => (
                    <Tag className="projectTile__topics" key={index}>
                        {nodes.topic.name}
                    </Tag>
                ))}

        </ClickableTile> </Column>
      ))}
    </>
  );
};

export default RecentProjectsTiles;