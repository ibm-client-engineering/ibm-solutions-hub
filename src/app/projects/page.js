'use client';

import { Grid, Column, Search, FilterableMultiSelect, Row } from "@carbon/react";
import React, { useState, useEffect } from "react";
import ProjectsTiles from "./ProjectsTiles";
import data from "../../../repoData.json";

const repoData = data.organization.repositories.nodes.filter(repo => repo.publish === 'True');
// For checking if the repo falls under the current search or topic filters
// It maps the repo name to an object that describes if it falls under the search filter and/or the topic .ilter
const repoFiltered = new Map(); 
const industries = new Set();
const techs = new Set();
repoData.forEach((node) => {
  repoFiltered.set(node.name, { "industry": true, "search": true, "tech": true });
  industries.add(node.industry);
  //if the object has a technology field, add it to the techs set
  Object.hasOwn(node, "technology") ? node.technology.forEach((tech) => {techs.add(tech);}) : {};
});
const techsArray = Array.from(techs);
const industriesArray = Array.from(industries);

// Parse URL parameters outside the component
const urlParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
const industry = urlParams ? urlParams.get('industry') : null;
const initialSelectedIndustries = industry ? [industry] : [];
const tech = urlParams ? urlParams.get('tech') : null;
const initialSelectedTechs = tech ? [tech] : [];


function ProjectsPage() {
  const [selectedTechs, setSelectedTechs] = useState(initialSelectedTechs);
  const [selectedIndustries, setSelectedIndustries] = useState(initialSelectedIndustries);

  // Define the renderProjects function, which updates the page based on the user inputted filters
  const renderProjects = () => {
    repoData.forEach((node) => {
      if (document.getElementById(node.name)) {
        if (repoFiltered.get(node.name).industry && repoFiltered.get(node.name).search && repoFiltered.get(node.name).tech) {
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
        const nodeTechs = node.technology;
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

    //callback function for the industry filter, filters the projects by the industries selected
    const filterProjectsIndustry = (e) => {
      const inputIndustries = e.selectedItems;
      setSelectedIndustries(inputIndustries);
      repoData.forEach((node) => {
        const nodeIndustry = node.industry
        //Need to check that the repo has an industry field (it should), and if it does need to check if the selected industry/industries match
        //in the case where the repo has no industry listed, still needs to be true if there are no selected techs
        const inRepo =  inputIndustries.some((industry) => Object.hasOwn(node, "industry") ? nodeIndustry === industry : inputIndustries.length == 0);

        if (document.getElementById(node.name)) {
          const temp = repoFiltered.get(node.name);
          temp.industry = inputIndustries.length > 0 ? inRepo : true;
          repoFiltered.set(node.name, temp);
        }
      });
      renderProjects();
    };

  return (
    <Grid fullWidth narrow>
      <Column className="banner-container" lg={16} md={8} sm={4}> {/*lg={16} md={8} sm={4}*/}
        <Column className="banner-title-container" lg={8} md={4} sm={2}> {/*lg={8} md={4} sm={2}*/}
          <p className="banner-title">Projects</p>
        </Column>
        <Column className="banner-image-container" lg={8} md={4} sm={2}></Column>
      </Column>
      <Column className='search-row' lg={16} md={8} sm={4}>
        <Column className="filters__col">
          <Column>
          <FilterableMultiSelect 
            id="carbon-multiselect" 
            className="filter-search" 
            size="lg" 
            placeholder="Industry" 
            items={industriesArray} 
            itemToString={item => item ? item : ''} 
            selectionFeedback="top-after-reopen" 
            onChange={filterProjectsIndustry} 
            initialSelectedItems={selectedIndustries} // Set selected items based on state
          />
          </Column>
          <Column>
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
          </Column>
        </Column>
        
        <Column className="search_projects__col">
          <Column className="searchbar__col">
            <Search className="banner-search" size="lg" placeholder="Search" labelText="Search" closeButtonLabelText="Clear search input" onChange={searchProjects} />
          </Column>
          <Column className="repoTiles">
            <ProjectsTiles data={repoData}></ProjectsTiles>
          </Column>

        </Column>
      </Column>
        

    </Grid>
  );
}

export default ProjectsPage;

