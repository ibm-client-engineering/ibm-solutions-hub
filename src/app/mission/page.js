'use client';

import React from 'react';
import './mission.scss'; 

const MissionPage = () => {
  return (
    <div className="mission-page">
      <h1>Our Mission</h1>
      <p>
        The Solutions Hub documents best practices for creating technical solutions at IBM Client Engineering. 
        It represents IBM&apos;s commitment to transparency and collaboration, showcasing real-life customer 
        experiences to encourage the adoption of IBM Technology. This site allows IBMers, clients, and 
        interested parties to participate, provide feedback, and benefit from collective knowledge.
        IBM Client Engineering collaborates with clients to co-create and innovate, utilizing IBM technology 
        and methodologies to address business challenges. 
      </p>
      <p>
        Client Engineering is a no-cost investment for IBM&apos;s 
        clients. Connect with us today!
      </p>
      <a href="https://www.ibm.com/services/client-engineering" target="_blank" rel="noopener noreferrer">
        Learn more about Client Engineering →
      </a>
      <div className="image-container">
        <img src="https://www.ibm.com/content/dam/connectedassets-adobe-cms/worldwide-content/creative-assets/ibs/ul/g/66/9e/20230607_ibm_thomasprior_albany_4437.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg" alt="Team collaboration" />
      </div>
    </div>
  );
};

export default MissionPage;

