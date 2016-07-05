var async   = require('async');
var magnet  = require('magnet-uri');
var util    = require('util');

var network = require('../network');

const CPBAPI = require('cpasbien-api')
const api = new CPBAPI()

exports.movie = function(movieInfo, callback) {
	api.Search(movieInfo.title).then((values) => {
		var magnets = [];
		for (var i = 0; i < values.items.length; i++) {
			var magnetInfo = {
					title:  values.items[i].title,
			        source: 'Cpasbien',
			        seeds:  values.items[i].seeds,
			        peers:  values.items[i].leechs,
			        link:   values.items[i].torrent
			};
			
			var size = values.items[i].size;
			console.log(size);
			var split = size.split(" ");
			console.log(split);
			var value = split[0].split(".");
			console.log(value);
			if (split[1].startsWith("Ko")) {
				magnetInfo.size = value[0] * 1024 + value[1];
			} else if (split[1].startsWith("Mo")) {
				magnetInfo.size = value[0] * 1024 * 1024 + value[1] * 1024;
			} else if (split[1].startsWith("Go")) {
				magnetInfo.size = value[0] * 1024 * 1024 *1024 + value[1] * 1024 * 1024;
			}
			
			magnets.push(magnetInfo);
		}
		callback(null, magnets);
	});
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