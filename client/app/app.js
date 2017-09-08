import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import ngMaterial from 'angular-material';
import ngAnimate from 'angular-animate';
import firebase from 'firebase';
import 'normalize.css';
import 'angular-material/angular-material.css';
import appTheme from './styles/theme.config';

angular.module('app', [
  uiRouter,
  Common,
  Components,
  ngMaterial,
  ngAnimate,
  firebase,
])
  .config(($locationProvider,$mdThemingProvider ) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');

    //appTheme
    appTheme($mdThemingProvider);
  })

  .component('app', AppComponent);
