'use client';

import { Link, Grid, Column } from "@carbon/react";
import React, { useEffect, useState } from "react";
import ProjectsTable from "./ProjectsTable";

const headers = [
  {
    key: 'name',
    header: 'Name',
  },
  {
    key: 'description',
    header: 'Description',
  },
  {
    key: 'links',
    header: 'Links',
  },
];

const LinkList = ({ url, homepageUrl }) => (
  <ul style={{ display: 'flex' }}>
    <li>
      <Link href={url}>GitHub</Link>
    </li>
    {homepageUrl && (
      <li>
        <span>&nbsp;|&nbsp;</span>
        <Link href={homepageUrl}>Homepage</Link>
      </li>
    )}
  </ul>
);

const getRowItems = (rows) =>
  rows.map((row, id) => ({
    key: row,id,
    name: row.name,
    description: row.description,
    links: <LinkList url={row.url} homepageUrl={row.homepageUrl} />,
  }));

function ProjectsPage() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    function getGitHubRepos() {
      console.log(process.env.NEXT_PUBLIC_GITHUB_AUTH)
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

    // only save the ones that have a homepageUrl
    for (const [key, value] of Object.entries(obj)) {
        var homepageUrl = value.node.homepageUrl;
        
        if (homepageUrl != null && homepageUrl != "")
        {
            nodes.push(value.node);
        }

            // create a tile with each of these...
      }
    })
    .then(() => {
      console.log(nodes);
      setRows(getRowItems(nodes));
    });
    }
    getGitHubRepos();
  }, []);

  return (
    <Grid className="repo-page">
      <Column lg={16} md={8} sm={4} className="repo-page__r1">
        <ProjectsTable headers={headers} rows={rows} />
      </Column>
    </Grid>
  );
}

export default ProjectsPage;



