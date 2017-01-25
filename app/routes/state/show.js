import Ember from 'ember';

export default Ember.Route.extend({

  render: function(){
    this._super();
    $('.tooltip').css('display', 'none');
    $(document).ready(function(){
      $('header').addClass('active-header');
      $('.hamburger').addClass('white-hamburger');
      $(window).scrollTop(0);
    });
  },
  model(params) {
    return Ember.RSVP.hash({
      state: this.store.findRecord('state', params.id),
      reps: this.store.findAll('representative')
    });
  }
});
