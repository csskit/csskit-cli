const watch = require('recursive-watch')
const match = require('anymatch')

module.exports = function createWatcher (dirname, options, onChangeCallback) {
  options = options || {}
  const watchFiles = options.files || ['**/*.css', '*.css']

  watch(dirname, function (filepath) {
    if (match(watchFiles, filepath)) {
      onChangeCallback(filepath)
    }
  })
}
