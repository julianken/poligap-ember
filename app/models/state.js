import DS from 'ember-data';

export default DS.Model.extend({
  full_name: DS.attr('string'),
  abbreviated_name: DS.attr('string'),
  senate_stats: DS.attr(),
  congress_stats: DS.attr(),
  representative: DS.hasMany('representative')
});
