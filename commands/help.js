var usage = `
  USAGE:
    csskit {command} [options]
  COMMANDS:
    bundle,    bundle up some css and its dependencies
    help,      show this help message
  BUNDLE
    csskit bundle input.css > bundle.css
  HELP
    csskit help
`

module.exports = {
  name: 'help',
  command: function help (args, a, b, c) {
    console.log(usage)
  }
}
