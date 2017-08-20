class ProddisplayController {
  constructor($state) {
    'ngInject';
    this.products = [
      {
        'name': 'Blue Dream',
        'type': 'Necklace',
        'mainColor': 'blue',
        'baseColor': 'golden',
        'priceRange': '100-500',
        'price': 'Rs.250',
        'bgPosition': 'bottom',
        'nameSpace': '58px',
        'bgColor': '',
        'primeColor': '',
        activeOption: 0,
        options: [
          {
            'imgSrc': '../../../app/resources/images/product-images/saphire-fall.jpg',
            'color': ''
          }
        ],
      },
      //main trial product
      {
        'name': 'Turquoise Angel',
        'type': 'Earrings',
        'mainColor': 'Blue',
        'baseColor': 'silver',
        'priceRange': '500-1000',
        'price': 'Rs.250',
        'bgPosition': 'center',
        'nameSpace': '58px',
        'bgColor': '',
        'primeColor': '#63BBBC', //not sure need this
        activeOption: 0,
        options: [
          {
            imgSrc: '../../../app/resources/images/product-images/turquoise-angel.jpg',
            color: '#63BBBC'
          },
          {
            imgSrc: '../../../app/resources/images/product-images/cream-angel.jpg',
            color: '#B2A18D'
          }
        ],
      },

      {
        'name': 'Golden Crescent',
        'type': 'Bracelet',
        'mainColor': 'Blue',
        'baseColor': 'bronze',
        'secondaryColor': 'Yellow',
        'priceRange': '100-500',
        'price': 'Rs.250',
        'bgPosition': 'center',
        'nameSpace': '50px',
        'bgColor': '',
        'primeColor': '',
        activeOption: 0,
        options: [
          {
            'imgSrc': '../../../app/resources/images/product-images/golden-crescent.jpg',
            'color': ''
          }
        ],
      },
      {
        'name': 'Mars Burning',
        'type': 'Earrings',
        'mainColor': 'Red',
        'baseColor': 'rustic',
        'priceRange': '100-500',
        'price': 'Rs.250',
        'bgPosition': 'center',
        'nameSpace': '58px',
        'bgColor': '',
        'primeColor': '',
        activeOption: 0,
        options: [
          {
            'imgSrc': '../../../app/resources/images/product-images/mars-burning.jpg',
            'color': ''
          }
        ],
      },

      {
        'name': 'Simpearl',
        'type': 'Earrings',
        'mainColor': 'Others',
        'baseColor': 'metallic',
        'priceRange': '100-500',
        'price': 'Rs.250',
        'bgPosition': 'bottom',
        'nameSpace': '64px',
        'bgColor': '',
        'primeColor': '',
        activeOption: 0,
        options: [
          {
            'imgSrc': '../../../app/resources/images/product-images/simpearl.jpg',
            'color': ''
          }
        ],
      },

      {
        'name': 'Deep Blue Fall',
        'type': 'Earrings',
        'mainColor': 'Others',
        'baseColor': 'sliver',
        'priceRange': '100-500',
        'price': 'Rs.250',
        'bgPosition': 'bottom',
        'nameSpace': '45px',
        'bgColor': '',
        'primeColor': '',
        activeOption: 0,
        options: [
          {
            'imgSrc': '../../../app/resources/images/product-images/deep-blue-fall.jpg',
            'color': ''
          }
        ],

      },
      {
        'name': 'Black Diamond',
        'type': 'Earrings',
        'mainColor': 'Others',
        'baseColor': 'golden',
        'priceRange': '100-500',
        'price': 'Rs.250',
        'bgPosition': 'bottom',
        'nameSpace': '45px',
        'bgColor': '',
        'primeColor': '',
        activeOption: 0,
        options: [
          {
            'imgSrc': '../../../app/resources/images/product-images/black-diamond.jpg',
            'color': ''
          }
        ],

      },
      {
        'name': 'Elegant Pearl',
        'type': 'Earrings',
        'mainColor': 'Others',
        'baseColor': 'rustic',
        'priceRange': '100-500',
        'price': 'Rs.250',
        'bgPosition': 'bottom',
        'nameSpace': '45px',
        'bgColor': '',
        'primeColor': '',
        activeOption: 0,
        options: [
          {
            'imgSrc': '../../../app/resources/images/product-images/elegant-pearl.jpg',
            'color': ''
          }
        ],
      },

      {
        'name': 'Green Eyed Bird',
        'type': 'Earrings',
        'mainColor': 'Others',
        'baseColor': 'metallic',
        'priceRange': '100-500',
        'price': 'Rs.250',
        'bgPosition': 'bottom',
        'nameSpace': '45px',
        'bgColor': '',
        'primeColor': '',
        activeOption: 0,
        options: [
          {
            'imgSrc': '../../../app/resources/images/product-images/green-eyed-bird.jpg',
            'color': ''
          }
        ],
      },

      {
        'name': 'Two Sun',
        'type': 'Earring',
        'mainColor': 'Others',
        'baseColor': 'golden',
        'priceRange': '100-500',
        'price': 'Rs.250',
        'bgPosition': 'bottom',
        'nameSpace': '45px',
        'bgColor': '',
        'primeColor': '',
        activeOption: 0,
        options: [
          {
            'imgSrc': '../../../app/resources/images/product-images/two-sun.jpg',
            'color': ''
          }
        ],
      },

      {
        'name': 'Emerald Splash',
        'type': 'Earring',
        'mainColor': 'Others',
        'baseColor': 'sliver',
        'priceRange': '100-500',
        'price': 'Rs.250',
        'bgPosition': 'bottom',
        'nameSpace': '45px',
        'bgColor': '',
        'primeColor': '',
        activeOption: 0,
        options: [
          {
            'imgSrc': '../../../app/resources/images/product-images/emerald-splash.jpg',
            'color': ''
          }
        ],
      },

      {
        'name': 'Gothic Black',
        'type': 'Earring',
        'mainColor': 'Black ',
        'baseColor': '',
        'priceRange': '100-500',
        'price': 'Rs.250',
        'bgPosition': 'bottom',
        'nameSpace': '45px',
        'bgColor': '',
        'primeColor': '',
        activeOption: 0,
        options: [
          {
            'imgSrc': '../../../app/resources/images/product-images/gothic-black.jpg',
            'color': ''
          }
        ],
      }
    ];
    this.intProduct = {
      name: '',
      type: '',
      price: '',
      bgColor: '',
      primeColor: '',
      imgSrc: '',
    };
    this.$state = $state;


  }

  prodSelect(product) {
    //defining interested products info
    //for prod-details page
    this.intProduct.name = product.name;
    this.intProduct.type = product.type;
    this.intProduct.price = product.price;
    this.intProduct.bgColor = product.bgColor;
    this.intProduct.primeColor = product.primeColor;
    this.intProduct.imgSrc = product.imgSrc;
    console.log(this.intProduct);
    this.$state.go('proddetails');
  }

  switchColor(product, index) {
    product.activeOption = index;
  }
}

export default ProddisplayController;
