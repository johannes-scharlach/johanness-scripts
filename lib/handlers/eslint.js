'use strict'

const fs = require('fs-extra')

module.exports = () =>
  fs.writeFile(
    '.eslintrc.js',
    'module.exports = require("johanness-scripts/eslint")\n'
  )
