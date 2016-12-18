import DS from 'ember-data';

export default DS.Model.extend({
  fullName: DS.attr(),
  abbreviatedName: DS.attr('string'),
  stateDescription: DS.attr(),
  senateStats: DS.attr(),
  congressStats: DS.attr(),
  representative: DS.hasMany('representative'),
});
