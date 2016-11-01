import Ember from 'ember';

export default Ember.Route.extend({

  render: function(){
    this._super();
    $('.tooltip').css('display', 'none');
    $(document).ready(function(){
      $('header').addClass('active-header');
      $(window).scrollTop(0);
    });
  },
  model(params) {
    return Ember.RSVP.hash({
      state: this.store.peekRecord('state', params.id),
      reps: this.store.peekAll('representative')
    });
  }
});
