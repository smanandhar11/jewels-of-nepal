
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
        'bgColor':'',
        'primeColor':'',
        'imgSrc': '../../../app/resources/images/product-images/saphire-fall.jpg'
      },

      {
        'name': 'Purple Haze',
        'type': 'Earrings',
        'mainColor': 'Blue',
        'baseColor': 'silver',
        'priceRange': '500-1000',
        'price': 'Rs.250',
        'bgPosition': 'center',
        'nameSpace': '58px',
        'bgColor':'',
        'primeColor':'',
        'imgSrc': '../../../app/resources/images/product-images/purple-haze.jpg'
      },

      {
        'name': 'Strawberry Cough',
        'type': 'Bracelet',
        'mainColor': 'Blue',
        'baseColor': 'bronze',
        'secondaryColor': 'Yellow',
        'priceRange': '100-500',
        'price': 'Rs.250',
        'bgPosition': 'center',
        'nameSpace': '50px',
        'bgColor':'',
        'primeColor':'',
        'imgSrc': '../../../app/resources/images/product-images/straw-cough.jpg'
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
        'bgColor':'',
        'primeColor':'',
        'imgSrc': '../../../app/resources/images/product-images/mars-burning.jpg'
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
        'bgColor':'',
        'primeColor':'',
        'imgSrc': '../../../app/resources/images/product-images/simpearl.jpg'
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
        'bgColor':'',
        'primeColor':'',
        'imgSrc': '../../../app/resources/images/product-images/deep-blue-fall.jpg'
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
        'bgColor':'',
        'primeColor':'',
        'imgSrc': '../../../app/resources/images/product-images/black-diamond.jpg'
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
        'bgColor':'',
        'primeColor':'',
        'imgSrc': '../../../app/resources/images/product-images/elegant-pearl.jpg'
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
        'bgColor':'',
        'primeColor':'',
        'imgSrc': '../../../app/resources/images/product-images/green-eyed-bird.jpg'
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
        'bgColor':'',
        'primeColor':'',
        'imgSrc': '../../../app/resources/images/product-images/two-sun.jpg'
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
        'bgColor':'',
        'primeColor':'',
        'imgSrc': '../../../app/resources/images/product-images/emerald-splash.jpg'
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
        'bgColor':'',
        'primeColor':'',
        'imgSrc': '../../../app/resources/images/product-images/gothic-black.jpg'
      }
    ];
    this.intProduct = {
      name: '',
      type:'',
      price:'',
      bgColor:'',
      primeColor:'',
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
}

export default ProddisplayController;
