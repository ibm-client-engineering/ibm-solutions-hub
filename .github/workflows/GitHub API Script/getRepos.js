const { request } = require('graphql-request');
const fs = require('fs');

const query = `
  query($org: String!) {
    organization(login: $org) {
      repositories(first: 100) {
        nodes {
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
`;

const variables = {
  org: 'ibm-client-engineering',
  sort: 'updated'
};

const endpoint = 'https://api.github.com/graphql';

(async () => {
  try {
    const response = await request(endpoint, query, variables, {
      Authorization: `Bearer ${process.argv[2]}`
    });

    const data = [];

    response.organization.repositories.nodes.forEach(repo => {
      const repoData = {
        name: repo.name,
        description: repo.description,
        homepageUrl: repo.homepageUrl,
        topics: repo.repositoryTopics.nodes.map(topic => topic.topic.name)
      };
      data.push(repoData);
    });

    // Export data to JSON file
    fs.writeFileSync('repoData.json', JSON.stringify(data, null, 2));
    console.log('Data exported to repoData.json successfully.');
  } catch (error) {
    console.error('Error fetching repository info:', error);
  }
})();
