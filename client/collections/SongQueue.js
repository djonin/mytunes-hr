// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

    this.on('ended dequeue', function(song) {
      this.remove(song);
    }, this);
  },

  playFirst: function() {
    this.at(0).play();
  },

  add: function() {
    Songs.prototype.add.apply(this, arguments);
    if (this.length === 1) {
      this.playFirst();
    }
  },

  remove: function(song) {
    var currentlyPlaying = false;
    if (this.at(0) === song) {
      currentlyPlaying = true;
    }
    Songs.prototype.remove.apply(this, arguments);
    if((currentlyPlaying)&&(this.length > 0))
    {
      this.playFirst();
    }
  }

});
