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
    let cacheCheck = this.store.peekAll('representative').content.length;

    if (cacheCheck < 520) {
      return Ember.RSVP.hash({
        state: this.store.findRecord('state', params.id).then((state) => {
          return state;
        }),
        reps: this.store.query('representative', {}).then((representative) => {
          return representative;
        })
      });
    } else {
      return Ember.RSVP.hash({
        state: this.store.findRecord('state', params.id).then((state) => {
          return state;
        }),
        reps: this.store.peekAll('representative')
      });
    }
  }
});
