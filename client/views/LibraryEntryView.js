// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td><div class="rating"><%=rating%></div><img class="vote upvote" src="views/img/upvote.png"></img><img class="vote downvote" src="views/img/downvote.png"></img>(<%= artist %>)</td><td><%= title %></td><td class="played"><%= playedCount %></td>'),

  events: {
    'click': function(evt) {
      var that = evt;
      if(evt.target.classList.contains("upvote")) {
        this.model.upvote();
        this.render();
      } else if(evt.target.classList.contains("downvote")) {
        this.model.downvote();
        this.render();
      } else {
        this.model.enqueue();
      }
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
