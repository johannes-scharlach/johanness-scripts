#!/usr/bin/env node
"use strict"

const yargs = require("yargs")
const handleGitignore = require("../lib/handlers/gitignore.js")

const { argv } = yargs.command(
  "gitignore",
  "Create a gitignore file in current dir",
  () => {},
  handleGitignore
)
