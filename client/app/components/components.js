import angular from 'angular';
import About from './about/about';
import Gallery from './gallery/gallery';
import Home from './home/home';
import Login from './login/login';
import ProdDetails from './gallery/proddetails/proddetails'

let componentModule = angular.module('app.components', [
  Home,
  About,
  Gallery,
  Login,
  ProdDetails
])

.name;

export default componentModule;
