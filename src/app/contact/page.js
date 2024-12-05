'use client';

import React, { useState } from 'react';
import './contact.scss';
import {Row, Column, FlexGrid, TextInput, TextArea, Button} from '@carbon/react';


const ContactUs = () => {

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const submit = (e) => {
    const output = `fn: ${firstName}, ln: ${lastName}, em: ${email}, mg: ${message}`;
    console.log(output);
  }

  return (
    <FlexGrid className="contact__grid">
      <Row className='contact_banner__row' lg={6}>
        <Column className="title__column" lg={8}>
          <h1>Contact us</h1>
        </Column>
        <Column className='assistant_img__container' lg={8}>
        </Column>
        
      </Row>
      <Row className="body__row" lg={10}>
        <Column className='form__column'>
          <Row className='name__row form__row'>
            <Column className='firstname__column'>
              <TextInput id="firstname-input" type="text" labelText="First Name" value={firstName}/>
            </Column>
            <Column className='lastname__column'>
              <TextInput id="lastname-input" type="text" labelText="Last Name"  value={lastName}/>
            </Column>
          </Row>
          <Row className='email__row form__row'>
            <Column className='email__column'>
              <TextInput id="email-input" type="text" labelText="Email"  value={email}/>
            </Column>
          </Row>
          <Row className='message__row form__row'>
            <Column className='message__column'>
              <TextArea id="message-input" type="text" labelText="Message"  value={message}/>
            </Column>
          </Row>
          <Row className='submit__row form__row'>
            <Button className='submit__button' onClick={submit}>Submit</Button>
          </Row>
        </Column>
      </Row>
    </FlexGrid>
  );
};

export default ContactUs;

