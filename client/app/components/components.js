import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Gallery from './gallery/gallery';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Gallery
])

.name;

export default componentModule;
