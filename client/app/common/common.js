import angular from 'angular';
import Header from './header/header';
import Hero from './hero/hero';
import User from './user/user';
import Wrapper from './wrapper/wrapper';
import Footer from './footer/footer';

let commonModule = angular.module('app.common', [
  Header,
  Hero,
  User,
  Wrapper,
  Footer
])

.name;

export default commonModule;
