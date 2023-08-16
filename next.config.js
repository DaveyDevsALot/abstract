const currentGitBranchName = require('current-git-branch')
const currentBranchName = currentGitBranchName()
// next.config.js
module.exports = {
  // ... rest of the configuration.
  env: {
    GIT_BRANCH: process.env.GIT_BRANCH || currentBranchName,
  },
  output: 'standalone',
}
