class ProdfilterController {
  constructor($window) {
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

    //instantiating colorSwitch
    this.advanceMode = false;
    //instantiating mobFilter
    this.showMobFilter= false;
  }

  // storing all md-Selected in a var
  select(name, value) {
    this.changeValue({
      name,
      value
      // value: undefined //value is not being defined in the parameter, where's it coming from
    });
    this.showMobFilter = !this.showMobFilter;
    if(this.$window.innerWidth < 485) {
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

}

export default ProdfilterController;
