class NavbarController {
  constructor($timeout, $window) {
    'ngInject';
    this.$timeout = $timeout;
    this.$window = $window;
  }

  $onInit() {
    this.setSticky();
  };

  setSticky() {
    this.$timeout(() => {
      let header = document.getElementsByClassName('main-header');
      let $header = angular.element(header);
      let $headerHeight = $header.height();
      let nav = document.getElementsByClassName('main-nav');
      let $nav = angular.element(nav);
      let $navHeight = $nav.height();
      let head = document.getElementsByClassName('head');
      let $head = angular.element(head);

      angular.element(this.$window).on('scroll', () => {
        if (this.$window.scrollY >= $headerHeight) {
          $head.css('marginBottom', $navHeight + 'px');
          $nav.css({
            position: 'fixed',
            top: '0',
            width: '100%',
            boxShadow: '0 0 10px 0 rgba(0,0,0,0.7)',
            transition: 'box-shadow 0.5s ease',
            zIndex: '999999'
          });
        } else {
          $nav.css({position: 'static'});
          $head.css('marginBottom', '0');
        }
      })

    }, 100);
  }
}

export default NavbarController;
