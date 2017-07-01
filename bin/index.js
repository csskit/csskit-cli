#! /usr/bin/env node

var subcommand = require('subcommand')

var match = subcommand({
  none: require('./commands/help').command,
  commands: [
    require('./commands/help'),
    require('./commands/bundle')
  ]
})

match(process.argv.slice(2))
