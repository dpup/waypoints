import { execSync } from 'child_process';

/**
 * Get commit messages since the last tag
 */
function getCommitMessages(latestTag) {
  const cmd =
    latestTag === 'v0.0.0' ? 'git log --format=%B' : `git log ${latestTag}..HEAD --format=%B`;

  try {
    const output = execSync(cmd, { encoding: 'utf8' });
    return output
      .trim()
      .split('\n')
      .filter((msg) => msg.trim());
  } catch (error) {
    console.error('Error getting commit messages:', error);
    return [];
  }
}

/**
 * Parse version string into components
 */
function parseVersion(versionStr) {
  return versionStr
    .replace('v', '')
    .split('.')
    .map((num) => parseInt(num, 10));
}

/**
 * Calculate new version based on commit messages
 */
function incrementVersion(currentVersion, messages) {
  let [major, minor, patch] = parseVersion(currentVersion);

  // Define impact rules with regex patterns
  const impactRules = [
    { pattern: /^tweak/i, impact: [0, 0, 1] }, // Patch increment
    { pattern: /^content(?!!):/, impact: [0, 1, 0] }, // Minor increment
    { pattern: /^content!:/, impact: [1, 0, 0] }, // Major increment
    { pattern: /^site:/, impact: [0, 0, 0] }, // No increment
    { pattern: /^tooling:/, impact: [0, 0, 0] }, // No increment
    { pattern: /^meta:/, impact: [0, 0, 0] }, // No increment
  ];

  // Process each commit message
  for (const msg of messages) {
    for (const { pattern, impact } of impactRules) {
      if (pattern.test(msg)) {
        const [maj, min, pat] = impact;
        if (maj) {
          major += 1;
          minor = 0;
          patch = 0;
        } else if (min) {
          minor += 1;
          patch = 0;
        } else if (pat) {
          patch += 1;
        }
        break;
      }
    }
  }

  return `v${major}.${minor}.${patch}`;
}

// Get input from GitHub Actions environment
const latestTag = process.env.LATEST_TAG || 'v0.0.0';

// Calculate new version
const commitMessages = getCommitMessages(latestTag);
const newVersion = incrementVersion(latestTag, commitMessages);

// Output for GitHub Actions
console.log(`new_version=${newVersion}`);
