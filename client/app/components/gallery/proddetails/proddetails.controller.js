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
      let fireData = (snap.val()); //setting as fireData to avoid .expression on function

      _.forEach(fireData, function (val) {
        let stParam = parseInt(self.$stateParams.id); //Converting to Number to evaluate
        if(val.id === stParam) {
          self.prodData = val;
          console.log(self.prodData.options.name);
        }
      });
      this.prodData = self.prodData;



    });




    // rootRef.on('value',(snap) => {
    //   _.find(snap.val(), function (val) {
    //     console.log(val.id === 1);
    //
    //   })
    //
    // })
  }


}

export default ProddetailsController;
