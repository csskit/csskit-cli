var watch = require('recursive-watch')
var match = require('anymatch')

module.exports = function createWatcher (dirname, options, onChangeCallback) {
  options = options || {}
  var watchFiles = options.files || ['**/*.css', '*.css']

  watch(dirname, function (filepath) {
    if (match(watchFiles, filepath)) {
      onChangeCallback(filepath)
    }
  })
}
