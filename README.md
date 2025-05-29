# p5.js Addon Template

This project acts as a starting point template that you may use to start writing your own addon for extending the functionalities of p5.js. A minimal starter setup is provided in this repo including starting files and build tools.

## Usage
Simply fork this repo or make a copy of it locally. You should replace the various references to the addon name within this project to the name of your addon:

* `src/main.js` - Rename `addonTemplate`
* `rollup.config.js` - Rename `addonTemplate`
* `package.json` - Rename `addonTemplate` and `p5.js-addon-template`

After that you can continue to write relevant code for your addon using `src/main.js` as the entry point. You may add additional files or NPM dependencies as necessary.

[Rollup](https://rollupjs.org/) has been setup to build the addon into the `dist` folder as both IIFE format to be used with browser script tags and ESM format to be imported by other JavaScript files and publishing on NPM.

For more documentation on how to write addon libraries, please checkout the relevant documentation [here](https://beta.p5js.org/contribute/creating_libraries/)