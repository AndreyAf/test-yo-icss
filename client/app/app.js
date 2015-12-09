'use strict';

angular.module('testingDeleteLaterApp', [
  'testingDeleteLaterApp.auth',
  'testingDeleteLaterApp.admin',
  'testingDeleteLaterApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
