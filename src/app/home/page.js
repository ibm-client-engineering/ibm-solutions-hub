`use client`;
import { FlexGrid, Column, ClickableTile, Row, Tag } from '@carbon/react';
import React, { use } from "react";
import { Add, WatsonxAi, MachineLearningModel, IbmSecurity, Data_1, CloudApp, ZSystems, Launch, WatsonHealthEdgeEnhancement_01, WatsonHealthEdgeEnhancement_02, WatsonHealthEdgeEnhancement_03, RecentlyViewed} from '@carbon/icons-react';


export default function LandingPage() {
   return (
        <FlexGrid className="landing-page" fullWidth>
          <Row condensed className='row-padding'>
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

            <Row fullWidth className='row-padding' condensed>
              <Column md={2} lg={4} sm={1} className="landing-page__subheader">
                <h3>Recent Projects</h3>
                <br/><br/>
                <h4>Recently published projects from the Client Engineering Team</h4>
              </Column>
              <Column lg={4} md={2} sm={1}>
              <ClickableTile className="projectTile" href={"https://ibm-client-engineering.github.io/solution-wxo/"} target="_blank" rel="noopener noreferrer" renderIcon={Launch} style={{height: '400px'}}>
                <RecentlyViewed size={32}/>
                <h6 className="projectTile__title">solution-wxo</h6>
                <p3 className="projectTile__description">Using Integrated Custom Skills in IBM Watsonx Orchestrate</p3>
                <Tag className="projectTile__topics">
                  Automation
                </Tag>
              </ClickableTile>
              </Column>
              <Column lg={4} md={2} sm={1}>
              <ClickableTile className="projectTile" href={"https://ibm-client-engineering.github.io/solution-cp4ba-document-processing/"} target="_blank" rel="noopener noreferrer" renderIcon={Launch} style={{height: '400px'}}>
                <RecentlyViewed size={32}/>
                <h6 className="projectTile__title">solution-cp4ba-document-processing</h6>
                <p3 className="projectTile__description">Automated Document Processing Solutions Using IBM Cloud Pak for Business Automation</p3>
                <Tag className="projectTile__topics">
                  Automation
                </Tag>
              </ClickableTile>
              </Column>
              <Column lg={4} md={2} sm={1}>
              <ClickableTile className="projectTile" href={"https://ibm-client-engineering.github.io/solution-filenet-aws"} target="_blank" rel="noopener noreferrer" renderIcon={Launch} style={{height: '400px'}}>
                <RecentlyViewed size={32}/>
                <h6 className="projectTile__title">solution-filenet-aws</h6>
                <p3 className="projectTile__description">Solution to Deploy IBM FileNet Content Manager on AWS EKS</p3>
                <Tag className="projectTile__topics">
                  Automation
                </Tag>
              </ClickableTile>
              </Column>
            </Row>

            <Row fullWidth className='row-padding' condensed>
              <Column md={2} lg={4} sm={1} className="landing-page__subheader">
                <h3>Popular Projects</h3>
                <br/><br/>
                <h4>Highly valueable and most used projects</h4>
              </Column>
              <Column lg={4} md={2} sm={1}>
              <ClickableTile className="projectTile" href={"https://ibm-client-engineering.github.io/solution-sfg-aws/"} target="_blank" rel="noopener noreferrer" renderIcon={Launch} style={{height: '400px'}}>
              <WatsonHealthEdgeEnhancement_01 size={34}/>
                <h6 className="projectTile__title">solution-sfg-aws</h6>
                <p3 className="projectTile__description">Installing IBM Sterling File Gateway (and other B2Bi Components) on Amazon EKS</p3>
                <Tag className="projectTile__topics">
                  Automation
                </Tag>
              </ClickableTile>
              </Column>
              <Column lg={4} md={2} sm={1}>
              <ClickableTile className="projectTile" href={"https://ibm-client-engineering.github.io/solution-watsonx-assistant/"} target="_blank" rel="noopener noreferrer" renderIcon={Launch} style={{height: '400px'}}>
              <WatsonHealthEdgeEnhancement_02 size={34}/>
                <h6 className="projectTile__title">solution-watsonx-assistant</h6>
                <p3 className="projectTile__description">Enhancing Customer Care Journeys Using IBM Watsonx Products</p3>
                <Tag className="projectTile__topics">
                  Automation
                </Tag>
              </ClickableTile>
              </Column>
              <Column lg={4} md={2} sm={1}>
              <ClickableTile className="projectTile" href={"https://ibm-client-engineering.github.io/solution-processmining/"} target="_blank" rel="noopener noreferrer" renderIcon={Launch} style={{height: '400px'}}>
              <WatsonHealthEdgeEnhancement_03 size={34}/>
                <h6 className="projectTile__title">solution-processmining</h6>
                <p3 className="projectTile__description">IBM Cloud Pak for Business Automation Process Mining on Red Hat OpenShift</p3>
                <Tag className="projectTile__topics">
                  Automation
                </Tag>
              </ClickableTile>
              </Column>
          </Row>
        </FlexGrid>
  );
}