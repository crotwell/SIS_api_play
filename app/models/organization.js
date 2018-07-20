import DS from 'ember-data';

export default DS.Model.extend({
  orgcode: DS.attr('string'),
  name: DS.attr('string'),
  description: DS.attr('string'),
  contact: DS.attr('string'),
  website: DS.attr('string'),
  namespace: DS.attr('string'),
});
