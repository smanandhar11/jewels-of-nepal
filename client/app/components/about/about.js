import angular from 'angular';
import uiRouter from 'angular-ui-router';
import aboutComponent from './about.component';

let aboutModule = angular.module('about', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('about', {
      url: '/about',
      component: 'about',
      authenticated: true
    });
})

.component('about', aboutComponent)

.name;

export default aboutModule;
