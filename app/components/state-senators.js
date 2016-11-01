import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Component.extend({

  state: {},
  senate: {},
  house: {},
  queryParams: ['state'],

  init: function(){
    this._super();

    let data = this.get('state');
    let state = data.state;
    let reps = data.reps.content;
    let senate = [];
    let house = [];

    reps.forEach(function(item){
      if (item._data.state_id == state.id) {
        if (item._data.congress_office == 'sen') {
          senate.push(item);
        } else if (item._data.congress_office == 'rep') {
          house.push(item);
        }
      }
    });

    this.set('senate', senate);
    this.set('house', house);
    
  }


});
