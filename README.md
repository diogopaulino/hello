<h1 align="center">hello</h1>

<p align="center">Tiny zero-dependency npm library example.</p>

<p align="center">
  <a href="https://github.com/diogopaulino/hello/actions/workflows/ci.yml"><img alt="CI" src="https://github.com/diogopaulino/hello/actions/workflows/ci.yml/badge.svg"></a>
  <img alt="Node.js 22+" src="https://img.shields.io/badge/Node.js-22%2B-339933?logo=node.js&logoColor=white">
  <img alt="Zero dependencies" src="https://img.shields.io/badge/dependencies-0-2ea44f">
</p>

## Install

```bash
npm install lib-hello-simple
```

## Usage

```js
const { helloMessage } = require('lib-hello-simple')

const message = helloMessage('Diogo')
// Hello Diogo, you are using the simplest lib!
```

## API

### `helloMessage(name?)`

Returns and logs a greeting.

```js
helloMessage()
helloMessage('Diogo')
```

## Development

```bash
npm ci
npm run check
```

## Included

- zero runtime dependencies
- native Node.js tests
- TypeScript declarations
- MIT license
- GitHub Actions CI
