import Ember from 'ember';
import $ from 'jquery';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      states: this.store.findAll('state').then(function(states){
        return states;
      }),
    });
  },

  render: function(){
    this._super();
    $(document).ready(function(){
      $('header').addClass('active-header');
      $('.hamburger').addClass('white-hamburger');
      $('.matched-images').matchHeight();
      $('nav.mobile-nav').css('margin-top', '88px');
      $(window).scrollTop(0);
    });
  },


});
