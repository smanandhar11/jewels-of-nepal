class ProdfilterController {
  constructor() {

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
    ]
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
}

export default ProdfilterController;
