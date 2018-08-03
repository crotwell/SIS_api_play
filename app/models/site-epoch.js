import DS from 'ember-data';

export default DS.Model.extend({
  siteid: DS.attr('string'),
  netcode: DS.attr('string'),
  sitename: DS.attr('string'),
  locationdescription: DS.attr('string'),
  lookupcode: DS.attr('string'),
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  elevation: DS.attr('number'),
  ondate: DS.attr('date'),
  offdate: DS.attr('date'),
  sitetypes: DS.attr('string'),
  telemetrytypes: DS.attr('string'),
  siteoperators: DS.hasMany('Organization'),
  equipinstallations: DS.hasMany("EquipmentInstallation"),
  telemetrynodes: DS.hasMany("TelemetryNode"),
});
