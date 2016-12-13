import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleMobileMenu() {
      $('.page-content-body').toggleClass('active-mobile-nav');
    }
  }
});
