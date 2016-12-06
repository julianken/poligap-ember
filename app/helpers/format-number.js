import Ember from 'ember';

export function formatNumber(value) {
  return (parseInt(value) + '').replace(/(\d)(?=(\d{3})+$)/g, '$1,');
}

export default Ember.Helper.helper(formatNumber);
