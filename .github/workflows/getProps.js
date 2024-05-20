module.exports = async ({repoData, Octokit}) => {

    const octokit = new Octokit({
        auth: `bearer ${process.env.GITHUB_TOKEN}`
    })

    for (let i = 0; i < repoData.organization.repositories.nodes.length; i++) {
        const res = await octokit.request('GET /repos/{owner}/{repo}/properties/values', {
            owner: 'ibm-client-engineering',
            repo: repoData.organization.repositories.nodes[i].name,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })

        for (let j = 0; j < res.data.length; j++) {
            if (res.data[j].property_name == 'Title') {
                repoData.organization.repositories.nodes[i].title = res.data[j].value;
            }
            if (res.data[j].property_name == 'Publish') {
                repoData.organization.repositories.nodes[i].publish = res.data[j].value;
            }
        }
    }

    return repoData;

}
