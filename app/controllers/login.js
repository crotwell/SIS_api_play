import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject } from '@ember/service';
import moment from 'moment';

export default Controller.extend({
  init: function () {
    this._super();
    if (this.session.data && this.session.data.authenticated) {
      this.set('myoldToken', this.session.data.authenticated.token);
    }
  },
  session: inject('session'),
  failureMessage: "empty",
  isLoggedIn: computed('session', 'myoldToken', 'isTokenExpired', function() {
    return this.session.isAuthenticated && ! this.isTokenExpired;
  }).volatile(),
  myoldToken: null,
  prettyToken: computed('decodedToken', function() {
    return JSON.stringify(this.decodedToken, null, 2);
  }),
  prettyTokenHeader: computed('decodedToken', function() {
    return JSON.stringify(this.get('decodedToken.header'), null, 2);
  }),
  prettyTokenPayload: computed('decodedToken', function() {
    return JSON.stringify(this.get('decodedToken.payload'), null, 2);
  }),
  expiresAt: computed('decodedToken', function() {
    if (this.get('decodedToken.payload.exp')) {
      return moment.utc(moment.unix(this.get('decodedToken.payload.exp')));
    } else {
      return null;
    }
  }).volatile(),
  isTokenExpired: computed('expiresAt', function() {
    return this.get('expiresAt')
      && this.get('expiresAt').isBefore(moment.utc());
  }).volatile(),
  decodedToken: computed('myoldToken', function() {
    if (this.myoldToken && this.myoldToken.length > 0) {
      let items = this.myoldToken.split('.');
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
      this.session.invalidate([])
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

      this.session.authenticate(authenticator, credentials)
      .then(() => {
        let token = this.session.data.authenticated.token;
        this.set('myoldToken', this.session.data.authenticated.token);
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
