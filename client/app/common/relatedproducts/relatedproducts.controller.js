class RelatedproductsController {
  constructor($firebaseArray) {
    'ngInject';
    this.$firebaseArray = $firebaseArray;
  }

  $onInit() {
    this.getProducts();
  }
  //todo:turn all the get products into services
  getProducts() {
    const rootRef = firebase.database().ref('products');
    this.productData = this.$firebaseArray(rootRef);

    this.productData.$ref().once('value', (snap) => {
      this.productArray = [];
      //push data into local array for prodDisplay
      snap.forEach((data) => {
        this.productArray.push(data.val());
      });
    }).then(()=> {
      this.filtered = this.productArray.filter((prod) => {
        //if product is the same as display dont show in related products
        if(prod.id === this.prodId) return false;
        //filter array with prodColor
        if(prod.mainColor === this.prodColor) return true;
        if(prod.type === this.prodType) return true;
      });
    });
  }


}

export default RelatedproductsController;
