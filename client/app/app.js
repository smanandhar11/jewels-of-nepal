import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import ngMaterial from 'angular-material';
import ngAnimate from 'angular-animate';
import angularFire from 'angularfire';
import 'normalize.css';
import 'angular-material/angular-material.css';
import appTheme from './styles/theme.config';

window.app = angular
  .module('app', [
    uiRouter,
    Common,
    Components,
    ngMaterial,
    ngAnimate,
    angularFire
  ])
  .config(($locationProvider, $mdThemingProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');

    //appTheme
    appTheme($mdThemingProvider);
  })

  .component('app', AppComponent)

  // .directive('stickIt', ($window) => {
  //   'ngInject';
  //   return {
  //     restrict: 'A',
  //     transclude:true,
  //     template:`
  //       <div class="stick-container">
  //         <ng-transclude class="transclude"></ng-transclude>
  //       </div>
  //     `,
  //     link: (scope, element, attr) => {
  //       const mountHeight = attr.mount ? $(attr.mount).height() : 0;
  //       const $stickyContainer = $(element);
  //       const $stickyHeight = $stickyContainer.height();
  //       const $stickyContent = $stickyContainer.find('.transclude');
  //       const stickyContentTopOffSet = $stickyContainer.offset().top;
  //
  //       angular.element($window).on('scroll', ()=> {
  //         const scrollTop = $window.pageXoffset;
  //           if(scrollTop === undefined) console.log('helo');
  //
  //       });
  //     }
  //   }
  // });

  // .directive('stickIt', ($window,$scope) => {
  //   'ngInject';
  //   this.$scope = $scope;
  //   return {
  //     restrict: 'A',
  //     transclude: true,
  //     template: `
  //     <div class="stick-container">
  //       <ng-transclude class="transclude"></ng-transclude>
  //     </div>
  //     `,
  //     link: (scope, element, attr) => {
  //       const mountHeight = attr.mount ? $(attr.mount).height() : 0;
  //       const $stickyContainer = $(element);
  //       const $stickyHeight = $stickyContainer.height();
  //       const $stickyContent = $stickyContainer.find('.transclude');
  //       const stickyContentTopOffSet = $stickyContainer.offset().top;
  //
  //       angular.element($window).on('scroll', () => {
  //         const scrollTop = $window.pageYoffset;
  //         if (scrollTop >= stickyContentTopOffSet - mountHeight) {
  //           console.log('hello');
  //           $stickyContent.css({
  //             position: 'fixed',
  //             top: mountHeight,
  //             width: '100%',
  //             boxShadow: '0 0 10px 0 rgba(0,0,0,0.7)',
  //             transition: 'box-shadow 0.5s ease',
  //             zIndex: '999999'
  //           });
  //           $stickyContainer.css({height: $stickyHeight});
  //           $(element).addClass('is-Sticky');
  //         }
  //         else {
  //           //todo: get original css N apply here instead of some base
  //           $stickyContent.css({ position: 'static'});
  //           $(element).addClass('is-sticky');
  //         }
  //         this.$scope.digest();
  //       })
  //     }
  //   }
  // });
  // .directive('stickIt', ()=> {
  //   return {
  //
  //   }
  // });
