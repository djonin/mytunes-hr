// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('playedCount', 0);
    this.set('rating', 0);
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.set('playedCount', this.get('playedCount')+1);
    this.trigger('play', this);
  },

  enqueue: function() {
  	this.trigger('enqueue', this);
  },

  ended: function() {
  	this.trigger('ended', this);
  },

  dequeue: function() {
    this.trigger('dequeue', this);
  },

  upvote: function() {
    this.set('rating', this.get('rating')+1);
  },

  downvote:function(){
    this.set('rating', this.get('rating')-1);
  }

});
