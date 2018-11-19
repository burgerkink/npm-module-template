#!/usr/bin/env node

/**
 * Turns k=>v into line of escaped JSON
 * @param undefined|string k Key
 * @param undefined|string v Value
 * @returns {string} Line of JSON
 */
function wrapInJSON(k, v) {
  let key = (typeof k === 'undefined' || k.trim() === '') ? 'err_no_key_defined' : k;
  let val = (typeof v === 'undefined') ? '' : v;
  let arr = JSON.stringify({'replace_this': val}, null, 2).replace('  "replace_this":', `  "${key}":`).split('\n');
  return arr[1];
}

console.log(wrapInJSON(process.argv[2], process.argv[3]));
process.exit();
