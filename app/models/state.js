import DS from 'ember-data';

export default DS.Model.extend({
  fullName: DS.attr(),
  abbreviatedName: DS.attr('string'),
  senateStats: DS.attr(),
  congressStats: DS.attr(),
  representative: DS.hasMany('representative'),
});
