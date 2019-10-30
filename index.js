const postcss = require('postcss')
const postcssPresetEnv = require('postcss-preset-env')
const postcssImport = require('postcss-import')

const watcher = require('./lib/watch')

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
    const plugins = [
      postcssImport,
      postcssPresetEnv(options)
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
    const onChange = options.onChange

    const watchOptions = {
      ignored: options.output,
      files: ['*.css', '**/*.css']
    }

    if (options.input) {
      watchOptions.files.push(options.input)
    }

    bundle(css, options, callback)

    watcher(options.input, watchOptions, function (changedFile) {
      css = onChange(changedFile)
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
