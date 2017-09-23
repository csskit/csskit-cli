var fs = require('fs')
var csskit = require('../../index')()

module.exports = {
  name: 'bundle',
  command: function bundle (args) {
    args.input = args._[0]

    var css = fs.readFileSync(args.input)

    csskit.bundle(css, args, function (err, result) {
      if (err) return console.log(err)

      if (args.output) {
        return fs.writeFileSync(args.output, result.css)
      }

      console.log(result.css)
    })
  },
  options: [
    {
      name: 'output',
      abbr: 'o',
      default: null,
      help: 'specify an output file for the bundled css'
    },
    {
      name: 'minify',
      abbr: 'm',
      default: null,
      help: 'minify using npmjs.com/cssnano'
    }
  ]
}
