// Author: Thomas Davis <thomasalwyndavis@gmail.com>
// Filename: main.js

// Require.js allows us to configure shortcut alias
require.config({
  paths: {
    jquery: '../../../src/jquery',
    underscore: '../../../src/underscore',
    backbone: '../../../src/backbone',
    text: '../../../src/text',
    localstorage: '../../../src/localstorage',
    handlebars: '../../../src/handlebars'
  }

});

require(['views/app'], function(AppView){
  var app_view = new AppView;
});
