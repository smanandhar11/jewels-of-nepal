import _ from 'lodash';

class ProddetailsController {
  constructor($firebaseArray, $stateParams) {
    'ngInject';
    this.$firebaseArray = $firebaseArray;
    this.$stateParams = $stateParams;
  }

  $onInit() {
    this.getProducts();
  }
  getProducts() {
    const rootRef = firebase.database().ref('products');
    this.productData = this.$firebaseArray(rootRef);
    let stPid = parseInt(this.$stateParams.id);

    this.productData.$ref().once('value',(snap)=> {
      angular.forEach(snap.val(), (val) => {
        if(val.id === stPid) {
          this.intProd = val;
        }
      });
    });
  }
}

export default ProddetailsController;
