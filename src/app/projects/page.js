'use client';

import { Grid, Column, Search, FilterableMultiSelect, Row } from "@carbon/react";
import React, { useEffect, useState } from "react";
import ProjectsTiles from "./ProjectsTiles";

import data from "../../../repoData.json"

var repoData = data.organization.repositories.nodes.filter(repo => repo.publish === 'True');
var repoFiltered = new Map() //for checking if the repo falls under the current search or tag filters
var tags = new Set()
repoData.forEach((node) => {
  repoFiltered.set(node.name, {"tag": true, "search": true})
  node.repositoryTopics.nodes.forEach((tag) => {
    tags.add(tag.topic.name)
  })
})
const tagsArray = Array.from(tags)


function ProjectsPage() {

  let renderProjects = () => {
    repoData.forEach((node) => {
      if (document.getElementById(node.name)) {
        if (repoFiltered.get(node.name).tag && repoFiltered.get(node.name).search)
          document.getElementById(node.name).style.display = "block";
        else
          document.getElementById(node.name).style.display = "none";
      }
    })
  }

  let searchProjects = (e) => {
    const inputText = e.target.value.toLowerCase();
    repoData.forEach((node) => {
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
        var temp = repoFiltered.get(node.name)
        temp.search = isVisible
        repoFiltered.set(node.name, temp)
    }})
    renderProjects()
  }

  let filterProjects = (e) => {
    const inputTags = e.selectedItems;
    repoData.forEach((node) => {
      var nodeTags = node.repositoryTopics.nodes.map((tag) => tag.topic.name)
      var inRepo = inputTags.every((tag) => nodeTags.includes(tag))

      if (document.getElementById(node.name)) {
        var temp = repoFiltered.get(node.name)
        temp.tag = inRepo
        repoFiltered.set(node.name, temp)
      }
    })
    renderProjects()
  }


  return (
    <Grid fullWidth narrow>
      <Column className="banner-container" lg={16} md={8} sm={4}>
        <Column className="banner-title-container" lg={8} md={4} sm={2}>
          <p className="banner-title">Projects</p>
          <Row className='search-row'>
            <Search className="banner-search" size="lg" placeholder="Search" labelText="Search" closeButtonLabelText="Clear search input" onChange={searchProjects} />
            <FilterableMultiSelect id="carbon-multiselect" className="filter-search" size="lg" placeholder="Tags" items={tagsArray} itemToString={item => item ? item : ''} selectionFeedback="top-after-reopen" onChange={filterProjects}/>
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



