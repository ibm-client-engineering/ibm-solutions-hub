'use client';

import { Grid, Column, Search, FilterableMultiSelect, Row } from "@carbon/react";
import React, { useState, useEffect } from "react";
import ProjectsTiles from "./ProjectsTiles";
import data from "../../../repoData.json";

const repoData = data.organization.repositories.nodes.filter(repo => repo.publish === 'True');
// For checking if the repo falls under the current search or topic filters
// It maps the repo name to an object that describes if it falls under the search filter and/or the topic .ilter
const repoFiltered = new Map(); 
const topics = new Set();
const techs = new Set();
repoData.forEach((node) => {
  repoFiltered.set(node.name, { "topic": true, "search": true, "tech": true });
  node.repositoryTopics.nodes.forEach((topic) => {
    topics.add(topic.topic.name);
  });
  //if the object has a technology field, add it to the techs set
  Object.hasOwn(node, "technology") ? node.technology.forEach((tech) => {techs.add(tech);}) : {};
});
const techsArray = Array.from(techs);

// Parse URL parameters outside the component
const urlParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
const tech = urlParams ? urlParams.get('tech') : null;
const initialSelectedTechs = tech ? [tech] : [];

function ProjectsPage() {
  const [selectedTechs, setSelectedTechs] = useState(initialSelectedTechs);

  // Define the renderProjects function, which updates the page based on the user inputted filters
  const renderProjects = () => {
    repoData.forEach((node) => {
      if (document.getElementById(node.name)) {
        if (repoFiltered.get(node.name).topic && repoFiltered.get(node.name).search && repoFiltered.get(node.name).tech) {
          document.getElementById(node.name).style.display = "block";
        } else {
          document.getElementById(node.name).style.display = "none";
        }
      }
    });
  };

  //take the search value and see if it matches (at least partially) the name, title, description, or industry
  //updates the repoFiltered object, and calls renderProjects()
  const searchProjects = (e) => {
    const inputText = e.target.value.toLowerCase();
    repoData.forEach((node) => {
      let inTopic = false;
      let inTech = false;
      node.repositoryTopics.nodes.forEach((topic) => {
        if (topic.topic.name.toLowerCase().includes(inputText)) {
          inTopic = true;
        }
      });
      node.technology?.forEach((tech) => {
        if (tech.toLowerCase().includes(inputText)) {
          inTech = true;
        }
      });

      const isVisible = 
        inTopic || inTech ||
        (node.name && node.name.toLowerCase().includes(inputText)) ||
        (node.description && node.description.toLowerCase().includes(inputText)) ||
        (node.title && node.title.toLowerCase().includes(inputText)) ||
        (node.industry && node.industry.toLowerCase().includes(inputText));

      if (document.getElementById(node.name)) {
        const temp = repoFiltered.get(node.name);
        temp.search = isVisible;
        repoFiltered.set(node.name, temp);
      }
    });
    renderProjects();
  };

    //callback function for the technology filter, filters the projects by the technologies selected
    const filterProjectsTech = (e) => {
      const inputTechs = e.selectedItems;
      setSelectedTechs(inputTechs);
      repoData.forEach((node) => {
        const nodeTechs = node.technology
        //Need to check that the repo has a technology field, and if it does need to check if the selected tech(s) is in that array
        //in the case where the repo has no techs listed, still needs to be true if there are no selected techs
        const inRepo =  inputTechs.every((tech) => Object.hasOwn(node, "technology") ? nodeTechs.includes(tech) : inputTechs.length == 0);

        if (document.getElementById(node.name)) {
          const temp = repoFiltered.get(node.name);
          temp.tech = inRepo;
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
              placeholder="Technology" 
              items={techsArray} 
              itemToString={item => item ? item : ''} 
              selectionFeedback="top-after-reopen" 
              onChange={filterProjectsTech} 
              initialSelectedItems={selectedTechs} // Set selected items based on state
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

