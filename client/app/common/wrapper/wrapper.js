import angular from 'angular';
import uiRouter from 'angular-ui-router';
import wrapperComponent from './wrapper.component';

let wrapperModule = angular.module('wrapper', [
  uiRouter
])

.component('wrapper', wrapperComponent)

.name;

export default wrapperModule;
