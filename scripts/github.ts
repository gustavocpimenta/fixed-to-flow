// GitHub integration helper
import { Octokit } from '@octokit/rest'

let connectionSettings: any;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=github',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('GitHub not connected');
  }
  return accessToken;
}

export async function getUncachableGitHubClient() {
  const accessToken = await getAccessToken();
  return new Octokit({ auth: accessToken });
}

async function createRepoAndPush() {
  try {
    const octokit = await getUncachableGitHubClient();
    
    // Get authenticated user
    const { data: user } = await octokit.users.getAuthenticated();
    console.log(`Authenticated as: ${user.login}`);
    
    // Create the repository
    const repoName = 'fixed-to-flow';
    
    try {
      const { data: repo } = await octokit.repos.createForAuthenticatedUser({
        name: repoName,
        description: 'Fixed to Flow - Helping people, teams, and organizations adapt to change through strategy, training, and AI-powered tools.',
        private: false,
        auto_init: false
      });
      console.log(`Repository created: ${repo.html_url}`);
    } catch (error: any) {
      if (error.status === 422) {
        console.log(`Repository '${repoName}' already exists. Will push to existing repo.`);
      } else {
        throw error;
      }
    }
    
    // Output the remote URL for git commands
    console.log(`\nRemote URL: https://github.com/${user.login}/${repoName}.git`);
    console.log(`\nRun the following commands to push:`);
    console.log(`git remote add origin https://github.com/${user.login}/${repoName}.git`);
    console.log(`git push -u origin main`);
    
    return { username: user.login, repoName };
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

createRepoAndPush();
