// Author: Thomas Davis <thomasalwyndavis@gmail.com>
// Filename: main.js

// Require.js allows us to configure shortcut alias
require.config({
  paths: {
    'jquery': '../../../src/jquery',
    'underscore': '../../../src/underscore',
    'underscore.string': '../../../src/underscore.string',
    'backbone': '../../../src/backbone',
    'text': '../../../src/text',
    'i18n': '../../../src/i18n',
    'localstorage': '../../../src/localstorage'
  },
  locale: localStorage.getItem('locale') || 'en-us'

});

require(['backbone', 'views/app', 'router'], function(Backbone, AppView, AppRouter){
  var appView = new AppView;
  var appRouter = new AppRouter;
  Backbone.history.start();
});
