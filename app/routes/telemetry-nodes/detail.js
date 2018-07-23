import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord('telemetryNode', params.telemetry_node_id);
  }
});
