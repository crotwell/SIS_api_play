import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
      return this.get('store').findRecord('equipInstallation', params.equip_installation_id);
    }
});
