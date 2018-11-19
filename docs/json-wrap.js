#!/usr/bin/env node

/**
 * Replace all shorthand
 * @param string Input string
 * @param pattern To be replaced
 * @param to To be replaced with
 * @returns {string}
 */
function replaceAll(string, pattern, to) {
  return (''+string).replace(new RegExp(pattern, 'g'), to);
}

/**
 * Turns k=>v into line of escaped JSON
 * @param undefined|string k Key
 * @param undefined|string v Value
 * @returns {string} Line of JSON
 */
function wrapInJSON(k, v) {
  let key = (typeof k === 'undefined' || k.trim() === '') ? 'err_no_key_defined' : k;
  let val = (typeof v === 'undefined') ? '' : v;
  let arr = JSON.stringify({'replace_this': replaceAll(val, /\n/, "\\n")}, null, 2).replace('  "replace_this":', `  "${key}":`).split('\n');
  return arr[1];
}

console.log(wrapInJSON(process.argv[2], process.argv[3]));
process.exit();
