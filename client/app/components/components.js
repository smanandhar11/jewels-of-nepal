import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Gallery from './gallery/gallery';
import ProdDetails from './gallery/proddetails/proddetails'

let componentModule = angular.module('app.components', [
  Home,
  About,
  Gallery,
  ProdDetails
])

.name;

export default componentModule;
