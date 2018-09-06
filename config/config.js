var appRoot = require('app-root-path');
var TrieSearch = require('trie-search');
let config = ()=>{
    var items = require(appRoot + '/jsons/items_payloads.json');
	var ts = new TrieSearch('longDescription');
	ts.addAll(items);
	return ts;
 }
 module.exports = {
   config
 }