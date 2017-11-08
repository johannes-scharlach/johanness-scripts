#!/usr/bin/env node
'use strict'

const yargs = require('yargs')
const handleGitignore = require('../lib/handlers/gitignore.js')
const handleEslint = require('../lib/handlers/eslint.js')

// eslint-disable-next-line no-unused-vars
const { argv } = yargs
  .command(
    'gitignore',
    'Create a gitignore file in current dir',
    () => {},
    handleGitignore
  )
  .command('eslint', 'Create an eslint config', () => {}, handleEslint)
