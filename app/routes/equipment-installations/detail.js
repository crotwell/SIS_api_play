import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.get('store').findRecord('equipmentInstallation', params.equipment_installation_id);
  }
});
