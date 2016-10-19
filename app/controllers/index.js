import Ember from 'ember';
import $ from 'jquery';

export default Ember.Controller.extend({
  didTransition: function() {
    this._super();
    $(document).ready(function(){
      $('.matched-images').matchHeight();
      $('.header').removeClass('.active-header');
    });
  }
});
