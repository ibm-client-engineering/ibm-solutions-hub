'use client';

import { Grid, Column, Search } from "@carbon/react";
import React, { useEffect, useState } from "react";
import ProjectsTiles from "./ProjectsTiles";
import Loading from "@carbon/react/lib/components/Loading";


const { Octokit, App } = require("@octokit/core");

// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
  auth: `bearer ${process.env.NEXT_PUBLIC_GITHUB_AUTH}`
})

var nodes = [];
var titles = [];

// filters repos, adds topics and sets up titles array to query the custom properties
function extractRepos(queryResult) {
  var obj = queryResult.data.search.edges;
  let i=0;

  // only save the ones that have a homepageUrl
  for (const [, value] of Object.entries(obj)) {
    var homepageUrl = value.node.homepageUrl;
    var repoTopics = value.node.repositoryTopics;

    if (homepageUrl != null && homepageUrl != "")
    {
        nodes.push(value.node);
        titles.push(nodes[i].name);

        nodes[i].repositoryTopics = [];
        for (const [, value3] of Object.entries(repoTopics)){
          for (const [, value4] of Object.entries(value3)){
            nodes[i].repositoryTopics.push(value4.topic.name);
          }
        }
        i++;
    }
  }
}

// tries to find the title custom property for each repo to replace the name
async function replaceTitles() {
      // get custom properties to update titles
      for (let i = 0; i < titles.length; i++) {
        try {
          const res = await octokit.request('GET /repos/{owner}/{repo}/properties/values', {
            owner: 'ibm-client-engineering',
            repo: titles[i],
            headers: {
              'X-GitHub-Api-Version': '2022-11-28'
            }
          })
    
          for (let j = 0; j < res.data.length; j++)
            if (res.data[j].property_name == 'Title')
            {
              // replace name with title if custom prop exists
              nodes[i].name = res.data[j].value;
              continue;        
            }
          }
        catch (error) {
          console.log(error);
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
    async function getGitHubRepos() {
      setLoading(true);
      var result;
      try {
        const res = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `bearer ${process.env.NEXT_PUBLIC_GITHUB_AUTH}`,
        },
        body: JSON.stringify({
          query: `
              query myOrgRepos($queryString: String!) {
                  search(query: $queryString, type: REPOSITORY, first: 100) {
                  repositoryCount
                  edges {
                      node {
                      ... on Repository {
                          name
                          description
                          homepageUrl
                          repositoryTopics(first: 5) {
                            nodes {
                                topic {
                                    name
                                }
                            }
                        }
                      }
                      }
                  }
                  }
              }
            `,
          variables: {
            queryString: "org:ibm-client-engineering sort:updated",
          },
        }),
        })
        // when res (response) is valid, turn it into a json
        result = await res.json();

        // once we have the json from the result, we can parse the data
        extractRepos(result);
        await replaceTitles();
        //if (nodes != repoData)
        setRepoData(nodes);
        setLoading(false);
      }
      catch (error) {
        console.log(`ERROR: ${error}`)
      }

    };

    getGitHubRepos();

  }, []);

  if (loading || repoData.length == 0)
    return (
      <Grid fullWidth narrow>
        <Column className="banner-container" lg={16} md={8} sm={4}>
            <Column className="banner-title-container" lg={8} md={4} sm={2}>
              <p className="banner-title">Projects</p>
              <Search className="banner-search" size="lg" placeholder="Find a project" labelText="Search" closeButtonLabelText="Clear search input"/>
            </Column>
            <Column className="banner-image-container" lg={8} md={4} sm={2}>
            </Column>
        </Column>
        <Column lg={16} md={8} sm={4} className="repoTiles">
          <Loading/>
        </Column>
      </Grid>
    );
  else {
    return (
      <Grid fullWidth narrow>
        <Column className="banner-container" lg={16} md={8} sm={4}>
            <Column className="banner-title-container" lg={8} md={4} sm={2}>
              <p className="banner-title">Projects</p>
              <Search className="banner-search" size="lg" placeholder="Find a project" labelText="Search" closeButtonLabelText="Clear search input" onChange={searchProjects}/>
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



