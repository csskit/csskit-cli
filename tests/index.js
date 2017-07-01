var fs = require('fs')
var path = require('path')
var test = require('tape')
var csskit = require('../index')()

test('bundle', function (t) {
  var options = {
    input: path.join(__dirname, 'fixtures', 'style.css')
  }

  var css = fs.readFileSync(options.input)
  var expected = fs.readFileSync(path.join(__dirname, 'fixtures', 'expected.css'), 'utf8')

  csskit.bundle(css, options, function (err, result) {
    t.notOk(err)
    t.equal(result.css, expected)
    t.end()
  })
})
