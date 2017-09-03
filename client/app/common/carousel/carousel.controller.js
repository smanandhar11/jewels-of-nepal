class CarouselController {
  constructor() {
    this.caroProds = [
      {
        activeOption: 0,
        options: [
          {
            'imgSrc': '../../../app/resources/images/product-images/golden-crescent.jpg',
            'name': 'Blue Dream',
          },
          {
            'imgSrc':'../../../app/resources/images/product-images/turquoise-angel.jpg',
            'name':'Turquoise Angel'
          },
          {
            'imgSrc':'../../../app/resources/images/product-images/mars-burning.jpg',
            'name':'Turquoise Angel'
          },
          {
            'imgSrc':'../../../app/resources/images/product-images/black-diamond.jpg',
            'name':'2nd Last'
          },
          {
            'imgSrc':'../../../app/resources/images/product-images/turquoise-angel.jpg',
            'name':'Last'
          }
        ],
      },
    ];
    this.noCaroProds = 4;
  }

  next(x) {
    x.activeOption++;
    if(x.activeOption > this.noCaroProds) {
      x.activeOption = 0;
    }
  }
  prev(x) {
    x.activeOption--;
    if(x.activeOption < 0) {

      x.activeOption = 4;
    }
  }
}

export default CarouselController;
