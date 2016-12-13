import Ember from 'ember';

export default Ember.Controller.extend({
  currentPathChange: function () {
      $('header').removeClass('active-mobile-nav').children('.hamburger')
        .removeClass('active-hamburger');
    }.observes('currentPath')
});
