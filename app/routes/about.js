import Ember from 'ember';

export default Ember.Route.extend({

  render: function(){
    this._super();
    $(document).ready(function(){
      $('header').addClass('active-header');
      $('.matched-images').matchHeight();
      $(window).scrollTop(0);
    });
  }

});