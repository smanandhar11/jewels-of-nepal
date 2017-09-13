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

    rootRef.on('value',(snap) =>  {
      _.forEach(snap.val(), function (valu) {
        // if(valu.id = self.$stateParams.id) {
        //   console.log(valu.options.name);
        // }
        valu.id = self.$stateParams.id ? console.log(valu.options.name): console.log('false');
        // console.log('value',valu.id);
        // console.log('self',self.$stateParams.id);
      })
    });
   /* console.log(this.$stateParams.id);*/
  }


}

export default ProddetailsController;
