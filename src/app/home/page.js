'use client';

import { FlexGrid, Column, ClickableTile, Row, Tag } from '@carbon/react';
import React from "react";
import { WorkflowAutomation, IbmAiOnZ, CloudApp, DataBase, ArrowRight } from '@carbon/icons-react';
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
        <Column lg={6} md={3} sm={2}>
          <ClickableTile className="clickable-tile-1" renderIcon={ArrowRight} style={{ height: '240px' }}
            href="/ibm-solutions-hub/projects?tile=Data"
            >
            <DataBase size={32} />
            <br /><br /><br /><br />
            <h4 className="clickable-tile-title">Data</h4>
            <p1 className="clickable-tile-description">Predict outcomes faster using a platform built with data fabric architecture. Collect, organize and analyze data, no matter where it resides</p1>
          </ClickableTile>
          <ClickableTile className="clickable-tile-2" renderIcon={ArrowRight} style={{ height: '240px' }}
            href="/ibm-solutions-hub/projects?tile=Transaction%20Processing">
            <IbmAiOnZ size={32} />
            <br /><br /><br /><br />
            <h4 className="clickable-tile-title">Transaction Processing</h4>
            <p1 className="clickable-tile-description">Simplify mainframe operations and automate mainframe development to ensure improved efficiency and observability</p1>
          </ClickableTile>
        </Column>
        <Column lg={6} md={3} sm={2}>
          <ClickableTile className="clickable-tile-3" renderIcon={ArrowRight} style={{ height: '240px' }}
            href="/ibm-solutions-hub/projects?tile=Automation"
            >
            <WorkflowAutomation size={32} />
            <br /><br /><br /><br />
            <h4 className="clickable-tile-title">Automation</h4>
            <p1 className="clickable-tile-description">Discover how to automate key AI and IT operations to deliver the insights you need to help drive exceptional business performance </p1>
          </ClickableTile>
          <ClickableTile className="clickable-tile-4" renderIcon={ArrowRight} style={{ height: '240px' }}
            href="/ibm-solutions-hub/projects?tile=Hybrid%20Cloud">
            <CloudApp size={32} />
            <br /><br /><br /><br />
            <h4 className="clickable-tile-title">Hybrid Cloud</h4>
            <p1 className="clickable-tile-description">Hybrid cloud allows for the seamless integration of platforms, applications, and infrastructure built on public cloud, private cloud and on-prem</p1>
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

