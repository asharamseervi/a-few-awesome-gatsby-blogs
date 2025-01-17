# Escalade Sports Project Boilerplate

## Requirements

- [yarn](https://yarnpkg.com/)
- [nvm](https://github.com/creationix/nvm)
- [Netlify CLI](https://www.netlify.com/docs/cli/)
- [Git LFS](https://github.com/git-lfs/git-lfs?utm_source=gitlfs_site&utm_medium=repo_link&utm_campaign=gitlfs)
- [Netlify Credential Helper](https://github.com/netlify/netlify-credential-helper)
  - Note: you will also need to add these lines to your `~/.gitconfig` file located in the home directory
    ```bash
    [credential]
      helper = netlify
    ```
- Netlify CLI Large Media Plugin
  ```bash
  netlify plugins:install netlify-lm-plugin
  netlify lm:install
  ```

## Installation

```bash
git clone git@github.com:escaladesports/gatsby-boilerplate.git your-website
cd your-website
nvm use
yarn
yarn reset
rm -rf .git
netlify unlink
git init
```

Create a GitHub repository and copy the remote URL for the next step.

```bash
git remote add origin git@github.com:REMOTE_GIT_SITE.git
git add package.json
git commit -m 'Initial commit'
git push origin master
```

Setup new Netlify site using your new repo. Note that your first build will likely fail until the rest of these instructions are completed. Also make sure to input any environment variables you may need into Netlify or a `.env` file for local development. You can see suggested environment variables in the `.env.example` file.

```bash
netlify link
netlify lm:setup
git add .
git commit -m 'Project files'
git push origin master
```

## Setup for an existing project

```bash
git clone REMOTE_URL folder-name
cd folder-name
netlify lm:setup
git lfs fetch
git lfs pull
nvm use
yarn
```

## Usage

- `yarn dev`: Starts up live development server
- `yarn build`: Builds site for production
- `yarn reset`: Changes the project name in `package.json` to match the directory, resets the version number, and resets the git history.
- `yarn env`: Pulls Netlify environment variables into a local `.env` file. (Only works if you have logged into [Netlify CLI](https://www.netlify.com/docs/cli/) at least once and have permissions to the Netlify site)

## Images

All UI related images that belong in the template can be stored in the repository in the `src` directory. Any images that need to be edited through the CMS should be stored in `static/media` which will get checked in via git LFS to prevent the repository size from getting out of control.

## Schema

The GraphQL schema is stored in `./src/schema.gql`. This is typically used to make sure the build script doesn't break whenever required fields in the markdown files are emptied out. If you delete the schema file, a snapshot of the current schema will be created the next time you run `yarn build` or `yarn dev`. This can be useful if you don't want to go through the hassle of writing it out yourself.

If you get an error that looks like this: `Type with name "MarkdownRemarkFrontmatter" does not exists`, you just need to add the node specified to the `include` list on the schema plugin in the `gatsby-config.js` file. In this case, you would add `MarkdownRemarkFrontmatter` to the include list.

## Netlify CMS

Unless you're using the "invite only" option in Netlify Identity, make sure to add the "admin" role in the Git Gateway settings. Then add the "admin" role to any users you want to have access to the CMS.

You'll also need to point Netlify to your Netlify CMS email templates. These templates will change the Identity transactional emails to point to the `/admin` page instead of the home page. This can be found in the Netlify dashboard under "Settings -> Identity -> Emails". Change the template paths to:

- Invitation template: `/email-templates/cms-invitation`
- Confirmation template: `/email-templates/cms-confirmation`
- Recovery template: `/email-templates/cms-password-recovery`
- Email change template: `/email-templates/cms-email-change`

The CMS config is actually multiple .yml files in the `src/cms-config` directory. The `index.yml` file will always go to the top of the production config and the remaining files will go under `collections`. You can also user environment variables in the source. (example: `env.API_KEY`)

## Netlify Config, Redirects, and Headers

The Netify config file is located in `src/netlify.toml` and is transpiled to the root directory on `yarn dev` and `yarn build`. This allows you to use environment variables in the source config (example: `env.API_KEY`) that will be injected into the root config. Since these changes are one way, you should never edit the config that's in the root.