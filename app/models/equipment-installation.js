import DS from 'ember-data';

export default DS.Model.extend({
    category: DS.attr('string'),
    modelname: DS.attr('string'),
    serialnumber: DS.attr('string'),
    ondate: DS.attr('date'),
    offdate: DS.attr('date'),
    equipname: DS.attr('string'),
    notes: DS.attr('string'),
    siteepoch: DS.belongsTo('SiteEpoch'),
    telemetrynodes: DS.hasMany('TelemetryNode'),
});
