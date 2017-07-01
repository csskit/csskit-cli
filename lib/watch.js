var watch = require('chokidar').watch

module.exports = function createWatcher (watchFiles, options, onChangeCallback) {
  options = options || {}
  watchFiles = watchFiles || ['**/*.css', '*.css']

  var watcher = watch(watchFiles, options)

  watcher.on('all', function (event, filepath) {
    onChangeCallback(filepath, event)
  })
}
