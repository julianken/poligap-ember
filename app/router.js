import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('map');

  this.route('state', function() {
    this.route('show', {path: '/:id'});
  });

  this.route('representative', function() {
    this.route('show', {path: '/:id'});
  });
  this.route('zip');
  this.route('about');
});

export default Router;
