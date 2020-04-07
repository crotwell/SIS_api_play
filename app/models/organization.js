import Model, { attr, hasMany } from '@ember-data/model';

export default Model.extend({
  orgcode: attr('string'),
  name: attr('string'),
  description: attr('string'),
  contact: attr('string'),
  website: attr('string'),
  namespace: attr('string'),
  siteepochs: hasMany('site-epoch'),
});
