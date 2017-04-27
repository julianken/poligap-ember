import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
  actions: {
    toggleMobileMenu() {
      $('header').toggleClass('active-mobile-nav')
        .children('.hamburger').toggleClass('active-hamburger');
    }
  }
});
