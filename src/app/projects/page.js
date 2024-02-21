'use client';

import { Grid, Column, Search } from "@carbon/react";
import React, { useEffect, useState } from "react";
import ProjectsTiles from "./ProjectsTiles";
import Loading from "@carbon/react/lib/components/Loading";
import getGitHubRepos from "./getGitHubRepos";
import getTitles from "./getTitles";


var nodes = [];

// filters repos, adds topics and sets up titles array to query the custom properties
function extractRepos(queryResult) {
  var obj = queryResult.data.search.edges;
  let i = 0;

  // only save the ones that have a homepageUrl
  for (const [, value] of Object.entries(obj)) {
    var homepageUrl = value.node.homepageUrl;
    var repoTopics = value.node.repositoryTopics;

    if (homepageUrl != null && homepageUrl != "") {
      nodes.push(value.node);

      nodes[i].repositoryTopics = [];
      for (const [, value3] of Object.entries(repoTopics)) {
        for (const [, value4] of Object.entries(value3)) {
          nodes[i].repositoryTopics.push(value4.topic.name);
        }
      }
      i++;
    }
  }
}

function ProjectsPage() {
  const [repoData, setRepoData] = useState([]);
  const [loading, setLoading] = useState(true);

  let searchProjects = (e) => {
    const inputText = e.target.value.toLowerCase();

    nodes.forEach((node) => {
      var isVisible =
        node.name && node.name.toLowerCase().includes(inputText) ||
        node.description &&
        node.description.toLowerCase().includes(inputText);

      if (document.getElementById(node.name)) {
        if (isVisible)
          document.getElementById(node.name).style.display = "block";
        else
          document.getElementById(node.name).style.display = "none";
      }
    })

    setRepoData(nodes);
  }

  useEffect(() => {
    async function pageLoad() {
      setLoading(true);
      extractRepos(await getGitHubRepos());
      setRepoData(await getTitles(nodes));
      setLoading(false);

    };

    pageLoad();

  }, []);

  if (loading || repoData.length == 0)
    return (
      <Grid fullWidth narrow>
        <Column className="banner-container" lg={16} md={8} sm={4}>
          <Column className="banner-title-container" lg={8} md={4} sm={2}>
            <p className="banner-title">Projects</p>
            <Search className="banner-search" size="lg" placeholder="Find a project" labelText="Search" closeButtonLabelText="Clear search input" />
          </Column>
          <Column className="banner-image-container" lg={8} md={4} sm={2}>
          </Column>
        </Column>
        <Column lg={16} md={8} sm={4} className="repoTiles">
          <Loading />
        </Column>
      </Grid>
    );
  else {
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
}

export default ProjectsPage;



