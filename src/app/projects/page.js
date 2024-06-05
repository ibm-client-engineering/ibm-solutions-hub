'use client';

import { Grid, Column, Search } from "@carbon/react";
import React, { useEffect, useState } from "react";
import ProjectsTiles from "./ProjectsTiles";

import data from "../../../repoData.json"

var repoData = data.organization.repositories.nodes.filter(repo => repo.publish === 'True');

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

  return (
    <Grid fullWidth narrow>
      <Column className="banner-container" lg={16} md={8} sm={4}>
        <Column className="banner-title-container" lg={8} md={4} sm={2}>
          <p className="banner-title">Projects</p>
          <Search className="banner-search" size="lg" placeholder="Find a project" labelText="Search" closeButtonLabelText="Clear search input" onChange={searchProjects} />
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



