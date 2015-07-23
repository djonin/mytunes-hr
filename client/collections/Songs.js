// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  parse: function (response) {
   return response[0].items;
	}
});