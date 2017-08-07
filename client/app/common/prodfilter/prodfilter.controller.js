class ProdfilterController {
  constructor() {
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
    //setting all resp. ng-model to null
    this.colorModel = null;
    this.typeModel = null;
    this.priceModel = null;
    this.baseColorModel = null;

    //instantiating colorSwitch
    this.advanceMode = false;
  }

  // storing all md-Selected in a var
  colorSelect(value) {
    this.colorSelected = value;
  }

  baseColorSelect(value) {
    this.baseColorSelected = value;
  }

  typeSelect(type) {
    this.typeSelected = type;
  }

  priceSelect(price) {
    this.priceSelected = price;
  }

  //onclick: reset value to null
  resetColor() {
    this.colorSelected = '';
    this.colorModel = null;
  }

  resetBaseColor() {
    this.baseColorSelected = '';
    console.log('>>',this.baseColorModel);
    this.baseColorModel = null;
  }

  resetType() {
    this.typeSelected = '';
    this.typeModel = null;
  }

  resetPrice() {
    this.priceSelected = '';
    this.priceModel = null;
  }

  switchCtrl() {
    this.advanceMode = !this.advanceMode;
  }

}

export default ProdfilterController;
