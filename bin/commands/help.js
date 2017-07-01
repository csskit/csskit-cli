var usage = `
  USAGE:
    csskit {command} [options]

  COMMANDS:
    bundle     bundle up some css and its dependencies
    watch      same as bundle, watches css files for changes and rebundles
    help       show this help message

  BUNDLE
    csskit bundle input.css > bundle.css

    Options:
      --minify, -m      minify using npmjs.com/cssnano
      --output, -o      specify an output file for the bundled css

  WATCH
    csskit watch input.css > bundle.css

    Options:
      --minify, -m      minify using npmjs.com/cssnano
      --output, -o      specify an output file for the bundled css

  HELP
    csskit help
`

module.exports = {
  name: 'help',
  command: function help () {
    console.log(usage)
  }
}
