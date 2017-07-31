import angular from 'angular';
import uiRouter from 'angular-ui-router';
import galleryComponent from './gallery.component';

let galleryModule = angular.module('gallery', [
  uiRouter
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('gallery', {
        url: '/gallery',
        component: 'gallery'
      });
  })

.component('gallery', galleryComponent)

.name;

export default galleryModule;
