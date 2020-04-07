import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default Model.extend({
  port: attr('string'),
  portdescription: attr('string'),
  ipaddresses: attr('string'),
  createdby: attr('string'),
  datecreated: attr('date'),
  modifiedby: attr('string'),
  datemodified: attr('date'),
  siteepoch: belongsTo('site-epoch'),
  equipinstallepoch: belongsTo('equipment-installation'),
  connections: hasMany('telemetry-connection'),
});
