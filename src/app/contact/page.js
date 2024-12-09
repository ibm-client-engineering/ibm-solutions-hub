'use client';

import React, { useState } from 'react';
import './contact.scss';
import {Row, Column, FlexGrid, TextInput, TextArea, Button} from '@carbon/react';


const ContactUs = () => {

  return (
    <FlexGrid className="contact__grid">
      <Row className='contact_banner__row' lg={6}>
        <Column className="title__column" lg={8}>
          <h1>Contact Us</h1>
        </Column>
        <Column className='assistant_img__container' lg={8}>
        </Column>
        
      </Row>
      <Row className="body__row" lg={10}>
        <Column className='form__column' lg={6}>
        <iframe src="https://forms.monday.com/forms/embed/4414a889642bf5258f8c63f7155748cb?r=use1" width="1400" height="1200" align="center" className="monday__form"></iframe>
        </Column>
      </Row>
    </FlexGrid>
  );
};

export default ContactUs;

