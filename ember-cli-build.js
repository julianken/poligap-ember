/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here

  });

  app.import(app.nodeModulesDirectory + '/jquery-match-height/dist/jquery.matchHeight-min.js');

  return app.toTree();
};
