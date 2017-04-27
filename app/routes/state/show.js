import Ember from 'ember';
import $ from 'jquery';

export default Ember.Route.extend({

  render: function(){
    this._super();
    let overlay = $('.overlay');

    $('.tooltip').css('display', 'none');
    overlay.addClass('faded');
    setTimeout(() => {
      overlay.css('max-height', 0);
      overlay.attr('class', 'overlay');
    }, 650);
    $(document).ready(() => {
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
