'use client';

import React from 'react';
import './mission.scss'; 
import {Row, Column, FlexGrid, UnorderedList, ListItem} from '@carbon/react';
import {Idea, Collaborate} from '@carbon/icons-react';

const MissionPage = () => {
  return (
    <FlexGrid className="mission__grid">
      <Row className="mission_banner__row">
        <Column className="title__column" lg={8}>
          <p className="banner-title">Our Mission</p>
          <p className="banner-subtitle">Build Better, Build Faster</p>
        </Column>
        <Column className="mission_img__container" lg={8}>
        </Column>
      </Row>
      <Row className="body__row" lg={10}>
        <Column className="body__column">
          <h3>Solutions Hub</h3>
          <h4>The Solutions Hub documents our engineering journeys with the depth and authenticity that technical audiences deserve. We capture the complete story of how IBM Client Engineering solves complex business challenges using IBM Technology - from architectural decisions to implementation approaches - creating a rich technical knowledge base that demonstrates our deep expertise.</h4>
          <br />
          <h3>Our Purpose</h3>
          <h4>For too long, technical documentation has been relegated to marketing summaries or buried in internal repositories. The Solutions Hub changes this by bringing engineering knowledge into the open, connecting detailed technical content with compelling storytelling. Each solution showcases not just what we built, but exactly how we built it - providing the depth that developers and architects need to understand our approach.</h4>
          <br />
          <h3>How We Work</h3>
          <h4><strong>We believe in working in the open</strong>, documenting engineering progress and decisions as they happen. Our solutions capture:</h4>
          <UnorderedList className="pillar__column__list">
            <ListItem>Detailed architectural patterns and technical decisions</ListItem>
            <ListItem>Real implementation approaches with IBM Technology</ListItem>
            <ListItem>Engineering challenges overcome and lessons learned</ListItem>
            <ListItem>Integration patterns and deployment considerations</ListItem>
            <ListItem>The complete technical story behind successful client outcomes</ListItem>
          </UnorderedList>
          <br />
          <h3>Core Principles</h3><br />
          <h4><strong>Make Engineering Visible</strong></h4>
          <h4>Every solution represents carefully documented engineering work that shows exactly how we leverage IBM Technology to solve real business challenges. Our standardized templates ensure we capture the technical depth engineers, architects and decision-makers need while maintaining clarity for broader audiences. No more black boxes or guesswork &ndash; we show exactly how we build things.</h4><br />
          <h4><strong>Scale Knowledge - Documentation as Communication</strong></h4>
          <h4>By making our engineering approach transparent and accessible, we create opportunities for meaningful technical dialogue with clients, partners, and the broader technical community. Each solution connects to a wider narrative about how IBM solves complex challenges. We&apos;re creating a library of detailed technical content that teams can access anytime. Always available, easily searchable, and constantly growing.</h4><br />
          <h4><strong>Building on Success</strong></h4>
          <h4>When our teams document their solutions, they contribute to a growing body of engineering knowledge that benefits our entire ecosystem. This systematic approach to knowledge sharing helps others build upon proven patterns rather than starting from scratch.</h4>
          <br />
          <h3>Experience Our Solutions</h3>
          <h4>The Solutions Hub provides multiple ways to engage with our technical content:</h4>
          <UnorderedList className="pillar__column__list">
            <ListItem>Explore detailed technical documentation</ListItem>
            <ListItem>Watch engineering story videos</ListItem>
            <ListItem>Study architecture diagrams and decision records</ListItem>
            <ListItem>Follow implementation guides</ListItem>
            <ListItem>Understand our problem-solving methodology</ListItem>
          </UnorderedList><br />
          <h4>Whether you&apos;re an IBM engineer, client, or technology partner, you&apos;ll find valuable insights into how we approach and solve complex technical challenges. We invite you to explore our solutions and engage with our engineering community.</h4><br />
        </Column>
      </Row>
    </FlexGrid>
  );
};

export default MissionPage;
