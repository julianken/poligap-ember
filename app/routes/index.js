import Ember from 'ember';
import $ from 'jquery';


export default Ember.Route.extend({
  render: function(){
    this._super();
    $(document).ready(function(){
      $('header').removeClass('active-header');
      $('.matched-images').matchHeight();
      $(window).scrollTop(0);
    });
  }
});
