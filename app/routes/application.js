import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      states: this.store.findAll('state').then(function(states){
        return states;
      }),
      representatives: this.store.findAll('representative')
    });
  },
  render: function(){
    this._super();
    $(document).ready(function(){
      var $viewportMeta = $('meta[name="viewport"]');
      $('input, select, textarea').bind('focus blur', function(event) {
      $viewportMeta.attr('content', 'width=device-width,initial-scale=1,maximum-scale=' + (event.type == 'blur' ? 10 : 1));
      });
    });
  }
});
