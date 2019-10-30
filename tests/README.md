# Tests

Tests are run using [tape](https://npmjs.com/tape).

Linting is performed using [standard](https://npmjs.com/standard)

## Running tests

```sh
git clone {this repo}
cd {this repo}
npm install
npm test
```

`npm test` only runs the tests.

### Just run the linter

```sh
npm run lint
```

### Automatically fix many lint issues

```
npm run lintfix
```

### Run both the tests and the linter

```sh
npm run test-lint
```
