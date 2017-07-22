#! /usr/bin/env node

var subcommand = require('subcommand')

var match = subcommand({
  none: require('./commands/help').command,
  commands: [
    require('./commands/help'),
    require('./commands/bundle'),
    require('./commands/watch')
  ]
})

match(process.argv.slice(2))
