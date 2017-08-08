import angular from 'angular';
import uiRouter from 'angular-ui-router';
import billboardComponent from './billboard.component';

let billboardModule = angular.module('billboard', [
  uiRouter
])

.component('billboard', billboardComponent)

.name;

export default billboardModule;
