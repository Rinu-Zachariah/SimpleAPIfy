'use strict';

/**
 * Module dependencies.
 */

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


var friendSchema = new Schema({
	f_id:{
		type: Number
	},
	f_name:{
		type: String,
		trim: true
	}
});

var favSchema = new Schema({
	fav_id:{
		type: Number
	},
	f_name:{
		type: String,
		trim: true
	}
});

var usersSchema = new Schema({
	user_id:{
		type: Schema.Types.ObjectId,
		ref: 'Users'
	},	
	user_index:{
		type: Number
	},
	user_age:{
		type: Number
	},
	user_eyecolor:{
		type: String,
		default: '',
		trim: true
	},
	user_company:{
		type: String,
		default: '',
		trim: true
	},
	user_email:{
		type: String,
		default: '',
		trim: true
	},
	user_phone:{
		type: Number
	},
	user_address:{
		type: String,
		default: '',
		trim: true
	},
	user_regDate:{
		type: Date
	},
	user_lat:{
		type: Number
	},
	user_long:{
		type: Number
	},
	user_name:{
		type: String
	},
	user_fav:[favSchema],
	user_friends:[friendSchema]
});



var songsSchema = new Schema({
	song_id:{
		type: Schema.Types.ObjectId,
		ref: 'Songs'
	},
	usong_id:{
		type: Number
	},
	song:{
		type: String
	},
	id_artist:{
		type: Number
	},
	artist:{
		type:String
	},
	album:{
		type:String
	},
	genre:{
		type:String
	},
	type:{
		type:String
	},
	likes:{
		type:Number
	}
});


mongoose.model('Songs', songsSchema, 'songs');


mongoose.model('Users', usersSchema, 'Users');
