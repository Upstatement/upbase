# Upbase Neue

The next version of [Upbase](https://github.com/Upstatement/upbase) -- coming soon!

## Warning: This branch is not yet production ready! Use at your own risk!

## Quick Start

1. Import the Upbase repository into your project using [Bower](http://bower.io/):

  ```
  $ bower install git@github.com:Upstatement/upbase#upbase-neue
  ```

  __Note: Requires a working [Github SSH key](https://help.github.com/articles/generating-ssh-keys/)__

2. Add the Upbase `scss` directory to your [Sass load path](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#load_paths-option). For Ruby Sass, add the following to your `config.rb`:

  ```
  add_import_path "bower_components/upbase/scss"
  ```

3. Import all Upbase helpers in your Sass file before use:

  ```scss
    @import "upbase";
  ```

## Building the Docs

Documentation for Upbase is magically generated from annotated comments in the source files using [SassDoc](http://sassdoc.com/).

Generated documentation lives in the `docs` directory, and is hosted using [Github Pages](https://pages.github.com/).

Several Grunt tasks are defined in this repository to ease building and releasing documenation:

```bash
# Assumptions: Node.js, NPM and Grunt-CLI are installed (`npm install -g grunt-cli`)

# Clone this repository
git clone https://github.com/Upstatement/upbase

# Install project dependencies
npm install

# Build documentation into `docs/latest`
grunt update-docs

# Create a versioned release by copying `docs/latest` into `docs/#.#.#`
grunt release-docs

# Deploy documentation to the `gh-pages` branch
grunt deploy-docs

# Serve docs locally during development
grunt serve-docs
```

Documentation should be updated whenever a new release of Upbase is created.
