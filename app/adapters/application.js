import JSONAPIAdapter from '@ember-data/adapter/json-api';
import TokenAuthorizerMixin from 'ember-simple-auth-token/mixins/token-authorizer';

export default JSONAPIAdapter.extend({
  namespace: 'sistest/api/v1',
  host: 'https://anss-sis.scsn.org'
}).extend(TokenAuthorizerMixin);
