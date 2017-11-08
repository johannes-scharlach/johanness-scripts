'use strict'

const fetch = require('node-fetch')
const fs = require('fs-extra')

module.exports = () =>
  fetch('https://www.gitignore.io/api/node,osx,linux,vim,code')
    .then(result => result.text())
    .then(txt => 'node_modules\n\n' + txt)
    .then(txt => fs.writeFile('.gitignore', txt))
