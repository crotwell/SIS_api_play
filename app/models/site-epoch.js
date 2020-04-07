import Model, { attr, hasMany } from '@ember-data/model';

export default Model.extend({
  siteid: attr('string'),
  netcode: attr('string'),
  sitename: attr('string'),
  locationdescription: attr('string'),
  lookupcode: attr('string'),
  latitude: attr('number'),
  longitude: attr('number'),
  elevation: attr('number'),
  ondate: attr('date'),
  offdate: attr('date'),
  sitetypes: attr('string'),
  telemetrytypes: attr('string'),
  siteoperators: hasMany('Organization'),
  equipinstallations: hasMany("EquipmentInstallation"),
  telemetrynodes: hasMany("TelemetryNode"),
});
