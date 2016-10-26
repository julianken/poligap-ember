import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      states: this.store.findAll('state').then(function(state){
        return state;
      }),
      representatives: this.store.findAll('representative')
    });
  }
});
