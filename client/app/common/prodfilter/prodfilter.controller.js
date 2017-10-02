class ProdfilterController {
  constructor($window, $timeout) {
    'ngInject';
    this.colors = [
      'Red',
      'Blue',
      'Green',
      'Yellow',
      'Pink',
      'Black',
      'Others'
    ];
    this.baseColors = [
      'Golden',
      'Silver',
      'Cooper',
      'Bronze',
      'Rustic',
      'Metallic'
    ];
    this.types = [
      'Earrings',
      'Bracelets',
      'Necklace',
      'Sets',
      'Others'
    ];
    this.prices = [
      '0-100',
      '100-500',
      '500-1000',
      '1000 and more'
    ];
    this.$window = $window;
    this.$timeout = $timeout;

    //instantiating colorSwitch
    this.advanceMode = false;
    //instantiating mobFilter
    this.showMobFilter = false;
  }

  $onInit() {
    this.stickyFilter();
  }

  // storing all md-Selected in a var
  select(name, value) {
    this.changeValue({
      name,
      value
      // value: undefined //value is not being defined in the parameter, where's it coming from
    });
    this.showMobFilter = !this.showMobFilter;
    if (this.$window.innerWidth < 485) {
      //bind fn sending listener to gallery ctrl
      //to change state
      this.menuClick();
    }
  }

  //onclick: reset value to null
  reset(name) {
    this.changeValue({
      name,
      value: undefined
    });
  }

  switchCtrl() {
    this.advanceMode = !this.advanceMode;
  }

  barClick() {
    //bind fn sending listener to gallery ctrl
    // change state
    this.menuClick();

    this.showMobFilter = !this.showMobFilter;
  }

  stickyFilter() {
    this.$timeout(() => {
      let header = document.getElementsByClassName('main-header');
      let $header = angular.element(header);
      let $headerHeight = $header.height();
      let nav = document.getElementsByClassName('main-nav');
      let $nav = angular.element(nav);
      let $navHeight = $nav.height();
      let $headNavHeight = $headerHeight + $navHeight;
      let filterContainer = document.getElementsByClassName('prodfilter');
      let $filterContainer = angular.element(filterContainer);
      let mobileWidth = 485;

      angular.element(this.$window).on('scroll', () => {
        if (this.$window.innerWidth > mobileWidth && this.$window.scrollY >= $headNavHeight - 35) {
          $filterContainer.css({
            position: 'fixed',
            top: $navHeight,
            width: '19.2%',
          })
        } else {
          $filterContainer.css({position: 'static', width: '100%'})
        }
      });
    }, 100);
  }

}

export default ProdfilterController;
