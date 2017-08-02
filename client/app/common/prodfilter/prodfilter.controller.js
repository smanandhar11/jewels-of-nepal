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
      'Rs.0 - Rs.100',
      'Rs.100 - Rs.500',
      'Rs.500 - Rs.1000',
      'Rs.1000 and more'
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
