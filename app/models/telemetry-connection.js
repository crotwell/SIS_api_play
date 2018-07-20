import DS from 'ember-data';

export default DS.Model.extend({
  connectiontype: DS.attr('string'),
  ondate: DS.attr('date'),
  offdate: DS.attr('date'),
  connectionrank1: DS.attr('string'),
  connectionrank2: DS.attr('string'),
  notes: DS.attr('string'),
  connectionSettings: DS.attr(),
  createdby: DS.attr('string'),
  datecreated: DS.attr('date'),
  modifiedby: DS.attr('string'),
  datemodified: DS.attr('date'),
  telnode1: DS.belongsTo('telemetry-node'),
  telnode2: DS.belongsTo('telemetry-node'),
});
