export default async function getGitHubRepos() {
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
    });

    return res.json();
}
