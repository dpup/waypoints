# Contributing to Waypoints

We welcome contributions to improve and expand the content of this career development framework site! To ensure consistency and maintain a clear version history, we follow a commit message convention based on a variation of [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). This document outlines how to structure your commit messages and how versioning is handled in this repository.

Minor changes may impact review processes and how the framework is deployed, but shouldn't affect anyone's level. Major changes on the other hand may affect how people are leveled, so please consider opening an Issue beforehand to discuss your proposed changes.

## Code of Conduct

We are committed to fostering an inclusive and welcoming community. By contributing to this project, you agree to:

- **Be respectful**: Treat others with kindness and respect, valuing diverse perspectives.
- **Be constructive**: Provide helpful feedback and avoid unproductive criticism.
- **Be inclusive**: Ensure that your contributions are accessible and considerate of all users.
- **Be responsible**: Follow the contribution guidelines and adhere to versioning rules to maintain consistency.

Unacceptable behavior includes harassment, discriminatory language, or any actions that make others feel unwelcome or unsafe. Violations of this code of conduct may result in temporary or permanent bans from contributing.

## Commit Message Guidelines

All commit messages should follow the format:

```
<type>: <short description>
```

Where `<type>` is one of the following:

### **Types of Commits**

| Type       | Description                                                   | Version Impact    |
| ---------- | ------------------------------------------------------------- | ----------------- |
| `tweak`    | Fixes typos, grammatical errors, or formatting issues.        | Patch (x.x.PATCH) |
| `content`  | Adds minor clarifications or adjustments to existing content. | Minor (x.MINOR.x) |
| `content!` | Introduces significant content changes or new sections.       | Major (MAJOR.x.x) |
| `meta`     | Updates to documentation metadata (e.g., tags, author info).  | No impact         |
| `site`     | Changes to site, styles, or appearance.                       | No impact         |
| `tooling`  | Changes to build scripts, CI/CD, or infrastructure.           | No impact         |
| `chore`    | Run autoformat, update dependencies, etc.                     | No impact         |

### Commit Message Examples

- **Fix a typo or grammar mistake:**

  ```
  tweak: correct spelling in L2 mentorship rubric
  ```

- **Make a minor content adjustment:**

  ```
  content: update L4 Strategy section to be more less ambiguous
  ```

- **Add a new section to the framework:**

  ```
  content!: add new specialization pathway for technical leadership
  ```

- **Update the layout without affecting content:**

  ```
  site: adjust header spacing for mobile view
  ```

- **Modify a build process or CI/CD workflow:**

  ```
  tooling: update pre-commit hooks for markdown linting
  ```

- **Update metadata:**
  ```
  meta: add contributor name to the acknowledgments
  ```

### Versioning Rules

We use Git tags to manage versioning, which is calculated based on commit types:

- **Patch (`x.x.PATCH`)**: Triggered by `tweak` commits.
- **Minor (`x.MINOR.x`)**: Triggered by `content` commits.
- **Major (`MAJOR.x.x`)**: Triggered by `content!` commits.
- **No Version Change**: Triggered by `site`, `tooling`, or `meta` commits.

#### Examples

| Commit Message                                      | New Version |
| --------------------------------------------------- | ----------- |
| `tweak: correct typo in L3 collaboration rubric`    | 1.0.1       |
| `content: clarify L2 mentorship examples`           | 1.1.0       |
| `content!: add new progression path for tech leads` | 2.0.0       |
| `site: update header appearance`                    | No change   |
