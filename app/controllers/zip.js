import Ember from 'ember';
import $ from 'jquery';

export default Ember.Controller.extend({

  zip: '',
  message: '',
  stateID: '',

  actions: {
    stateDetail() {
      if (parseInt(this.zip).toString().length === 5) {
        $.get('http://ziptasticapi.com/' + this.zip, (response) => {
          var location = JSON.parse(response);

          if (location.error === "Zip Code not found!") {
            this.set('message', 'Invalid ZIP code, please try again.');
          } else {
            let selectedState = [];

            $.get('/json/states.json', (response, id) => {
              selectedState = response.find((response) => {
                return response.abbreviation === location.state;
              });
            }).then(() => {
              this.set('stateID', selectedState.id);
              document.activeElement.blur();
              this.transitionToRoute('state.show', this.stateID);
            });
          }
        });
      }
    }
  }
});
