import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

// Tell the inflector that the plural of "epoch" is "epochs"
inflector.irregular('epoch', 'epochs');

// Modules must have an export, so we just export an empty object here
export default {};
