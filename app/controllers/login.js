import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject } from '@ember/service';
import moment from 'moment';

export default Controller.extend({
  init: function () {
    this._super();
    if (this.get('session').data && this.get('session').data.authenticated) {
      this.set('myoldToken', this.get('session').data.authenticated.token);
    }
  },
  session: inject('session'),
  failureMessage: "empty",
  isLoggedIn: computed('session', 'myoldToken', function() {
    return this.get('session').isAuthenticated;
  }),
  myoldToken: null,
  prettyToken: computed('decodedToken', function() {
    return JSON.stringify(this.get('decodedToken'), null, 2);
  }),
  prettyTokenHeader: computed('decodedToken', function() {
    return JSON.stringify(this.get('decodedToken.header'), null, 2);
  }),
  prettyTokenPayload: computed('decodedToken', function() {
    return JSON.stringify(this.get('decodedToken.payload'), null, 2);
  }),
  isTokenExpired: computed('decodedToken', function() {
    return this.get('decodedToken.payload.exp')
      && moment.utc(this.get('decodedToken.payload.exp')).isBefore(moment.utc());
  }),
  decodedToken: computed('myoldToken', function() {
    if (this.get('myoldToken') && this.get('myoldToken').length > 0) {
      let items = this.get('myoldToken').split('.');
      return {
        header: JSON.parse(atob(items[0])),
        payload: JSON.parse(atob(items[1])),
        signature: items[2], //signature is not json
      };
    } else {
      return {
        header: {},
        payload: {},
        signature: "",
      };
    }
  }),
  actions: {
    invalidate: function() {
      this.get('session').invalidate([])
      .then( () => {
        console.log("invalide creditials");
        this.set('myoldToken', null);
        this.set('failureMessage', "invalidated");
        this.toggleProperty('recalcIsLoggedIn');
      }).catch( e => {
        console.log("Unable to invalidate: "+e);
        this.set('failureMessage', e);
      })
    },
    authenticate: function() {
      const credentials = this.getProperties('username', 'password');
      const authenticator = 'authenticator:token'; // 'authenticator:token' or 'authenticator:jwt'

      this.get('session').authenticate(authenticator, credentials)
      .then(() => {
        let token = this.get('session').data.authenticated.token;
        this.set('myoldToken', this.get('session').data.authenticated.token);
        console.log("Successful login "+token+" "+JSON.stringify(token, null, 2));
        this.set('failureMessage', "ok");
        // don't need password anymore
        this.set('password', "");
      }).catch( reason => {
        let message = reason.error || reason;
        if (reason.status) {
          message = reason.status+" "+reason.statusText+" "+reason.text;
        }
        console.log("Unsuccessful login: "+message);
        this.set('myoldToken', null);
        this.set('failureMessage', message);
      });
    }
  }
});
