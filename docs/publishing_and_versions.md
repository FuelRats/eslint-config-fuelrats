# Publishing to NPM and Versioning

## Publishing

Package publishing is handled via our custom yarn plugin. To publish use the `yarn workspaces release` command.

This command safeguards from accidental stable release of a pre-release version, so it's use is recommended over manual publishing.

### Usage

`yarn workspaces release [options] <...packages | -A,--all>`

This command accepts a list of package names contained in the project to be published, **OR** the `-A,--all` flag.

### Options
| Definition             | Description                                                                        |
|------------------------|------------------------------------------------------------------------------------|
| `-A,--all`             | Attempt to publish _all_ public packages within the project.                       |
| `-C,--canary`          | Tag the release as 'canary'. The standard pre-release tag for @FuelRats projects.  |
| `--no-tag`             | Force no tagged release, sidestepping pre-release protections.                     |
| `--tag #0`             | The tag on the registry that the package should be attached to.                    |
| `--tolerate-republish` | Warn and exit when republishing an already existing version of a package.          |

## Versioning

Package versioning is handled via our custom yarn plugin.

### Usage

`yarn workspaces version [options] <strategy>`

where strategy is one of: `major`, `minor`, `patch`.

### Options
| Definition             | Description                                                                        |
|------------------------|------------------------------------------------------------------------------------|
| `-C,--canary`          | Tag the version as 'canary'. The standard pre-release tag for @FuelRats projects.  |
| `--tag #0`             | Set the pre-release suffix to a custom value. Overridden by `-C,--canary`          |

