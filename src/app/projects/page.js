'use client';

import { Link, Grid, Column } from "@carbon/react";
import React, { useEffect, useState } from "react";
import ProjectsTiles from "./ProjectsTiles";

const { Octokit, App } = require("@octokit/core");

// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
  auth: `bearer ${process.env.NEXT_PUBLIC_GITHUB_AUTH}`
})

var nodes = [];
var titles = [];

async function extractNodes(queryResult) {
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

async function replaceTitles() {
      // get custom properties to update titles
      for (let i = 0; i < titles.length; i++) {
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
}

function ProjectsPage() {
  const [repoData, setRepoData] = useState([]);
  const [loading, setLoading] = useState(true);

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
        await extractNodes(result);
        await replaceTitles();
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
    return 'Loading...';
  else
    return (
      <Grid fullWidth>
        <Column className="banner-container" lg={16} md={8} sm={4}>
            <Column className="banner-title-container" lg={8} md={4} sm={2}>
              <h1 className="banner-title">Projects</h1>
            </Column>
            <Column className="banner-image-container" lg={8} md={4} sm={2}>
            </Column>
        </Column>
        <Column lg={4} md={2} sm={1}>
          FILTER SETTING
        </Column>
        <Column lg={12} md={6} sm={3} className="repoTiles">
          <ProjectsTiles data={repoData}/>
        </Column>
      </Grid>
    );
}

export default ProjectsPage;



