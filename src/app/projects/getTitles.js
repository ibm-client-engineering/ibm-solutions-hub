// tries to find the title custom property for each repo to replace the name

const { Octokit, App } = require("@octokit/core");

// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
  auth: `bearer ${process.env.NEXT_PUBLIC_GITHUB_AUTH}`
})

export default async function getTitles(nodes) {
    // get custom properties to update titles
    for (let i = 0; i < nodes.length; i++) {
        try {
            const res = await octokit.request('GET /repos/{owner}/{repo}/properties/values', {
                owner: 'ibm-client-engineering',
                repo: nodes[i].name,
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28'
                }
            })

            for (let j = 0; j < res.data.length; j++)
                if (res.data[j].property_name == 'Title') {
                    // replace name with title if custom prop exists
                    nodes[i].name = res.data[j].value;
                    continue;
                }
        }
        catch (error) {
            console.log(error);
        }
    }
    return nodes;
}

