const fs = require('fs')
const csskit = require('../../index')()

const { output, minify } = require('../flags')
const { input } = require('../args')

function command (args, flags, context) {
  const { input } = args
  const { output, minify } = flags

  const css = fs.readFileSync(input)

  function onChange (changedFile, event) {
    return fs.readFileSync(input)
  }

  csskit.watch(css, { input, minify, onChange }, function (err, result) {
    if (err) return console.error(err)

    if (output) {
      fs.writeFileSync(output, result.css)
    } else {
      console.log(result.css)
    }
  })
}

const args = [input]
const flags = [output, minify]

const options = {
  description: 'Create a css bundle',
  examples: [
    {
      cmd: 'csskit bundle style.css > bundle.css',
      description: 'Create a css bundle from a source css file'
    }
  ]
}

module.exports = { command, args, flags, options }
