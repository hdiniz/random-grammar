#!/usr/bin/env node
const { random } = require('../lib');
const input = process.argv.splice(2).join(' ');

try {
  console.log(random(input));
} catch(e) {
  console.log("Error: " + e.message);
}
