'use client';

import React from 'react';
import './mission.scss'; 
import {Row, Column, FlexGrid} from '@carbon/react';

const MissionPage = () => {
  return (
    <FlexGrid className="mission__grid">
      <Row className='mission_banner__row' lg={6}>
        <Column className="title__column" lg={8}>
          <h1>Contact us</h1>
        </Column>
        <Column className='mission_img__container' lg={8}>
        </Column>
        
      </Row>
      <Row className="body__row" lg={10}>
        <Column className='body__column'>
        </Column>
      </Row>
    </FlexGrid>
  );
};

export default MissionPage;

