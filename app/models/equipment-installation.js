import DS from 'ember-data';

export default DS.Model.extend({
    equipmentid: DS.attr('string'),
    category: DS.attr('string'),
    modelname: DS.attr('string'),
    serialnumber: DS.attr('string'),
    ondate: DS.attr('date'),
    offdate: DS.attr('date'),
    siteid: DS.attr('string'),
    netcode: DS.attr('string'),
    lookupcode: DS.attr('string'),
    latitude: DS.attr('number'),
    longitude: DS.attr('number'),
});
