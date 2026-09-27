const test = require('node:test')
const assert = require('node:assert/strict')
const { helloMessage } = require('../src')

test('helloMessage returns the greeting', () => {
  assert.equal(helloMessage('Diogo'), 'Hello Diogo, you are using the simplest lib!')
})
