// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr',

 template: _.template('<td class="artist">(<%= artist %>)</td><td class="title"><%= title %></td>'),

  events: {
    'click': function() {
      this.model.dequeue();
    }

  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
