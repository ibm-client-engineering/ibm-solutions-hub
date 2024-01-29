'use client';

import { Link, Grid, Column } from "@carbon/react";
import React, { useEffect, useState } from "react";
import ProjectsTiles from "./ProjectsTiles";


function ProjectsPage() {
  const [repoData, setRepoData] = useState([]);

  useEffect(() => {
    function getGitHubRepos() {
      var result;
      var nodes = [];
      fetch('https://api.github.com/graphql', {
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
                        url
                        homepageUrl
                        repositoryTopics(first: 100) {
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
    .then((res) => res.json())
    .then(data => {
      result = data;
    })
    .then(() => {
      var obj = result.data.search.edges;
      let i=0;

    // only save the ones that have a homepageUrl
    for (const [key, value] of Object.entries(obj)) {
        var homepageUrl = value.node.homepageUrl;
        var repoTopics = value.node.repositoryTopics;

        if (homepageUrl != null && homepageUrl != "")
        {
            nodes.push(value.node);
            nodes[i].repositoryTopics = [];
            for (const [key3, value3] of Object.entries(repoTopics)){
              for (const [key4, value4] of Object.entries(value3)){
                nodes[i].repositoryTopics.push(value4.topic.name);
              }
            }
            i++;
        }
      }
    })
    .then(() => {
      console.log(nodes);
      setRepoData(nodes);
    });
    }
    getGitHubRepos();
  }, []);

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



