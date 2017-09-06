class CarouselController {
  constructor() {
    this.caroProds = [
      {
        activeOption: 0,
        options: [
          {
            'imgSrc': '../../../app/resources/images/carousel-images/nature1.jpg',
            'name': 'Symmetrically Blissful',
          },
          {
            'imgSrc': '../../../app/resources/images/carousel-images/nature2.jpg',
            'name': 'Colorful Emotion'
          },
          {
            'imgSrc': '../../../app/resources/images/carousel-images/nature3.jpg',
            'name': 'Simple Times'
          },
          {
            'imgSrc': '../../../app/resources/images/carousel-images/nature4.jpg',
            'name': 'Revolutionary'
          },
          {
            'imgSrc': '../../../app/resources/images/carousel-images/nature5.jpg',
            'name': 'Blue Moon'
          }
        ],
      },
    ];
    this.showToggler = false;
    this.toggleCarousel = false;
  }

  $onInit() {
    if(this.toggleCarousel === true) {
      this.next(x);
    }
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

  nextMouseOver() {
    this.showToggler = true;
    console.log(this.showToggler);
  }

  nextMouseLeave() {

    console.log('hello');
  }
  caroToggle() {
    console.log('started');
    this.toggleCarousel = true;
    console.log(this.toggleCarousel);
  }
}

export default CarouselController;
