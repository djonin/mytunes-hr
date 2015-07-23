// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */

    var queue = this.get('songQueue');

    queue.on('ended', function(){
      this.trigger('ended');
    }, this);

    queue.on('dequeue', function(){
      this.trigger('dequeue');
    }, this);

    queue.on('empty', function(){
      this.set('currentSong');
      this.trigger('empty');
    }, this);

    params.library.on('play', function(song){
      this.set('currentSong', song);
      this.trigger('play');
    }, this);

    params.library.on('enqueue', function(song){
      queue.add(song);
      this.trigger('enqueue', this);
    }, this);
  }

});
