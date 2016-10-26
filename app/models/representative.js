import DS from 'ember-data';

export default DS.Model.extend({
  first_name: DS.attr('string'),
  last_name: DS.attr('string'),
  birthday: DS.attr('date'),
  party: DS.attr('string'),
  state_id: DS.attr('string')
});
