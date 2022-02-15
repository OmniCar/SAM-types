# SAM-types

Typescript interfaces for all types used to communicate between SAM client(s) and the SAM API

NOTICE:
Since we have many environments (`develop`, `staging`, `releasetest`, etc) that all should need to be synched with sam-types's master branch. But there WAS only one `master`, so one environments had taken the sam-types's master and the other environments took some random branch and/or a branch with a release number based on some other random branch.. The situation was a kind of western-cowboy sope-orera situation.. To get rid of this, and (try) to get some order...Here in this repo. has been created additional "master" branches, one master for the top develop branch/environments named master-for-develop, and one master for staging and so on... So, now we have at least these three "master" branches:

    - `master-for-develop`
    - `master-for-staging`
    - `master-for-releasetest`

In future, please merge your (finished and tested) PR's into one the "master" branches above (`master-for-develop`, `master-for-staging`, `master-for-releasetest`), and base new releases on one of these master branches (however, does not apply if you make a pre-releases of sam-types, then you may base your release on your own choosing).

Hope this will improve the situation and make it easier to merge PRs for all environments etc.. for all of us :)

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

### Adding new interfaces, types, and enums

Write your interface or type like you normally would. In order to export it, you need to add it to the `index.ts` file which holds all exported interfaces, types, and enums. The enums (for now) need to be put directly in the `index.ts` file. To fix this we need to setup some Webpack configuration etc.

### Local development

### Using npm
To use the types locally in an application, add the line below as a dependency in your `package.json` file:

`"sam-types": "file:../SAM-types"`

The path is the relative path to the SAM-types project.
### Using yarn
To use the types locally you can use `yarn link`. See docs [here](https://yarnpkg.com/lang/en/docs/cli/link/).

`cd` to the SAM-types folder and type: `yarn link`

Then `cd` to your application and type `yarn link "sam-types"`. Now your application uses your local SAM-types project (using a symlink). To unlink, type `yarn unlink "sam-types"`

This means that you do not have to change anything in your `package.json` file.

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

If you have installed the hub cli (see link above), you can create a new release with the below command. Please note that it defaults to targeting the main (`master`) branch unless you use the `-t` option (more options [here](https://github.com/github/hub/blob/master/commands/release.go))

`git release create -o -m "Release 0.0.2" "0.0.2"`

If you did not set up the alias for `git = hub` you should write `hub` instead of `git` in the command above.
