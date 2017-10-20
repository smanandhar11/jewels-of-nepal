import angular from 'angular';
import uiRouter from 'angular-ui-router';
import relatedproductsComponent from './relatedproducts.component';

let relatedproductsModule = angular.module('relatedproducts', [
  uiRouter
])

.component('relatedproducts', relatedproductsComponent)

.name;

export default relatedproductsModule;
