import angular from 'angular';
import uiRouter from 'angular-ui-router';
import carouselComponent from './carousel.component';

let carouselModule = angular.module('carousel', [
  uiRouter
])

.component('carousel', carouselComponent)

.name;

export default carouselModule;
