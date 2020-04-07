import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default Model.extend({
    category: attr('string'),
    modelname: attr('string'),
    serialnumber: attr('string'),
    ondate: attr('date'),
    offdate: attr('date'),
    equipname: attr('string'),
    notes: attr('string'),
    siteepoch: belongsTo('SiteEpoch'),
    telemetrynodes: hasMany('TelemetryNode'),
});
