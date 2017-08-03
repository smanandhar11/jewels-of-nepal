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
    this.colorModel = null;
    this.typeModel = null;
    this.priceModel = null;
  }

  // storing colorSelected in a var
  colorSelect(value) {
    this.colorSelected = value;
  }

  typeSelect(type) {
    this.typeSelected = type;
  }

  priceSelect(price) {
    this.priceSelected = price;
  }

  resetColor() {
    this.colorSelected = '';
    this.colorModel = null;
  }

  resetType() {
    this.typeSelected = '';
    this.typeModel = null;
  }

  resetPrice() {
    this.priceSelected = '';
    this.priceModel = null;
  }
}

export default ProdfilterController;
