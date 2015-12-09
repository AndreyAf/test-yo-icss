'use strict';

angular.module('testingDeleteLaterApp.auth', [
  'testingDeleteLaterApp.constants',
  'testingDeleteLaterApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
