import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('login');
  this.route('telemetry', function() {});
  this.route('equip-installations');

  this.route('equipment-installations', function() {
    this.route('detail',
      {path: ':equipment_installation_id'});
  });
  this.route('organizations', function() {
    this.route('detail', {path: ':organization_id'});
  });
  this.route('site-epochs', function() {
    this.route('detail', {path: ':site_epoch_id'});
  });

  this.route('telemetry-nodes', function() {
    this.route('detail', {path: ':telemetry_node_id'});
  });
  this.route('telemetry-connections', function() {
    this.route('detail', {path: ':telemetry_connection_id'});
  });
});
