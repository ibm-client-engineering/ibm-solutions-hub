'use client';

import React from 'react';
import './mission.scss'; 
import {Row, Column, FlexGrid, UnorderedList, ListItem} from '@carbon/react';
import {Idea, Collaborate} from '@carbon/icons-react';

const MissionPage = () => {
  return (
    <FlexGrid className="mission__grid">
      <Row className='mission_banner__row' lg={6}>
        <Column className="title__column" lg={8}>
          <h1>Our Mission</h1>
          <h5>Providing a centralized place to showcase IBM Client Engineering Solutions</h5>
        </Column>
        <Column className='mission_img__container' lg={8}>
        </Column>
        
      </Row>
      <Row className="body__row" lg={10}>
        <Column className='body__column'>
          <p><h2>The Solutions Hub</h2></p>
          <p>The Solutions Hub documents best practices for creating technical solutions at IBM Client Engineering. This site allows IBMers, clients, and interested parties to participate, provide feedback, and benefit from collective knowledge. </p>
          <p>Client Engineering is a no-cost investment for IBM’s clients. <a href="/ce-solutions-hub/contact/">Connect with us today!</a></p>
          <p><a href="https://www.ibm.com/client-engineering">Learn more about Client Engineering &rarr;</a></p>

          <Column className='pillar__column'>
            <Collaborate className='pictogram'/>
            <p><h3>Transparency and Collaboration</h3></p>
            <p>
              <UnorderedList>
                <ListItem>Representation of IBM’s commitment to transparency and collaboration</ListItem>
                <ListItem>Showcase of real-life customer experiences</ListItem>
                <ListItem>Encouragement of the adoption of IBM Technology</ListItem>
              </UnorderedList>
            </p>
          </Column>
          <Column className='pillar__column'>
            <Idea className='pictogram'/>
            <p><h3>Co-Create and Innovate</h3></p>
            <p>
              <UnorderedList>
                <ListItem>Collaboration with clients</ListItem>
                <ListItem>Utilization of IBM Technology and methodology to address business challenges </ListItem>
              </UnorderedList>
            </p>
          </Column>
        </Column>
      </Row>
    </FlexGrid>
  );
};

export default MissionPage;

