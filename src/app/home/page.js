`use client`;
import { FlexGrid, Column, ClickableTile, Row } from '@carbon/react';
import React, { use } from "react";
import { Add, WatsonxAi, MachineLearningModel, IbmSecurity, Data_1, CloudApp, ZSystems, Carbon, ArrowDownRight, ArrowRight } from '@carbon/icons-react';


export default function LandingPage() {
   return (
        <FlexGrid className="landing-page" fullWidth>
          <Row condensed>
            <Column lg={4} md={2} sm={1}>
              <h1 className="landing-page__header"><strong>IBM Client Engineering</strong></h1>
              <br/><br/>
              <h1 className="landing-page__header-description">Working in the Open</h1>
            </Column>
            <Column lg={4} md={2} sm={1}>
              <ClickableTile className="clickable-tile-1" renderIcon={Add} style={{height: '240px'}}>
                <WatsonxAi size={32} />
                <br/><br/><br/><br/>
                <h4 className="clickable-tile-title">Generative AI</h4>
                <p1 className="clickable-tile-description">Easily deploy and embed AI across your business, manage all data sources, and accelerate responsible AI workflows—all on one platform</p1>
                </ClickableTile>
              <ClickableTile className="clickable-tile-2" renderIcon={Add} style={{height: '240px'}}>
                <IbmSecurity size={32} />
                <br/><br/><br/><br/>
                <h4 className="clickable-tile-title">Security</h4>
                <p1 className="clickable-tile-description">IBM Security Provides Enterprise Cybersecurity Solutions to Help You Thrive in Uncertainty</p1>
              </ClickableTile>
            </Column>
            <Column lg={4} md={2} sm={1}>
              <ClickableTile className="clickable-tile-3" renderIcon={Add} style={{height: '240px'}}>
                <Data_1 size={32} />
                <br/><br/><br/><br/>
                <h4 className="clickable-tile-title">Data</h4>
                <p1 className="clickable-tile-description">Predict outcomes faster using a platform built with data fabric architecture. Collect, organize and analyze data, no matter where it resides</p1>
              </ClickableTile>
              <ClickableTile className="clickable-tile-4" renderIcon={Add} style={{height: '240px'}}>
                <MachineLearningModel size={32} />
                <br/><br/><br/><br/>
                <h4 className="clickable-tile-title">AI Ops</h4>
                <p1 className="clickable-tile-description">Discover how AI for IT operations deliver the insights you need to help drive exceptional business performance </p1>
              </ClickableTile>
            </Column>
            <Column lg={4} md={2} sm={1}>
              <ClickableTile className="clickable-tile-5" renderIcon={Add} style={{height: '240px'}}>
                <CloudApp size={32} />
                <br/><br/><br/><br/>
                  <h4 className="clickable-tile-title">Hybrid Cloud</h4>
                  <p1 className="clickable-tile-description">Hybrid cloud allows for the seamless integration of platforms, applications, and infrastructure built on public cloud, private cloud and on-prem</p1>
                </ClickableTile>
                <ClickableTile className="clickable-tile-6" renderIcon={Add} style={{height: '240px'}}>
                  <ZSystems size={32} />
                  <br/><br/><br/><br/>
                  <h4 className="clickable-tile-title">IBM Z</h4>
                  <p1 className="clickable-tile-description">Use a powerful and secure platform for business to create, innovate and build your future </p1>
              </ClickableTile>
            </Column>
            </Row>
            <Row fullWidth>
              <Column md={4} lg={4} sm={4} className="landing-page__subheader">
                <h3>Recent Projects</h3>
                <br/><br/>
                <h4>Recently published projects from the Client Engineering Team</h4>
              </Column>
            </Row>
            <Row narrow>
              <Column md={4} lg={4} sm={4} className="landing-page__subheader">
                <h3>Popular Projects</h3>
                <br/><br/>
                <h4>Highly valueable and most used projects</h4>
              </Column>
          </Row>
        </FlexGrid>
  );
}