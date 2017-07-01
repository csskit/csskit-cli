var postcss = require('postcss')

var watcher = require('./lib/watch')

module.exports = function csskit (config) {
  config = config || {}

  return {
    bundle: bundle,
    watch: watch
  }

  /**
  * Bundle css files
  * @name bundle
  * @param {string} css css styles as a string
  * @param {object} options
  * @param {boolean} options.minify
  * @param {string} options.input filepath for the input css
  * @param {string} options.output filepath for the output css
  * @param {function} callback called when bundle is ready
  **/
  function bundle (css, options, callback) {
    var plugins = [
      require('postcss-import'),
      require('postcss-cssnext')
    ]

    if (options.minify) {
      plugins.push(require('cssnano')({
        preset: 'default'
      }))
    }

    parse(css, options.input, plugins, function (err, result) {
      if (err) return callback(err)
      callback(null, result)
    })
  }

  /**
  * Bundle css files
  * @name bundle
  * @param {string} css css styles as a string
  * @param {object} options
  * @param {boolean} options.minify
  * @param {string} options.input filepath for the input css
  * @param {string} options.output filepath for the output css
  * @param {function} options.onChange called every time a css file is changed
  * @param {function} callback called when bundle is ready
  **/
  function watch (css, options, callback) {
    var watchFiles = ['*.css', '**/*.css']
    if (options.input) watchFiles.push(options.input)
    var watchOptions = { ignored: options.output }
    var onChange = options.onChange

    watcher(watchFiles, watchOptions, function (changedFile, event) {
      css = onChange(changedFile, event)
      bundle(css, options, callback)
    })
  }
}

function parse (css, input, plugins, callback) {
  postcss(plugins)
    .process(css, { from: input })
    .then(function (result) { callback(null, result) })
    .catch(callback)
}
