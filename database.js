
var Datastore = require('nedb'),
	fs = require('fs');

// Initialize two nedb databases
var photos = new Datastore({ filename: __dirname + '/data/photos', autoload: true }),
	users = new Datastore({ filename: __dirname + '/data/users', autoload: true }),
	phonenumber=new Datastore({filename:__dirname +'/data/phonenumber', autoload: true });

// my uniques
photos.ensureIndex({fieldName: 'name', unique: true});
users.ensureIndex({fieldName: 'ip', unique: true});
phonenumber.ensureIndex({fieldName:'phonenumber', unique:true});

// my loader
var photos_on_disk = fs.readdirSync(__dirname + '/public/photos');

//db insert for future rec

photos_on_disk.forEach(function(photo){
	photos.insert({
		name: photo,
		likes: 0,
		dislikes: 0
	});
});

// module exports

module.exports = {
	photos: photos,
	users: users
};
