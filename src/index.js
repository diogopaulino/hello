function helloMessage(name = 'World') {
  const message = `Hello ${name}, you are using the simplest lib!`
  console.log(message)
  return message
}

module.exports = { helloMessage }
