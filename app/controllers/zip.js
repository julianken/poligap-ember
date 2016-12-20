import Ember from 'ember';
import $ from 'jquery';

export default Ember.Controller.extend({

  zip: '',
  city: '',
  state: '',
  stateID: '',
  actions: {
    stateDetail() {
      document.activeElement.blur();
      this.transitionToRoute('state.show', this.stateID);
    }
  },
  zipObserver: Ember.observer('zip', function(){
    if (parseInt(this.zip).toString().length === 5) {
      $.get('http://ziptasticapi.com/' + this.zip, (response) => {
        var location = JSON.parse(response);
        this.set('city', location.city);
        this.set('state', location.state);

        let selectedState = [];

        $.get('/json/states.json', (response, id) => {
          selectedState = response.find((response) => {
            return response.abbreviation === location.state;
          });
        }).then(() => {
          this.set('stateID', selectedState.id);
        });

      });
    } else {
      this.set('city', '');
      this.set('state', '');
    }
  })

});
