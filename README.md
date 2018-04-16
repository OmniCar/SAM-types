# SAM-types

Typescript interfaces for all types used to communicate between SAM client(s) and the SAM API

## Conventions

TODO: Fill this out

### Versioning

We use standard [semantic versioning](https://semver.org/)

## Development

### Adding new interfaces

Write your interface like you normally would. In order to export it, you need to add it to the `index.d.ts` file which holds all exported interfaces.

### Local development

To use the types locally in an application, add the line below as a DevDependency in your `package.json` file:

`"sam-types": "file:../SAM-types"`

The path is the relative path to the SAM-types project.

## Releasing

### Using GitHub

* Go to [releases](https://github.com/OmniCar/SAM-types/releases) on GitHub
* Press "Create a new release"
* Set the "Tag version" to the appropriate version number (see versioning above)
* Set the "Release title" to "Version <version_number>"
* Describe the changes. What's new? are there any breaking changes? etc.
* If you want you can see the changes on `master` compared to a release (for example version `0.0.1`) by typing: `git diff tags/0.0.1 master`
* Press "Publish release"

### Using [hub cli](https://github.com/github/hub)

TODO: Fill this out
