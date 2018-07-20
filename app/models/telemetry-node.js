import DS from 'ember-data';

export default DS.Model.extend({
  port: DS.attr('string'),
  portdescription: DS.attr('string'),
  ipaddresses: DS.attr('string'),
  createdby: DS.attr('string'),
  datecreated: DS.attr('date'),
  modifiedby: DS.attr('string'),
  datemodified: DS.attr('date'),
  siteepoch: DS.belongsTo('site-epoch'),
//equipinstallepoch: DS.belongsTo('equipment-installation'),
});
