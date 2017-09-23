# csskit

Styles and command-line tool for modular, functional css.

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]
[![conduct][conduct]][conduct-url]

[npm-image]: https://img.shields.io/npm/v/csskit.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/csskit
[travis-image]: https://img.shields.io/travis/csskit/csskit.svg?style=flat-square
[travis-url]: https://travis-ci.org/csskit/csskit
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard
[conduct]: https://img.shields.io/badge/code%20of%20conduct-contributor%20covenant-green.svg?style=flat-square
[conduct-url]: CODE_OF_CONDUCT.md


## Styles

### This package is a bundle of smaller modules:

- [csskit-base](http://npmjs.org/csskit-base)
- [csskit-form](http://npmjs.org/csskit-form)
- [csskit-button](http://npmjs.org/csskit-button)

Instead of using this bundle, you could just use each of the modules you need.

### Install

```
npm i --save csskit
```

Or just grab the style.css file.

### Usage

If you installed with npm:

- In your main css file: `@import "csskit";`
- Example using the csskit command-line tool: `csskit main.css -o bundle.css`
- Alternately you can use a tool like [sheetify](http://npmjs.org/sheetify) or [rework-npm-cli](http://npmjs.org/rework-npm-cli) to bundle the css.

### See the above list of modules for documentation on usage of each module

## Command-line tool

### About

The csskit command-line tool is used for bundling css modules based on [postcss](https://npmjs.com/postcss) and [cssnano](https://npmjs.com/cssnano).

### Install

```sh
npm install --save-dev csskit
```

### Usage

```
USAGE:
  csskit {command} [options]

COMMANDS:
  bundle     bundle up some css and its dependencies
  watch      same as bundle, watches css files for changes and rebundles
  help       show this help message

BUNDLE
  csskit bundle input.css > bundle.css

  Options:
    --minify, -m      minify using npmjs.com/cssnano
    --output, -o      specify an output file for the bundled css

WATCH
  csskit watch input.css > bundle.css

  Options:
    --minify, -m      minify using npmjs.com/cssnano
    --output, -o      specify an output file for the bundled css

HELP
  csskit help
```

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## Conduct

It is important that this project contributes to a friendly, safe, and welcoming environment for all. Read this project's [code of conduct](CODE_OF_CONDUCT.md)

## Changelog

Read about the changes to this project in [CHANGELOG.md](CHANGELOG.md). The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

## Contact

- **issues** – Please open issues in the [issues queue](https://github.com/sethvincent/cli/issues)

## License

[ISC](LICENSE.md)
