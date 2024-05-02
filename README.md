# Website

This website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

## Configuration

**Install Bun**:

```bash
# Supported on macOS, Linux, and WSL

curl -fsSL https://bun.sh/install | bash

# Upgrade Bun every once in a while

bun upgrage

```

**Recommended Editor**: VsCode. For the best experience, install the Eslint and Prettier extensions.

Start by setting up your environment:

### Installation

```
$ bun i
```

### Local Development

```
$ bun start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ bun run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
