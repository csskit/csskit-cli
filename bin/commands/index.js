const { command, args, flags } = require('./bundle')

const options = {
  description: 'Create a css bundle',
  examples: [
    {
      cmd: 'csskit style.css > bundle.css',
      description: 'Create a css bundle from a source css file'
    }
  ]
}

module.exports = { command, args, flags, options }
