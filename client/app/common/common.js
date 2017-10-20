import angular from 'angular';
import Billboard from './billboard/billboard';
import Carousel from './carousel/carousel';
import Footer from './footer/footer';
import Header from './header/header';
import Hero from './hero/hero';
import ProdDisplay from './proddisplay/proddisplay';
import ProdFilter from './prodfilter/prodfilter';
import RelatedProducts from './relatedproducts/relatedproducts';
import Social from './social/social';
import User from './user/user';
import Wrapper from './wrapper/wrapper';

let commonModule = angular.module('app.common', [
  Billboard,
  Carousel,
  Footer,
  Header,
  Hero,
  ProdDisplay,
  ProdFilter,
  RelatedProducts,
  Social,
  User,
  Wrapper,
])

.name;

export default commonModule;
