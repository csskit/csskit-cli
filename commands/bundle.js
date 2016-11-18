var fs = require('fs')
var path = require('path')
var assert = require('assert')
var postcss = require('postcss')

module.exports = {
  name: 'bundle',
  command: function owner (args) {
    var input = args._[0]
    var css = fs.readFileSync(input, 'utf8')

    var plugins = [
      require('postcss-import'),
      require('postcss-cssnext')
    ]

    if (args.minify) {
      // TODO: ADD THIS
    }

    postcss(plugins)
      .process(css, { from: input })
      .then(function (result) {
        if (args.output) {
          fs.writeFileSync(args.output, result.css)
        } else {
          console.log(result.css)
        }
      })
      .catch(function (err) {
        console.log(err)
      })
  },
  options: [
    {
      name: 'output',
      abbr: 'o',
      default: null,
      help: 'The output file for the bundled css'
    }
  ]
}
