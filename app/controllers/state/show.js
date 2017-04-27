import Ember from 'ember';
import $ from 'jquery';

export default Ember.Controller.extend({
  queryParams: ['state_id'],
  category: null,

  init: function(){
    this._super();
    $(document).ready(() => {
      $('representative-circle-profile').bind('error',function(ev){
        console.log(ev);
      });
    });
  }

});
