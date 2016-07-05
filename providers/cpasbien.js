var async   = require('async');
var magnet  = require('magnet-uri');
var util    = require('util');

var network = require('../network');

const CPBAPI = require('cpasbien-api')
const api = new CPBAPI()

exports.movie = function(movieInfo, callback) {
	api.Latest()
	  .then(console.log.bind(console))

	api.Search('harry poter', {language: 'EN'})
	  .then(console.log.bind(console))

	api.Search('fringe', {scope: 'tvshow'})
	  .then(console.log.bind(console))
	var magnets = [];
	callback(null, magnets);
}



exports.episode = function(showInfo, seasonIndex, episodeIndex, callback) {
	api.Latest()
	  .then(console.log.bind(console))

	api.Search('harry poter', {language: 'EN'})
	  .then(console.log.bind(console))

	api.Search('fringe', {scope: 'tvshow'})
	  .then(console.log.bind(console))
	 var magnets = [];
	 callback(null, magnets);
}