import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | site-epochs/detail', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:site-epochs/detail');
    assert.ok(route);
  });
});
