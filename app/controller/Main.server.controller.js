var mongoose = require('mongoose');

var Songs = mongoose.model('Songs'),
    Users = mongoose.model('Users'),
    _ = require('lodash');

exports.songList = function(req,res){
	//Songs.find({$text: {$search:"dance"}}, {score: {$meta: "textScore"}}).sort({score: {$meta: "textScore"}}).pretty()

	// Songs.find().exec(function(err,story){
	// 	if(err) throw err;
	// 	res.json(story);
	// 	console.log(res.json(story));
	// });

	var song=req.param('song');

	Songs.find({$text: {$search: song}}).exec(function(err,story){
		if(err) throw err;
		res.json(story);
	});
		
};

// exports.searchList = function(req,res){
// 	Songs.textSearch('D', function (err, output) {
// 	    if (err)
// 	      console.log(err);
// 	    else
// 	      console.log(output);
// 	    mongoose.disconnect();
// 	});

// };