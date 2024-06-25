
'use client';

import { Grid, Column, Search, FilterableMultiSelect, Row } from "@carbon/react";
import React, { useState } from "react";
import ProjectsTiles from "./ProjectsTiles";

import data from "../../../repoData.json";

var repoData = data.organization.repositories.nodes.filter(repo => repo.publish === 'True');
var repoFiltered = new Map(); // For checking if the repo falls under the current search or topic filters
var topics = new Set();
repoData.forEach((node) => {
  repoFiltered.set(node.name, { "topic": true, "search": true });
  node.repositoryTopics.nodes.forEach((topic) => {
    topics.add(topic.topic.name);
  });
});
const topicsArray = Array.from(topics);

// Parse URL parameters outside the component
const urlParams = new URLSearchParams(window.location.search);
const tag = urlParams.get('tag');
const initialSelectedTopics = tag ? [tag] : [];

function ProjectsPage() {
  const [selectedTopics, setSelectedTopics] = useState(initialSelectedTopics);

  // Define the renderProjects function
  let renderProjects = () => {
    repoData.forEach((node) => {
      if (document.getElementById(node.name)) {
        if (repoFiltered.get(node.name).topic && repoFiltered.get(node.name).search) {
          document.getElementById(node.name).style.display = "block";
        } else {
          document.getElementById(node.name).style.display = "none";
        }
      }
    });
  };

  //this function calls renderProjects initially to reflect initial selection
  React.useEffect(() => {
    if (tag) {
      filterProjectsByTag(tag);
    }
  }, []);


  let searchProjects = (e) => {
    const inputText = e.target.value.toLowerCase();
    repoData.forEach((node) => {
      var inTopic = false;
      node.repositoryTopics.nodes.forEach((topic) => {
        if (topic.topic.name.toLowerCase().includes(inputText)) {
          inTopic = true;
        }
      });

      var isVisible = 
        inTopic ||
        (node.name && node.name.toLowerCase().includes(inputText)) ||
        (node.description && node.description.toLowerCase().includes(inputText)) ||
        (node.title && node.title.toLowerCase().includes(inputText));

      if (document.getElementById(node.name)) {
        var temp = repoFiltered.get(node.name);
        temp.search = isVisible;
        repoFiltered.set(node.name, temp);
      }
    });
    renderProjects();
  };

  let filterProjects = (e) => {
    const inputTopics = e.selectedItems;
    setSelectedTopics(inputTopics);
    repoData.forEach((node) => {
      var nodeTopics = node.repositoryTopics.nodes.map((topic) => topic.topic.name);
      var inRepo = inputTopics.every((topic) => nodeTopics.includes(topic));

      if (document.getElementById(node.name)) {
        var temp = repoFiltered.get(node.name);
        temp.topic = inRepo;
        repoFiltered.set(node.name, temp);
      }
    });
    renderProjects();
  };

  // Define the filterProjectsByTag function
  let filterProjectsByTag = (tag) => {
    repoData.forEach((node) => {
      var nodeTopics = node.repositoryTopics.nodes.map((topic) => topic.topic.name);
      var inRepo = nodeTopics.includes(tag);

      if (document.getElementById(node.name)) {
        var temp = repoFiltered.get(node.name);
        temp.topic = inRepo;
        repoFiltered.set(node.name, temp);
      }
    });
    renderProjects();
  };

  return (
    <Grid fullWidth narrow>
      <Column className="banner-container" lg={16} md={8} sm={4}>
        <Column className="banner-title-container" lg={8} md={4} sm={2}>
          <p className="banner-title">Projects</p>
          <Row className='search-row'>
            <Search className="banner-search" size="lg" placeholder="Search" labelText="Search" closeButtonLabelText="Clear search input" onChange={searchProjects} />
            <FilterableMultiSelect 
              id="carbon-multiselect" 
              className="filter-search" 
              size="lg" 
              placeholder="Topics" 
              items={topicsArray} 
              itemToString={item => item ? item : ''} 
              selectionFeedback="top-after-reopen" 
              onChange={(e) => {
                setSelectedTopics(e.selectedItems);
                filterProjects(e);
              }} 
              selectedItems={selectedTopics} // Set selected items based on state
            />
          </Row>
        </Column>
        <Column className="banner-image-container" lg={8} md={4} sm={2}>
        </Column>
      </Column>
      <Column lg={16} md={8} sm={2} className="repoTiles">
        <ProjectsTiles data={repoData}></ProjectsTiles>
      </Column>
    </Grid>
  );
}

export default ProjectsPage;

