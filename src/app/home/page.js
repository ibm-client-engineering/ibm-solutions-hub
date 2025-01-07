'use client';

import { FlexGrid, Column, ClickableTile, Row, Tag } from '@carbon/react';
import React from "react";
import { Add, WatsonxAi, WorkflowAutomation, IbmSecurity, Data_1, CloudApp, ZSystems, Launch, WatsonHealthEdgeEnhancement_01, WatsonHealthEdgeEnhancement_02, WatsonHealthEdgeEnhancement_03, ArrowRight } from '@carbon/icons-react';
import RecentProjectsTiles from "./RecentProjectsTiles";
import data from "../../../repoData.json";
import Link from 'next/link';
import ProjectsTiles from '../projects/ProjectsTiles'; 

var repoData = data.organization.repositories.nodes.filter(repo => repo.publish === 'True');
var recentRepos = repoData.slice(0, 6); // Updated to fetch 6 most recent projects

export default function LandingPage() {
  return (
    <FlexGrid className="landing-page" fullWidth>
      <Row condensed className='row-padding'>
        <Column lg={4} md={2} sm={1} >
          <h1 className="landing-page__header"><strong>IBM Solutions Hub</strong></h1>
          <br /><br />
          <h1 className="landing-page__header-description">Working in the Open</h1>
        </Column>
        <Column lg={4} md={2} sm={1}>
          <ClickableTile
              className="clickable-tile-1"
              renderIcon={ArrowRight}
              style={{ height: '240px' }}
              href="/ce-solutions-hub/projects?tile=Generative%20AI"
            >
              <WatsonxAi size={32} />
              <br /><br /><br /><br />
              <h4 className="clickable-tile-title">Generative AI</h4>
              <p1 className="clickable-tile-description">Easily deploy and embed AI across your business, manage all data sources, and accelerate responsible AI workflows—all on one platform</p1>
          </ClickableTile>
          <ClickableTile className="clickable-tile-2" renderIcon={ArrowRight} style={{ height: '240px' }}
            href="/ce-solutions-hub/projects?tile=Security">
            <IbmSecurity size={32} />
            <br /><br /><br /><br />
            <h4 className="clickable-tile-title">Security</h4>
            <p1 className="clickable-tile-description">IBM Security Provides Enterprise Cybersecurity Solutions to Help You Thrive in Uncertainty</p1>
          </ClickableTile>
        </Column>
        <Column lg={4} md={2} sm={1}>
          <ClickableTile className="clickable-tile-3" renderIcon={ArrowRight} style={{ height: '240px' }}
            href="/ce-solutions-hub/projects?tile=Data"
            >
            <Data_1 size={32} />
            <br /><br /><br /><br />
            <h4 className="clickable-tile-title">Data</h4>
            <p1 className="clickable-tile-description">Predict outcomes faster using a platform built with data fabric architecture. Collect, organize and analyze data, no matter where it resides</p1>
          </ClickableTile>
          <ClickableTile className="clickable-tile-4" renderIcon={ArrowRight} style={{ height: '240px' }}
            href="/ce-solutions-hub/projects?tile=Automation"
            >
            <WorkflowAutomation size={32} />
            <br /><br /><br /><br />
            <h4 className="clickable-tile-title">Automation</h4>
            <p1 className="clickable-tile-description">Discover how to automate key AI and IT operations to deliver the insights you need to help drive exceptional business performance </p1>
          </ClickableTile>
        </Column>
        <Column lg={4} md={2} sm={1}>
          <ClickableTile className="clickable-tile-5" renderIcon={ArrowRight} style={{ height: '240px' }}
            href="/ce-solutions-hub/projects?tile=Hybrid%20Cloud">
            <CloudApp size={32} />
            <br /><br /><br /><br />
            <h4 className="clickable-tile-title">Hybrid Cloud</h4>
            <p1 className="clickable-tile-description">Hybrid cloud allows for the seamless integration of platforms, applications, and infrastructure built on public cloud, private cloud and on-prem</p1>
          </ClickableTile>
          <ClickableTile className="clickable-tile-6" renderIcon={ArrowRight} style={{ height: '240px' }}
            href="/ce-solutions-hub/projects?tile=Z">
            <ZSystems size={32} />
            <br /><br /><br /><br />
            <h4 className="clickable-tile-title">IBM Z</h4>
            <p1 className="clickable-tile-description">Use a powerful and secure platform for business to create, innovate and build your future </p1>
          </ClickableTile>
        </Column>
      </Row>

      <Row condensed className='row-padding'>
        <Column md={2} lg={4} sm={1} className="landing-page__subheader">
          <h3>Recent Solutions</h3>
          <br />
          <h4 className='subheading-text'>Recently published solutions from the IBM Team</h4>
        </Column>
        <RecentProjectsTiles data={recentRepos.slice(0, 3)}></RecentProjectsTiles>
        <Column lg={4} md={2} sm={1}></Column> {}
        <RecentProjectsTiles data={recentRepos.slice(3, 6)}></RecentProjectsTiles>
      </Row>
    </FlexGrid>
  );
}

