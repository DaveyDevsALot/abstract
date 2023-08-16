const currentGitBranchName = require("current-git-branch");

// next.config.js
module.exports = {
  // ... rest of the configuration.
  output: 'standalone',
  env: {
    GIT_BRANCH: currentGitBranchName()
  }
}