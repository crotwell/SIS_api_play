import Route from '@ember/routing/route';

export default Route.extend({

    model() {
      return this.get('store').query('telemetryConnection', { netcode_in: 'CO' });
    }
});
