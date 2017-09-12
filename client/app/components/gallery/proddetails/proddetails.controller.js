

class ProddetailsController {
  constructor($firebaseObject) {
    'ngInject';
    this.$firebaseObject = $firebaseObject;
  }
  $onInit() {
    const rootRef = firebase.database().ref().child('products');
    const ref = rootRef.child('blue-dream');

    rootRef.on('value', function (snap) {
      console.log(snap.val());
    })
  }


}

export default ProddetailsController;
