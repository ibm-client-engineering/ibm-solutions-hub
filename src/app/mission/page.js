'use client';

import React from 'react';
import './mission.scss'; 
import {Row, Column, FlexGrid, UnorderedList, ListItem} from '@carbon/react';
import {Idea, Collaborate} from '@carbon/icons-react';

const MissionPage = () => {
  return (
    <FlexGrid className="mission__grid">
      <Row className='mission_banner__row'>
        <Column className="title__column" lg={8}>
          <p className="banner-title">Our Mission</p>
          <p className="banner-subtitle">Providing a centralized place to showcase IBM Client Engineering Solutions</p>
        </Column>
        <Column className='mission_img__container' lg={8}>
        </Column>
        
      </Row>
      <Row className="body__row" lg={10}>
        <Column className='body__column'>
          <h3>The Solutions Hub</h3>
          <br />
          <h4>The Solutions Hub documents best practices for creating technical solutions at IBM Client Engineering. This site allows IBMers, clients, and interested parties to participate, provide feedback, and benefit from collective knowledge. </h4>
          <br />
          <h4>Client Engineering is a no-cost investment for IBM’s clients. <a href="/ce-solutions-hub/contact/">Connect with us today!</a></h4>
          <br />
          <h4><a href="https://www.ibm.com/client-engineering">Learn more about Client Engineering &rarr;</a></h4>
          <br />
          <br />
          <Column className='pillar__column'>
            <Collaborate className='pictogram'/>
            <h3>Transparency and Collaboration</h3>
            <br />
              <UnorderedList className='pillar__column__list'>
                <ListItem>Representation of IBM’s commitment to transparency and collaboration</ListItem>
                <ListItem>Showcase of real-life customer experiences</ListItem>
                <ListItem>Encouragement of the adoption of IBM Technology</ListItem>
              </UnorderedList>
          </Column>
          <Column className='pillar__column'>
            <Idea className='pictogram'/>
            <h3>Co-Create and Innovate</h3>
            <br />
              <UnorderedList className='pillar__column__list'>
                <ListItem>Collaboration with clients</ListItem>
                <ListItem>Utilization of IBM Technology and methodology to address business challenges </ListItem>
              </UnorderedList>
          </Column>
        </Column>
      </Row>
    </FlexGrid>
  );
};

export default MissionPage;

