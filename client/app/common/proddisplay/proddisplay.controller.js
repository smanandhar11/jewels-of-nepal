class ProddisplayController {
  constructor($firebaseArray, $scope) {
    'ngInject';
    this.products = [
      {
        'id': 1,
        'type': 'Necklace',
        'mainColor': 'blue',
        'baseColor': 'golden',
        'priceRange': '100-500',
        'price': 'Rs.250',
        'bgPosition': 'bottom',
        'bgColor': '',
        'primeColor': '',
        activeOption: 0,
        options: [
          {
            'imgSrc': '../../../app/resources/images/product-images/saphire-fall.jpg',
            'name': 'Blue Dream',
            'color': ''
          }
        ],
      },
      //main trial product
      {
        'id': 2,
        'type': 'Earrings',
        'mainColor': 'Blue',
        'baseColor': 'silver',
        'priceRange': '500-1000',
        'price': 'Rs.250',
        'bgPosition': 'center',
        'bgColor': '',
        'primeColor': '#63BBBC', //not sure need this
        activeOption: 0,
        options: [
          {
            'imgSrc': '../../../app/resources/images/product-images/turquoise-angel.jpg',
            'name': 'Turquoise Angel',
            'color': '#63BBBC'
          },
          {
            'imgSrc': '../../../app/resources/images/product-images/cream-angel.jpg',
            'name': 'Turquoise Cream',
            'color': '#B2A18D'
          }
        ],
      },

      {
        'type': 'Bracelet',
        'mainColor': 'Blue',
        'baseColor': 'bronze',
        'secondaryColor': 'Yellow',
        'priceRange': '100-500',
        'price': 'Rs.250',
        'bgPosition': 'center',
        'bgColor': '',
        'primeColor': '',
        activeOption: 0,
        options: [
          {
            'imgSrc': '../../../app/resources/images/product-images/golden-crescent.jpg',
            'name': 'Golden Crescent',
            'color': ''
          }
        ],
      },
      {
        'type': 'Earrings',
        'mainColor': 'Red',
        'baseColor': 'rustic',
        'priceRange': '100-500',
        'price': 'Rs.250',
        'bgPosition': 'center',
        'bgColor': '',
        'primeColor': '',
        activeOption: 0,
        options: [
          {
            'imgSrc': '../../../app/resources/images/product-images/mars-burning.jpg',
            'name': 'Mars Burning',
            'color': ''
          }
        ],
      },

      {
        'type': 'Earrings',
        'mainColor': 'Others',
        'baseColor': 'metallic',
        'priceRange': '100-500',
        'price': 'Rs.250',
        'bgPosition': 'bottom',
        'bgColor': '',
        'primeColor': '',
        activeOption: 0,
        options: [
          {
            'imgSrc': '../../../app/resources/images/product-images/simpearl.jpg',
            'name': 'Simpearl',
            'color': ''
          }
        ],
      },

      {
        'type': 'Earrings',
        'mainColor': 'Others',
        'baseColor': 'sliver',
        'priceRange': '100-500',
        'price': 'Rs.250',
        'bgPosition': 'bottom',
        'bgColor': '',
        'primeColor': '',
        activeOption: 0,
        options: [
          {
            'imgSrc': '../../../app/resources/images/product-images/deep-blue-fall.jpg',
            'name': 'Deep Blue Fall',
            'color': ''
          }
        ],

      },
      {
        'type': 'Earrings',
        'mainColor': 'Others',
        'baseColor': 'golden',
        'priceRange': '100-500',
        'price': 'Rs.250',
        'bgPosition': 'bottom',
        'bgColor': '',
        'primeColor': '',
        activeOption: 0,
        options: [
          {
            'imgSrc': '../../../app/resources/images/product-images/black-diamond.jpg',
            'name': 'Black Diamond',
            'color': ''
          }
        ],

      },
      {
        'type': 'Earrings',
        'mainColor': 'Others',
        'baseColor': 'rustic',
        'priceRange': '100-500',
        'price': 'Rs.250',
        'bgPosition': 'bottom',
        'bgColor': '',
        'primeColor': '',
        activeOption: 0,
        options: [
          {
            'imgSrc': '../../../app/resources/images/product-images/elegant-pearl.jpg',
            'name': 'Elegant Pearl',
            'color': ''
          }
        ],
      },

      {
        'type': 'Earrings',
        'mainColor': 'Others',
        'baseColor': 'metallic',
        'priceRange': '100-500',
        'price': 'Rs.250',
        'bgPosition': 'bottom',
        'bgColor': '',
        'primeColor': '',
        activeOption: 0,
        options: [
          {
            'imgSrc': '../../../app/resources/images/product-images/green-eyed-bird.jpg',
            'name': 'Green Eyed Bird',
            'color': ''
          }
        ],
      },

      {
        'type': 'Earring',
        'mainColor': 'Others',
        'baseColor': 'golden',
        'priceRange': '100-500',
        'price': 'Rs.250',
        'bgPosition': 'bottom',
        'bgColor': '',
        'primeColor': '',
        activeOption: 0,
        options: [
          {
            'imgSrc': '../../../app/resources/images/product-images/two-sun.jpg',
            'name': 'Two Sun',
            'color': ''
          }
        ],
      },

      {
        'type': 'Earring',
        'mainColor': 'Others',
        'baseColor': 'sliver',
        'priceRange': '100-500',
        'price': 'Rs.250',
        'bgPosition': 'bottom',
        'bgColor': '',
        'primeColor': '',
        activeOption: 0,
        options: [
          {
            'imgSrc': '../../../app/resources/images/product-images/emerald-splash.jpg',
            'name': 'Emerald Splash',
            'color': ''
          }
        ],
      },

      {
        'type': 'Earring',
        'mainColor': 'Black ',
        'baseColor': '',
        'priceRange': '100-500',
        'price': 'Rs.250',
        'bgPosition': 'bottom',
        'bgColor': '',
        'primeColor': '',
        activeOption: 0,
        options: [
          {
            'imgSrc': '../../../app/resources/images/product-images/gothic-black.jpg',
            'name': 'Gothic Black',
            'color': ''
          }
        ],
      }
    ];
    this.$scope = $scope;
    this.$firebaseArray = $firebaseArray;
  }

  switchColor(product, index) {
    product.activeOption = index;
    console.log(product);
  }

  $onInit() {
    this.getProducts();
  }

  getProducts() {
    const rootRef = firebase.database().ref('products');
    this.prodData = this.$firebaseArray(rootRef);


    this.prodData.$ref().once('value',(snap)=> {
      angular.forEach(snap.val(), (val) => {
        this.prodData = val.data;

      })
    });
    console.log('<<<',this.prodData);
  }
}

export default ProddisplayController;
