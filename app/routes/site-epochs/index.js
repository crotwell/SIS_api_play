import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.get('store').query('siteEpoch', { operatorcode_in: 'SCSN-SC' });
  }
});
