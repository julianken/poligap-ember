import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleMobileMenu() {
      $('header').toggleClass('active-mobile-nav')
        .children('.hamburger').toggleClass('active-hamburger');
    }
  }
});
