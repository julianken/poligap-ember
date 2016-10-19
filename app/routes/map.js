import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(){
    $(document).ready(function(){
      $('header').addClass('active-header');
    });
  }
});
