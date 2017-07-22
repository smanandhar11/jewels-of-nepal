import angular from 'angular';
import Header from './header/header';
import Hero from './hero/hero';
import User from './user/user';

let commonModule = angular.module('app.common', [
  Header,
  Hero,
  User
])

.name;

export default commonModule;
