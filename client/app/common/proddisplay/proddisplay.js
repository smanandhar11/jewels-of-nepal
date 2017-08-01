import angular from 'angular';
import uiRouter from 'angular-ui-router';
import proddisplayComponent from './proddisplay.component';

let proddisplayModule = angular.module('proddisplay', [
  uiRouter
])

.component('proddisplay', proddisplayComponent)

.name;

export default proddisplayModule;
