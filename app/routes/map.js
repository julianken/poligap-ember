import Ember from 'ember';
import $ from 'jquery';

export default Ember.Route.extend({

  model() {
    let cachedCheck = this.store.peekAll('state').content.length;
    if (cachedCheck === 50) {
      return Ember.RSVP.hash({
        states: this.store.peekAll('state')
      });
    } else {
      return Ember.RSVP.hash({
        states: this.store.query('state', {}).then(states => { return states; }),
      });
    }
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
