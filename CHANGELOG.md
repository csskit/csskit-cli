# csskit changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

## Unreleased

* ???

## v3.0.0

### Removed

- removed the built-in styles along with csskit-base, csskit-button, csskit-form

### Changed

- switched from postcss-cssnext to postcss-preset-env

## v2.0.0

### Added

- this release merges csskit & csskit-cli and now provides both the command-line tool and the bundled csskit styles

## v1.1.0

### Added
* add `watch` command
* add `--minify` option
* add `require('csskit')` js api

## v1.0.3

### Fixed
* package.json cleanup fixes

## v1.0.2

### Added
* added a change log

### Fixed
* fixed the bin field in package.json

## v1.0.1

### Fixed
* typo fixes

## v1.0.0

### Added
* Initial working `csskit bundle` command using postcss, postcss-import, and postcss-cssnext
