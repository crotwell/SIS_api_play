import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | telemetry-connections/detail', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:telemetry-connections/detail');
    assert.ok(route);
  });
});
