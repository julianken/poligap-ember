import Ember from 'ember';

export default Ember.Controller.extend({
  currentPathChange: function () {
      $('.page-content-body').removeClass('active-mobile-nav');
    }.observes('currentPath')
});
