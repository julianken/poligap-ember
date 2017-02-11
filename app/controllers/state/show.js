import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['state_id'],
  category: null,

  init: function(){
    this._super();
    $(document).ready(() => {
      // console.log(document.querySelector('.representative-circle-profile').style.backgroundImage);
      $('representative-circle-profile').bind('error',function(ev){
        //error has been thrown
        console.log(ev);
      })
    });
  }

});
