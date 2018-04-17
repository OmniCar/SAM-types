# SAM-types

Typescript interfaces for all types used to communicate between SAM client(s) and the SAM API

## Conventions

### Request/Response interfaces
TODO: Fill this out

### Versioning

We use standard [semantic versioning](https://semver.org/)

## Development
### Dependencies
The project only has one dependency: `Typescript`

This is to have `tsc` available.

### Compiling

To compile the `index.d.ts` file and the `index.js` file, run `npm run tsc` (or `yarn tsc`). This cleans all existing `.js` files and updates the `index.d.ts` file and the `index.js` file.

### Adding new interfaces

Write your interface like you normally would. In order to export it, you need to add it to the `index.ts` file which holds all exported interfaces, types, and enums (yes we should get rid of the js files at some point).

### Local development

To use the types locally in an application, add the line below as a dependency in your `package.json` file (once we get rid of js files and enums we can add it as a devdependency instead):

`"sam-types": "file:../SAM-types"`

The path is the relative path to the SAM-types project.

### Regular dependency
To use SAM-types in a project, add the line below as a dependency in your `package.json` file:

`"sam-types": "OmniCar/SAM-types#0.0.1"`

If you need to target something other than a specific release, consider targeting a branch or a commit as shown below:

* `"sam-types": "OmniCar/SAM-types#4727d357ea"`
* `"sam-types": "OmniCar/SAM-types#feature\/branch"`

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
