import Ember from 'ember';
import $ from 'jquery';

export default Ember.Controller.extend({
  init: function() {
    this._super();
    $(document).ready(function(){
      $('.matched-images').matchHeight();
    });
  }
});
