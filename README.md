# csskit

A command-line tool for modular, functional css.

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

### About

The csskit command-line tool is used for bundling css modules based on [postcss](https://npmjs.com/postcss) and [cssnano](https://npmjs.com/cssnano).

### Install

```sh
npm install --save-dev csskit
```

### Usage

```
Create a css bundle 

Usage:
  csskit                                Create a css bundle

Args:
  input                                 (string) 

Flags:
  --output, -o                          specify an output file for the bundled
                                        css
  --minify, -m                          minify using npmjs.com/cssnano

Examples:
  csskit style.css > bundle.css         Create a css bundle from a source css
                                        file

Subcommands:
  csskit bundle                         Create a css bundle

See help for subcommands:
  csskit [command] --help
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
