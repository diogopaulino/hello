# hello

A tiny, zero-dependency package used to demonstrate the basics of publishing and consuming an npm library.

## Requirements

- Node.js 20+

## Install

```bash
npm install lib-hello-simple
```

## Usage

```js
const { helloMessage } = require('lib-hello-simple')

helloMessage('Diogo')
```

## Test

```bash
npm test
```

The implementation intentionally stays small: no runtime dependencies, native Node.js tests and TypeScript declarations included.
