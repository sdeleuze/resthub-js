define([
  'jquery', 
  'underscore',
  'backbone',
  'i18n!nls/messages',
  'text!templates/credits.html'
  ], function($, _, Backbone, messages, creditsTemplate){
  var CreditsView = Backbone.View.extend({

    el: $("#credits"),

    // Cache the template function for a single item.
    template: _.template(creditsTemplate),

    initialize: function() {
      _.bindAll(this, 'render');
      this.render();
    },

    render: function() {
      $(this.el).html(this.template({messages: messages}));
    }    

  });
  return CreditsView;
});
