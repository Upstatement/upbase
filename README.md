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
