import angular from 'angular';
import uiRouter from 'angular-ui-router';
import socialComponent from './social.component';

let socialModule = angular.module('social', [
  uiRouter
])

.component('social', socialComponent)

.name;

export default socialModule;
