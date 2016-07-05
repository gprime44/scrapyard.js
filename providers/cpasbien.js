var async   = require('async');
var magnet  = require('magnet-uri');
var util    = require('util');

var network = require('../network');

const CPBAPI = require('cpasbien-api')
const api = new CPBAPI()

exports.movie = function(movieInfo, callback) {
	console.log(movieInfo)
	
	api.Search(movieInfo.title).then((values) => {
		console.log(values)
		var magnets = [];
		for (var i = 0; i < values.length; i++) {
			var magnetInfo = {
					title:  values[i].title,
			        source: 'Cpasbien',
			        size:   values[i].size,
			        seeds:  values[i].seeds,
			        peers:  values[i].leechs,
			        link:   values[i].torrent
			};
			magnets.push(magnetInfo);
		}
		callback(null, magnets);
	})
}



exports.episode = function(showInfo, seasonIndex, episodeIndex, callback) {
	console.log.bind(showInfo)
	console.log.bind(seasonIndex)
	console.log.bind(episodeIndex)
	api.Latest()
	  .then(console.log.bind(console))

	api.Search('harry poter', {language: 'EN'})
	  .then(console.log.bind(console))

	api.Search('fringe', {scope: 'tvshow'})
	  .then(console.log.bind(console))
	 var magnets = [];
	 callback(null, magnets);
}