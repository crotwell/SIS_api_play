import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | telemetry-nodes/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:telemetry-nodes/index');
    assert.ok(route);
  });
});
