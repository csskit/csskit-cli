module.exports = {
  output: {
    name: 'output',
    alias: 'o',
    default: null,
    description: 'specify an output file for the bundled css'
  },
  minify: {
    name: 'minify',
    alias: 'm',
    default: false,
    description: 'minify using npmjs.com/cssnano'
  }
}
