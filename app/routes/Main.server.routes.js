'use strict';

var songs = require('../controller/Main.server.controller');

exports.r = function(app){

	app.route('/songs/:song')
	.get(songs.songList);
}