import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  congressOffice: DS.attr('string'),
  partyLetter: DS.attr('string'),
  birthday: DS.attr('date'),
  party: DS.attr('string'),
  email: DS.attr('string'),
  prefix: DS.attr('string'),
  chamber: DS.attr('string'),
  cashSpent: DS.attr('string'),
  cashOnHand: DS.attr('string'),
  cashDebt: DS.attr('string'),
  cashTotal: DS.attr('string'),
  imageUrl: DS.attr('string'),
  stateId: DS.attr('string'),
  gender: DS.attr('string'),
  state: DS.attr(),
  contributionInformation: DS.attr(),
  twitterId: DS.attr('string'),
  phoneNumber: DS.attr('string'),
  youtubeUrl: DS.attr('string'),
  facebookId: DS.attr('string'),
  website: DS.attr('string')
});
