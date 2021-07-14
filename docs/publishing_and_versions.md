# Publishing to NPM and Versioning

## Publishing

Package publishing is handled via our custom yarn plugin. To publish use the `yarn workspaces release` command.

This command safeguards from accidental stable release of a prerelease version, so it's use is recommended over manual publishing.

### Usage

`yarn workspaces release [options] <...packages | -A,--all>`

This command accepts a list of package names contained in the project to be published, **OR** the `-A,--all` flag.

### Options
| Definition             | Description                                                                                                            |
|------------------------|------------------------------------------------------------------------------------------------------------------------|
| `-A,--all`             | Publish _all_ public repositories in the current project.                                                              |
| `-C,--canary`          | Tags the release as `canary`. The standard prerelease tag for @FuelRats projects.                                      |
| `--tag #0`             | The tag on the registry that the package should be attached to. Ignored if `-C,--canary` or `--unsafe-latest` is used. |
| `--tolerate-republish` | Warn and exit when republishing an already existing version of a package.                                              |
| `--unsafe-latest`      | Force a publish to the `latest` tag, sidestepping prerelease tagging protections.                                      |

## Versioning

Package versioning is handled via our custom yarn plugin.

### Usage

`yarn workspaces version [options] <strategy>`

where strategy is one of: `major`, `minor`, `patch`.

### Options
| Definition    | Description                                                                          |
|---------------|--------------------------------------------------------------------------------------|
| `-C,--canary` | Sets the prerelease suffix to `canary`. The standard suffix for @FuelRats projects.  |
| `--tag #0`    | Sets the prerelease suffix to a specified value. Ignored if `-C,--canary` is used.   |

