'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'sis-play',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
    ENV.rootURL = '/~crotwell/SIS_api_play';
  }

  ENV['ember-simple-auth-token'] = {
    serverTokenEndpoint: 'https://anss-sis.scsn.org/sistest/api/v1/token/auth',
    refreshAccessTokens: true,
    serverTokenRefreshEndpoint: 'https://anss-sis.scsn.org/sistest/api/v1/token/refresh',
    refreshLeeway: 300, // refresh 5 minutes (300 seconds) before expiration
    //authorizationPrefix: 'JWT ', // Prefix added to each API request
  };

  return ENV;
};
