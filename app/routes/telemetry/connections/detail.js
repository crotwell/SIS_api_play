import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.get('store').findRecord('telemetryConnection', params.telemetry_connection_id);
  }
});
