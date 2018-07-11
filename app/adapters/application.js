import DS from 'ember-data';
import TokenAuthorizerMixin from 'ember-simple-auth-token/mixins/token-authorizer';

export default DS.JSONAPIAdapter.extend({
  namespace: 'sistest/api/v1',
  host: 'https://anss-sis.scsn.org'
}).extend(TokenAuthorizerMixin);
