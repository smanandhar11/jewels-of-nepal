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
  }

  next(x) {
    let noOfProds = x.options.length -1;
    x.activeOption++;
    if(x.activeOption > noOfProds) {
      x.activeOption = 0;
    }
  }
  prev(x) {
    let noOfProds = x.options.length -1;
    x.activeOption--;
    if(x.activeOption < 0) {
      x.activeOption = noOfProds;
    }
  }
}

export default CarouselController;
