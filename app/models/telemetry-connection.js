import DS from 'ember-data';

export default DS.Model.extend({
  connectiontype: DS.attr('string'),
  ondate: DS.attr('date'),
  offdate: DS.attr('date'),
  notes: DS.attr('string'),
  connectionsettings: DS.attr(),
  createdby: DS.attr('string'),
  datecreated: DS.attr('date'),
  modifiedby: DS.attr('string'),
  datemodified: DS.attr('date'),
  telemetrynodes: DS.hasMany('telemetry-node'),
});
