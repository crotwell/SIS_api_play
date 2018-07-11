import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('sites', function() {
    this.route('detail', {path: ':site_epoch_id'});
  });
  this.route('telemetry', function() {
    this.route('connections', function() {
      this.route('detail',
        {path: ':telemetry_connection_id'});
    });
    this.route('nodes', function() {
      this.route('detail',
        {path: ':telemetry_node_id'});
    });
  });
  this.route('equip-installations', function() {
    this.route('detail',
      {path: ':equip_installation_id'});
  });
});

export default Router;
