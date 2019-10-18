# Nitro UI Vue

> Awesome Vue Component Wrapper for Nitro UI

## Getting Started

Get latest version by installing via [NPM @nitro-ui/vue-framework](https://www.npmjs.com/package/@nitro-ui/vue-framework):

```
npm install @nitro-ui/vue-framework
```

## Usage:

```
import { Button } from '@nitro-ui/vue-framework';
```

## Development & Contribution

To extends, develop or contribute to this component, you're required to fork our main [repository](https://github.com/icarasia-engineering/nitro-ui-vue) and made a pull request.

### Dev. Requirements

- NodeJs
- Vue
- Webpack (`webpack`, `webpack-cli`, `webpack-dev-server`)

### Commands

To view documentation:

```
npm run serve
```

To build using rollup:

```
npm run build
```

Other:

```
npm run dev
```

---

# TODO

- Minify Rollup's output

---

# CHANGELOG

All notable changes to this project will be documented in this file. **For now, let's keep TODO and CHANGELOG in README file. Keeping things simple.**

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Types of changes:

- `Added` for new features.
- `Changed` for changes in existing functionality.
- `Deprecated` for soon-to-be removed features.
- `Removed` for now removed features.
- `Fixed` for any bug fixes.
- `Security` in case of vulnerabilities.

## [1.0.0-alpha.0] - 2019-10-18

### Added
- Added `.idea` (PhpStorm's settings) to `.gitignore`
- Babel error when try to serve documentation via POI
- Add `package.json` scripts for Webpack
- Add `webpack`, `webpack-cli` and `webpack-dev-server` to dev dependencies
- Add more keywords
- Add Rollup Minify
- Add a build bash script `scripts/build.sh` to build the whole package by sequence
- Add Tarser to minify JS
- Add command script in `package.json` to run `scripts/build.sh`

### Fixed
- Babel error when try to serve documentation via POI

### Changed
- Update README
- Remove `vue` from `.babelrc` presets
- Update Dependencies
- Update Rollup Configuration for External and BannerComment for Nitro

### Removed
- Remove POI from dev dependencies and all related files
- Remove old babels (only use Babel 7 `@babel`)

## [0.0.0] - 2019-10-17

### Added
- Initial setup
