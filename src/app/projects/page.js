'use client';

import { Grid, Column, Search, FilterableMultiSelect } from "@carbon/react";
import React, { useEffect, useState } from "react";
import ProjectsTiles from "./ProjectsTiles";

import data from "../../../repoData.json"

var repoData = data.organization.repositories.nodes.filter(repo => repo.publish === 'True');
var tags = new Set()
repoData.forEach((node) => {
  node.repositoryTopics.nodes.forEach((tag) => {
    tags.add(tag.topic.name)
  })
})
const tagsArray = Array.from(tags)


function ProjectsPage() {

  let searchProjects = (e) => {
    const inputText = e.target.value.toLowerCase();
    repoData.forEach((node) => {
      console.log(node)
      var inTag = false
      node.repositoryTopics.nodes.forEach((tag) => {
        if (tag.topic.name.toLowerCase().includes(inputText)) {
          inTag = true
        }
      })
      

      var isVisible =
        inTag ||
        node.name && node.name.toLowerCase().includes(inputText) ||
        node.description &&
        node.description.toLowerCase().includes(inputText) ||
        node.title && node.title.toLowerCase().includes(inputText);

      if (document.getElementById(node.name)) {
        if (isVisible)
          document.getElementById(node.name).style.display = "block";
        else
          document.getElementById(node.name).style.display = "none";
      }
    })
  }

  let filterProjects = (e) => {
    const inputTags = e.selectedItems;
    repoData.forEach((node) => {
      console.log(node)
      var inRepo = false
      node.repositoryTopics.nodes.forEach((tag) => {
        if (inputTags.includes(tag.topic.name.toLowerCase())) {
          inRepo = true
        }
      })

      if (document.getElementById(node.name)) {
        if (!inRepo)
          document.getElementById(node.name).style.display = "none";
      }
    })
  }


  return (
    <Grid fullWidth narrow>
      <Column className="banner-container" lg={16} md={8} sm={4}>
        <Column className="banner-title-container" lg={8} md={4} sm={2}>
          <p className="banner-title">Projects</p>
          <Search className="banner-search" size="lg" placeholder="Find a project" labelText="Search" closeButtonLabelText="Clear search input" onChange={searchProjects} />
          <FilterableMultiSelect id="carbon-multiselect" titleText="Filter by tag" items={tagsArray} itemToString={item => item ? item : ''} selectionFeedback="top-after-reopen" onChange={filterProjects}/>
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



