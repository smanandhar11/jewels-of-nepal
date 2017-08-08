import angular from 'angular';
import uiRouter from 'angular-ui-router';
import proddetailsComponent from './proddetails.component';

let proddetailsModule = angular.module('proddetails', [
  uiRouter
])
  .config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('proddetails', {
      url:'/gallery/prod-details',
      component:'proddetails'
    });

  })

.component('proddetails', proddetailsComponent)

.name;

export default proddetailsModule;
