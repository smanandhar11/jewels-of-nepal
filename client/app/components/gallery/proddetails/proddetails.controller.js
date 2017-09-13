import _ from 'lodash';

class ProddetailsController {
  constructor($firebaseObject, $stateParams) {
    'ngInject';
    this.$firebaseObject = $firebaseObject;
    this.$stateParams = $stateParams;
  }

  $onInit() {
    const rootRef = firebase.database().ref().child('products');
    const ref = rootRef.child('blue-dream');
    let self = this;

    rootRef.on('value', (snap) => {
      let fireData = (snap.val()); //settting as fireData to avoid .exp on fn


      //todo: how to translate self to this to display on the template
      _.forEach(fireData, function (val) {
        let stParam = parseInt(self.$stateParams.id); // converting id fm string to number to evaluate
        if(val.id === stParam) {
          self.prodData = val;
          console.log(self.prodData.options.name);
        }
      })
    });
  }
}

export default ProddetailsController;
