import Ember from 'ember';

export default Ember.Controller.extend({
  init: function() {
    this._super();
    $(document).ready(function(){
      $('header').addClass('active-header');
    });
  }
});
