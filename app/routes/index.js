import Ember from 'ember';
import $ from 'jquery';


export default Ember.Route.extend({
  setupController: function(){
    $(document).ready(function(){
      $('header').removeClass('active-header');
      $('.matched-images').matchHeight();
    });
  }
});
