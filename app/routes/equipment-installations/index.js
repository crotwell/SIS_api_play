import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.query('equipmentInstallation', { primaryoperatorcode_in: 'SCSN-SC' });
  }
});
