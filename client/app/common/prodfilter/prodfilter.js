import angular from 'angular';
import uiRouter from 'angular-ui-router';
import prodfilterComponent from './prodfilter.component';

let prodfilterModule = angular.module('prodfilter', [
  uiRouter
])

.component('prodfilter', prodfilterComponent)

.name;

export default prodfilterModule;
