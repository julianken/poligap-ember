import Ember from 'ember';

export default Ember.Component.extend({
  filteredList: [],
  filterValue: '',

  init: function(){
    this._super();
    this.set('filteredList', this.get('states'));
  },

  filterValueObserver: Ember.observer('filterValue', function(){
    let states = this.get('states');
    let filteredStates = states.reduce( (stateList, state) => {
      let valueLength = this.filterValue.length;
      let stateLetterComparison = state.data.fullName.substr(0, valueLength).toLowerCase();

      if (stateLetterComparison === this.filterValue.toLowerCase()) {
        return stateList.concat(state);
      } else {
        return stateList;
      }
    }, []);

    this.set('filteredList', filteredStates);
  })
});
