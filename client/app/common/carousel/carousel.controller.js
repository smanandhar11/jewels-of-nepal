class CarouselController {
  constructor() {
    this.caroProds = [
      {
        activeOption: 0,
        options: [
          {
            'imgSrc': '../../../app/resources/images/carousel-images/nature1.png',
            'name': 'Symmetrically Blissful',
          },
          {
            'imgSrc': '../../../app/resources/images/carousel-images/nature2.png',
            'name': 'Colorful Emotion'
          },
          {
            'imgSrc': '../../../app/resources/images/carousel-images/nature3.png',
            'name': 'Simple Times'
          },
          {
            'imgSrc': '../../../app/resources/images/carousel-images/nature4.png',
            'name': 'Revolutionary'
          },
          {
            'imgSrc': '../../../app/resources/images/carousel-images/nature5.png',
            'name': 'Blue Moon'
          }
        ],
      },
    ];
  }

  next(x) {
    let noOfProds = x.options.length - 1;
    x.activeOption++;
    if (x.activeOption > noOfProds) {
      x.activeOption = 0;
    }
  }

  prev(x) {
    let noOfProds = x.options.length - 1;
    x.activeOption--;
    if (x.activeOption < 0) {
      x.activeOption = noOfProds;
    }
  }
}

export default CarouselController;
