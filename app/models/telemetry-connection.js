import Model, { attr, hasMany } from '@ember-data/model';

export default Model.extend({
  connectiontype: attr('string'),
  ondate: attr('date'),
  offdate: attr('date'),
  notes: attr('string'),
  connectionsettings: attr(),
  createdby: attr('string'),
  datecreated: attr('date'),
  modifiedby: attr('string'),
  datemodified: attr('date'),
  telemetrynodes: hasMany('telemetry-node'),
});
