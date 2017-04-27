import Ember from 'ember';
import $ from 'jquery';

export default Ember.Route.extend({
  render: function(){
    this._super();
    $(document).ready(function(){
      $('header').addClass('active-header');
      $('.matched-images').matchHeight();
      $(window).scrollTop(0);
      $('.hamburger').addClass('white-hamburger');
    });
  },
  model: function(params){
    return this.store.findRecord('representative', params.id).then(function(representative){
      return representative;
    });
  }
});
