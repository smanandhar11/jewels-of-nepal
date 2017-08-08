import angular from 'angular';
import uiRouter from 'angular-ui-router';
import gallery/prodDetailsComponent from './gallery/prodDetails.component';

let gallery/prodDetailsModule = angular.module('gallery/prodDetails', [
  uiRouter
])

.component('gallery/prodDetails', gallery/prodDetailsComponent)

.name;

export default gallery/prodDetailsModule;
