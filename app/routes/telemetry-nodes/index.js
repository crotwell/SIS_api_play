import Route from '@ember/routing/route';

export default Route.extend({
    model() {
      return this.store.query('telemetryNode', { operatorcode_in: 'SCSN-SC' });
    }
});
