import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | telemetry-connections/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:telemetry-connections/index');
    assert.ok(route);
  });
});
